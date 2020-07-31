package Servlets;

import Database.ApartmentsDB;
import Database.BookingsDB;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "addApartmentServlet", urlPatterns = "/addApartmentServlet")
public class addApartmentServlet extends HttpServlet {
    private Gson gson = new Gson();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        JsonObject json = new JsonObject();
        Integer userId = Integer.valueOf(request.getParameter("user_id"));
        try {
            ApartmentsDB apartmentsDB = new ApartmentsDB();
            Integer apartmentId = apartmentsDB.addApartment(userId);
            String country = request.getParameter("country");
            String city = request.getParameter("city");
            String address = request.getParameter("address");
            Double price = Double.valueOf(request.getParameter("price"));
            String propertyType = request.getParameter("property_type");
            String projectType = request.getParameter("project_type");
            String additionalSpace = request.getParameter("additional_space");
            Double additionalFootage = Double.valueOf(request.getParameter("additional_footage"));
            Double squareFootage = Double.valueOf(request.getParameter("square_footage"));
            String buildingMaterials = request.getParameter("building_materials");
            Double roomHeight = Double.valueOf(request.getParameter("room_height"));
            Integer floorLevel = Integer.valueOf(request.getParameter("floor_level"));
            Integer bedroomsNum = Integer.valueOf(request.getParameter("bedrooms_num"));
            Integer bedsNum = Integer.valueOf(request.getParameter("beds_num"));
            Integer bathroomsNum = Integer.valueOf(request.getParameter("bathrooms_num"));
            Integer privateBathroom = Integer.valueOf(request.getParameter("private_bathroom"));
            Integer wifi = Integer.valueOf(request.getParameter("wifi"));
            String water = request.getParameter("water");
            String gas = request.getParameter("gas");
            String electricity = request.getParameter("electricity");
            Integer airConditioning = Integer.valueOf(request.getParameter("air_conditioning"));
            String heating = request.getParameter("heating");
            String washingMachine = request.getParameter("washing_machine");
            Integer oven = Integer.valueOf(request.getParameter("oven"));
            Integer dishwasher = Integer.valueOf(request.getParameter("dishwasher"));
            Integer dryer = Integer.valueOf(request.getParameter("dryer"));
            Integer desk = Integer.valueOf(request.getParameter("desk"));
            Integer balcony = Integer.valueOf(request.getParameter("balcony"));
            Integer elevator = Integer.valueOf(request.getParameter("elevator"));
            Integer parking = Integer.valueOf(request.getParameter("parking"));
            Integer vehicleCharger = Integer.valueOf(request.getParameter("vehicle_charger"));
            Integer pool = Integer.valueOf(request.getParameter("pool"));
            Integer isAvailable = Integer.valueOf(request.getParameter("is_available"));
            String apartmentStatus = request.getParameter("apartment_status");
            Double latitude = Double.valueOf(request.getParameter("latitude"));
            Double longitude = Double.valueOf(request.getParameter("longitude"));
            String image1 = request.getParameter("image1");
            String image2 = request.getParameter("image2");
            String image3 = request.getParameter("image3");
            String image4 = request.getParameter("image4");
            String image5 = request.getParameter("image5");
            if(apartmentsDB.addApartmentInfo(apartmentId, country, city, address, price, propertyType, projectType, apartmentStatus,
                    additionalSpace, additionalFootage, squareFootage, buildingMaterials, roomHeight, floorLevel, bedroomsNum,
                    bedsNum, bathroomsNum, privateBathroom, wifi, water, gas, electricity, airConditioning, heating, washingMachine,
                    oven, dishwasher, dryer, desk, balcony, elevator, parking, vehicleCharger, pool, isAvailable, latitude, longitude) &&
                    apartmentsDB.addImages(apartmentId, image1) && apartmentsDB.addImages(apartmentId, image2) &&
                    apartmentsDB.addImages(apartmentId, image3) && apartmentsDB.addImages(apartmentId, image4) &&
                    apartmentsDB.addImages(apartmentId, image5)){
                json.addProperty("message", "successfully");
            } else {
                json.addProperty("message", "Failed");
            }
            PrintWriter out = response.getWriter();
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            out.print(json);
            out.flush();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
