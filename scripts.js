const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConvert = document.querySelector(".currency-value-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")

    console.log(currencySelect.value)

    const dolarToday = 5.0
    const euroToday = 5.41
  

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


    currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency(){
   const currencyConverted = document.querySelector(".currency-converted")
   const currencyImage = document.querySelector(".currency-img")

   if (currencySelect.value == "dolar") {
    currencyConverted.innerHTML = "Dolar Americano"
    currencyImage.src = "./assets/dolar.png"
   }
   
   if (currencySelect.value == "euro") {
    currencyConverted.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
   }
   convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

