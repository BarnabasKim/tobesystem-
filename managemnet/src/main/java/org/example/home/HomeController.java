package org.example.home;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {


    @Autowired
    public HomeService service;


    @RequestMapping(value = "/")
    public String home() {
        return "home/project_manage";
    }


}
