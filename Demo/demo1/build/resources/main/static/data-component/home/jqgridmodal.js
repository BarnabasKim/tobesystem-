function modal_make1() {

    $("#dialog1").dialog({
        modal: true,
        width: 400,
        height: 400,
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
    // console.log((document).getElementById("user_no").value);
    // console.log((document).getElementById("user_name").value);
    // console.log((document).getElementById("user_age").value);
    // console.log((document).getElementById("user_tel").value);
    // console.log((document).getElementById("user_empty").value);

    // var user_no_val = (document).getElementById("user_no").value
    // var user_name_val = (document).getElementById("user_name").value
    // var user_age_val = (document).getElementById("user_age").value
    // var user_tel_val = (document).getElementById("user_tel").value
    // var user_empty_val = (document).getElementById("user_empty").value
    // modal_obj = {USER_NO : user_no_val, NAME : user_name_val,AGE : user_age_val,NUMBER : user_tel_val, REMARK : user_empty_val };

    // var objName;
    // var objValue;
    // var modal_obj = {};
    // $(".modal_modify2").each(function (i){
    //     objName = $(this).attr("user_no");
    //     objValue = $(this).val();
    //     modal_obj[objName] = objValue;
    // })
    // console.log(modal_obj);
    var obj_data = {}
    var data_list = $(".modal_modify2")
    data_list.each(function (index, item) {
         obj_data[item.name] = $(item).val();
    });


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

            // location.href =  "/view";
            // var objName;
            // $(".board_modify").each(function (i, item){
            //     objName = $(this).attr('name');
            //     $(this).val(data[objName])
            // });
        },
        error : function (request,status,error) {
            alert("code = "+ request.status + " message = " + request.responseText + " error = " + error)
        }
    })

}