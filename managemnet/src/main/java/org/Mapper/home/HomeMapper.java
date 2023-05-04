package org.Mapper.home;

import org.example.home.DTO.SYS_LOC_CD;
import org.example.home.DTO.SYS_MODEL_CD;
import org.example.home.DTO.SYS_SUPP_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface HomeMapper {

    List<SYS_LOC_CD> viewall(SYS_LOC_CD list);

    SYS_LOC_CD insertall(SYS_LOC_CD sys_loc_cd);

    void removeall(SYS_LOC_CD sys_loc_cd);

    void removeSuppAll(SYS_SUPP_CD sys_supp_cd);

    List<SYS_SUPP_CD> get_supp_selectbox();
    List<SYS_SUPP_CD> get_supp_selectbox1();

    List<SYS_MODEL_CD> get_Mselectbox();


    List<SYS_SUPP_CD> view_supp(SYS_SUPP_CD supp_list);

    List<SYS_MODEL_CD> view_model(SYS_MODEL_CD model_list);

    SYS_SUPP_CD insert_supp(SYS_SUPP_CD sys_supp_cd);

}
