/*
    entrada de dados
    faz alguma coisa com estes dados
        - gravar a entrada de dados em um array
        - inserir estes dados em forma de objeto, com o valor e o status
            à executar
            executando
            feito
    exibe/grava em algum lugar
*/

let tarefas = []; 

function adicionarTarefas(){
    let tarefa = document.querySelector("#tarefa");

    tarefas.push( 
        {
            titulo: tarefa.value,
            status: 'à executar'
        } 
    )   

    tarefa.value = '';

    exibeTarefas();
}

function exibeTarefas(){
    let cardTarefas = document.querySelector('section');

    cardTarefas.innerHTML = '';

    for( let task of tarefas ){
        cardTarefas.innerHTML +=
            `<span>
                <p> ${ task.titulo } </p>
                <p onclick="alteraStatus()"> ${ task.status } </p>
                <button onclick="editaTarefas()"> Editar </button>
                <button onclick="excluiTarefa()"> Excluir </button>
            </span>`;
    }
    
}