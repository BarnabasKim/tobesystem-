package org.example.home;

import org.example.home.DTO.SYS_REASON_CD;
import org.example.home.DTO.SYS_REASON_SUB_CD;
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

    @GetMapping("/getReasons")
    public List<SYS_REASON_CD> get_selectbox() {
        return servies.get_selectbox();
    }

    @RequestMapping(value = "/get_reason_sub_list", method = RequestMethod.POST)
    public List<SYS_REASON_SUB_CD> viewAll(SYS_REASON_SUB_CD vo) {
//        SYS_REASON_SUB_CD list = new SYS_REASON_SUB_CD();
//        list.setSearchType(searchType);
        return servies.viewAll(vo);
    }






//    @RequestMapping(value = "/viewGrid", method = RequestMethod.POST)
//    public List<USER_LIST_KDW> viewGrid(SYS_REASON_CD sys_reason_cd, Model model) {
////        USER_LIST_KDW user_list_kdw = new USER_LIST_KDW();
////        model.addAttribute("viewAll",servies.view() );
//        System.out.println();
//        return servies.view();
//    }

//    @RequestMapping(value = "/view_update", method = RequestMethod.POST)
//    public USER_LIST_KDW add(USER_LIST_KDW user_list_kdw) {
//        return servies.add(user_list_kdw);
//    }

//    @RequestMapping(value = "/home_update", method = RequestMethod.POST)
//    public void updateAll(USER_LIST_KDW user_list_kdw) {
////        USER_LIST_KDW user_list_kdw = new USER_LIST_KDW();
//        System.out.println(user_list_kdw);
////         servies.updateAll(user_list_kdw);
//    }



}
