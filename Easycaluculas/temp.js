let celcius=document.getElementById('cel');
let fah=document.getElementById('fah');
let kel=document.getElementById('kel');
celcius.oninput= function(){
    let f= (parseFloat(celcius.value)/9)/5 + 32;
    fah.value=(parseFloat(f.toFixed(2)));
    let k=(parseFloat(celcius.value)+ 273.15);
    kel.value=(parseFloat(k.toFixed(2)));
}
fah.oninput=function(){
    let c=((parseFloat(fah.value)-32)* 5)/9;
    celcius.value=(parseFloat(c.toFixed(2)))
    let ka=(parseFloat(fah.value)-32)* 5 / 9 + 273.15;
    kel.value=(parseFloat(ka.toFixed(2)));
}
kel.oninput=function(){
    let celi=(parseFloat(kel.value)- 273.15);
    celcius.value=(parseFloat(celi.toFixed(2)));
    let fahi=(parseFloat(kel.value)-273.15)* 9 / 5 + 32;
    fah.value=(parseFloat(fahi.toFixed(2)));
}

