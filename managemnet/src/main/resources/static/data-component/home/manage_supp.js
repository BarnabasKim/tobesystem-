
$(document).ready(function() {
    getSelectBox();

    var resultColNames = ['업체코드', '업체명', '대표', '업태', '담당자','로케이션코드','로케이션', '등록자', '등록일','수정일','사업자번호','종목','전화번호','팩스번호'];
    var resultColModel = [
        {name: 'supp_code', index: 'supp_code', align: 'center', width: '10%'},
        {name: 'supp_name', index: 'supp_name', align: 'center', width: '10%'},
        {name: 'ceo', index: 'ceo', align: 'center', width: '10%'},
        {name: 'buss_type', index: 'buss_type', align: 'center', width: '10%'},
        {name: 'emp_name', index: 'emp_name', align: 'center', width: '10%'},
        {name: 'loc_code', index: 'loc_code', align: 'center', hidden : true},
        {name: 'loc_name', index: 'loc_name', align: 'center', width: '10%'},
        {name: 'user_code', index: 'user_code', align: 'center', width: '10%'},
        {name: 'create_date', index: 'create_date', align: 'center', width: '10%'},
        {name: 'update_date', index: 'update_date', align: 'center', width: '10%'},
        {name: 'buss_number', index: 'buss_number', align: 'center', width: '10%'},
        {name: 'stock_type', index: 'stock_type', align: 'center', width: '10%'},
        {name: 'user_number', index: 'user_number', align: 'center', width: '10%'},
        {name: 'fax_number', index: 'fax_number', align: 'center', width: '10%'}
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
        caption: "업체관리 게시판",
        ondblClickRow: function update_supp(rowid) {
            supp_modaload();

            keyword ='U';

            var key = $("#jqGrid").getGridParam('selarrrow');
            var supp_code = $("#jqGrid").jqGrid('getRowData', rowid).supp_code;
            var ceo = $("#jqGrid").jqGrid('getRowData', rowid).ceo;
            var buss_number = $("#jqGrid").jqGrid('getRowData', rowid).buss_number;
            var user_number = $("#jqGrid").jqGrid('getRowData', rowid).user_number;
            var emp_name = $("#jqGrid").jqGrid('getRowData', rowid).emp_name;
            var supp_name = $("#jqGrid").jqGrid('getRowData', rowid).supp_name;
            var buss_type = $("#jqGrid").jqGrid('getRowData', rowid).buss_type;
            var stock_type = $("#jqGrid").jqGrid('getRowData', rowid).stock_type;
            var fax_number = $("#jqGrid").jqGrid('getRowData', rowid).fax_number;
            var loc_code = $("#jqGrid").jqGrid('getRowData', rowid).loc_code;
            var loc_name = $("#jqGrid").jqGrid('getRowData', rowid).loc_name;
            var gu5 = String.fromCharCode(5);
            var obj_data = {}
            var list=[];


            obj_data.keyword = keyword;
            obj_data.list = key.join(gu5);
            obj_data.supp_code = rowid;

            console.log(obj_data);

            $("#supp_code").prop('readonly', true);
            $("#supp_code").val(supp_code);
            $("#ceo").val(ceo);
            $("#buss_number").val(buss_number);
            $("#user_number").val(user_number);
            $("#emp_name").val(emp_name);
            $("#supp_name").val(supp_name);
            $("#buss_type").val(buss_type);
            $("#stock_type").val(stock_type);
            $("#fax_number").val(fax_number);
            $("#loc_code").val(loc_code);
            $("#loc_name").val(loc_name);
            $("#dialog1").dialog("open");
        }

    })
})




function getSelectBox() {
    $("#search_things").append($("<option></option>").val("").text("전체"));
    $(document).ready(function(){
        $.ajax({
            url: "getOption",
            type: "GET",
            success: function (data) {

                var selectBox = $('#search_things');
                $.each(data, function(index, option) {
                    var optionElement = $('<option>')
                        .attr('value', option.supp_code)
                        .text(option.supp_name);
                    selectBox.append(optionElement);
                });
            }
        })

    });
}

function check_supp(){
    $("#jqGrid").setGridParam({
        url : "get_supp_list",
        postData : {searchType:$("#search_things").val()},
        datatype: "json",
        mtype: "post"
    }).trigger('reloadGrid');
}

function search_supp(){
    $("#jqGrid").setGridParam({
        url : "search_Supp_list",
        postData : {searchType:$("#search_supp").val()},
        datatype: "json",
        mtype: "post"
    }).trigger('reloadGrid');
}

function Delete_Supp_Data() {
        var gu5 = String.fromCharCode(5);
        var supp_code = $("#jqGrid").getGridParam("selarrrow");
        var del_list = [];

        if (supp_code.length == 0) {
            alert("삭제할 데이터를 선택해주세요");
            return false;
        }

        var confirmed = confirm("선택한 데이터를 삭제하시겠습니까?");
        if (confirmed) {
            for (var i = 0; i < supp_code.length; i++) {
                var rowData = $('#jqGrid').getRowData(supp_code[i]);
                del_list.push(rowData.supp_code);
            }

            $.ajax({
                url: "delSuppData",
                type: "POST",
                data: {keyword: del_list.join(gu5)},
                success: function (result) {
                    console.log(result);
                    alert("삭제 되었습니다.");
                    $("#jqGrid").trigger('reloadGrid');
                },
                error: function (x, e) {
                    console.log(e)
                }
            });
        }

}



