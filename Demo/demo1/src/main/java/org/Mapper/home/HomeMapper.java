package org.Mapper.home;



import org.apache.catalina.User;
import org.example.home.DTO.USER_LIST_KDW;
import org.example.home.DTO.USER_VO;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface HomeMapper {


    List<USER_LIST_KDW> view();

    void addAll(USER_LIST_KDW user_list_kdw);

    USER_LIST_KDW add(USER_LIST_KDW user_list_kdw);

    void remove(USER_LIST_KDW ulk);

    void add_save(USER_LIST_KDW user_list_kdw);

    USER_LIST_KDW oneGet(USER_LIST_KDW user_list_kdw);


    void updateAll(USER_LIST_KDW user_list_kdw);


}
