
 var flag=1;
function passDisplay(){
    if(flag)
    {
        const passField=document.querySelector('#password');
        passField.setAttribute('type','text');
        document.querySelector('#iconeye').style.color= "green";
        flag=0;
    }
    else
    {
        const passField=document.querySelector('#password');
        passField.setAttribute('type','password');
        document.querySelector('#iconeye').style.color= "black";
        flag=1;
    }

}