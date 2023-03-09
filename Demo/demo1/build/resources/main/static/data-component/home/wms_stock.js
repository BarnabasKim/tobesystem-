//전역변수

//시작함수
$(document).ready(function (){
    wms_stock_grid();
    sel_box_wms_stock();
    // jqGridResize("#wms_stock_grid" , $('#wms_stock_grid').closest('[class*="col-"]'));
    // jqgridPagerIcons();
});
//클릭함수

function get_wms_stock(page){
    var part_code = $("#wms_stock_part_code").val();
    var loc_code = $("#wms_stock_loc_code").val();
    $("#wms_stock_grid").setGridParam({
        url:"get_wms_stock",
        datatype: "json",
        page: page,
        postData : {keyword : part_code, keyword2: loc_code}
    }).trigger("reloadGrid");
}

//호출함수
function wms_stock_grid(){
    $("#wms_stock_grid").jqGrid({
        datatype: "local",
        mtype: 'POST',
        colNames : ['품번','품명','규격','단위','로케이션','재고'],
        colModel : [
            {name:'part_code', index:'part_code', width:95, fixed: true, sortable: true}
            ,{name:'part_name', index:'part_name', width:130, fixed: true, sortable: true}
            ,{name:'part_spec', index:'part_spec', width:80, fixed: true, sortable: true}
            ,{name:'unit_name', index:'unit_name', width:50, fixed: true, sortable: true}
            ,{name:'loc_name', index:'loc_name', width:80, fixed: true, sortable: true}
            ,{name:'qty', index:'qty', width:80, fixed: true, sortable: true,align: "right" ,formatter:comma2}
        ],
        caption: "제품재고현황 | MES",
        sortable: true,
        autowidth: true,
        height: 570,
        pager: '#wms_stock_grid_grid_pager',
        rowNum: 100,
        rowList: [100, 200, 300, 1000],
        shrinkToFit: false,
        viewrecords: true,
        multiselect: false,
        beforeSelectRow: function (rowid, e) {
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        onCellSelect : function (rowid, iCol, cellcontent, e){

        },
        ondblClickRow: function (rowid, iRow, iCol, e) {

        },
        loadComplete:function(){
            grid_horizon_scroll("#wms_stock_grid");
        },
    });
    $("#wms_stock_grid").jqGrid('navGrid', '#wms_stock_grid_pager', {
        add: false,
        edit: false,
        del: false,
        search: false,
        refresh: false
    });
    $("#wms_stock_grid").jqGrid('navButtonAdd', '#wms_stock_grid_pager', {
        caption: "열 조정",
        title: "열 조정",
        buttonicon: "fa fa-list-alt bigger-110 blue column_chooser_icon",
        onClickButton: function() {
            $.extend(true, $.ui.multiselect, {
                defaults: {searchable :false},
                locale: {addAll: '모두 보임', removeAll: '모두 숨김', itemsCount: '사용할 열의 수'},
            });

            $("#wms_stock_grid").jqGrid('columnChooser', {
                dialog_opts: {modal: true, resizable: false},
            });
        },
        position : 'last'
    });
}

function sel_box_wms_stock(){
    $.ajax({
        url : 'sel_box_wms_stock',
        type: 'post',
        data: {},
        success: function (list){
            list.forEach(function (key,i){
                if(i == 0){
                    $("#wms_stock_loc_code").append("<option value='" + '' + "'>" + "전체" + "</option>");
                }
                $("#wms_stock_loc_code").append("<option value='" + key.loc_code + "'>" + key.loc_name + "</option>");
            })
            $("#wms_stock_loc_code").select2();
        }
    })

}

