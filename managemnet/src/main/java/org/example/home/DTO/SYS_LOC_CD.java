package org.example.home.DTO;

import lombok.Data;

@Data
public class SYS_LOC_CD {
    private String loc_code;
    private String loc_name;

    private int stock_lqty;

    private int move_qty;

    private String use_yn;

    private String user_code;
    private String create_date;

    private String update_date;


}
