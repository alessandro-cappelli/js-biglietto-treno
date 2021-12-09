let kilometer = parseInt (prompt ('Quanti km deve percorrere?'));
let myOld = parseInt (prompt ('inserisca la sua età'));
let priceKm = kilometer * 0.21;

console.log(priceKm)

if(myOld < 18){
    priceUnderage = priceKm - (priceKm * 20 / 100);
    messaggio = "Prezzo biglietto con sconto del 20%: "+ priceUnderage.toFixed(2) +" Euro";
    console.log(priceUnderage);
}

else if(myOld > 65){
    priceSenior = priceKm - (priceKm * 40 / 100);
    messaggio = "Prezzo biglietto con sconto del 40% : "+ priceSenior.toFixed(2) +" Euro";
    console.log (priceSenior);
}

else{
    messaggio = "Prezzo biglietto: "+priceKm+" Euro";
}

document.writeln(messaggio);
