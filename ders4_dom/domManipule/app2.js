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