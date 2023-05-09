var keyword = 'I';
function supp_modaload(){
    keyword = 'I';
    $("#dialog1").dialog("open");
    $(".modal_work_get").val('');
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
        if (reason_ck_supp(obj_data)) {
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

}


function reason_ck_supp(obj_data) {
    var return_ck = true;
    var pattern = /\s/g;

    var fields = [
        {name: '업체코드', value: obj_data.supp_code},
        {name: '대표이름', value: obj_data.ceo},
        {name: '사업자번호', value: obj_data.buss_number},
        {name: '전화번호', value: obj_data.user_number},
        {name: '담당자', value: obj_data.emp_name},
        {name: '업체명', value: obj_data.supp_name},
        {name: '업태', value: obj_data.buss_type},
        {name: '종목', value: obj_data.stock_type},
        {name: '팩스번호', value: obj_data.fax_number},
        {name: '로케이션', value: obj_data.loc_code},
    ];



    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (!field.value) {
            alert(field.name + '을(를) 올바르게 입력해주세요.');
            return_ck = false;
            break;
        } else if (field.name == '업체코드' && pattern.test(field.value)) {
            alert('업체코드에 스페이스바를 치지 마세요.');
            return_ck = false;
            break;
        }
    }


    return return_ck;
}
