<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="home_modal.jsp"%>
<%--<%@ page session="false" %>--%>
<%--<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>--%>
<%--<script src="/ui-component/assets/js/jquery-ui.min.js"></script>--%>
<script src="/ui-component/assets/neon/js/jquery-ui/js/jquery-1.9.1.js"></script>
<script src="/ui-component/assets/neon/js/jquery-ui/js/jquery-ui-1.10.3.custom.js"></script>

<script src="/data-component/home/home.js"></script>

<!DOCTYPE html>
<head>
    <style>
       .layout input {
            width: 100%;
            box-sizing: border-box;
        }
        button {
            background-color: #F9B514;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
        }

    </style>
    <meta charset="UTF-8">

    <title>투비시스템 게시판 웹 사이트</title>
</head>

<html >
    <body>
    <button id="check-button" type="button" onclick="check()">조회</button>
    <table border="1"
           width="50%"
           height="100"
           cellspacing="5">
        <thead>
            <tr align="center" bgcolor="blue">
                <th></th>
                <th>회원번호</th>
                <th>이름</th>
                <th>나이</th>
                <th>전화번호</th>
                <th>비고</th>
            </tr>
          <tbody>
            <div class="layout">
               <form action="/board/writepro" method="post">
                <tr>
                    <td><input type="checkbox" name="checkedbox" style="display: flex"></td>
                    <td><input name="userno" type="text" class="board_modify" style="border: 0px"></td>
                    <td><input name="name" type="text" class="board_modify" style="border: 0px"></td>
                    <td><input name="age" type="text" class="board_modify" style="border: 0px"></td>
                    <td><input name="tel" type="text" class="board_modify" style="border: 0px"></td>
                    <td><input name="empty" type="text" class="board_modify" style="border: 0px"></td>
                    <button type="submit">추가</button>
                </tr>
               </form>
            </div>

               <c:forEach items="${viewAll}" var="list">
                <tr>
                    <td><input type="checkbox"style="display: flex" value="${list.user_no}" onclick="deleteValue(this.value); ">삭제</td>
                    <td><a href="javascript:void(0)"; onclick="update(this);">${list.user_no}</a></td>
                    <td>${list.name}</td>
                    <td>${list.age}</td>
                    <td>${list.number}</td>
                    <td>${list.remark}</td>
                </tr>
                </c:forEach>

        <tbody>
        </thead>

    </table>

    </body>


</html>

