function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;
    let message;
    message = productName;
    message = message + " ";
    message = message + "за";
    message = message + " ";
    message = message + "productPrice";
    message = message + " ";
    message = message + "теперь в корзине!";
    console.log(message);


    // Задание №1.1. Оповещение о добавлении в корзину
           
    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;
    let newValue;
    newValue = oldValue;
    newValue += 1;
    

    
    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;
    let newSum;
    newSum = oldSum + difference;
    let newSumText = newSum + ' ₽';
    newSumText = `${newSum} ₽`;

    // Задание №1.3. Увеличение суммы в корзине

   
       // Конец решения задания №1.3.

    return newSumText;
}

