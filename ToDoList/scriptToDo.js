document.querySelector("#addTarefa").addEventListener("click", function() {
    const tarefaInput = document.querySelector("#tarefaInput");
    const tarefaData = document.querySelector("#tarefaData"); // Campo de data
    const tarefaList = document.querySelector("#tarefaList");
    const tarefaConcluidaList = document.querySelector("#tarefaConcluidaList");

    if (tarefaInput.value.trim() !== "") {
        let li = document.createElement("li");

        // 🔹 Capturando a data escolhida pelo usuário
        let dataEscolhida = tarefaData.value ? tarefaData.value : "Sem data definida";

        // 🔹 Adicionando texto da tarefa + data
        li.textContent = `${tarefaInput.value} - 📅 ${dataEscolhida}`;

        // Criando botão de "Concluir" ✔
        let concluirBtn = document.createElement("button");
        concluirBtn.innerHTML = "✔";
        concluirBtn.onclick = function() {
            li.classList.toggle("concluido");
            if (li.classList.contains("concluido")) {
                tarefaConcluidaList.appendChild(li); // Move para a lista de concluídas
            } else {
                tarefaList.appendChild(li); // Retorna para a lista original se desmarcado
            }
        };

        // Criando botão de "Remover" 🗑
        let dltBtn = document.createElement("button");
        dltBtn.innerHTML = "🗑";
        dltBtn.onclick = function() {
            li.remove(); // Remove a tarefa completamente
        };

        // Adicionando botões ao <li>
        li.appendChild(concluirBtn);
        li.appendChild(dltBtn);
        tarefaList.appendChild(li);
        tarefaInput.value = "";
        tarefaData.value = ""; // Limpa a seleção da data após adicionar
    }
});
