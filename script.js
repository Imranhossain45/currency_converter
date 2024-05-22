const fromAmount = document.querySelector('.amount');
const convertedAmount = document.querySelector('.convertedAmount');
const fromCurency = document.querySelector('.fromCurency');
const toCurency = document.querySelector('.toCurency');
const result = document.querySelector('.result');
const converterContainer = document.querySelector('.converter-container');

/* array to populate the select tags */
const countries = [
  { code: "USD", name: "United States Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "GBP", name: "British Pound Sterling" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "KRW", name: "South Korean Won" },
  { code: "TRY", name: "Turkish Lira" },
  { code: "RUB", name: "Russian Ruble" },
  { code: "INR", name: "Indian Rupee" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "ZAR", name: "South African Rand" },
  { code: "DKK", name: "Danish Krone" },
  { code: "PLN", name: "Polish Zloty" },
  { code: "TWD", name: "New Taiwan Dollar" },
  { code: "THB", name: "Thai Baht" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "IDR", name: "Indonesian Rupiah" },
  { code: "CZK", name: "Czech Koruna" },
  { code: "HUF", name: "Hungarian Forint" },
  { code: "ILS", name: "Israeli New Shekel" },
  { code: "PHP", name: "Philippine Peso" },
  { code: "AED", name: "United Arab Emirates Dirham" },
  { code: "COP", name: "Colombian Peso" },
  { code: "SAR", name: "Saudi Riyal" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "RON", name: "Romanian Leu" },
  { code: "CLP", name: "Chilean Peso" },
  { code: "PKR", name: "Pakistani Rupee" },
  { code: "EGP", name: "Egyptian Pound" },
  { code: "BDT", name: "Bangladeshi Taka" },
  { code: "NGN", name: "Nigerian Naira" },
  { code: "QAR", name: "Qatari Riyal" },
  { code: "KWD", name: "Kuwaiti Dinar" },
  { code: "VND", name: "Vietnamese Dong" },
  { code: "PEN", name: "Peruvian Sol" },
  { code: "KZT", name: "Kazakhstani Tenge" },
  { code: "UAH", name: "Ukrainian Hryvnia" },
  { code: "LKR", name: "Sri Lankan Rupee" },
  { code: "MAD", name: "Moroccan Dirham" },
  { code: "DZD", name: "Algerian Dinar" },
  { code: "JOD", name: "Jordanian Dinar" },
  { code: "OMR", name: "Omani Rial" },
  { code: "HRK", name: "Croatian Kuna" },
  { code: "UYU", name: "Uruguayan Peso" },
  { code: "BGN", name: "Bulgarian Lev" },
  { code: "TND", name: "Tunisian Dinar" },
  { code: "BHD", name: "Bahraini Dinar" },
  { code: "LTL", name: "Lithuanian Litas" },
  { code: "LVL", name: "Latvian Lats" },
  { code: "GTQ", name: "Guatemalan Quetzal" },
  { code: "ETB", name: "Ethiopian Birr" },
  { code: "ISK", name: "Icelandic Krona" },
  { code: "JMD", name: "Jamaican Dollar" },
  { code: "BAM", name: "Bosnia and Herzegovina Convertible Mark" },
  { code: "AMD", name: "Armenian Dram" },
  { code: "BND", name: "Brunei Dollar" },
  { code: "MNT", name: "Mongolian Tugrik" },
  { code: "NPR", name: "Nepalese Rupee" },
  { code: "CRC", name: "Costa Rican Colón" },
  { code: "PYG", name: "Paraguayan Guarani" },
  { code: "MUR", name: "Mauritian Rupee" },
  { code: "XOF", name: "West African CFA Franc" },
  { code: "XAF", name: "Central African CFA Franc" },
  { code: "MGA", name: "Malagasy Ariary" },
  { code: "KES", name: "Kenyan Shilling" },
  { code: "BWP", name: "Botswana Pula" },
  { code: "GHS", name: "Ghanaian Cedi" },
  { code: "UGX", name: "Ugandan Shilling" },
  { code: "RWF", name: "Rwandan Franc" },
  { code: "SLL", name: "Sierra Leonean Leone" },
  { code: "ZMW", name: "Zambian Kwacha" },
  { code: "MWK", name: "Malawian Kwacha" },
  { code: "BZD", name: "Belize Dollar" },
  { code: "GYD", name: "Guyanese Dollar" },
  { code: "SRD", name: "Surinamese Dollar" },
  { code: "BBD", name: "Barbadian Dollar" },
  { code: "XCD", name: "East Caribbean Dollar" },
  { code: "TTD", name: "Trinidad and Tobago Dollar" },
  { code: "BSD", name: "Bahamian Dollar" },
  { code: "KYD", name: "Cayman Islands Dollar" },
  { code: "PGK", name: "Papua New Guinean Kina" },
  { code: "SBD", name: "Solomon Islands Dollar" },
  { code: "TOP", name: "Tongan Pa'anga" },
  { code: "FJD", name: "Fijian Dollar" },
  { code: "VUV", name: "Vanuatu Vatu" },
  { code: "WST", name: "Samoan Tala" },
  { code: "KMF", name: "Comorian Franc" },
  { code: "SCR", name: "Seychellois Rupee" },
  { code: "MVR", name: "Maldivian Rufiyaa" }
];


/* showing countries from array to select tag */

countries.forEach(country => {
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  option1.value = country.code;
  option1.textContent = `${country.code} (${country.name})`;

  fromCurency.appendChild(option1);

  option2.value = country.code;
  option2.textContent = `${country.code} (${country.name})`;

  toCurency.appendChild(option2);

  /* setting default value */
  fromCurency.value = "USD";
  toCurency.value = "BDT";
});

/* function to get exchange rate api */
const getExchangeRate = async() => {
  const amount = parseFloat(fromAmount.value);
  const fromCurencyElement = fromCurency.value;
  const toCurencyElement = toCurency.value;
  result.textContent = "Fetching Exchange Rate..."

  /* fetch dta from api */
  try {
    
  
  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurencyElement}`);

  const data = await response.json();
  const conversionRate = data.rates[toCurencyElement];
    const convertedAmountElement = (amount * conversionRate).toFixed(2);
    if (typeof conversionRate === 'undefined') {
      result.textContent = "Exchnage Rate data is not available for selected Country";
      convertedAmount = "";
    } else {
      convertedAmount.value = convertedAmountElement;
      result.textContent = `${amount} ${fromCurencyElement} = ${convertedAmountElement} ${toCurencyElement}`;
    }
  
  
  } catch (error) {
    converterContainer.innerHTML = `<h1>Error while Fetching Exchange Data</h1>`;
  }


  
}
/* fetching exchage rate when user iput the amount */
fromAmount.addEventListener('input', getExchangeRate);
fromCurency.addEventListener('change', getExchangeRate);
toCurency.addEventListener('change', getExchangeRate);
window.addEventListener('load', getExchangeRate);


