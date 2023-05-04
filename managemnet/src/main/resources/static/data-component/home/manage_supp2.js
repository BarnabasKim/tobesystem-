var keyword = 'I';
function supp_modaload(){
    keyword = 'I';
    $("#dialog1").dialog("open");

}
$(document).ready(function(){

    modal_start1();
});
function modal_start1() {
    modal_make11();
}

function modal_make11() {
    getSuppBox();

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
                saveSupp();

                // save();
            }
        }

    });
}
function getSuppBox() {
    $(document).ready(function(){
        $.ajax({
            url: "getOption1",
            type: "GET",
            success: function (data) {

                var selectBox = $('#loc_code');
                $.each(data, function(index, option) {
                    var optionElement = $('<option>')
                        .attr('value', option.loc_code)
                        .text(option.loc_name);
                    selectBox.append(optionElement);
                });
            }
        })

    });
}



function saveSupp() {

    var obj_data = {}
    var data_list = $(".modal_work_get");
    var list = [];

    var gu5 = String.fromCharCode(5);
    var check = 'Y';

    data_list.each(function (index, item) {
        obj_data[item.name] = $(item).val();
    });

    obj_data.keyword = keyword;
    obj_data.list = list.join(gu5);


    console.log(obj_data);

    if (check == 'Y') {
        // if (rowData.length == modal_ck_count) {
        $.ajax({
            url: "/Sup_Updated",
            type: "POST",
            data: obj_data,
            success: function (data) {
                console.log(data);
                if (data.result == "NG") {
                    alert(data.message);
                } else {

                    $("#jqGrid").trigger('reloadGrid');
                    $("#dialog1").dialog("close");
                    $("#modalsuppdata").trigger('reloadGrid');
                }


                // $("#dialog1").addClass( "hidden" )
            },
            error: function (request, status, error) {
                alert("code = " + request.status + " message = " + request.responseText + " error = " + error)
            }
        })

    }

}