let contadorIngressos = 0;

function adicionarNovoIngresso() {
    // Incrementa o contador para nomes
    contadorIngressos++;

    const template = document.getElementById('template-ingresso');

     //Clona o conteúdo
    const novoIngresso = template.content.cloneNode(true);

    // localiza
    const fieldset = novoIngresso.querySelector('.bloco-ingresso');

    //Verifica se foi encontrado.
    if (!fieldset) {
        console.error("ERRO: O elemento com a classe '.bloco-ingresso' não foi encontrado no template.");
        return;
    }

    //Define um ID único
    fieldset.id = `ingresso_${contadorIngressos}`;

    // Ajuste dos atributos 'name', 'id' e 'for'
    novoIngresso.querySelectorAll('input, label').forEach(elemento => {

        // Ajusta o 'name'
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

    // botão de remover
    const botaoRemover = document.createElement('button');
    botaoRemover.setAttribute('type', 'button');
    botaoRemover.textContent = 'Remover X';
    botaoRemover.style.cssText = 'float: right; color: red; cursor: pointer; border: none; background: none;';

    botaoRemover.onclick = function () {
        fieldset.remove();
    };

    const legend = fieldset.querySelector('legend');
    if (legend) {
        legend.prepend(botaoRemover);
    }


    // Insere o novo bloco
    const container = document.getElementById('container-ingressos');
    if (container) {
        container.appendChild(novoIngresso);
    } else {
        console.error("ERRO: O elemento com id='container-ingressos' não foi encontrado. Inserção não realizada.");
    }
}

// função do clique do botão
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao-adicionar-ingresso');

    if (botao) {
        botao.addEventListener('click', adicionarNovoIngresso);
    }

    // Adiciona o ingresso
    if (document.getElementById('container-ingressos')) {
        adicionarNovoIngresso();
    }
});