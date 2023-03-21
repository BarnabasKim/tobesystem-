<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap4.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap-ui.css" />

    <script type="text/javascript" src="ui-component/jqGrid/js/jquery-1.11.0.min.js"></script>
    <script src="/ui-component/jqGrid/js/i18n/grid.locale-kr.js" type="text/javascript"></script>
    <script src="/ui-component/jqGrid/js/jquery.jqGrid.min.js" type="text/javascript"></script>
    <script src="/data-component/home/jqgridmodal.js"></script>
    <style>
        .onpage-help-modal-buttons > button{
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
        }
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
       <fieldset>
        <legend>작업확인창</legend>
           <input type="hidden" name="code">
        <label for="modal_work">작업구분</label>
        <input type="text" id="modal_work" name="reason_code" class="modal_work_get" value="">
        <label for="modal_grp_code">원인그룹코드</label>
        <input type="text" id="modal_grp_code" name="reason_grp_code" class="modal_work_get" value="">>
        <label for="modal_grp_name">원인그룹명</label>
        <input type="text" id="modal_grp_name" name="reason_name" class="modal_work_get" value="">>
       </fieldset>
   </div>
    <div class="modal-header">
        <div class="onpage-help-modal-buttons">
            <button onclick="addRow()"> + 줄 추가 </button>
            <button onclick="deleteRow()"> - 줄삭제 </button>
        </div>
        <table id="table_modal"></table>
    </div>
</div>
</body>
</html>



