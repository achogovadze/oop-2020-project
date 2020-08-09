package Tests;

import Classes.Booking;
import Database.ApartmentsDB;
import Database.BookingsDB;
import Database.InfoDB;
import Database.UsersDB;
import junit.framework.TestCase;
import org.junit.Test;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class BookingsDBTest extends TestCase {


    private UsersDB usersDB;
    private ApartmentsDB apartmentsDB;
    private BookingsDB bookingsDB;
    private Connection conn;
    private Integer apartmentId;
    private Integer userId;

    private static final String EMAIL = "email@gmail.com";
    private static final String PASSWORD = "password";


    //This method creates needed instances for testing and adds some information to database and creates connection
    public void start() {
        try {
            usersDB = new UsersDB();
            apartmentsDB = ApartmentsDB.getInstance();
            bookingsDB = BookingsDB.getInstance();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }

        setUpConnection(); //Connects to database for to retrieve information for testing
        addUser();         //Creates sample user
        addApartment();    //Creates Sample apartment
    }


    //This method creates connection to database
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

    //This method creates sample user with EMAIL and PASSWORD
    private void addUser() {
        try {
            usersDB.registerUser("firstname", "lastName", "2000-01-01",
                    EMAIL, PASSWORD, "555123456",
                    "country", "city", "address", "role");
            userId = usersDB.getUser(EMAIL).getUserId();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    //This method creates sample Apartment with userID and gets apartmentId
    private void addApartment() {
        try {
           apartmentId =  apartmentsDB.addApartment(userId);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

    }


    /*
        this method starts testing. Tests aren't in separate methods cause JUNIt doesn't have any order or sequence
        and while working with databases ordering of methods was crucial.
        So all tests are called from this main test method
     */
    @Test
    public void testBookingsDB() {
        try {
            //Makes everything ready
            start();
            bookingsDB = BookingsDB.getInstance();

            Bookings(); //This method is responsible for creating booking in bookings table
            GetBookings();  //This method gets all the bookings for apartmentId

        } catch (SQLException | ClassNotFoundException throwables) {
            throwables.printStackTrace();
        }
    }

    //This method adds booking into the table and then chacks that it was added correctly
    private void Bookings() {
        try {
            assertTrue(bookingsDB.book("2020-08-09","2020-08-11",userId,apartmentId,
                    49.95,"USD"));
            PreparedStatement stm = conn.prepareStatement("Select * FROM bookings where apartment_id = ?");
            stm.setInt(1,apartmentId);
            ResultSet set = stm.executeQuery();
            while(set.next()) {
                assertEquals(Integer.valueOf(set.getString("apartment_id")),apartmentId);
                assertEquals(Integer.valueOf(set.getString("user_id")),userId);
                assertEquals(Double.valueOf(set.getString("total_price")),49.95);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    //This method retrieves all the bookings for specific apartment_Id and then itself connects to database to check correctness.
    private void GetBookings() {
        try {
            List<Booking> bookings  = bookingsDB.getBookings(apartmentId);
            List<Booking> test = new ArrayList<>();
            Statement stm = conn.createStatement();
            ResultSet set = stm.executeQuery("Select * from bookings where apartment_id = \"" + apartmentId + "\"");
            while(set.next()) {
                Booking booking = new Booking(
                        set.getInt(1),
                        set.getInt(3),
                        set.getInt(2),
                        set.getString(4),
                        set.getString(5),
                        set.getDouble(6),
                        set.getString(7));
                test.add(booking);
            }
            assertEquals(bookings,test);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

    }

}