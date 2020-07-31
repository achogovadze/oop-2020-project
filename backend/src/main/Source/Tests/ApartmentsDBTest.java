package Tests;

import Classes.Apartment;
import Classes.ApartmentInfo;
import Database.ApartmentsDB;
import Database.InfoDB;
import Database.UsersDB;
import org.junit.Test;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;


public class ApartmentsDBTest {

    private ApartmentsDB db;
    private UsersDB users;
    private Connection conn;
    private Integer apartmentId;
    private Integer userId;

    private static final String UPDATED_CITY = "city1";
    private static final String EMAIL = "email@gmail.com";
    private static final String PASSWORD = "password";


    //This method creates ApartmentsDB and UsersDB instances for testing
    private void start() throws SQLException, ClassNotFoundException {
        db = ApartmentsDB.getInstance();
        users = new UsersDB();
        addUser();  //This method adds one user to users table for testing

        //I need this connection to make sure that information was added to apartments table
        setUpConnection();
    }

    private void addUser() {

        try {
            users.registerUser("firstname", "lastName", "2000-01-01",
                    EMAIL, PASSWORD, "555123456",
                    "country", "city", "address", "role");
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    private void setUpConnection() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://"
                    + InfoDB.MYSQL_DATABASE_SERVER, InfoDB.MYSQL_USERNAME, InfoDB.MYSQL_PASSWORD);
            Statement statement = conn.createStatement();
            statement.executeQuery("USE " + InfoDB.MYSQL_DATABASE_NAME);
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }

    /*
        Testing starts from here
        This class doesn't have separated tests because their sequence is random
        this creates problems when connecting to database, as some information is lost during the process for
        varies reasons (Such es deleting information, or foreign and primary keys relationships..)
        @Order annotation wasn't working properly.
        So I had to manually call methods by the order which was needed.
        Also tests may not work if at start databases are not emty, because retrieved information may
        interfer with test information.
     */

    @Test
    public void test() {
        try {
            start();

            //Start testing ApartmentsDB class
            testAddApartment();
            testGetApartment();
            testAddApartmentInfo();
            testGetApartmentInfo();
            testgetAllApartments();
            testUpdateApartmentInfo();
            testGetCityId();

            //Must clear all the information added in database so that tests will pust on next tries
            testDeleteApartmentInfo();
            testDeleteApartment();
            deleteUser();

        } catch (Exception throwables) {
            throwables.printStackTrace();
        }
    }

    //This method adds apartment to Apartments table and tests that it wass added correctly. For this I need connection
    private void testAddApartment() throws SQLException {
        userId = users.getUser(EMAIL).getUserId();
        Integer result  = db.addApartment(userId);
        PreparedStatement stm = conn.prepareStatement("Select apartment_id from apartments where user_id = ?");
        stm.setInt(1,userId);
        ResultSet set = stm.executeQuery();
        set.next();
        apartmentId  = set.getInt(1);
        assertEquals(result,apartmentId);
    }

    //This method tests getApartment method and makes sure that apartment was added correctly in Apartments table.
    private void testGetApartment() {
        Apartment result = db.getApartment(apartmentId);
        assertEquals(new Apartment(apartmentId,userId),result);

    }

    //This method adds apartment info into ApartmentInfo table and testGetApartmentInfo tests that it was added correctly
    private void testAddApartmentInfo() {
        assertTrue(db.addApartmentInfo(apartmentId, "country", "city", "address",
                1.00, "propertyType", "projectType", "apartmentStatus", "additionalSpace",
                2.00, 3.00, "buildingMaterials", 4.00, 5,
                6, 7, 8, 9, 10, "water", "gas", "electricity",
                11, "heating", 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22,  23.00, 24.00));
    }

    //This method tests if apartmentInfo wass added correctly in ApartmentInfo table table
    private void testGetApartmentInfo() {
        try {
            ApartmentInfo apartment = db.getApartmentInfo(apartmentId);
            ApartmentInfo test = new ApartmentInfo(apartmentId, "country", "city", "address",
                    1.00, "propertyType", "projectType", "additionalSpace",
                    2.00, 3.00, "buildingMaterials", 4.00, 5,
                    6, 7, 8, 9, 10, "water", "gas", "electricity",
                    11, "heating", 12, 13, 14, 15, 16, 17, 18, 19, 20,
                    21, 22, "apartmentStatus", 23.00, 24.00, new ArrayList<String>());

            assertEquals(apartment,test);

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    //This method tests getAllApartments method, I use Connection to test its correctness
    private void testgetAllApartments() {
        List<Integer> allApartments =  db.getAllApartments();
        List<Integer> test = new ArrayList<>();

        try {
            Statement stm = conn.createStatement();
            ResultSet set = stm.executeQuery("Select apartment_id from apartments");
            while(set.next()) {
                test.add(set.getInt(1));
            }

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        assertEquals(allApartments,test);
    }

    //Updated All values of apartmentInfo that was added before. For new city I use UPDATED_CITY String so that
    //I can use it in testGetCityId method
    private void testUpdateApartmentInfo() {
        try {
            assertTrue(db.updateApartmentInfo(apartmentId, "country1", UPDATED_CITY, "address1",
                    2.00, "propertyType1", "projectType1", "apartmentStatus1", "additionalSpace1",
                    3.00, 4.00, "buildingMaterials1", 5.00, 6,
                    7, 8, 9, 10, 11, "water1", "gas1", "electricity1",
                    12, "heating1", 13, 14, 15, 16, 17, 18, 19, 20, 21,
                    22, 23,  24.00, 25.00));
            ApartmentInfo apartmentInfo = db.getApartmentInfo(apartmentId);
            ApartmentInfo test = new ApartmentInfo(apartmentId, "country1", UPDATED_CITY, "address1",
                    2.00, "propertyType1", "projectType1", "additionalSpace1",
                    3.00, 4.00, "buildingMaterials1", 5.00, 6,
                    7, 8, 9, 10, 11, "water1", "gas1", "electricity1",
                    12, "heating1", 13, 14, 15, 16, 17, 18, 19, 20, 21,
                    22, 23,  "apartmentStatus1", 24.00, 25.00, new ArrayList<String>());
            assertEquals(apartmentInfo,test);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    //This method tests getCityID method with UPDATED_CITY String as information is already updated when program executes this method
    private void testGetCityId() {
        List<Integer> apartmentIds = db.getCityId("city1");
        List<Integer> test  = new ArrayList<>();
        try {
            PreparedStatement stm = conn.prepareStatement("Select apartment_id from apartment_info where city = ?");
            stm.setString(1,UPDATED_CITY);
            ResultSet set = stm.executeQuery();
            while(set.next()) {
                test.add(set.getInt("apartment_id"));

            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();

        }
        assertEquals(apartmentIds,test);
    }

    //Delete ApartmentInfo before Apartment toa void Foreign key problem
    private void testDeleteApartmentInfo() {
        assertTrue(db.deleteApartmentInfo(apartmentId));
    }


    //Delete Apartment before User toa void Foreign key problem
    private void testDeleteApartment() {
        assertTrue(db.deleteApartment(apartmentId));
    }

    //Delete User to make sure tests pass on net try
    private void deleteUser() throws SQLException {
        users.removeUser(EMAIL);
    }

}