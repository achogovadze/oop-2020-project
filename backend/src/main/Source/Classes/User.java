package Classes;

import java.util.Objects;

public class User {

    private Integer userId;
    private String firstName;
    private String lastName;
    private String birthDate;
    private String email;
    private String password;
    private String phoneNumber;
    private String country;
    private String city;
    private String address;
    private Integer emailVerified;
    private String role;


    public User(Integer userId, String firstName, String lastName, String birthDate,
                String email, String password, String phoneNumber, String country,
                String city, String address, Integer emailVerified, String role) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.country = country;
        this.city = city;
        this.address = address;
        this.emailVerified = emailVerified;
        this.role = role;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getEmailVerified() {
        return emailVerified;
    }

    public void setEmailVerified(Integer emailVerified) {
        this.emailVerified = emailVerified;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(userId, user.userId) &&
                Objects.equals(firstName, user.firstName) &&
                Objects.equals(lastName, user.lastName) &&
                Objects.equals(birthDate, user.birthDate) &&
                Objects.equals(email, user.email) &&
                Objects.equals(password, user.password) &&
                Objects.equals(phoneNumber, user.phoneNumber) &&
                Objects.equals(country, user.country) &&
                Objects.equals(city, user.city) &&
                Objects.equals(address, user.address) &&
                Objects.equals(emailVerified, user.emailVerified) &&
                Objects.equals(role, user.role);
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", birthDate='" + birthDate + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", country='" + country + '\'' +
                ", city='" + city + '\'' +
                ", address='" + address + '\'' +
                ", emailVerified=" + emailVerified +
                ", role='" + role + '\'' +
                '}';
    }
}
