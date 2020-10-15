var particles = Particles.init({
	selector: '.background',
  color: '#DA0463'
});

function passwordverify(){
var pass=document.getElementById("password");
var conpass=document.getElementById("conPassword");
if(pass===conpass)
{
  console.log("Correct");
}
else
{
  console.log("incorrect");
}
}

