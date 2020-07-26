package Classes;

import java.util.Objects;

public class Apartment {

    // Apartments Class
    private Integer apartmentId;
    private Integer userId;

    public Apartment(Integer aptId, Integer userId) {
        this.apartmentId = aptId;
        this.userId = userId;
    }

    public Integer getApartmentId() {
        return apartmentId;
    }

    public void setApartmentId(Integer apartmentId) {
        this.apartmentId = apartmentId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Apartment apartment = (Apartment) o;
        return Objects.equals(apartmentId, apartment.apartmentId) &&
                Objects.equals(userId, apartment.userId);
    }

}
