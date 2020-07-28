package Classes;

import java.sql.Date;
import java.util.Objects;

public class Booking {

    private Integer userId;
    private String checkInDate;
    private String checkOutDate;
    private Integer apartmentId;
    private Double totalPrice;
    private String paymentCurrency;
    private Integer bookingId;


    public Booking(Integer userId, String checkInDate, String checkOutDate, Integer apartmentId,
                   Double totalPrice, String paymentCurrency, Integer bookingId) {
        this.userId = userId;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.apartmentId = apartmentId;
        this.totalPrice = totalPrice;
        this.paymentCurrency = paymentCurrency;
        this.bookingId = bookingId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(String checkInDate) {
        this.checkInDate = checkInDate;
    }

    public String getCheckOutDate () {
        return checkOutDate;
    }

    public void setCheckOutDate(String checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public Integer getApartmentId() {
        return apartmentId;
    }

    public void setApartmentId(Integer apartmentId) {
        this.apartmentId = apartmentId;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getPaymentCurrency() {
        return paymentCurrency;
    }

    public void setPaymentCurrency(String paymentCurrency) {
        this.paymentCurrency = paymentCurrency;
    }

    public Integer getBookingId() {
        return bookingId;
    }

    public void setBookingId(Integer bookingId) {
        this.bookingId = bookingId;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Booking booking = (Booking) o;
        return Objects.equals(userId, booking.userId) &&
                Objects.equals(checkInDate, booking.checkInDate) &&
                Objects.equals(checkOutDate, booking.checkOutDate) &&
                Objects.equals(apartmentId, booking.apartmentId) &&
                Objects.equals(totalPrice, booking.totalPrice) &&
                Objects.equals(paymentCurrency, booking.paymentCurrency) &&
                Objects.equals(bookingId, booking.bookingId);
    }

    @Override
    public String toString() {
        return "Booking{" +
                "userId=" + userId +
                ", checkInDate='" + checkInDate + '\'' +
                ", checkOutDate='" + checkOutDate + '\'' +
                ", apartmentId='" + apartmentId + '\'' +
                ", totalPrice='" + totalPrice + '\'' +
                ", paymentCurrency='" + paymentCurrency + '\'' +
                ", bookingId='" + bookingId + '\'' +
                '}';
    }
}
