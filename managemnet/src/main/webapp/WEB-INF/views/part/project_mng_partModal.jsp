<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2023-05-08
  Time: 오전 11:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid.css" />
<link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap.css" />
<link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap4.css" />
<link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap-ui.css" />

<script type="text/javascript" src="ui-component/jqGrid/js/jquery-1.11.0.min.js"></script>
<script src="/ui-component/jqGrid/js/i18n/grid.locale-kr.js" type="text/javascript"></script>
<script src="/ui-component/jqGrid/js/jquery.jqGrid.min.js" type="text/javascript"></script>


<script src="data-component/part/manage_part_modal.js"></script>
<script src="data-component/part/part_mini.js"></script>

<body>
<div id="dialog1">
    <div class="modal__background">
        <div class="modal__box">
            <table border="1px solid black" id="modal_part_data">
                <tr>
                    <td><label for="part_code">품번</label></td>
                    <td><input type="text" id="part_code" name = "part_code" class="modal_work_getP"></td>
                </tr>
                <tr>
                    <td><label for="part_name">품명</label></td>
                    <td><input type="text" id="part_name" name = "part_name" class="modal_work_getP"></td>
                </tr>
                <tr>

                    <td><label for="model_code">기종</label></td>
                    <td>
                        <select id="model_code" name="model_code" class="modal_work_getP"></select>
                    </td>

                </tr>
                <tr>
                    <td><label for="supp_name">업체</label></td>
                    <td><input type="text" id="supp_name" name = "supp_name" class="modal_work_getP" onclick="supp_type_open()"></td>
                </tr>
                <tr>
                    <td><label for="use_yn">사용유무</label></td>
                    <td>
                        <select name="use_yn" id="use_yn" class="modal_work_getP" >
                        <option value="Y">Y</option>
                        <option value="N">N</option>
                        </select>
                    </td>

                </tr>
                <tr>
                    <td><label hidden for="supp_code">업체코드</label></td>
                    <td><input type="hidden" id="supp_code" name = "supp_code" class="modal_work_getP"></td>
                </tr>
            </table>
        </div>
    </div>
</div>

</body>
</html>
