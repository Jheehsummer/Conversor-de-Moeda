

const convertButton = document.querySelector(".convert-button")
const currencySelectConvert = document.querySelector(".currency-select-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")

async function convertValues() {
    const inputCurrencyValue2 = document.querySelector(".input-currency").value
    const inputCurrencyValue = (inputCurrencyValue2.replace("," , "."))
    const currencyValueConvert = document.querySelector(".currency-value-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")

    const moedas = "USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL,JPY-BRL,AUD-BRL,CHF-BRL,CAD-BRL,TRY-BRL"
    const url = `https://economia.awesomeapi.com.br/last/${moedas}`
    const data = await fetch(url).then(response => response.json())

    let total = 1
    const dolarToday = data.USDBRL["bid"]
    const euroToday = data.EURBRL["bid"]
    const libraToday = data.GBPBRL["bid"]
    const pesoToday = data.ARSBRL["bid"]
    const realToday = 1
    const ieneToday = data.JPYBRL["bid"]
    const dolarAustralianoToday = data.AUDBRL["bid"]
    const francoToday = data.CHFBRL["bid"]
    const dolarCanadenseToday = data.CADBRL["bid"]
    const liraToday = data.TRYBRL["bid"]


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

    if (currencySelectConvert.value == "iene-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPI"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue*ieneToday
    }

    if (currencySelectConvert.value == "dolar-australiano-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue*dolarAustralianoToday
    }

    if (currencySelectConvert.value == "franco-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue*francoToday
    }

    if (currencySelectConvert.value == "dolar-canadense-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue*dolarCanadenseToday
    }

    if (currencySelectConvert.value == "lira-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY"
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

if (currencySelectConverted.value == "iene-converted") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
    }).format(total / ieneToday)
}

if (currencySelectConverted.value == "dolar-australiano-converted") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD"
    }).format(total / dolarAustralianoToday)
}

if (currencySelectConverted.value == "franco-converted") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-CH", {
        style: "currency",
        currency: "CHF"
    }).format(total / francoToday)
}

if (currencySelectConverted.value == "dolar-canadense-converted") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD"
    }).format(total / dolarCanadenseToday )
}

if (currencySelectConverted.value == "lira-converted") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY"
    }).format(total / liraToday)
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

    if (currencySelectConverted.value == "iene-converted") {
        currencyConverted.innerHTML = "Iene"
        CurrencyImageConverted.src = "./assets/japao.png"
    }

    if (currencySelectConverted.value == "dolar-australiano-converted") {
        currencyConverted.innerHTML = "Dolar Australiano"
        CurrencyImageConverted.src = "./assets/australia.png"
    }

    if (currencySelectConverted.value == "franco-converted") {
        currencyConverted.innerHTML = "Franco Suiço"
        CurrencyImageConverted.src = "./assets/suica.png"
    }

    if (currencySelectConverted.value == "dolar-canadense-converted") {
        currencyConverted.innerHTML = "Dolar Canadense"
        CurrencyImageConverted.src = "./assets/canada.png"
    }

    if (currencySelectConverted.value == "lira-converted") {
        currencyConverted.innerHTML = "Lira Turca"
        CurrencyImageConverted.src = "./assets/turquia.png"
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

    if (currencySelectConvert.value == "iene-select") {
        currencyConvert.innerHTML = "Iene"
        CurrencyImageConvert.src = "./assets/japao.png"
    }

    if (currencySelectConvert.value == "dolar-australiano-select") {
        currencyConvert.innerHTML = "Dolar Australiano"
        CurrencyImageConvert.src = "./assets/australia.png"
    }

    if (currencySelectConvert.value == "franco-select") {
        currencyConvert.innerHTML = "Franco Suiço"
        CurrencyImageConvert.src = "./assets/suica.png"
    }

    if (currencySelectConvert.value == "dolar-canadense-select") {
        currencyConvert.innerHTML = "Dolar Canadense"
        CurrencyImageConvert.src = "./assets/canada.png"
    }

    if (currencySelectConvert.value == "lira-select") {
        currencyConvert.innerHTML = "Lira Turca"
        CurrencyImageConvert.src = "./assets/turquia.png"
    }
}


currencySelectConvert.addEventListener("change", changeCurrencyConvert)
currencySelectConverted.addEventListener("change", changeCurrencyConverted)
convertButton.addEventListener("click", convertValues)