const koordinatlar=[120,100,-100,220,330,-50];

let pozitifToplam=0;
let negatifToplam=0;


for(let i=0;i<koordinatlar.length;i++){

    koordinatlar[i]<0?negatifToplam+=koordinatlar[i]:pozitifToplam+=koordinatlar[i]
}

console.log(`Pozitif Elemanlar Toplamı : ${pozitifToplam} , Negatif Elemanlar Toplamı : ${negatifToplam}`);

//***************FOR IN********************************//


for (let i in koordinatlar){
koordinatlar[i]<0
? negatifToplam+=koordinatlar[i]
: pozitifToplam+=koordinatlar[i]

}

console.log(pozitifToplam, negatifToplam);

/* 
const hayvanlar=["aslan","fil","kartal","kanarya","aslan","aslan","timsah"];

const aranacak=prompt("Hangi hayvanı arayacaksın?");

let sayac=0;

for(let i in hayvanlar){
    if(hayvanlar[i]==aranacak){
        sayac++
    }
}

alert(sayac + "  tane bulundu");

 */


//**************FOR OF*******************************//

let arabalar=["BMW", "Volvo", "Mini"];

for(let i of arabalar){
    console.log(i);
}

//--------------FOR EACH----------------------------//

let ogrenciler=["Onur", "Hakan", "Furkan"];

ogrenciler.forEach((deger,index,dizi) => {
    console.log(index+ " " + deger) 
    
});


//-------------MAP METODU---------------------------//

const rakamlar=[3,5,3,2,6,7,9];

console.log(rakamlar.map(x=>x*3));
console.log(rakamlar.map((x,index)=>(index+1) +". eleman " + x +" tür."));

