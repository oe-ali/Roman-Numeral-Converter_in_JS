const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const numberOutput = document.getElementById("output");



const convertRoman = () => {
  const romanSymbols = [
    {
      value: 1000,
      symbol: 'M'
    },
    {
      value: 900,
      symbol: 'CM'
    },
    {
      value: 500,
      symbol: 'D'
    },
    {
      value: 400,
      symbol: 'CD'
    },
    {
      value: 100,
      symbol: 'C'
    },
    {
      value:90,
      symbol: 'XC'
    },
    {
      value: 50,
      symbol: 'L'
    },
    {
      value: 40,
      symbol: 'XL'
    },
    {
      value: 10,
      symbol: 'X'
    },
    {
      value: 9,
      symbol: 'IX'
    },
    {
      value: 5,
      symbol: 'V'
    },
    {
      value: 4,
      symbol: 'IV'
    },
    {
      value: 1,
      symbol: 'I'
    }
  ];
  
  let romanNumber = '';
  let number = parseInt(numberInput.value);


  if (numberInput.value === "") {
    numberOutput.textContent = "Please enter a valid number";
} else if (isNaN(number) || number < 1) {
    numberOutput.textContent = "Please enter a number greater than or equal to 1";
} else if (number >= 4000) {
    numberOutput.textContent = "Please enter a number less than or equal to 3999";
} else {
    
  for (const symbol of romanSymbols) {
    while (symbol.value <= number) {
      romanNumber += symbol.symbol;
      number -= symbol.value;
    }
  }

numberOutput.textContent = romanNumber;

}

};


convertBtn.addEventListener("click", convertRoman);