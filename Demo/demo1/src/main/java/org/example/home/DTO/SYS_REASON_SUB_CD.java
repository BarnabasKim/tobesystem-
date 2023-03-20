package org.example.home.DTO;

import lombok.Data;

@Data
public class SYS_REASON_SUB_CD {

    private String reason_code;
    private String reason_name;

    private String reason_grp_code;

    private String reason_grp_name;

    private String create_date;

    private String searchType;
}
