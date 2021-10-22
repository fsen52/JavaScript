const koordinatlar=[120,100,-100,220,330,-50];

let pozitifToplam=0;
let negatifToplam=0;


for(let i=0;i<koordinatlar.length;i++){

    koordinatlar[i]<0?negatifToplam+=koordinatlar[i]:pozitifToplam+=koordinatlar[i]
}

console.log(`Pozitif Elemanlar Toplamı : ${pozitifToplam} , Negatif Elemanlar Toplamı : ${negatifToplam}`);