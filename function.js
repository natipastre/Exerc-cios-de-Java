function olaUsuario(nome){
    console.log("Olá ,", nome, " seja bem vindo ao sistema!");
}

function calculoIdade(anoAtual, dataNascimento){
    return anoAtual - dataNascimento;
}

function calculoSalario(salarioAtual, aumentoPercentual){
    salarioAtual += salarioAtual * aumentoPercentual;
    console.log("Seu novo salário será de: R$", salarioAtual, " reais")
}

olaUsuario("Carlos Roberto")
var idadeAtual = calculoIdade(2000, 2001)
console.log("Você tem ", idadeAtual, " anos")
calculoSalario (1500, 0.1)

//EX FIxação

function calcularNovoSalario(nome, salarioAtual, percentualAumento){
    var novoSalario = salarioAtual += salarioAtual * percentualAumento;
    console.log("Nome do funcionário: ", nome);
    console.log("O novo salário será de: R$", novoSalario, " reais")
}

calcularNovoSalario("João", 3000, 0.1)
calcularNovoSalario("Luciana", 2500, 0.5)