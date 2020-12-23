localStorage.setItem("passCheck",0);
function passwordVerify()
{
    if(document.getElementById('password').value==document.getElementById('conPassword').value)
    {
        localStorage.setItem("passCheck",1);
        document.querySelector('.chekPass').textContent=" Confirmed";
    }
    else
    {
        document.querySelector('.chekPass').textContent=" Password Doesn't Match!";
    }
}
function createAcct(){
    if(localStorage.getItem("passCheck")==0 )
    {
        alert("Not Filled Correctly! ");
    }
    else
    {
        var user=document.getElementById("username").value;
        var pass=document.getElementById("password").value;
        localStorage.setItem('username2',user);
        localStorage.setItem('password2',pass);
        localStorage.setItem('flag',2);
        alert("Thank You For Creating An Account! ");
        window.open('/TechNoJitsu.html','_self');  

    }
   
}