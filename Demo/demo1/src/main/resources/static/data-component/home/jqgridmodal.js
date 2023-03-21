
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
    var data_list = $(".modal_work_get")
    var gu5 = String.fromCharCode(5);
    var id1 = $("#table_modal").getGridParam('selarrrow');
    var grid = $("#table_modal")
    var rowData = grid.jqGrid('getRowData');

    data_list.each(function (index, item) {
         obj_data[item.name] = $(item).val();
    });

    // var data = {
    //     idList: id1.join(gu5),
    //     obj_data : obj_data,
    //     keyword: keyword
    // };

    obj_data.keyword = keyword;
    obj_data.list = id1.join(gu5);
    obj_data.rowData = rowData;

    console.log(obj_data);

    $.ajax({
        url: "/view_update",
        type: "POST",
        data: obj_data,
        success :function(data) {
            console.log(data);
            $("#table_modal").trigger('reloadGrid');
            // $("#dialog1").addClass( "hidden" )
        },
        error : function (request,status,error) {
            alert("code = "+ request.status + " message = " + request.responseText + " error = " + error)
        }
    })

}
function save () {

    var obj_data1 = {}
    var data_list1 = $(".modal_work_get")
    data_list1.each(function (index, item) {
        obj_data1[item.name] = $(item).val();
    });

    $.ajax({
        url: "/view_modified",
        type: "POST",
        data: obj_data1,
        success :function(data) {
            console.log("@@")
            console.log(data);
            alert("수정이 완료 되었습니다.")
            // $("#dialog1").addClass( "hidden" )


        },
        error : function (request,status,error) {
            alert("code = "+ request.status + " message = " + request.responseText + " error = " + error)
        }
    })

}


function addRow() {
    var rowId = $('#table_modal').getGridParam('reccount');

     $("#table_modal").jqGrid('addRowData',rowId+1,{key:1,reason_code:'',reason_name:''} )



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
    for(var i=rowId.length-1; i>=0; i--){
        $("#table_modal").delRowData(rowId[i])
    }
}