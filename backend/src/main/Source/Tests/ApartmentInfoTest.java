package Tests;

import Classes.Apartment;
import Classes.ApartmentInfo;
import Classes.User;
import junit.framework.TestCase;
import org.junit.jupiter.api.Assertions;

import java.util.ArrayList;
import java.util.List;

public class ApartmentInfoTest extends TestCase{

    public void testApartmentInfo() {
        List<String> images = new ArrayList<>();
        images.add("link1");
        images.add("link2");
        ApartmentInfo info = new ApartmentInfo(1, "country", "city", "address",
                1.00, "propertyType", "projectType", "additionalSpace",
                2.00, 3.00, "buildingMaterials", 4.00, 5,
                6, 7, 8, 9, 10, "water", "gas", "electricity",
                11, "heating", 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, "apartmentStatus", 23.00, 24.00, images);
        info.setLatitude(100.00);
        info.setLongitude(99.00);
        info.setApartmentId(98);
        info.setCountry("country1");
        info.setCity("city1");
        info.setAddress("address1");
        info.setPrice(97.00);
        info.setPropertyType("propertyType1");
        info.setProjectType("projectType1");
        info.setApartmentStatus("apartmentStatus1");
        info.setAdditionalSpace("additionalSpace1");
        info.setAdditionalFootage(96.00);
        info.setSquareFootage(95.00);
        info.setBuildingMaterials("buildingMaterials1");
        info.setRoomHeight(94.00);
        info.setFloorLevel(93);
        info.setBedroomsNum(92);
        info.setBedsNum(91);
        info.setBathroomsNum(90);
        info.setPrivateBathroom(89);
        info.setWifi(88);
        info.setWater("water1");
        info.setGas("gas1");
        info.setElectricity("electricity1");
        info.setAirCondition(87);
        info.setHeating("heating1");
        info.setWashingMachine(86);
        info.setOven(85);
        info.setDishwasher(84);
        info.setDryer(83);
        info.setDesk(82);
        info.setBalcony(81);
        info.setElevator(80);
        info.setParking(79);
        info.setVehicleCharger(78);
        info.setPool(77);
        info.setIsAvailable(76);

        Assertions.assertEquals(100.00, info.getLatitude());
        Assertions.assertEquals(99.00, info.getLongitude());
        Assertions.assertEquals(98, info.getApartmentId());
        Assertions.assertEquals("country1", info.getCountry());
        Assertions.assertEquals("city1", info.getCity());
        Assertions.assertEquals("address1", info.getAddress());
        Assertions.assertEquals(97.00, info.getPrice());
        Assertions.assertEquals("propertyType1", info.getPropertyType());
        Assertions.assertEquals("projectType1", info.getProjectType());
        Assertions.assertEquals("apartmentStatus1", info.getApartmentStatus());
        Assertions.assertEquals("additionalSpace1", info.getAdditionalSpace());
        Assertions.assertEquals(96.00, info.getAdditionalFootage());
        Assertions.assertEquals(95.00, info.getSquareFootage());
        Assertions.assertEquals("buildingMaterials1", info.getBuildingMaterials());
        Assertions.assertEquals(94.00, info.getRoomHeight());
        Assertions.assertEquals(93, info.getFloorLevel());
        Assertions.assertEquals(92, info.getBedroomsNum());
        Assertions.assertEquals(91, info.getBedsNum());
        Assertions.assertEquals(90, info.getBathroomsNum());
        Assertions.assertEquals(89, info.getPrivateBathroom());
        Assertions.assertEquals(88, info.getWifi());
        Assertions.assertEquals("water1", info.getWater());
        Assertions.assertEquals("gas1", info.getGas());
        Assertions.assertEquals("electricity1", info.getElectricity());
        Assertions.assertEquals(87, info.getAirCondition());
        Assertions.assertEquals("heating1", info.getHeating());
        Assertions.assertEquals(86, info.getWashingMachine());
        Assertions.assertEquals(85, info.getOven());
        Assertions.assertEquals(84, info.getDishwasher());
        Assertions.assertEquals(83, info.getDryer());
        Assertions.assertEquals(82, info.getDesk());
        Assertions.assertEquals(81, info.getBalcony());
        Assertions.assertEquals(80, info.getElevator());
        Assertions.assertEquals(79, info.getParking());
        Assertions.assertEquals(78, info.getVehicleCharger());
        Assertions.assertEquals(77, info.getPool());
        Assertions.assertEquals(76, info.getIsAvailable());
    }

    public void testEquals() {
        List<String> images = new ArrayList<>();
        images.add("link1");
        images.add("link2");
        ApartmentInfo info = new ApartmentInfo(1, "country", "city", "address",
                1.00, "propertyType", "projectType", "additionalSpace",
                2.00, 3.00, "buildingMaterials", 4.00, 5,
                6, 7, 8, 9, 10, "water", "gas", "electricity",
                11, "heating", 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, "apartmentStatus", 23.00, 24.00, images);
        ApartmentInfo info2 = new ApartmentInfo(1, "country", "city", "address",
                1.00, "propertyType", "projectType", "additionalSpace",
                2.00, 3.00, "buildingMaterials", 4.00, 5,
                6, 7, 8, 9, 10, "water", "gas", "electricity",
                11, "heating", 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, "apartmentStatus", 23.00, 24.00, images);
        Assertions.assertTrue(info.equals(info));
        Assertions.assertFalse(info.equals(null));
        Assertions.assertFalse(info.equals(5));
        Assertions.assertTrue(info.equals(info2));

        info.setIsAvailable(76);
        Assertions.assertFalse(info.equals(info2));
        info.setLongitude(99.00);
        Assertions.assertFalse(info.equals(info2));
        info.setLatitude(100.00);
        Assertions.assertFalse(info.equals(info2));
        info.setPool(77);
        Assertions.assertFalse(info.equals(info2));
        info.setVehicleCharger(78);
        Assertions.assertFalse(info.equals(info2));
        info.setParking(79);
        Assertions.assertFalse(info.equals(info2));
        info.setElevator(80);
        Assertions.assertFalse(info.equals(info2));
        info.setBalcony(81);
        Assertions.assertFalse(info.equals(info2));
        info.setDesk(82);
        Assertions.assertFalse(info.equals(info2));
        info.setDryer(83);
        Assertions.assertFalse(info.equals(info2));
        info.setDishwasher(84);
        Assertions.assertFalse(info.equals(info2));
        info.setOven(85);
        Assertions.assertFalse(info.equals(info2));
        info.setWashingMachine(86);
        Assertions.assertFalse(info.equals(info2));
        info.setHeating("heating1");
        Assertions.assertFalse(info.equals(info2));
        info.setAirCondition(87);
        Assertions.assertFalse(info.equals(info2));
        info.setElectricity("electricity1");
        Assertions.assertFalse(info.equals(info2));
        info.setGas("gas1");
        Assertions.assertFalse(info.equals(info2));
        info.setWater("water1");
        Assertions.assertFalse(info.equals(info2));
        info.setWifi(88);
        Assertions.assertFalse(info.equals(info2));
        info.setPrivateBathroom(89);
        Assertions.assertFalse(info.equals(info2));
        info.setBathroomsNum(90);
        Assertions.assertFalse(info.equals(info2));
        info.setBedsNum(91);
        Assertions.assertFalse(info.equals(info2));
        info.setBedroomsNum(92);
        Assertions.assertFalse(info.equals(info2));
        info.setFloorLevel(93);
        Assertions.assertFalse(info.equals(info2));
        info.setRoomHeight(94.00);
        Assertions.assertFalse(info.equals(info2));
        info.setBuildingMaterials("buildingMaterials1");
        Assertions.assertFalse(info.equals(info2));
        info.setSquareFootage(95.00);
        Assertions.assertFalse(info.equals(info2));
        info.setAdditionalFootage(96.00);
        Assertions.assertFalse(info.equals(info2));
        info.setAdditionalSpace("additionalSpace1");
        Assertions.assertFalse(info.equals(info2));
        info.setApartmentStatus("apartmentStatus1");
        Assertions.assertFalse(info.equals(info2));
        info.setProjectType("projectType1");
        Assertions.assertFalse(info.equals(info2));
        info.setPropertyType("propertyType1");
        Assertions.assertFalse(info.equals(info2));
        info.setPrice(97.00);
        Assertions.assertFalse(info.equals(info2));
        info.setAddress("address1");
        Assertions.assertFalse(info.equals(info2));
        info.setCity("city1");
        Assertions.assertFalse(info.equals(info2));
        info.setCountry("country1");
        Assertions.assertFalse(info.equals(info2));
        info.setApartmentId(98);
        Assertions.assertFalse(info.equals(info2));
    }
}