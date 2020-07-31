package Servlets;

import Classes.ApartmentInfo;
import Classes.Booking;
import Database.ApartmentsDB;
import Database.BookingsDB;
import Database.UsersDB;
import com.google.gson.JsonObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "deleteApartment", urlPatterns = "/deleteApartment")
public class deleteApartmentServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
       Integer apartmentId = Integer.valueOf(request.getParameter("apartmentId"));
        JsonObject json = new JsonObject();
        try {
            BookingsDB bookingsDB = new BookingsDB();
            ApartmentsDB apartmentsDB = new ApartmentsDB();
            if(bookingsDB.deleteBooking(apartmentId) && apartmentsDB.deleteApartmentInfo(apartmentId) &&
                    apartmentsDB.deleteApartment(apartmentId)) {
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
