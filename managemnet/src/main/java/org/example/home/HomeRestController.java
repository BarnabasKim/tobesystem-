package org.example.home;

import org.example.home.DTO.SYS_LOC_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeRestController {


    @Autowired
    public HomeService service;

    @RequestMapping(value = "/get_list", method = RequestMethod.POST)
    public List<SYS_LOC_CD> viewall(SYS_LOC_CD list){

        return service.viewall(list);
    }



}
