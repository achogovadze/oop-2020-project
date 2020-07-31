package Servlets;

import Classes.ApartmentInfo;
import Classes.Booking;
import Database.ApartmentsDB;
import Database.BookingsDB;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "getBookingServlet", urlPatterns = "/getBookingServlet")
public class getBookingServlet extends HttpServlet {
    private Gson gson = new Gson();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        try {
            BookingsDB bookingsDB = new BookingsDB();
//            String apartmentIdString = request.getParameter("apartmentId");
//            Integer apartmentId = Integer.parseInt(apartmentIdString);
            List<Booking> bookings = bookingsDB.getBookings(1);
            String bookingsJsonString = this.gson.toJson(bookings);
            PrintWriter out = response.getWriter();
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            out.print(bookingsJsonString);
            out.flush();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
