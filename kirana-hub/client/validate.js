function valid()
{
  var data = { firstname : document.getElementById("uname").value,
               password: document.getElementById("pw").value
             } ;
    alert(JSON.stringify(data));   
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
