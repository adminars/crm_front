$(document).ready(function(){
    $("#submit").click(function(){
        //alert($("#extention").val());
        //alert($("#username").val());
        //alert($("#password").val());
        if($("#extention").val().trim() == "") {
          $("#extention_err").html("extention を入力してください。");
          return;    
        } else {
          $("#extention_err").html("");  
        }
        if($("#username").val().trim() == "") {
          $("#username_err").html("username を入力してください。");
          return;    
        } else {
            $("#username_err").html("");
        }
        if($("#password").val().trim() == "") {
          $("#password_err").html("password を入力してください。");
          return;    
        } else {
            $("#password_err").html("");
        }
        
        $.ajax({
          url: 'https://kurapitalcrmwebhook.tk/api/v1/auth/login',
          type: 'post',
          headers: {
            contentType: 'application/json'
          },
          data: {
              extention: $("#extention").val(),
              username:$("#username").val(),
              password:$("#password").val()
          },
          dataType: 'json'
        }).done(function( data1, textStatus, jqXHR ) {
            //var jsondata = JSON.parse(data1);
            //console.log(jsondata.data);
            console.log(data1);
            if(data1.success) {
                localStorage.setItem("attendance_managed", data1.data.attendance_managed);
                localStorage.setItem("chatwork_id", data1.data.chatwork_id);
                localStorage.setItem("email", data1.data.email);
                localStorage.setItem("familyname", data1.data.familyname);
                localStorage.setItem("firstname", data1.data.firstname);
                localStorage.setItem("group_id", data1.data.group_id);
                localStorage.setItem("id", data1.data.id);
                localStorage.setItem("modified", data1.data.modified);
                localStorage.setItem("password", data1.data.password);
                localStorage.setItem("phone", data1.data.phone);
                localStorage.setItem("username", data1.data.username);
                
                localStorage.setItem("token", data1.token);
            } else {
                alert("false");
                console.log(data1);
            }
          //成功
        }).fail(function( jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
          //失敗
        }).always(function( jqXHR, textStatus) {
          //通信完了
            console.log(textStatus);
        });    
    });
});
