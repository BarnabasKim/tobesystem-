<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>JQ그리드 게시판</title>
    // jqGrid 라이브러리 추가
    <link rel="stylesheet" type="text/css" media="screen" href="../resources/css/jquery-ui-1.10.4.custom.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="../resources/css/ui.jqgrid.css" />

    // jQuery js파일을 jqGrid js파일보다 상위에 선언해야 제대로 동작함
    <script src="/ui-component/jqGrid/js/jquery.jqGrid.min.js" type="text/javascript"></script>
    <script src="/ui-component/jqGrid/js/i18n/grid.locale-kr.js" type="text/javascript"></script>
    <script src="/ui-component/jquery.jqGrid-4.4.3/js/jquery.jqGrid.min.js" type="text/javascript"></script>

    <script type="text/javascript">

        function makeTable(id, araay){
            $("#jqGrid").jqGrid({
                datatype: "local",
                url: "home/jqgrid",
                height: 250,
                width: 630,
                colNames : ['회원번호','이름', '나이', '전화번호', '비고'],
                colModel : [
                    {name: 'user_no', index:'user_no',align: 'align'}
                    {name: 'user_name', index:'user_name',align: 'align'}
                    {name: 'user_age', index:'user_age',align: 'align'}
                    {name: 'user_tel', index:'user_tel',align: 'align'}
                    {name: 'user_remak', index:'user_remak',align: 'align'}
                ],
                caption: "JQGRID 게시판",
                pager: "#jqGrid",
                rowNum:5 ,

            });
        }

        for(var I in array) {
            $("#" +id).jpGrid('addRowData',i+1,array[i]);
        }

        makeTable('jqGrid', dataArray);

        var jsonString = JSON.stringify(array);
        var json = JSON.parse(jsonString);

    </script>
</head>
<body>

<div class="jqgrid_main">
    <table id="jqGrid">

    </table>

</div>


</body>
</html>
