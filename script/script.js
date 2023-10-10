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

    document.getElementById('nameText').innerHTML = `
    <strong>
        ${name}
    </strong>
    `;

    const i = Math.floor(Math.random() * 3);
    document.getElementById('ticketType').innerHTML = `
    <strong>
        biglietto ${ticketType[i]} 
    </strong>
    `;

    const carriage = Math.floor(Math.random() * 20) + 1;
    document.getElementById('carriage').innerHTML = `
    <strong>
        ${carriage} 
    </strong>
    `;

    const cp = Math.floor(Math.random() * 99999) + 10000;
    document.getElementById('cp').innerHTML = `
    <strong>
        ${cp} 
    </strong>
    `;

    document.getElementById('price').innerHTML = `
    <strong>
        ${price.toFixed(2)}€
    </strong>
    `;
});

annulla.addEventListener('click',function(){
    document.getElementById('name').value = '';
    document.getElementById('km').value = null;
    document.getElementById('age').value = 'maggiorenne';

    document.getElementById('nameText').innerHTML = '';
    document.getElementById('ticketType').innerHTML = '';
    document.getElementById('carriage').innerHTML = '';
    document.getElementById('cp').innerHTML = '';
    document.getElementById('price').innerHTML = '';
});