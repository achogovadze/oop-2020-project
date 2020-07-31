package Tests;

import Classes.User;
import Database.UsersDB;
import junit.framework.TestCase;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;

public class UsersDBTest extends TestCase {

    private UsersDB usersDB;
    private static String ALGORITHM = "SHA-512";
    private static final String EMAIL = "email@gmail.com";
    private static final String PASSWORD = "password";
    private static final String EMAIL2 = "email2@gmail.com";
    private static final String PASSWORD2 = "password2";


    //This method is called before each test and is responsible for registering two users
    @Override
    protected void setUp() throws Exception {
        usersDB = new UsersDB();
        try {
            usersDB.registerUser("firstname", "lastName", "2000-01-01",
                    EMAIL, PASSWORD, "555123456",
                    "country", "city", "address", "role");
            usersDB.registerUser("firstname2", "lastName2", "1999-09-09",
                    EMAIL2, PASSWORD2, "555123456",
                    "country2", "city2", "address2", "role2");
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

    }


    //This method tests registration
    public void testRegister() throws SQLException, ClassNotFoundException {

        assertFalse(usersDB.registerUser("firstname", "lastName", "2000-01-01",
                EMAIL, "foobar", "555123456",
                "country", "city", "address", "role"));

        assertFalse(usersDB.registerUser("firstname2", "lastName2", "1999-09-09",
                EMAIL2, "foobar", "555123456",
                "country2", "city2", "address2", "role2"));

        assertTrue(usersDB.registerUser("firstname3", "lastName3", "1999-10-10",
                "email3@gmail.com", "foobar", "555123456",
                "country3", "city3", "address3", "role3"));

        assertTrue(usersDB.removeUser("email3@gmail.com"));

    }

    //This method tests updating users
    public void testUpdateUser() {

        try {
            assertTrue(usersDB.updateUser("first", "last", "2000-01-01",
                    EMAIL2, "pass", "555123999",
                    "country", "city", "address"));
            assertFalse(usersDB.updateUser("first", "last", "2000-01-01",
                       EMAIL2, "pass", "555123999",
                       "country", "city", "address"));
            assertFalse(usersDB.updateUser("first", "last", "2000-01-01",
                    "nonexistent@gmail.com", "pass", "555123999",
                    "country", "city", "address"));

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }


    }

    //This method tests if password of users is correct
    public void testIsPasswordCorrect() {
        try {
            assertTrue(usersDB.isPasswordCorrect(EMAIL, PASSWORD));
            assertFalse(usersDB.isPasswordCorrect(EMAIL, "foobar"));
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }


    //This method removes users fromd database
    public void testRemoveUser() {
        try {
            assertTrue(usersDB.removeUser(EMAIL));
            assertTrue(usersDB.removeUser(EMAIL2));
            assertFalse(usersDB.removeUser("nonexistent@gmail.com"));
            assertFalse(usersDB.removeUser(EMAIL));
            assertFalse(usersDB.removeUser(EMAIL2));
            assertFalse(usersDB.updateUser("first", "last", "2000-01-01",
                    EMAIL2, "pass", "555123456",
                    "country", "city", "address"));
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

    }

    //This method tests getUsers method
    public void testGetUser() {
        User userFromDB;
        try {
            userFromDB = usersDB.getUser(EMAIL);
            int id = userFromDB.getUserId();
            User test = new User(id, "firstname", "lastName", "2000-01-01",
                                EMAIL, getHash(PASSWORD), "555123456",
                                "country", "city", "address", 0,"role");
            assertEquals(userFromDB,test);
            assertNull(usersDB.getUser("nonexistant@gmail.com"));
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

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
}

