let kilometer = parseInt (prompt ('Quanti km deve percorrere?'));
let myOld = parseInt (prompt ('inserisca la sua età'));
let priceKm = kilometer * 0.21;
console.log(priceKm)

if(myOld < 18){
    let priceUnderage = priceKm - (priceKm * 20 / 100);
    console.log(priceUnderage)
}

else if(myOld > 65){
    let priceSenior = priceKm - (priceKm * 40 / 100);
    console.log (priceSenior)
}

