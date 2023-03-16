<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="jqgridmodal.jsp"%>
<html>
<head>
    <title>JQ그리드 게시판</title>
<%--    // jqGrid 라이브러리 추가--%>

<%--    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid.css" />--%>
<%--    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap.css" />--%>
<%--    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap4.css" />--%>
<%--    <link rel="stylesheet" type="text/css" href="ui-component/jqGrid/css/ui.jqgrid-bootstrap-ui.css" />--%>

<%--    <script src="ui-component/assets/neon/js/jquery-ui/js/jquery-1.9.1.js"></script>--%>
<%--    <script src="ui-component/assets/neon/js/jquery-ui/js/jquery-ui-1.10.3.custom.js"></script>--%>
<%--    <script src="ui-component/jqGrid/js/i18n/grid.locale-kr.js" type="text/javascript"></script>--%>
<%--    <script src="ui-component/jqGrid/js/jquery.jqGrid.min.js" type="text/javascript"></script>--%>
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
    <script src="data-component/home/jqgrid.js"></script>
<%--    // jQuery js파일을 jqGrid js파일보다 상위에 선언해야 제대로 동작함--%>


</head>
<body>
<div style = "margin-top : 20px; margin-left : 15px; font-size : 12px;">
    <form name="search-form" autocomplete="off">
    <select name="keyword" class="form-control" style = "width : 10%; float : left;" id = "searchType">
    <option selected value="">검색 내용 선택하시오</option>
    <option value = "user_no">회원번호</option>
    <option value = "user_name">이름</option>
    <option value = "user_age">나이</option>
    <option value = "user_no_name">회원번호/이름</option>
    <option value = "user_no_age">회원번호/나이</option>
    <option value = "user_all">전체</option>
    </select>
    <input type ="text" class="form-control" placeholder="검색할 내용을 적으세요" name="type" value="" style = "width : 10%; float : left; margin-bottom : 50px; margin-left : 10px;">
    <input type="button" onclick="getSearchList()" class="btn btn-outline-primary mr-2" value="검색"></input>
    </form>
</div>
    <button id="check-button" type="button" onclick="check()">조회</button>
    <button id="post-button" type="button" onclick="modaload()">추가</button>
    <button id="delete-button" type="button" id="user_no" onclick="deleteValue1(); ">삭제</button>
    <button id="modify-button" type="button" onclick="modaload1(); ">수정</button>
    <div class="jqgrid_main">
    <table id="jqGrid">
        <div id="pager"></div>
    </table>
    </div>


</body>
</html>
