document.addEventListener("DOMContentLoaded", function () {
    // Currency data - You can add more currencies if needed
    const currencies = {
        USD: "United States Dollar",
        EUR: "Euro",
        GBP: "British Pound Sterling",
        JPY: "Japanese Yen",
        CAD: "Canadian Dollar",
    };

    // Populate currency select options
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");

    for (const currencyCode in currencies) {
        const option1 = new Option(`${currencyCode} - ${currencies[currencyCode]}`, currencyCode);
        const option2 = new Option(`${currencyCode} - ${currencies[currencyCode]}`, currencyCode);

        fromCurrencySelect.appendChild(option1);
        toCurrencySelect.appendChild(option2);
    }

    // Conversion function
    function convertCurrency() {
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
        const amount = parseFloat(document.getElementById("amount").value);

        // You can fetch the latest exchange rates from an API here
        // For simplicity, we'll assume a fixed conversion rate
        const conversionRate = 1.2; // 1 USD to EUR

        const result = (amount * conversionRate).toFixed(2);
        document.getElementById("result").value = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    }

    // Attach the conversion function to the Convert button
    const convertButton = document.getElementById("convert");
    convertButton.addEventListener("click", convertCurrency);
});
