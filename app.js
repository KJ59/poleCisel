const numbers = [
	-24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

const numbers2 = []  
const negativeNumbers = []
const absoluteNumbers = []
const evenNumbers = []
const numbers3 = []
const distances = []
const distancesNa2 = []; 
const negativeNumbersCount = []; 
let sumOfNumbers = 0;
let average = 0; 
let countOfPositiveNumbers = 0; 

  document.body.innerHTML += `Pole cisel: ${numbers}`

  numbers.forEach(x => {numbers2.push(x ** 2); });
  document.body.innerHTML += `<p>Pole cisel na druhou: ${numbers2}</p>`

  numbers.forEach(x => {
	if (x < 0) {
		negativeNumbers.push(x);}
  });
  document.body.innerHTML += `<p>Zaporna cisla: ${negativeNumbers}</p>`

  numbers.forEach(x => {
	absoluteNumbers.push(Math.abs(x));
  });
  document.body.innerHTML += `<p>Cisla v absolutni hodnote: ${absoluteNumbers}</p>`

   numbers.forEach(x => {
	if (x % 2 === 0) {
	  evenNumbers.push(x);}
  });
  document.body.innerHTML += `<p>Suda cisla: ${evenNumbers}</p>`  

  numbers.forEach(x => {
	if (Math.abs(x) % 3 === 0) {
	  numbers3.push(x);}
  });
  document.body.innerHTML += `<p>Cisla delitelna tremi v absolutni hodnote: ${evenNumbers}</p>`  

  function calculateDistance(numbers) {
	numbers.forEach(x => {
	  const distance = Math.abs(x - 5); 
	  distances.push(distance); 
	});
	document.body.innerHTML += `<p>Vzdalenosti jednotlivych cisel od 5: ${distances}</p>` 
  }

  calculateDistance(numbers)


  function calculateDistanceNa2(numbers) {
	numbers.forEach(x => {
	  const distance = Math.abs(x - 5);
	  const distances2 = distance ** 2;
	  distancesNa2.push(distances2);
	});
	document.body.innerHTML += `<p>Mocniny vzdalenosti cisel od 5: ${distancesNa2}</p>`;
  } 

  calculateDistanceNa2(numbers)

  function countNegativeNumbers(numbers) {
	numbers.forEach(x => {
	  if (x < 0) { 
		negativeNumbersCount.push(x);  }
	});
	document.body.innerHTML += `<p>Pocet zapornych cisel je: ${negativeNumbersCount.length}</p>`;
  }

  countNegativeNumbers(numbers)


numbers.forEach(x => { sumOfNumbers += x;});

document.body.innerHTML += `<p>Soucet cisel v poli cisel je: ${sumOfNumbers}</p>`;

function calculateAverage(numbers) {
	numbers.forEach(function(x) {
	  average += x;  
	});
	document.body.innerHTML += `<p>Prumer vsech cisel v poli cisel je: ${average / numbers.length}</p>`;
  }

  calculateAverage(numbers)

  function calculatePositiveSum(numbers) {
	numbers.forEach(function(x) {
	  if (x > 0) {countOfPositiveNumbers += x; }
	});
	document.body.innerHTML += `<p>Soucet kladnych cisel v poli cisel je: ${countOfPositiveNumbers}</p>`;
  }

  calculatePositiveSum(numbers)
