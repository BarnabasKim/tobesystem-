$(document).ready(function() {

    var resultColNames = ['코드','명칭', '적재 제한수량', '이동제한', '사용유무', '등록자','등록일'];
    var resultColModel = [
        {name: 'loc_code',  index:'loc_code',align: 'center', width:'10%'},
        {name: 'loc_name', index:'loc_name',align: 'center', width:'10%'},
        {name: 'stock_lqty', index:'stock_lqty',align: 'center', width:'10%'},
        {name: 'move_qty', index:'move_qty',align: 'center', width:'10%'},
        {name: 'use_yn', index:'use_yn',align: 'center', width:'10%'},
        {name: 'user_code', index:'user_code',align: 'center', width:'10%'},
        {name: 'create_date', index:'create_date',align: 'center', width:'10%'}

    ];

    $("#jqGrid").jqGrid({

        height: 'auto',
        autowidth : true,
        colNames: resultColNames,
        colModel: resultColModel,
        multiselect : true,
        rowNum: 99999,
        rownumbers: true,
        pager: "pager",
        caption: "로케이션 관리 게시판"



    })

})

function check() {
    $("#jqGrid").setGridParam({
        url: "get_list",
        postData: {searchType:$("#jqGrid").val()},
        datatype: "json",
        mtype: "post"
    }).trigger('reloadGrid');

}

function modaload(){

    $("#dialog1").dialog("open");

}

$(document).ready(function(){
    modal_start();
});
function modal_start() {
    modal_make1();
}

function modal_make1() {

    $("#dialog1").dialog({
        modal: true,
        width: 500,
        height: 500,
        resizeable: true,
        autoOpen: false,
        autosize: false,
        show: 'slide',
        cellEdit : true,
        buttons: {
            "취소": function () {
                $("#dialog1").jqGrid('clearGridData',true);
                $(this).dialog("close"); //dialog 닫기 메소드 실행

            },
            "저장": function () {
                aa();

                // save();
            }
        }

    });
}