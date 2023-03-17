
$(document).ready(function(){
    modal_start();
    select_add();
    var resultColNames = ['작업구분','원인그룹코드', '원인그룹명', '수정일'];
    var resultColModel = [
        {name: 'reason_code', index:'reason_code',align: 'center', width:'10%'},
        {name: 'reason_grp_code', index:'reason_grp_code',align: 'center', width:'15%'},
        {name: 'reason_name', index:'reason_name',align: 'center', width:'15%'},
        {name: 'create_date', index:'create_date',align: 'center', width:'15%'}
    ];

    $("#jqGrid").jqGrid({

        height: 450,
        width: 1000,
        colNames: resultColNames,
        colModel: resultColModel,
        multiselect : true,
        rowNum: 99999,
        rownumbers: true,
        pager: "pager",
        caption: "원인코드 게시판",

    })
})

function select_add(){
    $.ajax({
        url: "/viewGrid",
        type: "post",
        datatype: "json",
        success :function(data) {
          console.log(data);


        },
        error : function (request,status,error) {
            alert("code = "+ request.status + " message = " + request.responseText + " error = " + error)
        }
    })
}

function check(){
    // alert('조회를 하였습니다');

    $("#jqGrid").setGridParam({
        url : "/viewGrid",
        mtype: "POST",
        datatype : "JSON",
    }).trigger('reloadGrid');


    // $.ajax({
    //     url: "/viewGrid",
    //     type: "post",
    //     // datatype: "json",
    //     success :function(data) {
    //         $("#jqGrid").setGridParam({
    //             datatype : 'local',//json
    //             data : data // Postdata
    //         }).trigger('reloadGrid');
    //     },
    //     error : function (request,status,error) {
    //         alert("code = "+ request.status + " message = " + request.responseText + " error = " + error)
    //     }
    // })

}

function modaload(){
    $("#dialog1").dialog("open");
    makeTable();
}

function modaload1(){
    keyword = "U";
    modifyValue();
    $("#dialog1").dialog("open");

}

function deleteValue1() {
    keyword = "D";
    var id1 = $("#jqGrid").getGridParam('selarrrow'); // selarrrow(행을 선택하였을때 각 id의 값을 반환
    var gu5 = String.fromCharCode(5);


    if(id1.length == 0 ) {
        alert("삭제할 데이터를 선택하세요.");
        return false;
    } else {
        if(id1.length > 0) {
            if (confirm("선택한 데이터를 삭제하시겠습니까?")==false)
                return false;

            $.ajax({
                dataType: 'text',
                type: 'POST',
                url: '/delete_update',
                data: {
                    idList:id1.join(gu5) //콤마를 기준으로 서비스단에서 반복
                },
                success: function (data) {
                    // console.log(data);
                    $("#jqGrid").trigger('reloadGrid');
                }
            });
        }
    }
}
function modifyValue() {
    var id1 = $("#jqGrid").getGridParam('selarrrow'); // selarrrow(행을 선택하였을때 각 id의 값을 반환

    $.ajax({
        url : "/oneGet",
        type : "POST",
        // dataType : "JSON",
        data : {user_no : id1[0]},
        success : function(data){
            // console.log(data)
            var objName;
            $(".modal_modify2").each(function (i, item){
                objName = $(this).attr('name');
                $(this).val(data[objName]); // 반복문 다 들어간다
            });


        },
        error : function(e){
            console.log(e)
            // alert("통신 실패.")
        }
    })
}

function makeTable() {
    $("#table_modal").jqGrid({
        datatype: "local",
        height : 350,
        width: 630,
        colNames: ['key','사유코드','사유명'],
        colModel: [
            {name: 'key', index: 'key',key:true, align: 'right',hidden:true},
            {name: 'reason_code', index: 'reason_code', align: 'right',editable :true},
            {name: 'reason_name', index: 'reason_name', align: 'right',editable :true},
        ],
        caption: "모달 작업창",
        multiselect : true,
        rowNum: 99999,
        rownumbers: true,
        pager: "pager",
        cellEdit: true
    });
}


