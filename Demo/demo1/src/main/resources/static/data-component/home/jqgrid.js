
$(document).ready(function(){
    var resultColNames = ['','회원번호','이름', '나이', '전화번호', '비고'];
    var resultColModel = [
        {name: 'chkbox', index: 'chkbox',align: 'center', width:'10%', edittype: 'checkbox'},
        {name: 'user_no', index:'user_no',align: 'center', width:'10%',edittype:'text'},
        {name: 'name', index:'name',align: 'center', width:'15%',edittype:'text'},
        {name: 'age', index:'age',align: 'center', width:'15%',edittype:'text'},
        {name: 'number', index:'number',align: 'center', width:'15%',edittype:'text'},
        {name: 'remark', index:'remark',align: 'center', width:'20%',edittype:'text'}
    ];

    $("#jqGrid").jqGrid({
        url : "/view",
        mtype: "POST",
        datatype : "JSON",
        height: 250,
        width: 630,
        colNames: resultColNames,
        colModel: resultColModel,
        rowNum: 10,
        rownumbers: true,
        pager: "pager",
        caption: "JPGRID 게시판"
    })
    modal_make1();
})

function check(){
    alert('조회를 하였습니다');
    $.ajax({
        url: "/viewGrid",
        type: "post",
        // datatype: "json",
        success :function(data) {
            console.log(data);
            $("#jqGrid").setGridParam({
                datatype : 'local',
                data : data
            }).trigger('reloadGrid');
        },
        error : function (request,status,error) {
            alert("code = "+ request.status + " message = " + request.responseText + " error = " + error)
        }
    })

}

function modaladd(){
    $("#dialog1").dialog("open");
}