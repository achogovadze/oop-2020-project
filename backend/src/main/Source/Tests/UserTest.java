package Tests;

import Classes.Booking;
import Classes.User;
import junit.framework.TestCase;
import org.junit.jupiter.api.Assertions;

import static org.junit.jupiter.api.Assertions.*;

public class UserTest extends TestCase {

    public void testUser() {
        User user = new User(1, "firstName", "lastName", "birthDate", "email",
                "password", "phoneNumber", "country", "city", "address",
                2, "role");
        user.setUserId(3);
        user.setFirstName("firstName1");
        user.setLastName("lastName1");
        user.setBirthDate("birthDate1");
        user.setEmail("email1");
        user.setPassword("password1");
        user.setPhoneNumber("phoneNumber1");
        user.setCountry("country1");
        user.setCity("city1");
        user.setAddress("address1");
        user.setEmailVerified(4);
        user.setRole("role1");

        Assertions.assertEquals(3, user.getUserId());
        Assertions.assertEquals("firstName1", user.getFirstName());
        Assertions.assertEquals("lastName1", user.getLastName());
        Assertions.assertEquals("birthDate1", user.getBirthDate());
        Assertions.assertEquals("email1", user.getEmail());
        Assertions.assertEquals("password1", user.getPassword());
        Assertions.assertEquals("phoneNumber1", user.getPhoneNumber());
        Assertions.assertEquals("country1", user.getCountry());
        Assertions.assertEquals("city1", user.getCity());
        Assertions.assertEquals("address1", user.getAddress());
        Assertions.assertEquals(4, user.getEmailVerified());
        Assertions.assertEquals("role1", user.getRole());
    }

    public void testEquals() {
        User user = new User(1, "firstName", "lastName", "birthDate", "email",
                "password", "phoneNumber", "country", "city", "address",
                2, "role");
        User user2 = new User(1, "firstName", "lastName", "birthDate", "email",
                "password", "phoneNumber", "country", "city", "address",
                2, "role");

        Assertions.assertTrue(user.equals(user));
        Assertions.assertFalse(user.equals(null));
        Assertions.assertFalse(user.equals(5));
        Assertions.assertTrue(user.equals(user2));

        user.setRole("role1");
        Assertions.assertFalse(user.equals(user2));
        user.setEmailVerified(4);
        Assertions.assertFalse(user.equals(user2));
        user.setAddress("address1");
        Assertions.assertFalse(user.equals(user2));
        user.setCity("city1");
        Assertions.assertFalse(user.equals(user2));
        user.setCountry("country1");
        Assertions.assertFalse(user.equals(user2));
        user.setPhoneNumber("phoneNumber1");
        Assertions.assertFalse(user.equals(user2));
        user.setPassword("password1");
        Assertions.assertFalse(user.equals(user2));
        user.setEmail("email1");
        Assertions.assertFalse(user.equals(user2));
        user.setBirthDate("birthDate1");
        Assertions.assertFalse(user.equals(user2));
        user.setLastName("lastName1");
        Assertions.assertFalse(user.equals(user2));
        user.setFirstName("firstName1");
        Assertions.assertFalse(user.equals(user2));
        user.setUserId(3);
        Assertions.assertFalse(user.equals(user2));
    }

    public void testToString() {
        User user = new User(1, "firstName", "lastName", "birthDate", "email",
                "password", "phoneNumber", "country", "city", "address",
                2, "role");
        String result = "User{userId=" + 1 + ", firstName='firstName', lastName='lastName', birthDate='birthDate', email='email'," +
                " password='password', phoneNumber='phoneNumber', country='country', city='city', address='address', emailVerified=" +
                2 + ", role='role'}";
        Assertions.assertEquals(result, user.toString());
    }
}