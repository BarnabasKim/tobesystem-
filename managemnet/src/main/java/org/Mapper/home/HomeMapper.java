package org.Mapper.home;

import org.example.home.DTO.SYS_LOC_CD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface HomeMapper {

    List<SYS_LOC_CD> viewall(SYS_LOC_CD list);

    SYS_LOC_CD insertall(SYS_LOC_CD sys_loc_cd);



}
