document.addEventListener('DOMContentLoaded', () => {
    
    const listaEventosDiv = document.getElementById('lista-eventos');
    const botoesFiltro = document.querySelectorAll('.btn-filtro');
    const barraPesquisa = document.getElementById('barraPesquisa'); 

    // Se o elemento não for encontrado
    if (!barraPesquisa) { 
        console.error("Erro: O elemento com id='barraPesquisa' não foi encontrado no HTML.");
    }
    
    window.abrirMenu = function() { // Torna a função globalmente acessível
        document.getElementById("menuLateral").style.width = "250px"; 
    }

    window.fecharMenu = function() { // Torna a função globalmente acessível
        document.getElementById("menuLateral").style.width = "0"; 
    }
    
    // DADOS Dos EVENTOS 

    const eventos = [
        { 
            id: 1, 
            nome: "Festa a fantasia", 
            data: "20/DEZ", 
            local: "Praça do Artesão, Centro", 
            Horário: "18:00",
            tipo: "Festas", 
            imagem: "https://via.placeholder.com/600x400/FFDD44/333333?text=FESTA" 
        },
        { 
            id: 2, 
            nome: "Competição de pintura", 
            data: "25/DEZ", 
            local: "Café Cultural Boêmio", 
            Horário: "14:30",
            tipo: "Artístico", 
            imagem: "https://via.placeholder.com/600x400/FF7F41/FFFFFF?text=PINTURA" 
        },
        { 
            id: 3, 
            nome: "Torneio de Vôlei de Praia", 
            data: "05/JAN", 
            local: "Praia do Sol Nascente", 
            Horário: "15:30",
            tipo: "Esporte", 
            imagem: "https://via.placeholder.com/600x400/5A7D7C/FFFFFF?text=VOLEI" 
        },
        { 
            id: 4, 
            nome: "Game Party", 
            data: "12/JAN", 
            local: "Arena Gamer X", 
            Horário: "19:00",
            tipo: "Jogos", 
            imagem: "https://via.placeholder.com/600x400/FFDD44/333333?text=JOGOS" 
        },
        { 
            id: 5, 
            nome: "Workshop de Graffiti", 
            data: "18/JAN", 
            local: "Muro Livre da Cidade", 
            Horário: "8:00",
            tipo: "Artístico", 
            imagem: "https://via.placeholder.com/600x400/FF7F41/FFFFFF?text=GRAFFITI" 
        }
    ];

    //FUNÇÃO PARA CRIAR O HTML DO CARD DE EVENTO
    const criarCardEvento = (evento) => {
        const card = document.createElement('article');
        card.classList.add('card-evento');
        card.setAttribute('data-tipo', evento.tipo); 

        card.innerHTML = `
            <img src="${evento.imagem}" alt="${evento.nome}" class="imagem-evento">
            <div class="info-evento">
                <h3>${evento.nome}</h3>
                <div class="detalhes-evento">
                    <span class="material-icons">event</span> ${evento.data}
                </div>
                <div class="detalhes-evento">
                    <span class="material-icons">location_on</span> ${evento.local}
                </div>
                <span class="tag-tipo">${evento.tipo}</span>
                <button class="btn-comprar" data-event-id="${evento.id}">
                    Comprar
                </button>
            </div>
        `;
        return card;
    };

    
    //FUNÇÃO PARA RENDERIZAR EVENTO
    const renderizarEventos = (eventosParaExibir) => {
        listaEventosDiv.innerHTML = ''; // Limpa a lista
        if (eventosParaExibir.length === 0) {
            listaEventosDiv.innerHTML = '<p style="text-align: center; padding: 30px;">Nenhum evento encontrado.</p>';
            return;
        }

        eventosParaExibir.forEach(evento => {
            listaEventosDiv.appendChild(criarCardEvento(evento));
        });
    };

    // FUNÇÃO DE FILTRAGEM
    const aplicarFiltros = (tipoSelecionado, termoPesquisa) => {
        
        const termo = termoPesquisa ? termoPesquisa.toLowerCase() : '';

        //Filtro de Categoria
        let eventosFiltrados = eventos.filter(evento => {
            const correspondeCategoria = tipoSelecionado === 'Todos' || evento.tipo === tipoSelecionado;
            return correspondeCategoria;
        });

        //Filtro de Nome (Pesquisa)
        if (termo) {
            eventosFiltrados = eventosFiltrados.filter(evento => {
                return evento.nome.toLowerCase().includes(termo);
            });
        }

        renderizarEventos(eventosFiltrados);
    };

    // FUNCINALIDADES DOS BOTÕES DE FILTRO
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            // Estilo (Ativação)
            botoesFiltro.forEach(b => b.classList.remove('ativo'));
            botao.classList.add('ativo');

            // Funcionalidade (Filtragem)
            const tipo = botao.getAttribute('data-tipo');
            aplicarFiltros(tipo, barraPesquisa.value);
        });
    });

    //BARRA DE PESQUISA
    if (barraPesquisa) { 
        barraPesquisa.addEventListener('input', () => {
            const botaoAtivo = document.querySelector('.btn-filtro.ativo');
            const tipoAtual = botaoAtivo ? botaoAtivo.getAttribute('data-tipo') : 'Todos';

            aplicarFiltros(tipoAtual, barraPesquisa.value);
        });
    }

    //CARREGAR EVENTOS    
    const botaoTodos = document.querySelector('.btn-filtro[data-tipo="Todos"]');
    if (botaoTodos) {
        botaoTodos.classList.add('ativo'); 
        aplicarFiltros('Todos', ''); 
    } else {
        renderizarEventos(eventos); 
    }

}); 

