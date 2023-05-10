var keyword = 'I';

function model_modaload(){
    keyword = 'I';
    $("#dialog1").dialog("open");
    $('#model_code').prop('readonly', false);
    $(".modal_work_getM").val('');

}
$(document).ready(function(){

    modal_start1();
});
function modal_start1() {
    modal_make11();
}

function modal_make11() {

    $("#dialog1").dialog({
        modal: true,
        width: 500,
        height: 500,
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


                 saveModel();
            }
        }
    });
}


function saveModel() {

    var obj_data = {}
    var data_list = $(".modal_work_getM");
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
        if (reason_ck_model(obj_data)) {
            $.ajax({
                url: "/Model_Updated",
                type: "POST",
                data: obj_data,
                success: function (data) {
                    console.log(data);
                    if (data.result == "NG") {
                        alert(data.message);
                    } else {

                        $("#jqGrid").trigger('reloadGrid');
                        $("#dialog1").dialog("close");
                    }


                    // $("#dialog1").addClass( "hidden" )
                },
                error: function (request, status, error) {
                    alert("code = " + request.status + " message = " + request.responseText + " error = " + error)
                }
            })
        }

    }
}

function reason_ck_model(obj_data) {
    var return_ck = true;
    var pattern = /\s/g;

    var fields = [
        {name: '기종코드', value: obj_data.model_code},
        {name: '기종명', value: obj_data.model_name},
    ];



    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (!field.value) {
            alert(field.name + '을(를) 올바르게 입력해주세요.');
            return_ck = false;
            break;
        } else if (field.name == '기종코드' && pattern.test(field.value)) {
            alert('기종코드에 스페이스바를 치지 마세요.');
            return_ck = false;
            break;
        }
    }


    return return_ck;
}
