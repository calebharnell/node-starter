function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
};

const convertFahrenheitToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 0.5556
}

const formatCelsius = (celsius) => {
  return `${Math.round(celsius)}°C`
}

const formatFahrenheit = (fahrenheit) => {
  return `${Math.round(fahrenheit)}`
}

const hottestTemperature = (array) => {
  let hottest = array.reduce(function(a, b) {
    return Math.max(a, b);
  })
  return hottest
};

let fahrenheit
let celsius

// Monday

const mondayTemperature = 24
console.log(`On Monday it is ${mondayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(mondayTemperature)
console.log(`The Americans would think of that as ${fahrenheit}°F`)
celsius = convertFahrenheitToCelsius(fahrenheit)
console.log(`And back to celsius is ${formatCelsius(celsius)}`)


// Tuesday

const tuesdayTemperature = 31
console.log(`On Tuesday it is ${tuesdayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(tuesdayTemperature)
console.log(`The Americans would think of that as ${formatFahrenheit(fahrenheit)}°F`)


let weeklyTemps = [24, 26, 22, 29, 23, 18, 35]

console.log(hottestTemperature(weeklyTemps))


/*

Challenges:
1. Add Fahrenheit to Celsius converter (`function convertFahrenheitToCelsius`) with examples of usage
2. Add `formatCelsius` function that rounds to whole number using `Math.round`, and adds '°C' on end
3. Add `hottestTemperature` function, which takes an array of temperatures, and returns the highest one

*/
