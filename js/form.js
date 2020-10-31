var particles = Particles.init({
	selector: '.background',
  color: '#DA0463'
});

function passwordVerify(){
if(document.getElementById("password")===document.getElementById("conPassword"))
{
  console.log("Correct");
}
else
{
  console.log("incorrect");
}
}

