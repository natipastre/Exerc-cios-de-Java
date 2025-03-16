//Selecionando elementos com querySelector
var inputTarefa = document.querySelector("#inputTarefa");
var btnAdicionarTarefa = document.querySelector("#btnAdicionarTarefa");

//Evento para o botão "Adicionar"
btnAdicionarTarefa.addEventListener("click", adicionarTarefa);

//Função responsável por criar o elemento responsável pela exibição de tarefas
function adicionarTarefa(){
    var textoInput = inputTarefa.value;
   if(textoInput !== ""){
        var caixaTarefa = document.createElement("div");
        caixaTarefa.className = "alert alert-secondary mt-1 mb-1 d-flex";

        //Adiciona o texto da tarefa        
        caixaTarefa.innerHTML = textoInput;

        //Cria botão de remoção
        var botaoRemover = document.createElement("button");
        botaoRemover.className = "btn btn-danger btn-sm ms-auto";
        botaoRemover.innerHTML = "Remover";

        //Adiciona o evento de clique para remover tarefa
        botaoRemover.addEventListener("click", function(){
            containerTarefa.removeChild(caixaTarefa);
        })

        var containerTarefa = document.querySelector(".container"); 
        containerTarefa.appendChild(caixaTarefa);
        caixaTarefa.appendChild(botaoRemover);
        inputTarefa.value = "";
        inputTarefa.focus();

   }
};