// Seleciona o primeiro elemento div com a classe "alert-primary"
 var elemento = document.querySelector(".alert-primary");
 console.log(elemento);

 // Seleciona o primeiro elemento p dentro de um elemento com a classe "content"
var paragrafo = document.querySelector(".content p");
console.log(paragrafo);

//Cria e adiciona um novo elemento do tipo "div" dentro do div com a classe .container
var novoDiv = document.createElement("div");
var divContainer = document.querySelector("div.container");
divContainer.appendChild(novoDiv);

//Manipulando o div (novoDiv) criado
novoDiv.innerHTML = "Sou um div criado através do JavaScript";
paragrafo.innerHTML = "Parágrafo modificado através do JavaScript";
novoDiv.classList.add("alert", "alert-success");

//Exercício de fixação
var divExercicio = document.querySelector(".alert-secondary");
divExercicio.innerHTML = "Exercício de fixação desenvolvido por Vinícius Marin";
divExercicio.classList.add("alert-warning", "text-uppercase");