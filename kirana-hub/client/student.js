//document.write('<scr'+'ipt type="text/javascript" src="register.js"></scr'+'ipt>');
var js = document.createElement("script");
js.src = 'register.js';
js.type="text/javascript";
document.getElementsByTagName("head")[0].appendChild(js);


function register()
{
       var user_details = { firstname : document.getElementById("fname").value,
                         lastname  : document.getElementById("lname").value,
                         password  : document.getElementById("pwd").value,
                         email    : document.getElementById("email").value
                       } ;
        addUser(user_details);
        
}
