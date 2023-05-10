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
    <style>
        #div_background {
            height: 40px;
            border: 1px solid #1b5ac2;
            background: #FFFFFF;
            margin: 20px auto; /* 가운데로 위치시키기 위해 margin 속성 추가 */
            text-align: center; /* 버튼 가운데 정렬을 위해 text-align 속성 추가 */
            display: flex; /* 간격을 주기 위해 display 속성을 flex로 설정 */
            justify-content: space-between; /* 각 요소를 최대한 늘리고 간격을 벌리기 위해 justify-content 속성을 space-between으로 설정 */
            align-items: center; /* 세로 정렬을 위해 align-items 속성 추가 */
            padding: 10px; /* 간격 조정을 위해 padding 속성 추가 */
        }

        #search_supp{
            font-size : 16px;
            width: 300px;
            padding: 10px;
            border: 0px;
            outline: none;
            /*float: left;*/
        }
        button{
            width: 100px;
            height: 50px;
            border: 0px;
            background: #1b5ac2;
            outline: none;
            /*float: right;*/
            color: #FFFFFF;

        }


        /* JQGRID 테이블 간격을 주기 위해 margin 속성 추가 */
        #jqGrid {
            margin: 20px auto;
        }
    </style>

</head>
<body>
<div style = "margin-top : 20px; margin-left : 15px; font-size : 12px;">
    <form method="post" name="search" autocomplete="off">
        <select name="search_things" id="search_things" class=form-control" style = "width : 10%; float : left;">

        </select>
    </form>
</div>

<div id="button_location">
    <button id="check-button" type="button" onclick="check_supp()">조회</button>
    <button id="post-button" type="button" onclick="supp_modaload()">추가</button>
    <button id="delete-button" type="button" onclick="Delete_Supp_Data(); ">삭제</button>
</div>

<div id="div_background">
    <input type="text" name="search_supp" id=search_supp placeholder ="검색어 입력" onkeypress="search_supp(event)">
    <button id="search_button" type="submit" onclick="search_supp()">검색</button>
</div>


<table id="jqGrid">
    <div id="pager"></div>
</table>
</body>
</html>
