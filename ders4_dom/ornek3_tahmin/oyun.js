let rastgele = Math.floor(Math.random() * 20 + 1);

let skorPc = 10;
let rekorPc = 0;


document.querySelector(".kontrol").onclick = function () {

    const tahmin = document.querySelector(".tahmin").value;

    if (tahmin == rastgele) {

        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".question").textContent = rastgele;
        document.querySelector(".mesaj").textContent="Tebrikler Bildiniz "; 

        if (skorPc > rekorPc){
            rekorPc = skorPc;
            document.querySelector(".rekorskor").textContent=skorPc;
        }

    }

    else{

        if(skorPc>1){
            skorPc--;
            let mesaj = document.querySelector(".mesaj");
            tahmin < rastgele ? (mesaj.textContent="Arttır 👆"):(mesaj.textContent="Azalt 👇");
            document.querySelector(".skor").textContent=skorPc;
        }else{
            skorPc--;
            
            document.querySelector(".mesaj").textContent="Oyunu Kaybettiniz !!! 😔";
            document.querySelector(".skor").textContent=0;
            document.querySelector("body").style.backgroundColor = "red";
        }

    }

    document.querySelector(".tekrar").onclick=()=>{
        rastgele = Math.floor(Math.random() * 20 + 1);
        document.querySelector("body").style.backgroundColor="#2d3436";
        document.querySelector(".question").textContent="?";
        document.querySelector(".mesaj").textContent="Tahmine Başlanıyor !";
        skorPc=10;
        document.querySelector(".skor").textContent=skorPc;
        document.querySelector(".tahmin").value=" ";

    }

    document.querySelector(".tahmin").onkeydown=function(olay){
        if(olay.keyCode==13){
            document.querySelector(".kontrol").onclick();
        }if(olay.keyCode==82){
            document.querySelector(".tekrar").onclick();
        }
    }


}
    