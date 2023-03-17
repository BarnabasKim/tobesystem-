package org.example.home;


import org.example.home.DTO.USER_LIST_KDW;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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

    @RequestMapping(value = "/viewGrid", method = RequestMethod.GET)
    public String view(Model model) {
        model.addAttribute("viewAll", servies.getAll());
        return "home/project_reason";
    }

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public String getAll(Model model) {
        model.addAttribute("viewAll", servies.getAll());
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
//@RequestMapping(value = "/delete_update", method = RequestMethod.POST)
//    public String boardDeletePro(USER_LIST_KDW user_list_kdw,Model model) {
//
//
//        servies.remove(user_list_kdw);
//
//        model.addAttribute("viewAll",servies.view());
//        return "home/project_reason";
//
//    }
//
//
//}
