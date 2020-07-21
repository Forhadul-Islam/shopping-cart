//product quantity plus button
const productQuantityPlusBtn = document.querySelector('#phone-quantity-plus');
productQuantityPlusBtn.addEventListener('click', phoneQuantityIncreaseHandler);
//product quantity micus button
const productQuantityMinusBtn = document.querySelector('#phone-quantity-minus');
productQuantityMinusBtn.addEventListener('click', phoneQuantityDecreaseHandler);

//case quantity plus button
const caseQuantityPlusBtn = document.querySelector('#case-quantity-plus');
caseQuantityPlusBtn.addEventListener('click', caseQunatityIncreaseHandler);
//case quantity minus button
const caseQuantityMinusBtn = document.querySelector('#case-quantity-minus');
caseQuantityMinusBtn.addEventListener('click', caseQuantityDecreaseHandler)


//case qunatityIncrease handler
function caseQunatityIncreaseHandler(){
    let quantity = parseFloat(document.querySelector('#case-quantity').value);
    let price = parseFloat(document.getElementById('case-price').innerText);
    document.querySelector('#case-quantity').value = quantity + 1;
    document.querySelector('#case-price').innerHTML = price + 59;
    TotalCalculationForIncriment(59)
}

//case quantity decrease handler
function caseQuantityDecreaseHandler(){
    let quantity = parseFloat(document.querySelector('#case-quantity').value);
    let price = parseFloat(document.getElementById('case-price').innerText);
    if(quantity > 0){
        document.querySelector('#case-quantity').value = quantity - 1;
        document.querySelector('#case-price').innerHTML = price - 59;
        TotalCalculationForDecrement(59)
    }else{
        alert('quantity cannot be negative')
    }
}

function phoneQuantityIncreaseHandler(){
    let quantity = parseFloat(document.querySelector('#phone-quantity').value);
    let price = parseFloat(document.getElementById('phone-price').innerText);
    increaseQuantity(quantity, price, 1219);
    TotalCalculationForIncriment(1219);
}

function phoneQuantityDecreaseHandler(){
    let quantity = parseFloat(document.querySelector('#phone-quantity').value);
    let price = parseFloat(document.getElementById('phone-price').innerText);
    decreaseQuantity(quantity, price, 1219);
    TotalCalculationForDecrement(1219);
}

//decrease quantity and price
function decreaseQuantity(quantity, price, pricePerProduct){
    if(quantity > 0){
        document.querySelector('#phone-quantity').value = quantity - 1;
        document.querySelector('#phone-price').innerHTML = price - pricePerProduct;
    }else{
        alert('quantity cannnot be negative ')
    }
}

//increase quantity and price
function increaseQuantity(quantity, price, pricePerProduct){
        document.querySelector('#phone-quantity').value = quantity + 1;
        document.querySelector('#phone-price').innerHTML = price + pricePerProduct;
}


function TotalCalculationForIncriment(price){
    let tax = parseFloat(document.querySelector('#tax').innerText);
    let subtotal = parseFloat(document.querySelector('#subtotal').innerText);
    let total = parseFloat(document.querySelector('#total').innerText);
    let currentSubtotal = subtotal + price;
    let calculatedTax = (currentSubtotal * 2)/100
    document.querySelector('#subtotal').innerText = currentSubtotal;
    document.querySelector('#total').innerText = currentSubtotal + calculatedTax;
    document.querySelector('#tax').innerText = calculatedTax.toFixed(2);
    console.log(calculatedTax, typeof(calculatedTax))
}

function TotalCalculationForDecrement(price){
    let tax = parseFloat(document.querySelector('#tax').innerText);
    let subtotal = parseFloat(document.querySelector('#subtotal').innerText);
    let total = parseFloat(document.querySelector('#total').innerText);
    let currentSubtotal = subtotal - price;
    let calculatedTax = (currentSubtotal * 2)/100
    document.querySelector('#subtotal').innerText = currentSubtotal;
    document.querySelector('#total').innerText = currentSubtotal + calculatedTax;
    document.querySelector('#tax').innerText = calculatedTax.toFixed(2);
    console.log(currentSubtotal, typeof(currentSubtotal))
}

function cartUpdate(){
    let casePrice = parseFloat(document.getElementById('case-price').innerText);
    let phonePrice = parseFloat(document.getElementById('phone-price').innerText);
    let total = parseFloat(document.querySelector('#total').innerText);
    let subtotal = casePrice + phonePrice;
    let calculatedTax = (subtotal * 2)/100;
    document.querySelector('#tax').innerText = calculatedTax.toFixed(2);
    document.querySelector('#total').innerText = total + calculatedTax;
    
}
cartUpdate();