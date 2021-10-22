const yaslar = [5,10,28,42];

const isimler=["Furkan","Ali","Hakan","Davud",20,40,true,23.5,yaslar,"Ayse"];

console.log(isimler[3]);


//DİZİYİ DEĞİŞTİREN METOTLAR

let meyveler=["Elma","Armut","Muz","Kivi"];

const baslik = document.querySelector(".baslik");


//console.log(meyveler.pop());

baslik.textContent=meyveler

//pop() en son elemanı siler ve yazdırır

//shift() ilk elemanı siler ve yazdırır

//push() dizinin sonuna eleman ekler

//unshift() dizinin başına eleman ekler

meyveler.splice(3)

console.log(meyveler);


const sayilar = [3,4,5,2,"2","üc","bes",5,2];


console.log(sayilar.includes(2));

console.log(sayilar.indexOf("bes"));

console.log(sayilar.lastIndexOf(5));

console.log(sayilar.indexOf(5, 4));  //4. den itibaren araştırır


console.log(sayilar.join("-"));

const arabalar=["bmw","mercedes","Volvo","Sahin","Anadol"];

console.log(arabalar);

console.log(arabalar.slice(2));

console.log(arabalar.slice(1,3));

const birlesik = arabalar.concat(sayilar,isimler,[[3,4],5]);

console.log(birlesik);
