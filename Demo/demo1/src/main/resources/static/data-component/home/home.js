//전역변수

//시작함수
$(document).ready(function (){
    modal_make();
});

function update(data) {
    var user_no=$(data).text();

    $.ajax({
        url : "/oneGet",
        type : "POST",
        dataType : "JSON",
        data : {"user_no" : user_no},
        success : function(data){
            // console.log(data)
            var objName;
            $(".modal_modify").each(function (i, item){
                objName = $(this).attr('name');
                $(this).val(data[objName]); // 반복문 다 들어간다
            });
            // $("#user_no").val(data.user_NO);
            // $("#user_name").val(data.name);
            // $("#user_age").val(data.age);
            // $("#user_tel").val(data.number);
            // $("#user_empty").val(data.remark);
            $("#dialog").dialog('open');




        },
        error : function(){
            alert("통신 실패.")
        }
    })
}



function check(){
    alert('조회를 하였습니다');
    window.location.href = "/view";

}


function deleteValue(e) {
    console.log(e);

    if(confirm("정말로 삭제하시겠습니까?")) {
        // if(request.getParameter("checkbox-delete") != null )
        //     alert("삭제 되었습니다.")

        window.location.href = "/delete?user_no=" + e
    }else {
        window.location.href = "/view"

    }

}

//클릭함수



