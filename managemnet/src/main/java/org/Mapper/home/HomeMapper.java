package org.Mapper.home;

import org.example.home.DTO.SYS_LOC_CD;
import org.example.home.DTO.SYS_MODEL_CD;
import org.example.home.DTO.SYS_PART_CD;
import org.example.home.DTO.SYS_SUPP_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface HomeMapper {

    List<SYS_LOC_CD> viewall(SYS_LOC_CD list);

    List<SYS_SUPP_CD> viewlocAll(SYS_SUPP_CD list);

    SYS_LOC_CD insertall(SYS_LOC_CD sys_loc_cd);

    void removeall(SYS_LOC_CD sys_loc_cd);

    void removeSuppAll(SYS_SUPP_CD sys_supp_cd);

    void removeModelAll(SYS_MODEL_CD sys_model_cd);

    void removePartAll(SYS_PART_CD sys_part_cd);

    List<SYS_SUPP_CD> get_supp_selectbox();
    List<SYS_SUPP_CD> get_supp_selectbox1();

    List<SYS_MODEL_CD> get_Mselectbox();

    List<SYS_PART_CD> get_Pselectbox();

    List<SYS_MODEL_CD> get_selectboxModel();


    List<SYS_SUPP_CD> view_supp(SYS_SUPP_CD supp_list);

    List<SYS_MODEL_CD> view_model(SYS_MODEL_CD model_list);

    List<SYS_PART_CD> view_part(SYS_PART_CD part_list);

    SYS_SUPP_CD insert_supp(SYS_SUPP_CD sys_supp_cd);

    SYS_MODEL_CD insert_model(SYS_MODEL_CD sys_model_cd);

    SYS_PART_CD insert_part(SYS_PART_CD sys_part_cd);

}
