package Database;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.*;
import java.util.ArrayList;

import Classes.User;


public class UsersDB {

    private static String ALGORITHM = "SHA-512";
    static String account = InfoDB.MYSQL_USERNAME;
    static String password = InfoDB.MYSQL_PASSWORD;
    static String server = InfoDB.MYSQL_DATABASE_SERVER;
    static String database = InfoDB.MYSQL_DATABASE_NAME;

    private Connection connection;

    public UsersDB() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mysql://"
                + server, account, password);
        Statement statement = connection.createStatement();
        statement.executeQuery("USE " + database);
    }

    public boolean registerUser(String firstName, String lastName,
                                String birthDate, String email,
                                String password, String phoneNumber,
                                String country, String city,
                                String address, String role) throws SQLException {
        if (alreadyUser(email)) {
            // Send message user already exists
            System.out.println(firstName + lastName + birthDate);
            return false;
        }
        PreparedStatement stm;
        try {
            stm = connection.prepareStatement("INSERT INTO users " + "(first_name, last_name, birth_date, email, password, phone_number, country, city, address, user_role) " +
                    "VALUES (?,?,?,?,?,?,?,?,?,?);");
            stm.setString(1, firstName);
            stm.setString(2, lastName);
            // Format for date is 1999-07-13
            stm.setDate(3, java.sql.Date.valueOf(birthDate));
            stm.setString(4, email);
            stm.setString(5, getHash(password));
            stm.setString(6, phoneNumber);
            stm.setString(7, country);
            stm.setString(8, city);
            stm.setString(9, address);
            stm.setString(10, role);
            stm.executeUpdate();
            commit();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public void commit() throws SQLException {
        Statement stm = connection.createStatement();
        stm.executeUpdate("commit;");
    }

    public boolean alreadyUser(String email) throws SQLException {
        PreparedStatement stm = connection.prepareStatement("SELECT COUNT(*) FROM users WHERE email = \"" + email + "\"");
        ResultSet res = stm.executeQuery();
        if (res.next()) {
            String result = res.getString(1);
            return Integer.parseInt(result) > 0;
        }
        return false;
    }

    public boolean isPasswordCorrect(String email, String password) throws SQLException {
        PreparedStatement stm = connection.prepareStatement("SELECT password FROM users WHERE email = \"" + email + "\"");
        ResultSet res = stm.executeQuery();
        if (res.next()) {
            String result = res.getString(1);
            if(result.equals(getHash(password))) {
                return true;
            }
        }
        return false;
    }
    private String getHash(String password) {
        MessageDigest md = null;
        try {
            md = MessageDigest.getInstance(ALGORITHM);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        byte[] passwordByte = password.getBytes();
        byte[] hashByte = md.digest(passwordByte);
        return hexToString(hashByte);
    }

    private String hexToString(byte[] bytes) {
        StringBuffer buff = new StringBuffer();
        for (int i=0; i<bytes.length; i++) {
            int val = bytes[i];
            val = val & 0xff;  // remove higher bits, sign
            if (val<16) buff.append('0'); // leading 0
            buff.append(Integer.toString(val, 16));
        }
        return buff.toString();
    }

    public boolean removeUser(String email) throws SQLException {
        if (!alreadyUser(email)) {
            return false;
        }
        try {
            PreparedStatement stm;
            stm = connection.prepareStatement("DELETE FROM users WHERE email = \"" + email + "\"");
            stm.executeUpdate();
            commit();
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public boolean updateUser(String firstName, String lastName,
                              String birthDate, String email,
                              String password, String phoneNumber,
                              String country, String city,
                              String address) throws SQLException {
        // User sees full form of profile, if edits any tab, the info will be updated
        User user = getUser(email);
        if (user == null) {
            return false;
        }
        String query = prepareString(user, firstName, lastName, birthDate, email, password, phoneNumber, country, city, address);
        if (query.length() == 0) {
            return false;
        }
        PreparedStatement stm = connection.prepareStatement(query);
        stm.executeUpdate();
        commit();
        return true;
    }

    private String prepareString(User user, String firstName, String lastName, String birthDate, String email, String password, String phoneNumber, String country, String city, String address) {
        String result = "UPDATE users SET ";
        ArrayList<String> toAdd = new ArrayList<>();
        if (!user.getFirstName().equals(firstName)) {
            toAdd.add("first_name = \"" + firstName + "\"");
        }
        if (!user.getLastName().equals(lastName)) {
            toAdd.add("last_name = \"" + lastName + "\"");
        }
        if (!user.getBirthDate().equals(birthDate)) {
            toAdd.add("birth_date = \"" + java.sql.Date.valueOf(birthDate) + "\"");
        }
        if (!user.getPassword().equals(password)) {
            toAdd.add("user_password = \"" + password + "\"");
        }
        if (!user.getPhoneNumber().equals(phoneNumber)) {
            toAdd.add("phone_number = \"" + phoneNumber + "\"");
        }
        if (!user.getCountry().equals(country)) {
            toAdd.add("country = \"" + country + "\"");
        }
        if (!user.getCity().equals(city)) {
            toAdd.add("city = \"" + city + "\"");
        }
        if (!user.getAddress().equals(address)) {
            toAdd.add("address = \"" + address + "\"");
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
        result += " WHERE email = \"" + email + "\"";
        return result;
    }

    public User getUser(String email) throws SQLException {
        if (!alreadyUser(email)) {
            return null;
        }
        Statement stm = connection.createStatement();
        ResultSet res = stm.executeQuery("SELECT * FROM users WHERE email = \"" + email + "\"");
        if (res.next()) {
            User user = new User(
                    res.getInt(1),
                    res.getString(2),
                    res.getString(3),
                    res.getString(4),
                    res.getString(5),
                    res.getString(6),
                    res.getString(7),
                    res.getString(8),
                    res.getString(9),
                    res.getString(10),
                    res.getInt(11),
                    res.getString(12));
            return user;
        }
        return null;
    }
}
