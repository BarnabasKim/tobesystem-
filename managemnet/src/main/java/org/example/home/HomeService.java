package org.example.home;


import org.Mapper.home.HomeMapper;
import org.example.home.DTO.SYS_LOC_CD;
import org.example.home.DTO.SYS_MODEL_CD;
import org.example.home.DTO.SYS_SUPP_CD;
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


    public void removeall(SYS_LOC_CD sys_loc_cd) {

        mapper.removeall(sys_loc_cd);
    }

    public void removeSuppAll(SYS_SUPP_CD sys_supp_cd) {

        mapper.removeSuppAll(sys_supp_cd);
    }



    public List<SYS_SUPP_CD> get_supp_selectbox() {
        return mapper.get_supp_selectbox();
    }
    public List<SYS_SUPP_CD> get_supp_selectbox1() {
        return mapper.get_supp_selectbox1();
    }


    public List<SYS_MODEL_CD> get_Mselectbox() {
        return mapper.get_Mselectbox();
    }


    public List<SYS_SUPP_CD> view_supp(SYS_SUPP_CD supp_list){
        return mapper.view_supp(supp_list);
    }


    public List<SYS_MODEL_CD> view_model(SYS_MODEL_CD model_list) {
        return mapper.view_model(model_list);
    }

    public SYS_SUPP_CD insert_supp(SYS_SUPP_CD sys_supp_cd) {
        return mapper.insert_supp(sys_supp_cd);
    }


    }


