package org.example.home;

import org.Mapper.home.HomeMapper;

import org.apache.catalina.User;
import org.example.home.DTO.USER_LIST_KDW;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@ComponentScan(basePackages={"org.Mapper.home"})
public class HomeServies {

    @Autowired
    private HomeMapper mapper;



    public List<USER_LIST_KDW> view() {
        return mapper.view();
    }


    public USER_LIST_KDW add(USER_LIST_KDW user_list_kdw) {
       return mapper.add(user_list_kdw);
    }


    public void add_save(USER_LIST_KDW user_list_kdw) {
        mapper.add_save(user_list_kdw);
    }
//    public void updateAll(USER_LIST_KDW user_list_kdw) {
//
////        System.out.println(user_list_kdw.getIdList());
//      String[] array =  user_list_kdw.getIdList().split(",");
//      for (String key : array){
//          System.out.println(key);
//          mapper.remove(key);
//      }
//
//    }

    public void remove(USER_LIST_KDW user_list_kdw) {
        mapper.remove(user_list_kdw);
    }


    public USER_LIST_KDW oneGet(USER_LIST_KDW user_list_kdw) {
        return mapper.oneGet(user_list_kdw);
    }

    public void  updateAll(USER_LIST_KDW user_list_kdw) { mapper.updateAll(user_list_kdw); }

}
//@Override
//public List<USER_LIST_KDW> getSearchList(USER_LIST_KDW user_list_kdw) throws Exception {
//    return mapper.selectSearchList(user_list_kdw);
//}

