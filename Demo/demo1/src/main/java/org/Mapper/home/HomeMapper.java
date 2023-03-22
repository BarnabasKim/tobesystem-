package org.Mapper.home;



import org.apache.catalina.User;
import org.example.home.DTO.*;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface HomeMapper {

    List<SYS_REASON_SUB_CD> viewAll(SYS_REASON_SUB_CD list);

    List<SYS_REASON_CD> get_selectbox();

    SYS_REASON_SUB_CD getList(SYS_REASON_SUB_CD sys_reason_sub_cd);
//    SYS_REASON_SUB2_CD getList(SYS_REASON_SUB2_CD sys_reason_sub2_cd);

     void remove(SYS_REASON_SUB_CD sys_reason_sub_cd);





//    List<USER_LIST_KDW> view();
//
//
//    void addAll(USER_LIST_KDW user_list_kdw);
//
//    USER_LIST_KDW add(USER_LIST_KDW user_list_kdw);
//

//
//    void add_save(USER_LIST_KDW user_list_kdw);
//
//    USER_LIST_KDW oneGet(USER_LIST_KDW user_list_kdw);
//
//
//    void updateAll(USER_LIST_KDW user_list_kdw);
//

}
