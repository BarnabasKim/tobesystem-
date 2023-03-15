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
            // ,
            // "수정": function () {
            //     save();
            //
            // }
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