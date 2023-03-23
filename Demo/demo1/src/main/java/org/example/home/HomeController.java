package org.example.home;


import org.example.home.DTO.SYS_REASON_SUB2_CD;
import org.example.home.DTO.SYS_REASON_SUB_CD;
import org.example.home.DTO.USER_LIST_KDW;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class HomeController {
    @Autowired
    public HomeServies servies;

    @RequestMapping(value = "/")
    public String home() {
        return "home/project_reason";
    }


//    @RequestMapping(value = "/view_update", method = RequestMethod.POST)
//    public String boardSavePro( SYS_REASON_SUB_CD sys_reason_sub_cd) {
//
//        System.out.println(sys_reason_sub_cd);
//        System.out.println(servies.getList(sys_reason_sub_cd));
//
//    return "home/project_reason";
//
//}
    @RequestMapping(value = "delData", method = RequestMethod.POST)
    public String deleteTable(SYS_REASON_SUB_CD sys_reason_sub_cd) {

        servies.remove(sys_reason_sub_cd);

        System.out.println(sys_reason_sub_cd);
        return "home/project_reason";
    }


}
//    @PostMapping("/board/writepro")
//    public String boardWritePro(Model model,HttpServletRequest req) {
////HttpServletRequest을 사용하면 값을 받을 수가 있는데 데이터를 컨트롤러로 보냈을때 HttpServletRequest 객체 안에 모든 데이터가 들어옴
//// 원하는 데이터를 꺼낼때는 HttpServletRequest의 객체 안의 메소드인 getParameter()을 이용하면 된다.
//
//        USER_LIST_KDW user_list_kdw = new USER_LIST_KDW();
//        //
//        user_list_kdw.setUser_no(req.getParameter("user_no"));
//        user_list_kdw.setName(req.getParameter("name"));
//        user_list_kdw.setAge(req.getParameter("age"));
//        user_list_kdw.setNumber(req.getParameter("tel"));
//        user_list_kdw.setRemark(req.getParameter("empty"));
//
//        servies.add(user_list_kdw);
//
//
//        model.addAttribute("viewAll",servies.view());
//        return "home/project_reason";
//
//    }

//
//
//}
