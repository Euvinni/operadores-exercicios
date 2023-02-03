// Parte 1 (a)
/*const op1 = 5 > 20 && 5 < 2
console.log(`5 é maior que 20 e também é menor que 2 ${op1}`)

(b)
const op2 = 5 === 5 || 5 === '5' 
console.log(`5 é igual a 5 ou é igual a “5” ${op2}`)

(c)
const op3 = !(20 > 50)
console.log(`negação de (vinte é maior que cinquenta) ${op3}`)

(d)
const op4 = !(20 > 50 || 50 > 60)
console.log(`negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta) ${op4}`)
*/


//Parte 2 

let salario = 2000


  // 1) O salário fixo mais o auxílio creche
  const auxilio = 91

  const op1 = salario + 91
  console.log(` O salário fixo mais o auxílio creche ficara: ${op1}`)



 // 2) Comissão de 10% sobre o total de vendas mensal
 

 const totalVendas = 5784.50
 const percentualComissao = 0.1
 const comissao = totalVendas * percentualComissao
 const comissaoSalario = op1 + comissao
 
 console.log(`A Comissão de 10% sobre o total de vendas mensal é de R$${comissao.toFixed(2)}, o salario atual ficará de ${comissaoSalario}`) 
  // tofixed(2) exibira 2 casas decimais



salario = 2578.45
const descontoInss = salario * 0.05
const salarioComDesconto = salario - descontoInss


console.log(`O salário com desconto de 5% é de R$${salarioComDesconto.toFixed(2)}`)


//Janeiro

let salarioJaneiro = 2000
const auxilioCreche = 91
let vendasJaneiro = 5784.50
const acrescimoComissao = 0.1
const descontoDoInss = 0.05

salarioJaneiro += auxilioCreche

let comissao1 = vendasJaneiro * acrescimoComissao 

salarioJaneiro += comissao1

let descontoInss1 = salarioJaneiro * descontoDoInss

salarioJaneiro -= descontoInss1

console.log(`O salário final de  Janeiro é R$${salarioJaneiro.toFixed(2)}`)

//Fevereiro

let salarioFevereiro = 2000
let vendasFevereiro = 3418.41

salarioFevereiro += auxilioCreche

let comissao2 = vendasFevereiro * acrescimoComissao

salarioFevereiro += comissao2

let descontoInss2 = salarioFevereiro * descontoDoInss

salarioFevereiro -= descontoInss2

console.log(`O salário final de  Fevereiro é R$${salarioFevereiro.toFixed(2)}`)

//Março  

let salarioMarco = 2000
let vendasMarco = 4124.10

salarioMarco += auxilioCreche

let comissao3 = vendasMarco * acrescimoComissao

salarioMarco += comissao3

let descontoInss3 = salarioMarco * descontoDoInss

salarioMarco -= descontoInss3

console.log(`O salário final de Março é R$${salarioMarco.toFixed(2)}`)

//Abril

let salarioAbril = 2000
let vendasAbril = 1874

salarioAbril += auxilioCreche

let comissao4 = vendasAbril * acrescimoComissao

salarioAbril += comissao4

let descontoInss4 = salarioAbril * descontoDoInss

salarioAbril -= descontoInss4

console.log(`O sálario final de Abril é R$${salarioAbril.toFixed(2)}`)

//Maio

let salarioMaio = 2000
let vendasMaio = 7000

salarioMaio += auxilioCreche

let comissao5  = vendasMaio * acrescimoComissao

salarioMaio += comissao5

let descontoInss5 = salarioMaio * descontoDoInss

salarioMaio -= descontoInss5

console.log(`O sálario final de Maio é R$${salarioMaio.toFixed(2)}`)

//Junho

let salarioJunho = 2000
let vendasJunho = 9450

salarioJunho += auxilioCreche

let comissao6 = vendasJunho * acrescimoComissao

salarioJunho += comissao6

let descontoInss6 = salarioJunho * descontoDoInss

salarioJunho -= descontoInss6

console.log(`O sálario final de Junho é R$${salarioJunho.toFixed(2)}`)

//Ex 5


let media = 6 

let mediaSalarial = (salarioJaneiro + salarioFevereiro + salarioMarco + salarioAbril + salarioMaio + salarioJunho) / 6
console.log (`A média salarial é de: ${mediaSalarial.toFixed(2)}`)














