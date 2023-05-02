
$(document).ready(function(){
    modal_start();
});
function modal_start() {
    modal_make1();
}

function modal_make1() {

    $("#dialog1").dialog({
        modal: true,
        width: 1000,
        height: 1000,
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
function aa () {
    var keyword = 'I'
    var obj_data = {}
    var data_list = $(".modal_work_get");
    var list = [];

    var gu5 = String.fromCharCode(5);
    var gu4 = String.fromCharCode(4);
    var id1 = $("#table_modal").getGridParam('selarrrow');
    var grid = $("#table_modal");
    var rowData = grid.jqGrid('getRowData');
    var modal_ck_count = 0 ;
    var check = 'Y';



            data_list.each(function (index, item) {
            obj_data[item.name] = $(item).val();
        });


        for (var i = 0; i < rowData.length; i++) {
            if((rowData[i].reason_code !='') && rowData[i].reason_name!=''){
                list.push(rowData[i].reason_code + gu4 + rowData[i].reason_name);
            } else {
                check = 'N';
            }

            if(rowData[i].reason_code !== null && rowData[i].reason_name !== null ){
                modal_ck_count = modal_ck_count+1;
            }else {
                modal_ck_count = 0;
            }
            //     obj_data[rowData[i].id] = rowData[i];
        }


        obj_data.keyword = keyword;
        obj_data.list = list.join(gu5);


        console.log(obj_data);
    if(check =='Y'){
        if(rowData.length == modal_ck_count){
            if (reason_ck(obj_data)){
                $.ajax({
                    url: "/view_update",
                    type: "POST",
                    data: obj_data,
                    success: function (data) {
                        console.log(data);
                        if (data.result == "NG") {
                            alert(data.message);
                        } else {
                            $("#table_modal").jqGrid('clearGridData', true);
                            $("#dialog1").dialog("close");
                            $("#table_modal").trigger('reloadGrid');
                        }


                        // $("#dialog1").addClass( "hidden" )
                    },
                    error: function (request, status, error) {
                        alert("code = " + request.status + " message = " + request.responseText + " error = " + error)
                    }
                })
            }
        }
    } else {
        alert("그리드에 빈값이 있습니다.");
    }



    }
function reason_ck(obj_data) {
    var return_ck = true
    var pattern = /\s/g;
    var rowData = $("#table_modal").getRowData();

    console.log(rowData)

    if (obj_data.reason_grp_code == '' || obj_data.reason_grp_code == null ) {
        alert("원인그룹코드를 입력해주세요")
        return_ck = false;
    } else if (obj_data.reason_grp_code.match(pattern)) {
        alert("원인그룹코드에 스페이스바를 치지마세요")
        return_ck = false;
    } else if(obj_data.reason_grp_name == '' || obj_data.reason_grp_name == null) {
        alert("원인그룹명을 입력해주세요")
        return_ck = false;
    } else if (rowData.length == 0) {
        alert("사유코드 및 사유명을 입력해주세요")
        return_ck = false;
    }




    obj_data.reason_grp_code.match(pattern)


    return return_ck;
}

    function addRow() {
        var rowId = $('#table_modal').getGridParam('reccount');
        $("#table_modal").jqGrid('addRowData', rowId + 1, {key: rowId, reason_code: '', reason_name: ''})

        // var dynamicTable = document.getElementById('table_modal');
        // var newRow = dynamicTable.insertRow();
        // var cell1 = newRow.insertCell();
        // var cell2 = newRow.insertCell();
        // var cell3 = newRow.insertCell();
        //
        // cell1.innerHTML = '<input type="checkbox" name="checkboxObj" >';
        // cell2.innerHTML = '<input type="text">';
        // cell3.innerHTML = '<input type="text">';

    }

    function deleteRow() {
        var rowId = $("#table_modal").getGridParam("selarrrow");
        for (var i = rowId.length - 1; i >= 0; i--) {
            $("#table_modal").delRowData(rowId[i])
        }

    }

    function save1() {
        var keyword = 'U'
        var gu5 = String.fromCharCode(5);
        var gu4 = String.fromCharCode(4);
        var list = $("#table_modal").jqGrid('getRowData');
        var reason_code = $("#reason_code").val();
        var reason_grp_code = $("#reason_grp_code").val();
        var reason_grp_name = $("#reason_grp_name").val();
        var reason_name = $("#reason_name").val();
        var create_date = $("#create_date").val();

        // var obj_data = {}
        var rowData = [];

        var value = {
            reason_code: reason_code, reason_grp_code: reason_grp_code,
            reason_grp_name: reason_grp_name, create_date: create_date, reason_name: reason_name, keyword: UIcheck
        };


        for (var i = 0; i < list.length; i++) {
            console.log(list[i])
            rowData.push(list[i].reason_code + gu4 + list[i].reason_name);
            //     obj_data[rowData[i].id] = rowData[i];
        }

        value.keyword = keyword;
        value.list = rowData.join(gu5);

        console.log(list)
        console.log(value)


        $.ajax({
            url: '/modal_IU',
            type: 'post',
            dataType: "json",
            data: value,
            success: function (data) {
                console.log(data)
                $("#reason_code").prop('readonly', true);
                $("#reason_code").val(data.reason_code);
                $("#reason_grp_code").val(data.reason_grp_code);
                $("#reason_grp_name").val(data.reason_grp_name);

                $("#reason_code").val(list.reason_code);
                $("#reason_name").val(list.reason_name);

                $("#table_modal").trigger('reloadGrid');
                $("#table_modal").dialog("close");
            },
            error: function (e) {
                console.log(e);
            }
        });

}

// function save () {
//
//     var obj_data1 = {}
//     var data_list1 = $(".modal_work_get")
//     data_list1.each(function (index, item) {
//         obj_data1[item.name] = $(item).val();
//     });
//
//     $.ajax({
//         url: "/view_modified",
//         type: "POST",
//         data: obj_data1,
//         success :function(data) {
//             console.log("@@")
//             console.log(data);
//             alert("수정이 완료 되었습니다.")
//             // $("#dialog1").addClass( "hidden" )
//
//
//         },
//         error : function (request,status,error) {
//             alert("code = "+ request.status + " message = " + request.responseText + " error = " + error)
//         }
//     })
//
// }\

function modal_close() {
    $("#table_modal").jqGrid('clearGridData',true);
    $(this).dialog("close");
}