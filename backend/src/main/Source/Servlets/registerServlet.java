package Servlets;

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

@WebServlet(name = "registerServlet", urlPatterns = "/register")
public class registerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        String firstName = request.getParameter("first_name");
//        String lastName = request.getParameter("last_name");
//        String birthDate = request.getParameter("birth_date");
//        String email = request.getParameter("email");
//        String password = request.getParameter("password");
//        String phoneNumber = request.getParameter("phone_number");
//        String country = request.getParameter("country");
//        String city = request.getParameter("city");
//        String address = request.getParameter("address");
//        String userRole = request.getParameter("user_role");
        String firstName = "Zaza";
        String lastName = "Gelashvili";
        String birthDate = "1958-07-13";
        String email = "z.gelashvili@freeuni.edu.ge";
        String password = "gelasha123";
        String phoneNumber = "568515523";
        String country = "Georgia";
        String city = "Tbilisi";
        String address = "Aghmashenebeli Avenue";
        String userRole = "Lecturer";
        JsonObject json = new JsonObject();
        try {
            UsersDB usersDB = new UsersDB();
            if(usersDB.registerUser(firstName, lastName, birthDate, email, password, phoneNumber, country, city, address, userRole)) {
                json.addProperty("message", "successfullyRegistered");
            } else {
                json.addProperty("message", "alreadyRegistered");
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
