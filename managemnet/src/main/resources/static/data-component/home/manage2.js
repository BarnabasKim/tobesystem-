function del_Data() {
    var gu5 = String.fromCharCode(5);
    var loc_code = $("#jqGrid").getGridParam("selarrrow");
    var del_list = [];
    for (var i = 0; i < loc_code.length; i++) {
        var rowData = $('#jqGrid').getRowData(loc_code[i])
        del_list.push(rowData.loc_code);
        console.log(del_list)


        if (loc_code.length == 0) {
            alert("삭제할 데이터를 선택해주세요");
            return false;
        } else {
            if (loc_code.length > 0) {
                if (confirm("선택한 데이터를 삭제하시겠습니까?")) {
                }
                $.ajax({

                    url: "delData",
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
    }
}