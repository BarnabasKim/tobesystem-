
$(document).ready(function(){
    var resultColNames = ['회원번호','이름', '나이', '전화번호', '비고'];
    var resultColModel = [
        {name: 'user_no', index:'user_no',key:true,align: 'center', width:'10%'},
        {name: 'name', index:'name',align: 'center', width:'15%'},
        {name: 'age', index:'age',align: 'center', width:'15%',edittype:'text'},
        {name: 'number', index:'number',align: 'center', width:'15%',edittype:'text'},
        {name: 'remark', index:'remark',align: 'center', width:'20%',edittype:'text'}
    ];

    $("#jqGrid").jqGrid({
        url : "/view",
        mtype: "GET",
        datatype : "JSON",
        height: 450,
        width: 1000,
        colNames: resultColNames,
        colModel: resultColModel,
        multiselect : true,
        rowNum: 99999,
        rownumbers: true,
        pager: "pager",
        caption: "JPGRID 게시판",

    })
    modal_make1();
})
var keyword = "I";

function check(){
    // alert('조회를 하였습니다');
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
    keyword = "I";
    $("#dialog1").dialog("open");
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

$("#search").on("click",function (){
    var data = $("#searchData").val()
    var searchType = $("#searchType").val();;
    var rows = $("[title = 'Record per Page']").val();
    var postData = {'data' : data, 'searcThype' : searchType, 'rows' : rows}

    rowData = null

    $("#jqGrid").jqGrid("clearGridData", true);

    $("#jqGrid").setGridParam({
        datatype	: "json",
        postData	: postData,
        loadComplete	: function(data) {
            console.log(data);
        }
    }).trigger("reloadGrid");
})


function getSearchList(){
    $.ajax({
        type: 'GET',
        url : "/getSearchList",
        data : $("form[name=search-form]").serialize(),
        success : function(result){
            //테이블 초기화
            $('#jqGrid > tbody').empty();
            if(result.length>=1){
                result.forEach(function(item){
                    str='<tr>'
                    str += "<td>"+item.user_no+"</td>";
                    str+="<td>"+item.name+"</td>";
                    str+="<td>"+item.age+"</td>";
                    str+="<td>"+item.number+"</td>";
                    str+="</tr>"
                    $('#jqGrid').append(str);
                })
            }
        }
    })
}



