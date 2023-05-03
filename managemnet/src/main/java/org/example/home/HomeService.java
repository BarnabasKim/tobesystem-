package org.example.home;


import org.Mapper.home.HomeMapper;
import org.example.home.DTO.SYS_LOC_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import java.util.List;

@ComponentScan(basePackages = {"org.Mapper.home"})
@Service
public class HomeService {


    @Autowired
    private HomeMapper mapper;


    public List<SYS_LOC_CD> viewall(SYS_LOC_CD list){
        return mapper.viewall(list);
    }

    public SYS_LOC_CD insertall(SYS_LOC_CD sys_loc_cd){
        return mapper.insertall(sys_loc_cd);
    }


    }


