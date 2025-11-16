let contadorIngressos = 0;

function adicionarNovoIngresso() {
    // 1. Incrementa o contador para nomes únicos
    contadorIngressos++;

    // 2. Pega o template HTML (o molde)
    const template = document.getElementById('template-ingresso');

    // 3. Clona o conteúdo do template
    // ATENÇÃO: Se o HTML do template estiver incorreto (elementos fora do fieldset), este bloco falhará.
    const novoIngresso = template.content.cloneNode(true);

    // 4. Localiza o <fieldset> no clone
    const fieldset = novoIngresso.querySelector('.bloco-ingresso');

    // 5. Verifica se o fieldset foi encontrado. Se não, para a função.
    if (!fieldset) {
        console.error("ERRO: O elemento com a classe '.bloco-ingresso' não foi encontrado no template.");
        return;
    }

    // 6. Define um ID único para o fieldset
    fieldset.id = `ingresso_${contadorIngressos}`;

    // 7. Ajusta os atributos 'name', 'id' e 'for' para evitar conflitos no formulário
    novoIngresso.querySelectorAll('input, label').forEach(elemento => {

        // Ajusta o 'name' (CRUCIAL para enviar dados ao servidor)
        if (elemento.hasAttribute('name')) {
            const nomeAtual = elemento.getAttribute('name');
            elemento.setAttribute('name', `${nomeAtual}_${contadorIngressos}`);
        }

        // Ajusta 'id' e 'for'
        if (elemento.hasAttribute('id')) {
            const idAtual = elemento.getAttribute('id');
            elemento.setAttribute('id', `${idAtual}_${contadorIngressos}`);
        } else if (elemento.hasAttribute('for')) {
            const forAtual = elemento.getAttribute('for');
            elemento.setAttribute('for', `${forAtual}_${contadorIngressos}`);
        }
    });

    // 8. Cria e anexa o botão de remover
    const botaoRemover = document.createElement('button');
    botaoRemover.setAttribute('type', 'button');
    botaoRemover.textContent = 'Remover X';
    botaoRemover.style.cssText = 'float: right; color: red; cursor: pointer; border: none; background: none;';

    botaoRemover.onclick = function () {
        fieldset.remove();
    };

    const legend = fieldset.querySelector('legend');
    if (legend) {
        legend.prepend(botaoRemover); // Insere o botão ao lado do <legend>
    }


    // 9. Insere o novo bloco no CONTAINER (ID recomendado: container-ingressos)
    const container = document.getElementById('container-ingressos');
    if (container) {
        container.appendChild(novoIngresso);
    } else {
        console.error("ERRO: O elemento com id='container-ingressos' não foi encontrado. Inserção não realizada.");
    }
}

// Conecta a função ao clique do botão
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao-adicionar-ingresso');

    if (botao) {
        botao.addEventListener('click', adicionarNovoIngresso);
    }

    // Adiciona o primeiro ingresso ao carregar a página (somente se o container existir)
    if (document.getElementById('container-ingressos')) {
        adicionarNovoIngresso();
    }
});