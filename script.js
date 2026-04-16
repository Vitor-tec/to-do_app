function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");
    const prioridade = document.getElementById("prioridadeSelect").value;
    const lista = document.getElementById("listaTarefas");

    const textoTarefa = input.value.trim();

    // Validação simples
    if (textoTarefa === "") {
        alert("Digite uma tarefa antes de adicionar.");
        return;
    }

    // Criar item da lista
    const li = document.createElement("li");
    li.classList.add(prioridade);

    // Texto da tarefa
    const span = document.createElement("span");
    span.textContent = textoTarefa;

    // Botão de conclusão
    const botao = document.createElement("button");
    botao.textContent = "Concluir";
    botao.classList.add("concluir");

    botao.onclick = function () {
        span.classList.toggle("concluida");
    };

    // Montagem do item
    li.appendChild(span);
    li.appendChild(botao);

    lista.appendChild(li);

    // Limpar campo
    input.value = "";
}