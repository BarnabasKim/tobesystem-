function part_modaload(){
    keyword = 'I';
    $("#dialog1").dialog("open");
    $('#part_code').prop('readonly', false);

    $(".modal_work_getP").val("");


}
// 두번째 모달 코드
$(document).ready(function(){
    getMSelectBox();
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


                savePart();
            }
        }

    });
}

function getMSelectBox() {
    $(document).ready(function(){
        $.ajax({
            url: "/getOptionModel",
            type: "GET",
            success: function (data) {

                var selectBox = $('#model_code');
                $.each(data, function(index, option) {
                    var optionElement = $('<option>')
                        .attr('value', option.model_code)
                        .text(option.model_name);
                    selectBox.append(optionElement);
                });
            }
        })

    });
}

function savePart() {
    var obj_data = {}
    var data_list = $(".modal_work_getP");
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
        if (reason_ck_part(obj_data)) {
            $.ajax({
                url: "/Part_Updated",
                type: "POST",
                data: obj_data,
                success: function (data) {
                    console.log(data);
                    if (data.result == "NG") {
                        alert(data.message);
                    } else {

                        $("#jqGrid").trigger('reloadGrid');
                        $("#dialog1").dialog("close");
                        $("#dialog1").trigger('reloadGrid');
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


function reason_ck_part(obj_data) {
    var return_ck = true;
    var pattern = /\s/g;

    var fields = [
        {name: '품번', value: obj_data.part_code},
        {name: '품명', value: obj_data.part_name},
        {name: '기종', value: obj_data.model_code},
        {name: '업체', value: obj_data.supp_name},
        {name: '사용유무', value: obj_data.use_yn},
    ];



    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (!field.value) {
            alert(field.name + '을(를) 올바르게 입력해주세요.');
            return_ck = false;
            break;
        } else if (field.name == '품번' && pattern.test(field.value)) {
            alert('품번에 스페이스바를 치지 마세요.');
            return_ck = false;
            break;
        }
    }


    return return_ck;
}
