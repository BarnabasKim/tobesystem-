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


    <script src="data-component/home/manage_supp2.js"></script>
</head>
<body>
<div id="dialog1" class="modal_background" title="모달화면">

    <table id="modalsuppdata">
        <tr>
            <td>업체코드</td>
            <td><input type="text" id="supp_code" name ="supp_code" class="modal_work_get" size="55"></td>
        </tr>
        <tr>
            <td>대표</td>
            <td><input type="text" id="ceo" name ="ceo" class="modal_work_get" size="55"></td>
        </tr>
        <tr>
            <td>사업자번호</td>
            <td><input type="text" id="buss_number" name="buss_number" class="modal_work_get" size="55"></td>
        </tr>
        <tr>
            <td>전화번호</td>
            <td><input type="text" id="user_number" name="user_number" class="modal_work_get" size="55"></td>
        </tr>
        <tr>
            <td>담당자</td>
            <td><input type="text" id="emp_name" name="emp_name" class="modal_work_get" size="55"></td>
        </tr>
        <tr>
            <td>업체명</td>
            <td><input type="text" id="supp_name" name="supp_name" class="modal_work_get" size="55"></td>
        </tr>
        <tr>
            <td>업태</td>
            <td><input type="text" id="buss_type" name="buss_type" class="modal_work_get" size="55"></td>
        </tr>
        <tr>
            <td>종목</td>
            <td><input type="text" id="stock_type" name="stock_type" class="modal_work_get" size="55"></td>
        </tr>
        <tr>
            <td>팩스번호</td>
            <td><input type="text" id="fax_number" name="fax_number" class="modal_work_get" size="55"></td>
        </tr>
        <tr>
            <td>로케이션</td>
            <td>
                <form method="post" name="search" autocomplete="off">
                <select id="loc_code" name="loc_code" class="modal_work_get">
                </select>
                </form>
            </td>
        </tr>
        <tr>
    </table>

</div>

</body>
</html>
