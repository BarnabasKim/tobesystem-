<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>추가 로케이션 관리</title>
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap4.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap-ui.css" />

    <script type="text/javascript" src="ui-component/jqGrid/js/jquery-1.11.0.min.js"></script>
    <script src="/ui-component/jqGrid/js/i18n/grid.locale-kr.js" type="text/javascript"></script>
    <script src="/ui-component/jqGrid/js/jquery.jqGrid.min.js" type="text/javascript"></script>


    <script src="/data-component/home/manage.js"></script>
    <script src="/data-component/home/manage2.js"></script>


    <style>
        .modal_work_get {
            width: 100%;
            padding: 5px;
            border: 3px solid black;
        }
    </style>
</head>
<body>
<div id="dialog1" class="modal_background" title="모달화면">
    <div class=input-wrap">
        <fieldset id="modaldata">
            <legend>로케이션 추가창</legend>
             <input type="hidden" name="code">
            <label for="loc_code">코드</label>
                <input type="text" id="loc_code" name="loc_code" class="modal_work_get" value="">
            <label for="loc_name">명칭</label>
                <input type="text" id="loc_name" name="loc_name" class="modal_work_get" value="">
            <label for="stock_lqty">적재 재한수량</label>
                <input type="text" id="stock_lqty" name="stock_lqty" class="modal_work_get" value="">
            <label for="move_qty">이동제한</label>
                <input type="text" id="move_qty" name="move_qty" class="modal_work_get" value="">
            <label for="use_yn">사용유무</label>
             <select name="use_yn" id="use_yn" class="modal_work_get" >
                <option value="Y">Y</option>
                <option value="N">N</option>
             </select>
        </fieldset>
    </div>
</div>
</body>
</html>
