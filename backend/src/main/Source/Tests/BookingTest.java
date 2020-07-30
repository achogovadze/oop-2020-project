package Tests;

import Classes.Booking;
import junit.framework.TestCase;
import org.junit.jupiter.api.Assertions;

import static org.junit.jupiter.api.Assertions.*;

public class BookingTest extends TestCase {

    public void testBooking() {
        Booking booking = new Booking(1,"01-01-2020", "02-02-2020",
                2, 3.00, "GEL", 4);
        booking.setUserId(5);
        booking.setCheckInDate("03-03-2020");
        booking.setCheckOutDate("04-04-2020");
        booking.setApartmentId(6);
        booking.setTotalPrice(7.00);
        booking.setPaymentCurrency("USD");
        booking.setBookingId(8);

        Assertions.assertEquals(5, booking.getUserId());
        Assertions.assertEquals("03-03-2020", booking.getCheckInDate());
        Assertions.assertEquals("04-04-2020", booking.getCheckOutDate());
        Assertions.assertEquals(6, booking.getApartmentId());
        Assertions.assertEquals(7.00, booking.getTotalPrice());
        Assertions.assertEquals("USD", booking.getPaymentCurrency());
        Assertions.assertEquals(8, booking.getBookingId());
    }

    public void testEquals() {
        Booking booking = new Booking(1,"01-01-2020", "02-02-2020",
                2, 3.00, "GEL", 4);

        Booking booking2 = new Booking(1,"01-01-2020", "02-02-2020",
                2, 3.00, "GEL", 4);

        Assertions.assertTrue(booking.equals(booking));
        Assertions.assertFalse(booking.equals(null));
        Assertions.assertFalse(booking.equals(5));
        Assertions.assertTrue(booking.equals(booking2));

        booking.setBookingId(8);
        Assertions.assertFalse(booking.equals(booking2));
        booking.setPaymentCurrency("USD");
        Assertions.assertFalse(booking.equals(booking2));
        booking.setTotalPrice(7.00);
        Assertions.assertFalse(booking.equals(booking2));
        booking.setApartmentId(6);
        Assertions.assertFalse(booking.equals(booking2));
        booking.setCheckOutDate("04-04-2020");
        Assertions.assertFalse(booking.equals(booking2));
        booking.setCheckInDate("03-03-2020");
        Assertions.assertFalse(booking.equals(booking2));
        booking.setUserId(5);
        Assertions.assertFalse(booking.equals(booking2));
    }

    public void testToString() {
        Booking booking = new Booking(1,"01-01-2020", "02-02-2020",
                2, 3.00, "GEL", 4);
        String result = "Booking{userId=" + 1 + ", checkInDate='01-01-2020', checkOutDate='02-02-2020', apartmentId='" +
                2 + "', totalPrice='" + 3.00 + "', paymentCurrency='GEL', bookingId='" + 4 + "'}";
        Assertions.assertEquals(result, booking.toString());
    }
}