let contadorIngressos = 0;

function adicionarNovoIngresso() {
    // Incrementa o contador para garantir nomes únicos (ex: nomeIngresso_1)
    contadorIngressos++;

    // 1. Pega o template HTML
    const template = document.getElementById('template-ingresso');

    // 2. Clona o conteúdo do template (true = clona todos os elementos internos)
    const novoIngresso = template.content.cloneNode(true);

    // 3. Localiza o elemento <fieldset> (o bloco principal) no clone
    const fieldset = novoIngresso.querySelector('.bloco-ingresso');

    // Adiciona um ID único (opcional, mas bom para CSS/JS)
    fieldset.id = `ingresso_${contadorIngressos}`;

    // 4. Ajusta os atributos 'name' e 'id' para evitar conflitos no formulário
    novoIngresso.querySelectorAll('input, label').forEach(elemento => {

        // Ajusta o 'name' para ser único (CRUCIAL para enviar dados ao servidor)
        if (elemento.hasAttribute('name')) {
            const nomeAtual = elemento.getAttribute('name');
            elemento.setAttribute('name', `${nomeAtual}_${contadorIngressos}`);
        }

        // Ajusta o 'id' e o 'for' da label
        if (elemento.hasAttribute('id')) {
            const idAtual = elemento.getAttribute('id');
            elemento.setAttribute('id', `${idAtual}_${contadorIngressos}`);
        } else if (elemento.hasAttribute('for')) {
            const forAtual = elemento.getAttribute('for');
            elemento.setAttribute('for', `${forAtual}_${contadorIngressos}`);
        }
    });

    // 5. Cria e anexa o botão de remover ao novo fieldset
    const botaoRemover = document.createElement('button');
    botaoRemover.setAttribute('type', 'button');
    botaoRemover.textContent = 'Remover X';
    botaoRemover.onclick = function () {
        fieldset.remove(); // Remove todo o bloco de ingresso
    };
    fieldset.prepend(botaoRemover); // Insere o botão de remover no topo do bloco

    // 6. Insere o novo bloco (o clone) no container principal
    const container = document.getElementById('container-ingressos');
    container.appendChild(novoIngresso);
}

// Código de conexão que já estava correto
document.addEventListener('DOMContentLoaded', () => {
    // Esta parte conecta a função ao botão quando a página carrega:
    const botao = document.getElementById('botao-adicionar-ingresso');
    if (botao) { // Verifica se o botão existe antes de tentar anexar o evento
        botao.addEventListener('click', adicionarNovoIngresso);
    }

    // Adiciona o primeiro ingresso ao carregar a página
    adicionarNovoIngresso();
});
