package org.example.home.DTO;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
public class USER_LIST_KDW {

    private String user_no;
    private String name;
    private String age;

    private String idList;
    private String number;
    private String remark;

    private String keyword;
    private String keyword1;// 검색 내용
    private String type; // 검색 타입
    private String result;
    private String message;


}
