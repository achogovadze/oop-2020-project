package Classes;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class ApartmentInfo {

    private Integer apartmentId;
    private String country;
    private String city;
    private String address;
    private Double price;
    private String propertyType;
    private String projectType;
    private String apartmentStatus;
    private String additionalSpace;
    private Double additionalFootage;
    private Double squareFootage;
    private String buildingMaterials;
    private Double roomHeight;
    private Integer floorLevel;
    private Integer bedroomsNum;
    private Integer bedsNum;
    private Integer bathroomsNum;
    private Integer privateBathroom;
    private Integer wifi;
    private String water;
    private String gas;
    private String electricity;
    private Integer airCondition;
    private String heating;
    private Integer washingMachine;
    private Integer oven;
    private Integer dishwasher;
    private Integer dryer;
    private Integer desk;
    private Integer balcony;
    private Integer elevator;
    private Integer parking;
    private Integer vehicleCharger;
    private Integer pool;
    private Integer isAvailable;
    private Double latitude;
    private Double longitude;
    private List<String> images;

    public ApartmentInfo(Integer apartmentId, String country, String city, String address,
                         Double price, String propertyType, String projectType, String additionalSpace,
                         Double additionalFootage, Double squareFootage, String buildingMaterials,
                         Double roomHeight, Integer floorLevel, Integer bedroomsNum, Integer bedsNum,
                         Integer bathroomsNum, Integer privateBathroom, Integer wifi, String water,
                         String gas, String electricity, Integer airCondition, String heating,
                         Integer washingMachine, Integer oven, Integer dishwasher, Integer dryer,
                         Integer desk, Integer balcony, Integer elevator, Integer parking,
                         Integer vehicleCharger, Integer pool, Integer isAvailable, String apartmentStatus, Double latitude, Double longitude, List<String> imagesList) {
        this.apartmentId = apartmentId;
        this.country = country;
        this.city = city;
        this.address = address;
        this.price = price;
        this.propertyType = propertyType;
        this.projectType = projectType;
        this.apartmentStatus = apartmentStatus;
        this.additionalSpace = additionalSpace;
        this.additionalFootage = additionalFootage;
        this.squareFootage = squareFootage;
        this.buildingMaterials = buildingMaterials;
        this.roomHeight = roomHeight;
        this.floorLevel = floorLevel;
        this.bedroomsNum = bedroomsNum;
        this.bedsNum = bedsNum;
        this.bathroomsNum = bathroomsNum;
        this.privateBathroom = privateBathroom;
        this.wifi = wifi;
        this.water = water;
        this.gas = gas;
        this.electricity = electricity;
        this.airCondition = airCondition;
        this.heating = heating;
        this.washingMachine = washingMachine;
        this.oven = oven;
        this.dishwasher = dishwasher;
        this.dryer = dryer;
        this.desk = desk;
        this.balcony = balcony;
        this.elevator = elevator;
        this.parking = parking;
        this.vehicleCharger = vehicleCharger;
        this.pool = pool;
        this.isAvailable = isAvailable;
        this.latitude = latitude;
        this.longitude = longitude;
        this.images = imagesList;
    }

    public Double getLatitude() {return latitude;}

    public void setLatitude(Double latitude) {this.latitude = latitude;}

    public Double getLongitude() {return longitude;}

    public void setLongitude(Double longitude) {this.longitude = longitude;}

    public Integer getApartmentId() {
        return apartmentId;
    }

    public void setApartmentId(Integer apartmentId) {
        this.apartmentId = apartmentId;
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

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public String getProjectType() {
        return projectType;
    }

    public void setProjectType(String projectType) {
        this.projectType = projectType;
    }

    public String getApartmentStatus() {
        return apartmentStatus;
    }

    public void setApartmentStatus(String apartmentStatus) {
        this.apartmentStatus = apartmentStatus;
    }

    public String getAdditionalSpace() {
        return additionalSpace;
    }

    public void setAdditionalSpace(String additionalSpace) {
        this.additionalSpace = additionalSpace;
    }

    public Double getAdditionalFootage() {
        return additionalFootage;
    }

    public void setAdditionalFootage(Double additionalFootage) {
        this.additionalFootage = additionalFootage;
    }

    public Double getSquareFootage() {
        return squareFootage;
    }

    public void setSquareFootage(Double squareFootage) {
        this.squareFootage = squareFootage;
    }

    public String getBuildingMaterials() {
        return buildingMaterials;
    }

    public void setBuildingMaterials(String buildingMaterials) {
        this.buildingMaterials = buildingMaterials;
    }

    public Double getRoomHeight() {
        return roomHeight;
    }

    public void setRoomHeight(Double roomHeight) {
        this.roomHeight = roomHeight;
    }

    public Integer getFloorLevel() {
        return floorLevel;
    }

    public void setFloorLevel(Integer floorLevel) {
        this.floorLevel = floorLevel;
    }

    public Integer getBedroomsNum() {
        return bedroomsNum;
    }

    public void setBedroomsNum(Integer bedroomsNum) {
        this.bedroomsNum = bedroomsNum;
    }

    public Integer getBedsNum() {
        return bedsNum;
    }

    public void setBedsNum(Integer bedsNum) {
        this.bedsNum = bedsNum;
    }

    public Integer getBathroomsNum() {
        return bathroomsNum;
    }

    public void setBathroomsNum(Integer bathroomsNum) {
        this.bathroomsNum = bathroomsNum;
    }

    public Integer getPrivateBathroom() {
        return privateBathroom;
    }

    public void setPrivateBathroom(Integer privateBathroom) {
        this.privateBathroom = privateBathroom;
    }

    public Integer getWifi() {
        return wifi;
    }

    public void setWifi(Integer wifi) {
        this.wifi = wifi;
    }

    public String getWater() {
        return water;
    }

    public void setWater(String water) {
        this.water = water;
    }

    public String getGas() {
        return gas;
    }

    public void setGas(String gas) {
        this.gas = gas;
    }

    public String getElectricity() {
        return electricity;
    }

    public void setElectricity(String electricity) {
        this.electricity = electricity;
    }

    public Integer getAirCondition() {
        return airCondition;
    }

    public void setAirCondition(Integer airCondition) {
        this.airCondition = airCondition;
    }

    public String getHeating() {
        return heating;
    }

    public void setHeating(String heating) {
        this.heating = heating;
    }

    public Integer getWashingMachine() {
        return washingMachine;
    }

    public void setWashingMachine(Integer washingMachine) {
        this.washingMachine = washingMachine;
    }

    public Integer getOven() {
        return oven;
    }

    public void setOven(Integer oven) {
        this.oven = oven;
    }

    public Integer getDishwasher() {
        return dishwasher;
    }

    public void setDishwasher(Integer dishwasher) {
        this.dishwasher = dishwasher;
    }

    public Integer getDryer() {
        return dryer;
    }

    public void setDryer(Integer dryer) {
        this.dryer = dryer;
    }

    public Integer getDesk() {
        return desk;
    }

    public void setDesk(Integer desk) {
        this.desk = desk;
    }

    public Integer getBalcony() {
        return balcony;
    }

    public void setBalcony(Integer balcony) {
        this.balcony = balcony;
    }

    public Integer getElevator() {
        return elevator;
    }

    public void setElevator(Integer elevator) {
        this.elevator = elevator;
    }

    public Integer getParking() {
        return parking;
    }

    public void setParking(Integer parking) {
        this.parking = parking;
    }

    public Integer getVehicleCharger() {
        return vehicleCharger;
    }

    public void setVehicleCharger(Integer vehicleCharger) {
        this.vehicleCharger = vehicleCharger;
    }

    public Integer getPool() {
        return pool;
    }

    public void setPool(Integer pool) {
        this.pool = pool;
    }

    public Integer getIsAvailable() {
        return isAvailable;
    }

    public void setIsAvailable(Integer isAvailable) {
        this.isAvailable = isAvailable;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ApartmentInfo that = (ApartmentInfo) o;
        return Objects.equals(apartmentId, that.apartmentId) &&
                Objects.equals(country, that.country) &&
                Objects.equals(city, that.city) &&
                Objects.equals(address, that.address) &&
                Objects.equals(price, that.price) &&
                Objects.equals(propertyType, that.propertyType) &&
                Objects.equals(projectType, that.projectType) &&
                Objects.equals(apartmentStatus, that.apartmentStatus) &&
                Objects.equals(additionalSpace, that.additionalSpace) &&
                Objects.equals(additionalFootage, that.additionalFootage) &&
                Objects.equals(squareFootage, that.squareFootage) &&
                Objects.equals(buildingMaterials, that.buildingMaterials) &&
                Objects.equals(roomHeight, that.roomHeight) &&
                Objects.equals(floorLevel, that.floorLevel) &&
                Objects.equals(bedroomsNum, that.bedroomsNum) &&
                Objects.equals(bedsNum, that.bedsNum) &&
                Objects.equals(bathroomsNum, that.bathroomsNum) &&
                Objects.equals(privateBathroom, that.privateBathroom) &&
                Objects.equals(wifi, that.wifi) &&
                Objects.equals(water, that.water) &&
                Objects.equals(gas, that.gas) &&
                Objects.equals(electricity, that.electricity) &&
                Objects.equals(airCondition, that.airCondition) &&
                Objects.equals(heating, that.heating) &&
                Objects.equals(washingMachine, that.washingMachine) &&
                Objects.equals(oven, that.oven) &&
                Objects.equals(dishwasher, that.dishwasher) &&
                Objects.equals(dryer, that.dryer) &&
                Objects.equals(desk, that.desk) &&
                Objects.equals(balcony, that.balcony) &&
                Objects.equals(elevator, that.elevator) &&
                Objects.equals(parking, that.parking) &&
                Objects.equals(vehicleCharger, that.vehicleCharger) &&
                Objects.equals(pool, that.pool) &&
                Objects.equals(latitude, that.latitude) &&
                Objects.equals(longitude, that.longitude) &&
                Objects.equals(isAvailable, that.isAvailable);
    }

}
