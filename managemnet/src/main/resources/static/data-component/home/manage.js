var keyword = 'I';
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
        caption: "로케이션 관리 게시판",
        ondblClickRow: function update(rowid) {
            modaload();
            keyword ='U';
            var key = $("#jqGrid").getGridParam('selarrrow');
            var loc_code = $("#jqGrid").jqGrid('getRowData', rowid).loc_code;
            var loc_name = $("#jqGrid").jqGrid('getRowData', rowid).loc_name;
            var stock_lqty = $("#jqGrid").jqGrid('getRowData', rowid).stock_lqty;
            var move_qty = $("#jqGrid").jqGrid('getRowData', rowid).move_qty;
            var use_yn = $("#jqGrid").jqGrid('getRowData', rowid).use_yn;
            var create_date = $("#jqGrid").jqGrid('getRowData', rowid).create_date;
            var gu5 = String.fromCharCode(5);
            var obj_data = {}
            var list=[];


            obj_data.keyword = keyword;
            obj_data.list = key.join(gu5);
            obj_data.loc_code = rowid;

            console.log(obj_data);

            $("#loc_code").prop('readonly', true);
            $("#loc_code").val(loc_code);
            $("#loc_name").val(loc_name);
            $("#date").val(create_date);
            $("#stock_lqty").val(stock_lqty);
            $("#move_qty").val(move_qty);
            $("#use_yn").val(use_yn);
            $("#dialog1").dialog("open");
        }



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
    keyword = 'I';
    $("#dialog1").dialog("open");
    $(".modal_work_get").val('');

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
        width: 800,
        height: 800,
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
                saveLoc();

                // save();
            }
        }

    });
}


function saveLoc() {

    var obj_data = {}
    var data_list = $(".modal_work_get");
    var list = [];

    var gu5 = String.fromCharCode(5);


    data_list.each(function (index, item) {
        obj_data[item.name] = $(item).val();
    });

    obj_data.keyword = keyword;
    obj_data.list = list.join(gu5);


    console.log(obj_data);


        if (reason_ck(obj_data)){
            $.ajax({
                url: "/Loc_Updated",
                type: "POST",
                data: obj_data,
                success: function (data) {
                    console.log(data);
                    if (data.result == "NG") {
                        alert(data.message);
                    } else {

                        $("#jqGrid").trigger('reloadGrid');
                        $("#dialog1").dialog("close");
                        $("#modaldata").trigger('reloadGrid');
                    }



                },
                error: function (request, status, error) {
                    alert("code = " + request.status + " message = " + request.responseText + " error = " + error)
                }
            })
        }

     else {
        alert("그리드에 빈값이 있습니다.");
    }

}


function reason_ck(obj_data) {
    var return_ck = true
    var pattern = /\s/g;



    if (obj_data.loc_code == '' || obj_data.loc_code == null) {
        alert("창고코드를 입력해주세요")
        return_ck = false;
    } else if (obj_data.loc_code.match(pattern)) {
        alert("창고코드에 스페이스바를 치지마세요")
        return_ck = false;
    } else if (obj_data.loc_name == '' || obj_data.loc_name == null) {
        alert("창고이름을 입력해주세요")
        return_ck = false;
    } else if (obj_data.stock_lqty == '' || obj_data.stock_lqty == null) {
        alert("적재 제한수량을 입력해주세요")
        return_ck = false;
    } else if (obj_data.move_qty == '' || obj_data.move_qty == null){
        alert("이동제한을 입력해주세요")
        return_ck = false;
    }

    return return_ck;
}
