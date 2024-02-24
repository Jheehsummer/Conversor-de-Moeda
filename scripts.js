const convertButton = document.querySelector (".convert-button")
const currencySelectConvert = document.querySelector (".currency-select-convert")
const currencySelectConverted = document.querySelector (".currency-select-converted")

function convertValues(){
const inputCurrencyValue = document.querySelector(".input-currency").value
const currencyValueConvert = document.querySelector (".currency-value-convert")
const currencyValueConverted = document.querySelector (".currency-value-converted")


const dolarToday = 4.96
const euroToday = 5.37
const libraToday = 6.5
const pesoToday = 0.0060
const realToday = 1.0


if (currencySelectConverted.value == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
}

if (currencySelectConverted.value == "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
}

if (currencySelectConverted.value == "libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
}
if (currencySelectConverted.value == "peso"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR",{
        style: "currency",
        currency: "ARS"
    }).format(inputCurrencyValue / pesoToday)    
}
if (currencySelectConverted.value == "real"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue / realToday)
}


currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-br",{
    style: "currency",
    currency: "BRL"
}).format(inputCurrencyValue) 


}

function changeCurrencyConverted (){
    const currencyConverted = document.querySelector(".currency-converted")
    const CurrencyImageConverted = document.querySelector(".currency-img-converted")

    if (currencySelectConverted.value == "dolar") {
        currencyConverted.innerHTML = "Dolar Americano"
        CurrencyImageConverted.src = "./assets/dolar.png"
    }

    if (currencySelectConverted.value == "euro") {
        currencyConverted.innerHTML = "Euro"
        CurrencyImageConverted.src = "./assets/euro.png"
    }

    if (currencySelectConverted.value == "libra") {
        currencyConverted.innerHTML = "Libra Esterlina"
        CurrencyImageConverted.src = "./assets/libra.png"
    }

    if (currencySelectConverted.value == "peso") {
        currencyConverted.innerHTML = "Peso Argentino"
        CurrencyImageConverted.src = "./assets/peso.png"
    }

    if (currencySelectConverted.value == "real") {
        currencyConverted.innerHTML = "Real"
        CurrencyImageConverted.src = "./assets/brasil.png"
    }
    
}


function changeCurrencyConvert (){
    const currencyConvert = document.querySelector(".currency-convert")
    const CurrencyImageConvert = document.querySelector(".currency-img-convert")

    if (currencySelectConvert.value == "dolar") {
        currencyConvert.innerHTML = "Dolar Americano"
        CurrencyImageConvert.src = "./assets/dolar.png"
    }

    if (currencySelectConvert.value == "euro") {
        currencyConvert.innerHTML = "Euro"
        CurrencyImageConvert.src = "./assets/euro.png"
    }

    if (currencySelectConvert.value == "libra") {
        currencyConvert.innerHTML = "Libra Esterlina"
        CurrencyImageConvert.src = "./assets/libra.png"
    }

    if (currencySelectConvert.value == "peso") {
        currencyConvert.innerHTML = "Peso Argentino"
        CurrencyImageConvert.src = "./assets/peso.png"
    }

    if (currencySelectConvert.value == "real") {
        currencyConvert.innerHTML = "Real"
        CurrencyImageConvert.src = "./assets/brasil.png"
    }
}


currencySelectConvert.addEventListener("change", changeCurrencyConvert)
currencySelectConverted.addEventListener("change", changeCurrencyConverted)
convertButton.addEventListener("click", convertValues)