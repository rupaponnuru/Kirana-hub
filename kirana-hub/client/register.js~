/* $(function()
{
   var $fname = $('#fname');
   var $lname = $('#lname');
   var $pwd = $('#pwd');
   var $email = $('#email');
  $('#action').on('click',function(){
    
     var user = { 
                  "Firstname" : $fname.val(),
                  "Lastname" : $lname.val(),
                  "Password" : $pwd.val(),
                  "Email": $email.val()     
                };  
          $.ajax({
          type: 'POST',
          url: 'http://localhost:3000/collectionapi/user_details' ,
          data: JSON.stringify(user),
          success: function(newData){
               alert("success");
               },
          error: function(XMLHttpRequest, textStatus, errorThrown) {alert(XMLHttpRequest); alert(textStatus) ; console.log(errorThrown) ; },
         });
  });
}); */

function addUser(data)
{
 
    $.ajax({
          type: 'POST',
          url: 'http://localhost:3000/collectionapi/user_details' ,
          data: JSON.stringify(data),
          success: function(newData){
               alert("success");
               },
          error: function(XMLHttpRequest, textStatus, errorThrown) {alert(XMLHttpRequest); alert(textStatus) ; console.log(errorThrown) ; },
         });
} 



