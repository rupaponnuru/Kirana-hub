$(function (){
   
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/collectionapi/players' ,
      success: function(data) { 
           console.log('success',data);
           alert("success");
          } ,
      error: function() { alert("error"); }      
  
  }); 
  
  
       
      var data1 = { "name": "john7" };
       
       $.ajax({
          type: 'POST',
          url: 'http://localhost:3000/collectionapi/players' ,
          data: JSON.stringify(data1),
         // datatype: 'text',
          success: function(newData){
               alert("post success");
               },
          error: function(XMLHttpRequest, textStatus, errorThrown) {alert(XMLHttpRequest); alert(textStatus) ; console.log(errorThrown) ; },
         });
   
        
  

});
