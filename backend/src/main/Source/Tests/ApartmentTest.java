package Tests;

import Classes.Apartment;
import Classes.ApartmentInfo;
import Classes.User;
import junit.framework.TestCase;
import org.junit.jupiter.api.Assertions;

import static org.junit.jupiter.api.Assertions.*;

public class ApartmentTest extends TestCase {

    public void testApartment() {
        Apartment apartment = new Apartment(1, 2);
        Assertions.assertEquals(1, apartment.getApartmentId());
        Assertions.assertEquals(2, apartment.getUserId());
    }

    public void testApartment2() {
        Apartment apartment = new Apartment(1, 2);
        apartment.setApartmentId(3);
        apartment.setUserId(4);
        Assertions.assertEquals(3, apartment.getApartmentId());
        Assertions.assertEquals(4, apartment.getUserId());
        Apartment apartment2 = new Apartment(3, 4);
        Assertions.assertTrue(apartment.equals(apartment2));
    }

    public void testEquals() {
        Apartment apartment = new Apartment(1, 2);
        apartment.setApartmentId(3);
        apartment.setUserId(4);
        Apartment apartment2 = new Apartment(3, 4);

        Assertions.assertTrue(apartment.equals(apartment));
        Assertions.assertFalse(apartment.equals(null));
        Assertions.assertFalse(apartment.equals(5));

        apartment.setUserId(5);

        Assertions.assertFalse(apartment.equals(apartment2));

        apartment.setUserId(4);
        apartment.setApartmentId(6);

        Assertions.assertFalse(apartment.equals(apartment2));
    }
}