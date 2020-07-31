package Servlets;

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

@WebServlet(name = "deleteAccount", urlPatterns = "/deleteAccount")
public class deleteAccountServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        String email = request.getParameter("email");
        JsonObject json = new JsonObject();
        try {
            UsersDB usersDB = new UsersDB();
            Integer userId = usersDB.getUser(email).getUserId();
            BookingsDB bookingsDB = new BookingsDB();
            ApartmentsDB apartmentsDB = new ApartmentsDB();
            if(bookingsDB.deleteBookingByUser(userId) && apartmentsDB.deleteApartmentInfoByUser(userId) &&
                    apartmentsDB.deleteApartmentByUser(userId)) {
                if(usersDB.removeUser(email)) {
                    json.addProperty("message", "successfully");
                }
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
