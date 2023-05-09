
$(document).ready(function() {

    getPSelectBox();

    var resultColNames = ['품번', '품명', '기종','기종코드', '업체','업체코드', '사용유무','등록자','등록일','수정일'];
    var resultColModel = [
        {name: 'part_code', index: 'part_code', align: 'center', width: '10%'},
        {name: 'part_name', index: 'part_name', align: 'center', width: '10%'},
        {name: 'model_name', index: 'model_name', align: 'center', width: '10%'},
        {name: 'model_code', index: 'model_code', align: 'center', hidden : true},
        {name: 'supp_name', index: 'supp_name', align: 'center',width: '10%' },
        {name: 'supp_code', index: 'supp_code', align: 'center', hidden : true},
        {name: 'use_yn', index: 'use_yn', align: 'center', width: '10%'},
        {name: 'user_code', index: 'user_code', align: 'center', width: '10%'},
        {name: 'create_date', index: 'create_date', align: 'center', width: '10%'},
        {name: 'update_date', index: 'update_date', align: 'center', width: '10%'}
    ];

    $("#jqGrid").jqGrid({

        height: 'auto',
        autowidth : true,
        colNames: resultColNames,
        colModel: resultColModel,
        multiselect: true,
        rowNum: 99999,
        rownumbers: true,
        pager: "pager",
        caption: "품목관리 게시판",
        ondblClickRow: function update_model(rowid) {
            part_modaload();

            keyword ='U';

            var key = $("#jqGrid").getGridParam('selarrrow');
            var part_code = $("#jqGrid").jqGrid('getRowData', rowid).part_code;
            var part_name = $("#jqGrid").jqGrid('getRowData', rowid).part_name;
            var model_name = $("#jqGrid").jqGrid('getRowData', rowid).model_name;
            var model_code = $("#jqGrid").jqGrid('getRowData', rowid).model_code;
            var supp_name = $("#jqGrid").jqGrid('getRowData', rowid).supp_name;
            var supp_code = $("#jqGrid").jqGrid('getRowData', rowid).supp_code;
            var use_yn = $("#jqGrid").jqGrid('getRowData', rowid).use_yn;

            var gu5 = String.fromCharCode(5);
            var obj_data = {}



            obj_data.keyword = keyword;
            obj_data.list = key.join(gu5);
            obj_data.part_code = rowid;

            console.log(obj_data);

            $("#part_code").prop('readonly', true);
            $("#part_code").val(part_code);
            $("#part_name").val(part_name);
            $("#model_name").val(model_name);
            $("#model_code").val(model_code);
            $("#supp_name").val(supp_name);
            $("#supp_code").val(supp_code);
            $("#use_yn").val(use_yn);
            $("#dialog1").dialog("open");
        }


    })
})

function getPSelectBox() {
    $("#search_part").append($("<option></option>").val("").text("전체"));
    $(document).ready(function(){
        $.ajax({
            url: "getPOption",
            type: "GET",
            success: function (data) {

                var selectBox = $('#search_part');
                $.each(data, function(index, option) {
                    var optionElement = $('<option>')
                        .attr('value', option.part_code)
                        .text(option.part_name);
                    selectBox.append(optionElement);
                });
            }
        })

    });
}


function check_part() {
    $("#jqGrid").setGridParam({
        url : "get_part_list",
        postData : {searchType:$("#search_Parts").val()},
        datatype: "json",
        mtype: "post"
    }).trigger('reloadGrid');
}

function search_part(){
    $("#jqGrid").setGridParam({
        url : "search_Part_list",
        postData : {searchType:$("#search_Parts").val()},
        datatype: "json",
        mtype: "post"
    }).trigger('reloadGrid');
}



function Delete_Part_Data() {
    var gu5 = String.fromCharCode(5);
    var part_code = $("#jqGrid").getGridParam("selarrrow");
    var del_list = [];



        if (part_code.length == 0) {
            alert("삭제할 데이터를 선택해주세요");
            return false;
        }

                if (confirm("선택한 데이터를 삭제하시겠습니까?")) {
                    for (var i = 0; i < part_code.length; i++) {
                        var rowData = $('#jqGrid').getRowData(part_code[i])
                        del_list.push(rowData.part_code);
                        console.log(del_list)
                }
                $.ajax({

                    url: "delPartData",
                    type: "POST",
                    data: {keyword: del_list.join(gu5)},
                    success: function (result) {
                        console.log(result);
                        alert("삭제 되었습니다.");


                        $("#jqGrid").trigger('reloadGrid')

                    },
                    error: function (x, e) {
                        console.log(e)
                    }
                });
            }

}












