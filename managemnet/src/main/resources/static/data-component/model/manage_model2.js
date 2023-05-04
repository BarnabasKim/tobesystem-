function model_modaload(){
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


                // save();
            }
        }

    });
}