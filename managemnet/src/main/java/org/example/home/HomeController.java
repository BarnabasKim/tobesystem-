package org.example.home;

import org.example.home.DTO.SYS_LOC_CD;
import org.example.home.DTO.SYS_SUPP_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {


    @Autowired
    public HomeService service;


    @RequestMapping(value = "/")
    public String home() {
        return "home/project_manage";
    }

    @RequestMapping(value = "/supp")
    public String home_supp() {
        return "home/project_manage_supp";
    }

    @RequestMapping(value = "/model")
    public String home_model() {
        return "model/project_mng_model";
    }


    @RequestMapping(value = "delData", method = RequestMethod.POST)
    public String deleteData(@RequestParam("keyword") String del_list) {
        try {
            String[] delArr = del_list.split(",");
            for (String code : delArr) {
                SYS_LOC_CD sys_loc_cd = new SYS_LOC_CD();
                sys_loc_cd.setKeyword(code.trim());
                service.removeall(sys_loc_cd);
            }
            return "home/project_manage";
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }


    }



    @RequestMapping(value = "delSuppData", method = RequestMethod.POST)
    public String deleteSuppData(@RequestParam("keyword") String del_list) {
        try {
            String[] delArr = del_list.split(",");
            for (String code : delArr) {
                SYS_SUPP_CD sys_supp_cd = new SYS_SUPP_CD();
                sys_supp_cd.setKeyword(code.trim());
                service.removeSuppAll(sys_supp_cd);
            }
            return "home/project_manage_supp";
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }


    }
}