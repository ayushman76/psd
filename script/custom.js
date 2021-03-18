
var nav = document.querySelector('nav');
nav.classList.add('dis');
function my_menu(){
	
	var nav = document.querySelector('nav');
	if(nav.style.display === "none"){
		nav.classList.remove('dis');
		nav.style.display= "block";
	}else{
		nav.style.display = "none";
	}
	
}