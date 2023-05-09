<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="project_mng_partModal.jsp"%>
<%@include file="project_mini_supp_modal.jsp"%>
<html>
<head>
    <title>Title</title>
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



  <script src="data-component/part/manage_partMain.js"></script>
</head>

<body>
<div style = "margin-top : 20px; margin-left : 15px; font-size : 12px;">
  <form method="post" name="search" autocomplete="off">
    <select name="search_part" id="search_part" class=form-control" style = "width : 10%; float : left;">

    </select>
  </form>
</div>
<div>
  <button id="check-button" type="button" onclick="check_part()">조회</button>
  <button id="post-button" type="button" onclick="part_modaload()">추가</button>
  <button id="delete-button" type="button" onclick="Delete_Part_Data(); ">삭제</button>
</div>

<div id="div_background">
  <input type="text" name="search_Parts" id=search_Parts placeholder ="검색어 입력">
  <button id="search_button" type="submit" onclick="search_part()">검색</button>
</div>


<table id="jqGrid">
  <div id="pager"></div>
</table>

</body>
</html>
