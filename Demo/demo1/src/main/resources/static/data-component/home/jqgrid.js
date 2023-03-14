
$(document).ready(function(){
    var resultColNames = ['회원번호','이름', '나이', '전화번호', '비고'];
    var resultColModel = [
        {name: 'user_no', index:'user_no',key:true,align: 'center', width:'10%',edittype:'text'},
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
        multiselect : true,
        rowNum: 10,
        rownumbers: true,
        pager: "pager",
        caption: "JPGRID 게시판",

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
            // console.log(data);
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

function modaload(){
    $("#dialog1").dialog("open");
}

function deleteValue1() {
    var id1 = $("#jqGrid").getGridParam('selarrrow'); // selarrrow(행을 선택하였을때 각 id의 값을 반환

    console.log(id1);
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
                    idList:id1.join(',') //콤마를 기준으로 서비스단에서 반복
                },
                success: function (data) {
                    console.log(data);
                    $("#jqGrid").trigger('reloadGrid');
                }
            });
        }
    }
}
function modifyValue() {
    modal_make1();
}


// if(confirm("정말로 삭제하시겠습니까?")) {
//     // if(request.getParameter("checkbox-delete") != null )
//     //     alert("삭제 되었습니다.")
//
//     window.location.href = "/delete?user_no=" + i
// }else {
//     window.location.href = "/view"
//
// }
// $(document).ready(function() {
//     $("#deleteRow").click(function () {
//         deleteRow();
//
//
//     });
// })

// function deleteRow() {
//     var id = $("#user_no").getGridParam('selarrrow');
//
//     var data = "";
//
//     for (var i = 0; i < id.length; i++) {
//         var rowdata = $("#user_no").getRowData(id[i]);
//             data += rowdata.id +',';
//     }
//     if(id.length==0){
//         alert("삭제할 Data를 선택하세요");
//         return false;
//     }else {
//         if(id.length>0) {
//             if (confirm("선택한 Data를 삭제하시겠습니까?") == flase)
//                 return false;
//         }
//         $.ajax({
//
//             dataType: "json",
//             type: "POST",
//             url: "/delete",
//             data : {
//                 data: data
//             },
//
//             success:function (response, textStatus, xhr){
//
//                 alert("s: " + textStatus);
//                 $("#user_no").jqGrid('setGridParam',{
//                     url:"/delete",
//                         dataType: "json"
//                 }).trigger("reloadGrid");
//             },
//             error:function (e){
//
//             }
//
//         });
//
//         }
//
// }
