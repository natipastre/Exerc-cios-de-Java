var numero = 1;

console.log("Sequencia numérica usando while");
while(numero <=128){
    console.log(numero);
    numero *= 2;
}

console.log("---");

console.log("Sequencia numérica usando For");
for(var numero = 4; numero <= 1024; numero *=4){
    console.log(numero)
}

//EX Fixação

var investimentoInicial = 1680;
var taxaJurosAnual = 0.05;
var valorInvestimento = investimentoInicial;

console.log("Calculadora de Investimentos");
for(var ano = 1; ano <= 8; ano++){
    valorInvestimento += valorInvestimento * taxaJurosAnual;
    console.log("Ano: ", ano, " - Valor: R$", valorInvestimento);
}