
const convertButtom = document.querySelector(".convert-button")
const chosenCurrency = document.querySelector(".chosen-currency")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas, convertidos


    const dolarToday = 4.97
    const euroToday = 5.38
    const bitcoinToday = 195895.89
    
    

    if (chosenCurrency.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)}

    if (chosenCurrency.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)}

    if (chosenCurrency.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
            }).format(inputCurrencyValue / bitcoinToday)}

        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency :"BRL"}).format(inputCurrencyValue)
 }

 function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (chosenCurrency.value == "dolar") {
        currencyName.innerHTML="Dólar"
        currencyImg.src ="./assets/Dolar.png"

    }
    if (chosenCurrency.value == "euro") {
        currencyName.innerHTML="Euro"
        currencyImg.src ="./assets/Euro.png"

    }
    if (chosenCurrency.value == "bitcoin") {
        currencyName.innerHTML="Bitcoin"
        currencyImg.src ="./assets/bitcoin.png"

    }

    convertValues()

 }
 
chosenCurrency.addEventListener("change", changeCurrency)
convertButtom.addEventListener("click", convertValues)
