function getPin(){
    const pin = genaratePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
    
}

function genaratePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('btn-pin-gen').addEventListener('click', function(){
    const pin = getPin();

    const pinField = document.getElementById('pin-field');
    pinField.value = pin;
})


document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const numberField = document.getElementById('number-field');
    const previousNumberField = numberField.value;
    if(isNaN(number)){
        if(number === ('C')){
            numberField.value = '';
        }
        else if(number === '<'){
            const digits = previousNumberField.split('');
            digits.pop()
            const remainingDigits = digits.join('');
            numberField.value = remainingDigits;
        }
    }
    else{
        
        const newNumberField = previousNumberField + number;
        numberField.value = newNumberField;
    }
})

document.getElementById('btn-submit').addEventListener('click', function(){
    const pinField = document.getElementById('pin-field');
    const currentPin = pinField.value;


    const numberField = document.getElementById('number-field');
    const number = numberField.value;

    const pinSuccessMassage = document.getElementById('pin-success');
    const pinFailedMassage = document.getElementById('pin-failed');
    if(number === currentPin){
        pinSuccessMassage.style.display = 'block';
        pinFailedMassage.style.display = 'none';
    }
    else{
        pinFailedMassage.style.display = 'block';
        pinSuccessMassage.style.display = 'none';
    }
});