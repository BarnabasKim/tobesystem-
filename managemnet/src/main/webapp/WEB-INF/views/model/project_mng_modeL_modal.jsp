
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>모델 추가 관리 게시판</title>

    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap4.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap-ui.css" />

    <script type="text/javascript" src="ui-component/jqGrid/js/jquery-1.11.0.min.js"></script>
    <script src="/ui-component/jqGrid/js/i18n/grid.locale-kr.js" type="text/javascript"></script>
    <script src="/ui-component/jqGrid/js/jquery.jqGrid.min.js" type="text/javascript"></script>


    <script src="data-component/model/manage_model2.js"></script>

</head>
<body>

<div id="dialog1" style="display: none">
    <div class="modal__background">
        <div class="modal__box">
            <table border="1px solid black" id="modal_modeldata">
                <tr>
                    <td><label for="model_code">기종코드</label></td>
                    <td><input type="text" id="model_code" name = "model_code" class="modal_work_getM"></td>
                </tr>
                <tr>
                    <td><label for="model_name">기종명</label></td>
                    <td><input type="text" id="model_name" name = "model_name" class="modal_work_getM"></td>
                </tr>
            </table>
        </div>
    </div>
</div>


</body>
</html>
