<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>

    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap4.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap-ui.css" />

    <script type="text/javascript" src="ui-component/jqGrid/js/jquery-1.11.0.min.js"></script>
    <script src="ui-component/jqGrid/js/i18n/grid.locale-kr.js" type="text/javascript"></script>
    <script src="ui-component/jqGrid/js/jquery.jqGrid.min.js" type="text/javascript"></script>
    <script src="/data-component/home/jqgridmodal.js"></script>

</head>
<body>
<div id="dialog1" class="modal__background1" title="수정화면">
    <div class="modal__box1">
        <table>
                <tr>
                    <td> 회원 번호 </td>
                    <td><input type="text" id="user_no2" size="55" class="modal_modify2"></td>
                </tr>
                <tr>
                    <td> 이름 </td>
                    <td><input type="text" id="name2" size="55" class="modal_modify2"></td>
                </tr>
                <tr>
                    <td> 나이 </td>
                    <td><input type="text" id="age2" size="55" class="modal_modify2"></td>
                </tr>
                <tr>
                    <td> 전화번호 </td>
                    <td><input type="text" id="number2" size="55" class="modal_modify2"></td>
                </tr>
                <tr>
                    <td> 비고 </td>
                    <td><input type="text" id="remark2"  size="55" class="modal_modify2"></td>
                </tr>
            </table>
    </div>
</div>

</body>
</html>
