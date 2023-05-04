
$(document).ready(function() {

    getMSelectBox();

    var resultColNames = ['기종코드', '기종명', '등록자', '등록일','수정일'];
    var resultColModel = [
        {name: 'model_code', index: 'model_code', align: 'center', width: '10%'},
        {name: 'model_name', index: 'model_name', align: 'center', width: '10%'},
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
        caption: "모델관리 게시판",
        ondblClickRow: function update_model(rowid) {
            model_modaload();

            keyword ='U';

            var key = $("#jqGrid").getGridParam('selarrrow');
            var model_code = $("#jqGrid").jqGrid('getRowData', rowid).model_code;
            var model_name = $("#jqGrid").jqGrid('getRowData', rowid).model_name;
            var user_code = $("#jqGrid").jqGrid('getRowData', rowid).user_code;
            var create_date = $("#jqGrid").jqGrid('getRowData', rowid).create_date;
            var update_date = $("#jqGrid").jqGrid('getRowData', rowid).update_date;

            var gu5 = String.fromCharCode(5);
            var obj_data = {}
            var list=[];


            obj_data.keyword = keyword;
            obj_data.list = key.join(gu5);
            obj_data.supp_code = rowid;

            console.log(obj_data);

            $("#model_code").prop('readonly', true);
            $("#model_code").val(supp_code);
            $("#model_name").val(model_name);
            $("#dialog1").dialog("open");
        }


    })
})



function getMSelectBox() {
    $("#search_things").append($("<option></option>").val("").text("전체"));
    $(document).ready(function(){
        $.ajax({
            url: "getMOption",
            type: "GET",
            success: function (data) {

                var selectBox = $('#search_things');
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



function check_model() {
    $("#jqGrid").setGridParam({
        url : "get_model_list",
        postData : {searchType:$("#search_things").val()},
        datatype: "json",
        mtype: "post"
    }).trigger('reloadGrid');
}

