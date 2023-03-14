package org.example.home.DTO;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class USER_LIST_KDW {

    private String user_no;
    private String name;
    private String age;

    private String idList;
    private String number;
    private String remark;

}
