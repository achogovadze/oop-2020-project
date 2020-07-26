package Database;

import Classes.Apartment;
import Classes.ApartmentInfo;
import Classes.User;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ApartmentsDB {

    static String account = InfoDB.MYSQL_USERNAME;
    static String password = InfoDB.MYSQL_PASSWORD;
    static String server = InfoDB.MYSQL_DATABASE_SERVER;
    static String database = InfoDB.MYSQL_DATABASE_NAME;

    private static ApartmentsDB db;
    private Connection connection;

    public ApartmentsDB() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mysql://"
                + server, account, password);
        Statement statement = connection.createStatement();
        statement.executeQuery("USE " + database);
    }

    public void commit() throws SQLException {
        Statement stm = connection.createStatement();
        stm.executeUpdate("commit;");
    }

    public static ApartmentsDB getInstance() throws SQLException, ClassNotFoundException {
        if (db == null) {
            synchronized (ApartmentsDB.class) {
                if (db == null) {
                    db = new ApartmentsDB();
                }
            }
        }
        return db;
    }

    public Integer addApartment(Integer userId) throws SQLException {
        Integer apartment_id = -1;
        String query = "INSERT INTO apartments (user_id) VALUES (?);";
        PreparedStatement stm = connection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
        stm.setInt(1, userId);
        stm.executeUpdate();
        ResultSet res = stm.getGeneratedKeys();
        if (res.next()) {
            apartment_id = res.getInt(1);
            commit();
        }
        return apartment_id;
    }

    public Apartment getApartment(Integer apartment_id) {
        try {
            String query = "select * from apartments where apartment_id = ?";
            PreparedStatement stmt = connection.prepareStatement(query);
            stmt.setInt(1, apartment_id);
            ResultSet res = stmt.executeQuery();
            if (res.next()) {
                Apartment apartment = new Apartment(res.getInt("apartment_id"),
                        res.getInt("user_id"));
                return apartment;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public boolean deleteApartment(Integer apartmentId) {
        try {
            PreparedStatement stm;
            stm = connection.prepareStatement("DELETE FROM apartments WHERE apartment_id = " + apartmentId);
            stm.executeUpdate();
            commit();
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public boolean addApartmentInfo(Integer apartmentId, String country, String city, String address,
                                    Double price, String propertyType, String projectType, String apartmentStatus,
                                    String additionalSpace, Double additionalFootage, Double squareFootage, String buildingMaterials,
                                    Double roomHeight, Integer floorLevel, Integer bedroomsNum, Integer bedsNum,
                                    Integer bathroomsNum, Integer privateBathroom, Integer wifi, String water,
                                    String gas, String electricity, Integer airCondition, String heating,
                                    Integer washingMachine, Integer oven, Integer dishwasher, Integer dryer,
                                    Integer desk, Integer balcony, Integer elevator, Integer parking,
                                    Integer vehicleCharger, Integer pool, Integer isAvailable, Double latitude, Double longitude) {

        String query = "INSERT INTO apartment_info (apartment_id, country, city, address, price_usd, property_type, " +
                "project_type, additional_space, additional_footage, square_footage, building_materials, " +
                "room_height, floor_level, bedrooms_num, beds_num, bathrooms_num, private_bathroom, " +
                "wifi, water, gas, electricity, air_conditioning, heating, washing_machine, oven, dishwasher, " +
                "dryer, desk, balcony, elevator, parking, vehicle_charger, pool, is_available, apartment_status, latitude, longitude) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        PreparedStatement s;
        try {
            s = connection.prepareStatement(query);
            s.setInt(1, apartmentId);
            s.setString(2, country);
            s.setString(3, city);
            s.setString(4, address);
            s.setDouble(5, price);
            s.setString(6, propertyType);
            s.setString(7, projectType);
            s.setString(8, additionalSpace);
            s.setDouble(9, additionalFootage);
            s.setDouble(10, squareFootage);
            s.setString(11, buildingMaterials);
            s.setDouble(12, roomHeight);
            s.setInt(13, floorLevel);
            s.setInt(14, bedroomsNum);
            s.setInt(15, bedsNum);
            s.setInt(16, bathroomsNum);
            s.setInt(17, privateBathroom);
            s.setInt(18, wifi);
            s.setString(19, water);
            s.setString(20, gas);
            s.setString(21, electricity);
            s.setInt(22, airCondition);
            s.setString(23, heating);
            s.setInt(24, washingMachine);
            s.setInt(25, oven);
            s.setInt(26, dishwasher);
            s.setInt(27, dryer);
            s.setInt(28, desk);
            s.setInt(29, balcony);
            s.setInt(30, elevator);
            s.setInt(31, parking);
            s.setInt(32, vehicleCharger);
            s.setInt(33, pool);
            s.setInt(34, isAvailable);
            s.setString(35, apartmentStatus);
            s.setDouble(36, latitude);
            s.setDouble(37, longitude);
            s.executeUpdate();
            commit();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean deleteApartmentInfo(Integer apartmentId) {
        try {
            PreparedStatement stm;
            stm = connection.prepareStatement("DELETE FROM apartment_info WHERE apartment_id = " + apartmentId);
            stm.executeUpdate();
            commit();
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public boolean updateApartmentInfo(Integer apartmentId, String country, String city, String address,
                                       Double price, String propertyType, String projectType, String apartmentStatus,
                                       String additionalSpace, Double additionalFootage, Double squareFootage, String buildingMaterials,
                                       Double roomHeight, Integer floorLevel, Integer bedroomsNum, Integer bedsNum,
                                       Integer bathroomsNum, Integer privateBathroom, Integer wifi, String water,
                                       String gas, String electricity, Integer airCondition, String heating,
                                       Integer washingMachine, Integer oven, Integer dishwasher, Integer dryer,
                                       Integer desk, Integer balcony, Integer elevator, Integer parking,
                                       Integer vehicleCharger, Integer pool, Integer isAvailable, Double latitude, Double longitude) throws SQLException {
        ApartmentInfo apartmentInfo = getApartmentInfo(apartmentId);
        String query = prepareString(apartmentInfo, country, city, address,
                price, propertyType, projectType,
                additionalSpace, additionalFootage, squareFootage, buildingMaterials,
                roomHeight, floorLevel, bedroomsNum, bedsNum,
                bathroomsNum, privateBathroom, wifi, water,
                gas, electricity, airCondition, heating,
                washingMachine, oven, dishwasher, dryer,
                desk, balcony, elevator, parking,
                vehicleCharger, pool, isAvailable, apartmentStatus, latitude, longitude);
        if (query.length() == 0) {
            return false;
        }
        PreparedStatement stm = connection.prepareStatement(query);
        stm.executeUpdate();
        commit();
        return true;
    }

    private String prepareString(ApartmentInfo apartmentInfo, String country, String city, String address,
                                 Double price, String propertyType, String projectType,
                                 String additionalSpace, Double additionalFootage, Double squareFootage, String buildingMaterials,
                                 Double roomHeight, Integer floorLevel, Integer bedroomsNum, Integer bedsNum,
                                 Integer bathroomsNum, Integer privateBathroom, Integer wifi, String water,
                                 String gas, String electricity, Integer airCondition, String heating,
                                 Integer washingMachine, Integer oven, Integer dishwasher, Integer dryer,
                                 Integer desk, Integer balcony, Integer elevator, Integer parking,
                                 Integer vehicleCharger, Integer pool, Integer isAvailable, String apartmentStatus, Double latitude, Double longitude) {
        String result = "UPDATE apartment_info SET ";
        ArrayList<String> toAdd = new ArrayList<>();
        if (!apartmentInfo.getCountry().equals(country)) {
            toAdd.add("country = \"" + country + "\"");
        }
        if (!apartmentInfo.getCity().equals(city)) {
            toAdd.add("city = \"" + city + "\"");
        }
        if (!apartmentInfo.getAddress().equals(address)) {
            toAdd.add("address = \"" + address + "\"");
        }
        if (!apartmentInfo.getPrice().equals(price)) {
            toAdd.add("price = " + price);
        }
        if (!apartmentInfo.getPropertyType().equals(propertyType)) {
            toAdd.add("property_type = \"" + propertyType + "\"");
        }
        if (!apartmentInfo.getProjectType().equals(projectType)) {
            toAdd.add("project_type = \"" + projectType + "\"");
        }
        if (!apartmentInfo.getAdditionalSpace().equals(additionalSpace)) {
            toAdd.add("additional_space = \"" + additionalSpace + "\"");
        }
        if (!apartmentInfo.getAdditionalFootage().equals(additionalFootage)) {
            toAdd.add("additional_footage = " + additionalFootage);
        }
        if (!apartmentInfo.getSquareFootage().equals(squareFootage)) {
            toAdd.add("square_footage = \"" + squareFootage + "\"");
        }
        if (!apartmentInfo.getBuildingMaterials().equals(buildingMaterials)) {
            toAdd.add("building_materials = \"" + buildingMaterials + "\"");
        }
        if (!apartmentInfo.getRoomHeight().equals(roomHeight)) {
            toAdd.add("room_height = " + roomHeight);
        }
        if (!apartmentInfo.getFloorLevel().equals(floorLevel)) {
            toAdd.add("floor_level = " + floorLevel);
        }
        if (!apartmentInfo.getBedroomsNum().equals(bedroomsNum)) {
            toAdd.add("bedrooms_num = " + bedroomsNum);
        }
        if (!apartmentInfo.getBedsNum().equals(bedsNum)) {
            toAdd.add("beds_num = " + bedsNum);
        }
        if (!apartmentInfo.getBathroomsNum().equals(bathroomsNum)) {
            toAdd.add("bathrooms_num = " + bathroomsNum);
        }
        if (!apartmentInfo.getPrivateBathroom().equals(privateBathroom)) {
            toAdd.add("private_bathroom = " + privateBathroom);
        }
        if (!apartmentInfo.getWifi().equals(wifi)) {
            toAdd.add("wifi = " + wifi);
        }
        if (!apartmentInfo.getWater().equals(water)) {
            toAdd.add("water = \"" + water + "\"");
        }
        if (!apartmentInfo.getGas().equals(gas)) {
            toAdd.add("gas = \"" + gas + "\"");
        }
        if (!apartmentInfo.getElectricity().equals(electricity)) {
            toAdd.add("electricity = \"" + electricity + "\"");
        }
        if (!apartmentInfo.getAirCondition().equals(airCondition)) {
            toAdd.add("air_condition = " + airCondition);
        }
        if (!apartmentInfo.getHeating().equals(heating)) {
            toAdd.add("heating = \"" + heating + "\"");
        }
        if (!apartmentInfo.getWashingMachine().equals(washingMachine)) {
            toAdd.add("washing_machine = " + washingMachine);
        }
        if (!apartmentInfo.getOven().equals(oven)) {
            toAdd.add("oven = " + oven);
        }
        if (!apartmentInfo.getDishwasher().equals(dishwasher)) {
            toAdd.add("dishwasher = " + dishwasher);
        }
        if (!apartmentInfo.getDryer().equals(dryer)) {
            toAdd.add("dryer = " + dryer);
        }
        if (!apartmentInfo.getDesk().equals(desk)) {
            toAdd.add("desk = " + desk);
        }
        if (!apartmentInfo.getBalcony().equals(balcony)) {
            toAdd.add("balcony = " + balcony);
        }
        if (!apartmentInfo.getElevator().equals(elevator)) {
            toAdd.add("elevator = " + elevator);
        }
        if (!apartmentInfo.getParking().equals(parking)) {
            toAdd.add("parking = " + parking);
        }
        if (!apartmentInfo.getVehicleCharger().equals(vehicleCharger)) {
            toAdd.add("vehicle_charger = " + vehicleCharger);
        }
        if (!apartmentInfo.getPool().equals(pool)) {
            toAdd.add("pool = " + pool);
        }
        if (!apartmentInfo.getIsAvailable().equals(isAvailable)) {
            toAdd.add("is_available = " + isAvailable);
        }
        if (!apartmentInfo.getApartmentStatus().equals(apartmentStatus)) {
            toAdd.add("apartment_status = \"" + apartmentStatus + "\"");
        }
        if (!apartmentInfo.getLatitude().equals(latitude)) {
            toAdd.add("latitude = " + latitude);
        }
        if (!apartmentInfo.getLongitude().equals(longitude)) {
            toAdd.add("longitude = " + longitude);
        }
        if (toAdd.size() == 0) {
            return "";
        }
        boolean firstStatement = true;
        for (String s : toAdd) {
            if (firstStatement) {
                result += s;
                firstStatement = false;
            } else {
                result += ", ";
                result += s;
            }
        }
        result += " WHERE apartment_id = " + apartmentInfo.getApartmentId();
        return result;
    }

    public ApartmentInfo getApartmentInfo(Integer apartmentId) throws SQLException {
        Statement stm = connection.createStatement();
        ResultSet s = stm.executeQuery("SELECT * FROM apartment_info WHERE apartment_id = " + apartmentId);
        Statement stm2 = connection.createStatement();
        ResultSet images = stm2.executeQuery("SELECT * FROM images WHERE apartment_id = " + apartmentId);
        List<String> imagesList = new ArrayList<>();
        while (images.next()) {
            imagesList.add(images.getString(2));
        }
        if (s.next()) {
            ApartmentInfo apartmentInfo = new ApartmentInfo(
            s.getInt(1),
            s.getString(2),
            s.getString(3),
            s.getString(4),
            s.getDouble(5),
            s.getString(6),
            s.getString(7),
            s.getString(8),
            s.getDouble(9),
            s.getDouble(10),
            s.getString(11),
            s.getDouble(12),
            s.getInt(13),
            s.getInt(14),
            s.getInt(15),
            s.getInt(16),
            s.getInt(17),
            s.getInt(18),
            s.getString(19),
            s.getString(20),
            s.getString(21),
            s.getInt(22),
            s.getString(23),
            s.getInt(24),
            s.getInt(25),
            s.getInt(26),
            s.getInt(27),
            s.getInt(28),
            s.getInt(29),
            s.getInt(30),
            s.getInt(31),
            s.getInt(32),
            s.getInt(33),
            s.getInt(34),
            s.getString(35),
            s.getDouble(36),
            s.getDouble(37),
            imagesList);
            return apartmentInfo;
        }
        return null;
    }

    public List<Integer> getAllApartments() {
        List<Integer> apartmentIDs = new ArrayList<Integer>();
        try {
            String query = "select apartment_id from apartments";
            PreparedStatement stmt = connection.prepareStatement(query);
            ResultSet res = stmt.executeQuery(query);
            while (res.next()) {
                apartmentIDs.add(res.getInt("apartment_id"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return apartmentIDs;
    }

    public List<Integer> getCityId(String city) {
        List<Integer> apartmentIDs = new ArrayList<Integer>();
        try {
            String query = "select apartment_id from apartment_info WHERE city =" + "\"" + city + "\"";
            System.out.println(query);
            PreparedStatement stmt = connection.prepareStatement(query);
            ResultSet res = stmt.executeQuery(query);
            while (res.next()) {
                apartmentIDs.add(res.getInt("apartment_id"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return apartmentIDs;
    }
}
