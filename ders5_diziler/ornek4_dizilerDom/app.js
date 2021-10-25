const maaslar = [4000, 5000, 3500, 4200, 2850, 5000, 7500];

const liste = document.querySelector(".liste-ul");

/* for (let i in maaslar){
    liste.innerHTML+=`<li>${maaslar[i]}</li>`
}
         */

for (let i of maaslar) {
    liste.innerHTML+="<li>" + i +"</li>";
}

const giris = document.querySelector(".liste");

document.querySelector(".ekle").onclick=function(){

    liste.innerHTML+="<li>"+giris.value+"</li>"
   

    maaslar.push(giris.valueAsNumber);

    giris.value="";
    
   // aciklamaGuncelle(maaslar);

};


document.querySelector(".sil").onclick=function(){

    if(maaslar.length==0){

        alert("Silinecek ne kaldı!!!");

    }else{
        liste.removeChild(liste.lastElementChild);
        maaslar.pop();

    
    }
   // aciklamaGuncelle(maaslar);

}

const aciklamaGuncelle = function(maaslar){

    document.querySelector(".aciklama").innerHTML="Maaşlar : " + maaslar;
}

