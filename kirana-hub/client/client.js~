$(document).ready(function(){
$('#rform').submit(function(e)
{
      
     //var data1 = $.param($(this).serializeArray());
     //var data_ret="";
	// alert(data1);
     //var data2=JSON.stringify(data1);
     
   //  var  data2='{"name":"John"}';

  //   alert(data2);
     /*$.get("http://localhost:3000/collectionapi/players", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });*/
/*	$.post("http://localhost:3000/collectionapi/players",
    {
        name: "Donald Duck",
         },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
	});*/
     $.ajax({
        url: 'http://localhost:3000/collectionapi/players',
        method: 'GET',
        dataType: 'jsonp',
        crossDomain : true,
        
//	data: data,
        contentType: "application/json; charset=utf-8",
        success: function(data) {  data = JSON.parse(data);
              return alert("succeess"); 
               },
        error: function(XMLHttpRequest, textStatus, errorThrown) {alert(XMLHttpRequest); alert(textStatus) ; console.log(errorThrown) ; },
        }); 
     e.preventDefault();
      
});
});
