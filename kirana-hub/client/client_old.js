$(document).ready(function(){
$('#rform').submit(function(e)
{
      
     //var data1 = $.param($(this).serializeArray());
     //var data_ret="";
	// alert(data1);
     //var data2=JSON.stringify(data1);
     
     var  data2= {"name":"John"} ;
     var req = createRequest();
     url = "http://localhost:3000/collectionapi/players";
     req.open("GET", url, true);
     req.send();

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
    /* $.ajax({
        url: 'http://localhost:3000/collectionapi/players',
        method: 'POST',
        dataType: 'jsonp',
        async: true ,  
        crossDomain : true,
        headers: { 'Access-Control-Allow-Headers': 'true' },
	data: JSON.stringify(data2),
      //  contentType: "application/json; charset=utf-8",
        success: function(data) { // data1 = $.parseJSON(data);
               alert("succeess"); 
               },
                
        }); */
     e.preventDefault();
      
});
});
