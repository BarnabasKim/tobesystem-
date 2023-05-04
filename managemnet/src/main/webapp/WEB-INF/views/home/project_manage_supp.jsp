<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="project_mng_supp_modal.jsp"%>
<html>
<head>
    <title>업체 관리</title>
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


    <script src="data-component/home/manage_supp.js"></script>
</head>
<body>
<div style = "margin-top : 20px; margin-left : 15px; font-size : 12px;">
    <form method="post" name="search" autocomplete="off">
        <select name="search_things" id="search_things" class=form-control" style = "width : 10%; float : left;">

        </select>
    </form>
</div>
<div>
<button id="check-button" type="button" onclick="check_supp()">조회</button>
<button id="post-button" type="button" onclick="supp_modaload()">추가</button>
<button id="delete-button" type="button" onclick="Delete_Supp_Data(); ">삭제</button>
</div>


<table id="jqGrid">
    <div id="pager"></div>
</table>
</body>
</html>
