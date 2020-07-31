package Servlets;

import Classes.ApartmentInfo;
import Classes.Booking;
import Database.ApartmentsDB;
import Database.BookingsDB;
import Database.UsersDB;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "addBookingServlet", urlPatterns = "/addBookingServlet")
public class addBookingServlet extends HttpServlet {
    private Gson gson = new Gson();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
            String checkInDateString = request.getParameter("check_in_date");
            String checkOutDateString = request.getParameter("check_out_date");
            Integer userId = Integer.parseInt(request.getParameter("user_id"));
        Integer apartmentId = Integer.parseInt(request.getParameter("apartment_id"));
        Double totalPrice = Double.parseDouble(request.getParameter("total_price"));
        String paymentCurrency = request.getParameter("payment_currency");
            JsonObject json = new JsonObject();
            try {
                BookingsDB bookingsDB = new BookingsDB();
                if (bookingsDB.book(checkInDateString, checkOutDateString, userId, apartmentId, totalPrice, paymentCurrency)) {
                    json.addProperty("message", "successfullyBooked");
                } else {
                    json.addProperty("message", "alreadyBooked");
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
