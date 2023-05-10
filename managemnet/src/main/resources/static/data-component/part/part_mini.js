function modal_start2() {
    modal_make2();
}

$(document).ready(function () {
    modal_start2();
    //supp_select();
});

$(function () {
    $("#list2").jqGrid({
        colNames: ["업체코드", "업체명", "대표", "업태", "담당자", "로케이션 코드", "로케이션", "등록자", "등록일", "사업자번호", "종목", "전화번호", "팩스번호"],
        colModel: [
            {name: "supp_code", index: "supp_code", key: true},
            {name: "supp_name", index: "supp_name"},
            {name: "ceo", index: "ceo"},
            {name: "buss_type", index: "buss_type"},
            {name: "emp_name", index: "emp_name"},
            {name: "loc_code", index: "loc_code", hidden: true},
            {name: "loc_name", index: "loc_name"},
            {name: "user_code", index: "user_code"},
            {name: "update_date", index: "update_date"},
            {name: "buss_number", index: "buss_number", hidden: true},
            {name: "stock_type", index: "stock_type", hidden: true},
            {name: "user_number", index: "user_number", hidden: true},
            {name: "fax_number", index: "fax_number", hidden: true}
        ],
        multiselect: true,
        pager: "#pager",
        rowNum: 10,
        rownumbers: true,
        rowList: [10,20,30],
        sortname: "supp_code",
        viewrecords: true,
        autoencode: true

    });
});
function modal_make2() {
    $("#dialog2").dialog({
        modal: true,
        width: 1350,
        height: 600,
        autoOpen: false,
        autosize: false,
        buttons: {
            "취소": function () {
                $(this).dialog("close"); //dialog 닫기 메소드 실행
            },
            "선택": function () {
                var rowid = $("#list2").jqGrid("getGridParam","selarrrow");
                var supp_name = $("#list2").getRowData(rowid).supp_name;
                var supp_code = $("#list2").jqGrid('getRowData', rowid).supp_code;
                if(rowid.length == 0) {
                    alert("업체를 선택하세요.");
                } else if(rowid.length > 1) {
                    alert("한개의 업체만 선택하세요.");
                } else {
                    $("#supp_name").val(supp_name);
                    $("#supp_code").val(supp_code);
                    $("#dialog2").dialog("close");
                }
            }
        }
    });
}


function supp_type_open() {
    $("#dialog2").dialog("open");
    $("#supp_name").prop('readonly', true);
    supp_select2();
}

function supp_select2() {
    $("#list2").setGridParam({
        url : "get_loc_list",
        datatype : "JSON",
        postData : {},
        mtype: 'POST'
    }).trigger('reloadGrid');
}