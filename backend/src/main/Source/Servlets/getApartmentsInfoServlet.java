package Servlets;

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

@WebServlet(name = "getApartmentsInfoServlet", urlPatterns = "/getApartmentsInfo")
public class getApartmentsInfoServlet extends HttpServlet {
    private Gson gson = new Gson();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            ApartmentsDB apartmentsDB = new ApartmentsDB();
            //String cityEntered = request.getParameter("cityEntered") --jspshi iqneba requesad.
            String cityEntered = "Zaodi";
            List<Integer> apartments = new ArrayList<>();

            if(cityEntered == "allApartments") {
                apartments = apartmentsDB.getAllApartments();
            } else {
                apartments = apartmentsDB.getCityId(cityEntered);
            }
            List<ApartmentInfo> apartmentInfos = new ArrayList<>();
            for (Integer id : apartments) {
                ApartmentInfo currentInfo = apartmentsDB.getApartmentInfo(id);
                apartmentInfos.add(currentInfo);
            }
            String apartmentsJsonString = this.gson.toJson(apartmentInfos);
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