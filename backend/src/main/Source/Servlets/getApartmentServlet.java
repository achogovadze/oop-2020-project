package Servlets;

import Classes.Apartment;
import Classes.ApartmentInfo;
import Database.ApartmentsDB;
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

@WebServlet(name = "getApartmentServlet", urlPatterns = "/getApartment")
public class getApartmentServlet extends HttpServlet {
    private Gson gson = new Gson();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            ApartmentsDB apartmentsDB = new ApartmentsDB();
            //String apartmentId = request.getParameter("apartmentId") --jspshi iqneba requestad.
            Integer apartmentId = 1;
            Apartment apartment = apartmentsDB.getApartment(apartmentId);
            String apartmentsJsonString = this.gson.toJson(apartment);
            PrintWriter out = response.getWriter();
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            out.print(apartmentsJsonString);
            out.flush();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
