const init=function()
{
    let flag=localStorage.getItem('flag');
    if(flag==1 || flag==2)
    {
        const link=document.querySelector(".LoGup");
        link.removeAttribute('href');
        const link2=document.querySelector(".LoGin");
        link2.removeAttribute('href');
        link2.setAttribute('href','../../#');
       
    }
    if(flag==1)
    {
        document.querySelector('.LoGup').textContent="Ajith";
        document.querySelector('.LoGin').textContent="Signout";
    }
    if(flag==2)
    {
        document.querySelector('.LoGup').textContent= localStorage.getItem('username2');
        document.querySelector('.LoGin').textContent="Signout";
    }
    
}
function checkPassword()
{
    if(document.getElementById("name").value == localStorage.getItem('username1') && document.getElementById("password").value == localStorage.getItem('password1'))
  {
    localStorage.setItem('flag',1);
    alert("Login was Successful, Welcome Back!");
    window.open('/TechNoJitsu.html');    
  }
  else
  if(document.getElementById("name").value == localStorage.getItem('username2') && document.getElementById("password").value == localStorage.getItem('password2'))
  {
    localStorage.setItem('flag',2);
    alert("Login was Successful, Welcome Back!");
    window.open('/TechNoJitsu.html');  
  }
  else
  {
      alert("Login was Unsuccessful, please check your username and password");
  }
}

function logCheck()
{
    let flag=localStorage.getItem('flag');
    if(flag==1 || flag==2)
    {
        const link2=document.querySelector(".LoGin");
        link2.setAttribute('href','/html/FORMS/sign_In.html');

        const flag2=confirm("Do you Wish to log out?");
        if(flag2==false)
        {
            link2.setAttribute('href','/TechNoJitsu.html');
        }
        if(flag2==true)
        { 
            localStorage.setItem('flag',0);
            window.open('/html/FORMS/sign_In.html','_self');
            
        }
        else
        {
            window.open('/TechNoJitsu.html','_self');  
        }
    }
}

document.addEventListener('DOMContentLoaded',function(){init();});
