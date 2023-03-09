<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>JQ그리드 게시판</title>
    // jqGrid 라이브러리 추가
    <link rel="stylesheet" type="text/css" media="screen" href="../resources/css/jquery-ui-1.10.4.custom.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="../resources/css/ui.jqgrid.css" />

    // jQuery js파일을 jqGrid js파일보다 상위에 선언해야 제대로 동작함
    <script src="../resources/js/jquery-1.11.0.min.js" type="text/javascript"></script>
    <script src="../resources/js/i18n/grid.locale-kr.js" type="text/javascript"></script>
    <script src="../resources/js/jquery.jqGrid.min.js" type="text/javascript"></script>

    <script type="text/java"></script>
</head>
<body>

<div class="jqgrid_main">
    <table id="jqGrid">
        <div id="jpGridPager"></div>
    </table>

</div>


</body>
</html>
