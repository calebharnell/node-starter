function formatVanityPlate(string) {
  let words = string.split(' ')
  words = words.map(word => word.toUpperCase())
  let newwords = words.join('')
  if (newwords.includes('FOR')) {
    newwords = newwords.replace('FOR', '4')
  } else if (newwords.includes('TO')) {
    newwords = newwords.replace('TO', '2')
  }
  return newwords.substring(0,12)
}

const one = 'I like money'
console.log(`Number plate: ${ formatVanityPlate(one) }`)

const two = 'Cats for life'
console.log(`Number plate: ${ formatVanityPlate(two) }`)

const three = 'Why isnt this running for me'
console.log(`Number plate: ${ formatVanityPlate(three) }`)

/*

Challenges:
1. Replace 'for' with '4'
2. Replace 'to' with '2'
3. Restrict to maximum of 12 characters

*/
