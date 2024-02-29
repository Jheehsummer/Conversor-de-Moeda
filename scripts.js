
const convertButton = document.querySelector(".convert-button")
const currencySelectConvert = document.querySelector(".currency-select-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConvert = document.querySelector(".currency-value-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")

    let total = 1
    const dolarToday = 4.96
    const euroToday = 5.37
    const libraToday = 6.5
    const pesoToday = 0.0060
    const realToday = 1.0

    if (currencySelectConvert.value == "real-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * realToday
    }

    if (currencySelectConvert.value == "dolar-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * dolarToday
    }

    if (currencySelectConvert.value == "euro-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * euroToday
    }

    if (currencySelectConvert.value == "libra-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * libraToday
    }


    if (currencySelectConvert.value == "peso-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue*pesoToday
    }


if (currencySelectConverted.value == "dolar-converted") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(total/ dolarToday)
}

if (currencySelectConverted.value == "euro-converted") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(total / euroToday)
}

if (currencySelectConverted.value == "libra-converted") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(total / libraToday)
}
if (currencySelectConverted.value == "peso-converted") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS"
    }).format(total / pesoToday)
}
if (currencySelectConverted.value == "real-converted") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(total / realToday)
}


}

function changeCurrencyConverted() {
    const currencyConverted = document.querySelector(".currency-converted")
    const CurrencyImageConverted = document.querySelector(".currency-img-converted")

    if (currencySelectConverted.value == "dolar-converted") {
        currencyConverted.innerHTML = "Dolar Americano"
        CurrencyImageConverted.src = "./assets/dolar.png"
    }

    if (currencySelectConverted.value == "euro-converted") {
        currencyConverted.innerHTML = "Euro"
        CurrencyImageConverted.src = "./assets/euro.png"
    }

    if (currencySelectConverted.value == "libra-converted") {
        currencyConverted.innerHTML = "Libra Esterlina"
        CurrencyImageConverted.src = "./assets/libra.png"
    }

    if (currencySelectConverted.value == "peso-converted") {
        currencyConverted.innerHTML = "Peso Argentino"
        CurrencyImageConverted.src = "./assets/peso.png"
    }

    if (currencySelectConverted.value == "real-converted") {
        currencyConverted.innerHTML = "Real"
        CurrencyImageConverted.src = "./assets/brasil.png"
    }

}


function changeCurrencyConvert() {
    const currencyConvert = document.querySelector(".currency-convert")
    const CurrencyImageConvert = document.querySelector(".currency-img-convert")

    if (currencySelectConvert.value == "dolar-select") {
        currencyConvert.innerHTML = "Dolar Americano"
        CurrencyImageConvert.src = "./assets/dolar.png"
    }

    if (currencySelectConvert.value == "euro-select") {
        currencyConvert.innerHTML = "Euro"
        CurrencyImageConvert.src = "./assets/euro.png"
    }

    if (currencySelectConvert.value == "libra-select") {
        currencyConvert.innerHTML = "Libra Esterlina"
        CurrencyImageConvert.src = "./assets/libra.png"
    }

    if (currencySelectConvert.value == "peso-select") {
        currencyConvert.innerHTML = "Peso Argentino"
        CurrencyImageConvert.src = "./assets/peso.png"
    }

    if (currencySelectConvert.value == "real-select") {
        currencyConvert.innerHTML = "Real"
        CurrencyImageConvert.src = "./assets/brasil.png"
    }
}


currencySelectConvert.addEventListener("change", changeCurrencyConvert)
currencySelectConverted.addEventListener("change", changeCurrencyConverted)
convertButton.addEventListener("click", convertValues)

