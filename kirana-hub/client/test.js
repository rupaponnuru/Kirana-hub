
function test()
{


     var  data2= {"name":"John"} ;
     var req = new XMLHttpRequest();
     var url = "http://localhost:3000/collectionapi/players";
     
        
     
     
     req.open("POST", url, true);
     req.setRequestHeader("Content-Type",
                     "application/json");
     req.send(data2);
     
     
 
     
     
 }
 
 

