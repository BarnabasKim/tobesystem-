<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<script src="/data-component/home/home_modal.js"></script>
<html>
<head>
    <title>Title</title>
    <style>
     table {
         width: 100%;
     }
     .modal__background{
         position: fixed;
         top:0; left: 0; bottom: 0; right: 0;
         background: rgba(0, 0, 0, 0.8);
     }
     .modal__box{
         position: absolute;
         top: calc(75vh - 100px); left: calc(50vw - 200px);
         background-color: white;
         display: flex; justify-content: center;
         align-items: center;
         border-radius: 10px;
         width: 400px;
         height: 200px
     }

    </style>
</head>
<body>
<div id="dialog" class="modal__background" title="수정화면">


        <div class="modal__box">
        <form>
        <table>
            <tr>
            <td> 회원 번호 </td>
            <td><input type="text" id="user_no" name ="user_no" class="modal_modify" size="55"></td>
            </tr>
            <tr>
            <td> 이름 </td>
            <td><input type="text" id="user_name" name ="name" class="modal_modify" size="55"></td>
            </tr>
            <tr>
            <td> 나이 </td>
            <td><input type="text" id="user_age" name="age" class="modal_modify" size="55"></td>
            </tr>
            <tr>
            <td> 전화번호 </td>
            <td><input type="text" id="user_tel" name="number" class="modal_modify" size="55"></td>
            </tr>
            <tr>
            <td> 비고 </td>
            <td><input type="text" id="user_empty" name="remark" class="modal_modify" size="55"></td>
            </tr>
        </table>
         </form>

        </div>
</div>
</body>
</html>
