package org.example.home;

import org.example.home.DTO.USER_LIST_KDW;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
public class HomeRestController {

    @Autowired
    public HomeServies servies;


    @RequestMapping(value = "/oneGet", method = RequestMethod.POST)
    public USER_LIST_KDW oneGet(HttpServletRequest req) {
        USER_LIST_KDW user_list_kdw = new USER_LIST_KDW();
        user_list_kdw.setUser_no(req.getParameter("user_no"));
        return servies.oneGet(user_list_kdw);
    }

    @RequestMapping(value = "/viewGrid", method = RequestMethod.POST)
    public List<USER_LIST_KDW> viewGrid(Model model) {
//        USER_LIST_KDW user_list_kdw = new USER_LIST_KDW();
//        model.addAttribute("viewAll",servies.view() );
        return servies.view();
    }

    @RequestMapping(value = "/view_update", method = RequestMethod.POST)
    public USER_LIST_KDW add(USER_LIST_KDW user_list_kdw) {


        return servies.add(user_list_kdw);
    }

//    @RequestMapping(value = "/view_modified", method = RequestMethod.POST)
//    public void add_save(USER_LIST_KDW user_list_kdw) {
//
//
//        servies.add_save(user_list_kdw);
//    }

    @RequestMapping(value = "/home_update", method = RequestMethod.POST)
    public void updateAll(USER_LIST_KDW user_list_kdw) {
//        USER_LIST_KDW user_list_kdw = new USER_LIST_KDW();
        System.out.println(user_list_kdw);
//         servies.updateAll(user_list_kdw);
    }

    private List<USER_LIST_KDW> getSearchList(@RequestParam("type") String type, @RequestParam("keyword") String keyword, Model model) throws Exception {
        USER_LIST_KDW user_list_kdw = new USER_LIST_KDW();
        user_list_kdw.setType(type);
        user_list_kdw.setKeyword1(keyword);
        return servies.view();
    }

}
