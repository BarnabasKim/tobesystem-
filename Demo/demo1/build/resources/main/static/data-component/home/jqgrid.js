
$(document).ready(function(){

    getSelectBox();
    modal_start();
    // select_add();
    var resultColNames = ['작업구분','원인그룹코드', '원인그룹명', '수정일'];
    var resultColModel = [
        {name: 'reason_code',  index:'reason_code',align: 'center', width:'10%'},
        {name: 'reason_grp_code', index:'reason_grp_code',align: 'center', width:'15%',key:true},
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
        ondblClickRow: function update(rowid) {
            modaload();
            var keyword ='U';
            UIcheck = keyword;
            var key = $("#jqGrid").getGridParam('selarrrow');
            var reason_code = $("#jqGrid").jqGrid('getRowData', rowid).reason_code;
            var reason_grp_code = $("#jqGrid").jqGrid('getRowData', rowid).reason_grp_code;
            var reason_name = $("#jqGrid").jqGrid('getRowData', rowid).reason_name;
            var create_date = $("#jqGrid").jqGrid('getRowData', rowid).create_date;

            var grid = $("#table_modal");
            var rowData = grid.jqGrid('getRowData');

            var gu5 = String.fromCharCode(5);
            var gu4 = String.fromCharCode(4);
            var obj_data = {}
            var list=[];

            for (var i = 0; i < rowData.length; i++) {
                list.push(rowData[i].reason_code2+gu4+rowData[i].reason_name);
                //     obj_data[rowData[i].id] = rowData[i];
            }

            obj_data.keyword = keyword;
            obj_data.list = key.join(gu5);
            obj_data.reason_grp_code = rowid;

            console.log(obj_data);

            /*var searchType = $('#searchType option:checked').text();
            var code = $("#searchType").val();*/
            $("#reason_code").prop('readonly', true);
            $("#reason_code").val(reason_code);
            $("#code").val(reason_code);
            $("#date").val(create_date);
            $("#reason_grp_code").val(reason_grp_code);
            $("#reason_grp_name").val(reason_name);
            $("#dialog1").dialog("open");

            if (key.length == 0) {
                $.ajax({
                    url: "/get_subTable",
                    type: "POST",
                    data: obj_data,
                    success :function(data) {
                        console.log(data);

                        $("#table_modal").setGridParam({
                                data:data,
                                datatype: "local"
                            }).trigger('reloadGrid');

                        // $('#table_modal').jqGrid('setGridParam', {
                        //         data: data,
                        //         datatype: "local"
                        // }).trigger("reloadGrid");

                        // $("#dialog1").addClass( "hidden" )
                    },
                    error : function (request,status,error) {
                        alert("code = "+ request.status + " message = " + request.responseText + " error = " + error)
                    }
                })
            }

        }

    })
})

function check() {
    $("#jqGrid").setGridParam({
        url: "get_reason_sub_list",
        postData: {searchType:$("#search_things").val()},
        datatype: "json",
        mtype: "post"
    }).trigger('reloadGrid');



}

function makeTable() {
    $("#table_modal").jqGrid({
        datatype: "local",
        height : 350,
        width: 630,
        colNames: ['key','원인코드','사유명'],
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
        cellEdit: true,
        cellsubmit:'clientArray',
        afterEditCell:function(rowid, cellname, value, iRow, iCol){
            $("#"+rowid+"_"+cellname).blur(function(){
                $("#table_modal").jqGrid("saveCell",iRow,iCol);
            });
        },

    });
}




function modaload(){

    // var selected_reasoncode = $("#search_things option:selected").val();

    // console.log($("#search_things option:selected").val())
    // console.log($("#search_things option:selected").text())
    // $('input[name=code]').attr('value',selected_reasoncode);
    // $('input[name=reason_code]').attr('value',selected_code);
    $('#reason_code').val($("#search_things option:selected").text())
    $("#dialog1").dialog("open");

    makeTable();

}

function modaload1(){
    keyword = "U";
    modifyValue();
    $("#dialog1").dialog("open");

}

function deleteValue1() {
    var gu5 = String.fromCharCode(5);
    var reason_grp_code = $("#jqGrid").getGridParam("selarrrow");
    //var grp_code = reason_grp_code.toString();
    var del_list = [];
    for (var i =0; i< reason_grp_code.length; i++) {
        var rowData = $('#jqGrid').getRowData(reason_grp_code[i])
        del_list.push(rowData.reason_grp_code);
        console.log(del_list)
    }

    if (reason_grp_code.length == 0) {
        alert("삭제할 데이터를 선택해주세요");
        return false;
    } else {
        if (reason_grp_code.length > 0) {
            if (confirm("선택한 데이터를 삭제하시겠습니까?")) {}
            $.ajax({
                url: "delData",
                type: "POST",
                data: {keyword: del_list.join(gu5)},
                success: function (result) {
                    alert(result);

                    $("#jqGrid").trigger('reloadGrid')

                },
                error: function (x, e) {
                    console.log(e)
                }
            });
        }
    }
}
//


// 셀렉트박스 불러옴
function getSelectBox() {
    $("#search_things").append($("<option></option>").val("").text("전체"));
     $(document).ready(function(){
         $.ajax({
             url: "getReasons",
             type: "GET",
             success: function (data) {

                 var selectBox = $('#search_things');
                 $.each(data, function(index, option) {
                     var optionElement = $('<option>')
                         .attr('value', option.reason_code)
                         .text(option.reason_name);
                     selectBox.append(optionElement);
             });
         }
     })

    });
}


// function modifyValue() {
//     var id1 = $("#jqGrid").getGridParam('selarrrow'); // selarrrow(행을 선택하였을때 각 id의 값을 반환
//
//     $.ajax({
//         url : "/oneGet",
//         type : "POST",
//         // dataType : "JSON",
//         data : {user_no : id1[0]},
//         success : function(data){
//             // console.log(data)
//             var objName;
//             $(".modal_modify2").each(function (i, item){
//                 objName = $(this).attr('name');
//                 $(this).val(data[objName]); // 반복문 다 들어간다
//             });
//
//
//         },
//         error : function(e){
//             console.log(e)
//             // alert("통신 실패.")
//         }
//     })
// }






