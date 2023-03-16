
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
        buttons: {
            "취소": function () {
                $(this).dialog("close"); //dialog 닫기 메소드 실행
            },
            "저장": function () {
                aa();
            }
        }

    });
}
function aa () {

    var obj_data = {}
    var data_list = $(".modal_modify2")
    data_list.each(function (index, item) {
         obj_data[item.name] = $(item).val();
    });
    obj_data.keyword = keyword;

    $.ajax({
        url: "/view_update",
        type: "POST",
        data: obj_data,
        success :function(data) {
            console.log("@@")
            console.log(data);
            alert("수정이 완료 되었습니다.")
            // $("#dialog1").addClass( "hidden" )
            $(this).dialog("close");


        },
        error : function (request,status,error) {
            alert("code = "+ request.status + " message = " + request.responseText + " error = " + error)
        }
    })

}
function save () {

    var obj_data1 = {}
    var data_list1 = $(".modal_modify2")
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
    var row_num = $('#table_modal').getGridParam('reccount');
    console.log(row_num)
     $("#table_modal").jqGrid('addRowData',1,{key:1,reason_code:'',reason_name:''} )



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
    var table = document.getElementById('table_modal');
    var checkboxArray = document.getElementsByName('checkboxObj');

    for (var i = checkboxArray.length-1; i>=0; i--) {
        var check = checkboxArray[i].checked;

        if (check) {
            table.deleteRow(i);
        }
    }
}