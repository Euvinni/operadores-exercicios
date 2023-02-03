let numero = Number (prompt (`Digite o primeiro número:`))
let numero2 = Number (prompt (`Digite o segundo número:`))

console.log(`Primeiro número: ${numero}`)
console.log(`Segundo número: ${numero2}`)

const soma1 = numero > numero2
console.log(`O primeiro numero é maior que o segundo? 
${soma1}`)
 
const soma2 = numero === numero2 
console.log(`O primeiro numero é igual ao segundo? 
${soma2}`)

const soma3 = numero % numero2 === 0
console.log(`O primeiro numero é divisível pelo segundo? 
${soma3}`)

const soma4 = numero2 % numero === 0
console.log(`O primeiro segundo é divisível pelo primeiro? 
${soma4}`)



