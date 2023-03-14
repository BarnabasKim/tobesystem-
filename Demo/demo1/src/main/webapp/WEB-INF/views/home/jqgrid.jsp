<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="jqgridmodal.jsp"%>
<html>
<head>
    <title>JQ그리드 게시판</title>
<%--    // jqGrid 라이브러리 추가--%>

    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap4.css" />
    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap-ui.css" />

    <script src="/ui-component/assets/neon/js/jquery-ui/js/jquery-1.9.1.js"></script>
    <script src="/ui-component/assets/neon/js/jquery-ui/js/jquery-ui-1.10.3.custom.js"></script>
    <script src="ui-component/jqGrid/js/i18n/grid.locale-kr.js" type="text/javascript"></script>
    <script src="ui-component/jqGrid/js/jquery.jqGrid.min.js" type="text/javascript"></script>
    <script src="/data-component/home/jqgrid.js"></script>
<%--    // jQuery js파일을 jqGrid js파일보다 상위에 선언해야 제대로 동작함--%>


</head>
<body>
<button id="check-button" type="button" onclick="check()">조회</button>
<button id="post-button" type="button" onclick="modaload()">추가</button>
<button id="delete-button" type="button" id="user_no" onclick="deleteValue1(); ">삭제</button>
<button id="modify-button" type="button" onclick="modifyValue(); ">수정</button>
<div class="jqgrid_main">
    <table id="jqGrid">
        <div id="pager"></div>
    </table>
</div>


</body>
</html>
