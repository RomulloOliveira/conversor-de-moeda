
const convertButtom = document.querySelector (".convert-button")

function convertValues(){
   
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.97
    
    const convertedValue = inputCurrencyValue / dolarToday

    CurrencyValueToConvert.innerHTML = inputCurrencyValue
    currencyValueConverted.innerHTML = convertedValue

    console.log(convertedValue)
}

convertButtom.addEventListener("click", convertValues)
