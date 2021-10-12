let resim = document.querySelector(".res1");
let ses = document.querySelector(".ses");
document.querySelector(".on").onclick=function(){
    resim.src="img.gif"
    ses.play();
    
}

document.querySelector(".off").onclick = function(){

    resim.src="telbağla.gif"
    ses.pause();

}

document.querySelector(".speak").onclick=function(){
    resim.src="telfırlat.gif"

}
 const sondiv = document.querySelector(".input-div");
// const h1 = document.createElement("h1");
// const yazi = document.createTextNode("Programlama Dilleri");
// h1.appendChild(yazi);
// sondiv.after(h1);
 sondiv.innerHTML = sondiv.innerHTML + `<h1>Programlama Dilleri</h1>`; 
 
 const liste = document.querySelector(".liste");
 const giris = document.querySelector(".dil");

document.querySelector(".ekle").onclick = function(){

const newli = document.createElement("li");
const newtext = document.createTextNode(giris.value);

newli.appendChild(newtext);
liste.appendChild(newli);

giris.value="";

}

// const liste = document.querySelector(".liste");

// document.querySelector(".ekle").onclick = function() {

// const giris = document.querySelector(".dil");

// liste.innerHTML = liste.innerHTML + `<li>${giris.value}</li>`;

// giris.value="";

// }

document.querySelector(".sil").onclick = function(){

    liste.removeChild(liste.lastChild);
}

document.querySelector(".textbox").onkeyup=function(){

const checkbox = document.querySelector(".checkbox");
const textbox= document.querySelector(".textbox");

if(checkbox.checked==true) {

    textbox.value=textbox.value.toUpperCase();

}else{
    textbox.value=textbox.value.toLowerCase();

}

};

document.querySelector(".dil").onkeydown = function(olay){

if(olay.keyCode==13){
    document.querySelector(".ekle").onclick();
}else if(olay.keyCode==46){
    document.querySelector(".sil").onclick();
}

}
