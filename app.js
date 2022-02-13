function getElement(id){
    return document.getElementById(id);
}
function updatePrice(item,price,isIncreasing){
    const Input = getElement(`${item}-count`);
    if(isIncreasing){
        Input.value = parseInt(Input.value) +1;
    }
    else if(Input.value>0){
        Input.value = parseInt(Input.value)-1;
    }
    getElement(`${item}-price`).innerText = `$${Input.value * price}`;
    // handling final totals
    updateTotalValues();
}
function updateTotalValues(){
    const Subtotal = getElement('sub-total');
    const tax = getElement('tax');
    const total = getElement('total');
    //update subtotal
    const phonePrice = getElement('phone-price').innerText.split('$').join('');
    const casePrice = getElement('case-price').innerText.split('$').join('');
    Subtotal.innerText = `$${parseInt(phonePrice)+parseInt(casePrice)}`;
    //update tax
    tax.innerText = `$${Math.round((parseInt(phonePrice)+parseInt(casePrice))/10)}`;
    //update total
    total.innerText = `$${parseInt(Subtotal.innerText.split('$').join(''))+parseInt(tax.innerText.split('$').join(''))}`
}
//handle phone
getElement('phone-plus').addEventListener('click',function(e){
    updatePrice('phone',1219,true);
});
getElement('phone-minus').addEventListener('click',function(e){
    updatePrice('phone',1219,false);
});
//handle case
getElement('case-plus').addEventListener('click',function(e){
    updatePrice('case',59,true);
});
getElement('case-minus').addEventListener('click',function(e){
    updatePrice('case',59,false);
});


