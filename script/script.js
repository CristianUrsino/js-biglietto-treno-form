// let testo = document.getElementById("testo");
// let km = parseInt(prompt('inserire km da percorrere: '));
// let eta = parseInt(prompt('inserire età: '));
// let flag = true;

// if(isNaN(km) || isNaN(eta) || km <=0 || eta < 0 || eta > 130 || km > 22000){
//     testo.innerHTML = "INSERIRE VALORE VALIDO (NUMERI INTERI POSITIVI)";
//     flag=false;
//     setTimeout(function() {
//         location.reload();
//     }, 2000);
// }

// let totale = km*0.21;

// if(eta < 18) totale *= 0.8;
// else if(eta > 65) totale *= 0.6;

// if(flag) testo.innerHTML = "PREZZO CALCOLATO: " + totale.toFixed(2) + "€";

const genera = document.querySelector('.btn.border-warning');
const annulla = document.querySelector('.btn.border-secondary');
const ticketType = ["standard","extra", "premium"];

genera.addEventListener('click', function(){
    const name = document.getElementById('name').value;
    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;
    
    if(name === '' || km === '') {
        document.getElementById('error').innerHTML = `
        <h3>
            ERRORE, INSERIRE TUTTI I DATI
        </H3>`;
        return;
    }

    price = km*0.21;

    if(age === 'minorenne') price *= 0.8;
    else if(age === 'over65') price *= 0.6;
    console.log(price);

   
});

// annulla.addEventListener('click',function(){

// });