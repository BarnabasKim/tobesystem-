<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="project_manage_modal.jsp"%>
<html>
<head>
    <title>로케이션 관리</title>
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/jqgrid/4.6.0/css/ui.jqgrid.css" type="text/css" />
    <!-- The actual JQuery code -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.10.2.min.js" /></script>
    <!-- The JQuery UI code -->
    <script type="text/javascript" src="https://code.jquery.com/ui/1.10.3/jquery-ui.min.js" /></script>
    <!-- The jqGrid language file code-->
    <script type="text/javascript" src="//cdn.jsdelivr.net/jqgrid/4.6.0/i18n/grid.locale-kr.js" /></script>
    <!-- The atual jqGrid code -->
    <script type="text/javascript" src="//cdn.jsdelivr.net/jqgrid/4.6.0/jquery.jqGrid.src.js" /></script>



    <script src="data-component/home/manage.js"></script>
    <script src="data-component/home/manage2.js"></script>
</head>
<body>
<button id="check-button" type="button" onclick="check()">조회</button>
<button id="post-button" type="button" onclick="modaload()">추가</button>
<button id="delete-button" type="button">삭제</button>

<table id="jqGrid">
    <div id="pager"></div>
</table>

</body>
</html>
