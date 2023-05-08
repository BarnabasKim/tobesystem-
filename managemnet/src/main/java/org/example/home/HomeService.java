package org.example.home;


import org.Mapper.home.HomeMapper;
import org.example.home.DTO.SYS_LOC_CD;
import org.example.home.DTO.SYS_MODEL_CD;
import org.example.home.DTO.SYS_PART_CD;
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

    //조회
    public List<SYS_LOC_CD> viewall(SYS_LOC_CD list){
        return mapper.viewall(list);
    }

    public List<SYS_SUPP_CD> viewlocall(SYS_SUPP_CD list) { return mapper.viewlocAll(list); }

    public List<SYS_SUPP_CD> view_supp(SYS_SUPP_CD supp_list){
        return mapper.view_supp(supp_list);
    }


    public List<SYS_MODEL_CD> view_model(SYS_MODEL_CD model_list) {
        return mapper.view_model(model_list);
    }


    public List<SYS_PART_CD> view_part(SYS_PART_CD part_list) { return mapper.view_part(part_list); }


    // 추가 수정
    public SYS_SUPP_CD insert_supp(SYS_SUPP_CD sys_supp_cd) {
        return mapper.insert_supp(sys_supp_cd);
    }

    public SYS_MODEL_CD insert_model(SYS_MODEL_CD sys_model_cd) { return mapper.insert_model(sys_model_cd); }

    public SYS_LOC_CD insertall(SYS_LOC_CD sys_loc_cd){
        return mapper.insertall(sys_loc_cd);
    }

    public SYS_PART_CD insertpart(SYS_PART_CD sys_part_cd) { return mapper.insert_part(sys_part_cd); }

    // 삭제
    public void removeall(SYS_LOC_CD sys_loc_cd) {

        mapper.removeall(sys_loc_cd);
    }

    public void removeSuppAll(SYS_SUPP_CD sys_supp_cd) {

        mapper.removeSuppAll(sys_supp_cd);
    }

    public void removeModelAll(SYS_MODEL_CD sys_model_cd) {

        mapper.removeModelAll(sys_model_cd);
    }

    public void removePartAll(SYS_PART_CD sys_part_cd) {

        mapper.removePartAll(sys_part_cd);
    }


    // 셀렉트박스
    public List<SYS_SUPP_CD> get_supp_selectbox() {
        return mapper.get_supp_selectbox();
    }
    public List<SYS_SUPP_CD> get_supp_selectbox1() {
        return mapper.get_supp_selectbox1();
    }


    public List<SYS_MODEL_CD> get_Mselectbox() {
        return mapper.get_Mselectbox();
    }

    public List<SYS_PART_CD> get_Pselectbox() {return mapper.get_Pselectbox(); }


    public List<SYS_MODEL_CD> get_selectboxModel() { return mapper.get_selectboxModel(); }








    }


