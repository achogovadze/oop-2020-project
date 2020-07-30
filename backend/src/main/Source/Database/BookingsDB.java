package Database;

import Classes.Booking;
import Classes.User;

import javax.swing.plaf.nimbus.State;
import java.sql.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BookingsDB {
    static String account = InfoDB.MYSQL_USERNAME;
    static String password = InfoDB.MYSQL_PASSWORD;
    static String server = InfoDB.MYSQL_DATABASE_SERVER;
    static String database = InfoDB.MYSQL_DATABASE_NAME;

    private static BookingsDB db;
    private Connection connection;

    public BookingsDB() throws ClassNotFoundException, SQLException {
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

    public static BookingsDB getInstance() throws SQLException, ClassNotFoundException {
        if (db == null) {
            synchronized (ApartmentsDB.class) {
                if (db == null) {
                    db = new BookingsDB();
                }
            }
        }
        return db;
    }

    public boolean book(String checkInDate, String checkOutDate, Integer userId, Integer apartmentId, Double totalPrice, String paymentCurrency) throws SQLException {
        Integer bookingId = -1;
        String query = "INSERT INTO bookings (apartment_id, user_id, check_in_date, check_out_date, total_price, payment_currency) VALUES (?, ?, ?, ?, ?, ?);";
        PreparedStatement stm = connection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
        try {
            stm.setInt(1, apartmentId);
            stm.setInt(2, userId);
            stm.setString(3, checkInDate);
            stm.setString(4, checkOutDate);
            stm.setDouble(5, totalPrice);
            stm.setString(6, paymentCurrency);
            return true;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            return false;
        }
    }

    public List<Booking> getBookings(Integer apartmentId) throws SQLException {
        List<Booking> result = new ArrayList<>();
        PreparedStatement stm = connection.prepareStatement("SELECT * FROM bookings WHERE apartment_id=1");
        ResultSet res = stm.executeQuery();

        while (res.next()) {
            Booking booking = new Booking(
                    res.getInt(1),
                    res.getInt(2),
                    res.getInt(3),
                    res.getString(4),
                    res.getString(5),
                    res.getDouble(6),
                    res.getString(7));
            result.add(booking);
        }
        return result;
    }
}
