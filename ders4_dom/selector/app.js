const paragraf = document.getElementById("par1").style;

paragraf.backgroundColor="red";
paragraf.color="yellow";
paragraf.fontSize="15px";

paragraf.backgroundColor="gray"
paragraf.height="20px"

const buton = document.getElementById("btn");
buton.style.width="100px"
buton.style.color="red"
buton.style.fontSize="25px"
buton.textContent="Bas ve Ara"
//buton.innerHTML="<li></li>"

const resim = document.getElementsByTagName("img");

resim[0].style.width="300px";
resim[0].style.height="300px";
resim[1].style.border="3px solid red"

document.querySelector("title").textContent=" ne nedir"


const h1 = document.querySelector("h1");

h1.onmouseover = function(){


h1.style.color="red";
h1.style.backgroundColor="gray"


}
h1.onmouseout = function(){

    h1.style.color="white"
    h1.style.backgroundColor="purple"


}

document.querySelector(".res1").onclick = function(){
document.querySelector(".res1").src="logo2.png"
document.querySelector(".res2").src="js_logo.png"

}