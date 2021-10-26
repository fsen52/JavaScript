var showListe=[];

fetch("./tv-shows.json")
.then((cevap)=>cevap.json())
.then((data)=>{

showListe=data;

showIzle(showListe);






});

function showIzle(showListe){

var liste=document.querySelector(".liste");

showListe.forEach((a)=>{

liste.innerHTML= liste.innerHTML + `<div class="card col-md-3 m-2"> 
<img src=${a.show.image ? a.show.image.medium : ""} class="card-img-top" alt="">
<div class="card-body">
 <h5 class="card-title">${a.show.name}</h5>
 
 
 <a class= "btn btn-success" target="blank" href=${a.show.url}>Detaylar</a>
 <p> </p>
</div>
</div>`;


}




);


}
