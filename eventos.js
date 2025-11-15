document.addEventListener('DOMContentLoaded', () => {
    const listaEventosDiv = document.getElementById('lista-eventos');

    // Dados dos Eventos 
    const eventos = [
        { 
            id: 1, 
            nome: "Festa a fantasia", 
            data: "20/DEZ", 
            local: "Praça do Artesão, Centro", 
            Horário: "18:00", 
            imagem: "https://via.placeholder.com/600x400/FFDD44/333333?text=ARTE+LOCAL" 
        },
        { 
            id: 2, 
            nome: "Competição de pintura", 
            data: "25/DEZ", 
            local: "Café Cultural Boêmio", 
            Horário: "14:30",
            imagem: "https://via.placeholder.com/600x400/FF7F41/FFFFFF?text=STAND-UP" 
        },
        { 
            id: 3, 
            nome: "Torneio de Vôlei de Praia", 
            data: "05/JAN", 
            local: "Praia do Sol Nascente", 
            Horário: "15:30", 
            imagem: "https://via.placeholder.com/600x400/5A7D7C/FFFFFF?text=VOLEI+DE+PRAIA" 
        },
        { 
            id: 4, 
            nome: "Game Party", 
            data: "12/JAN", 
            local: "Arena Gamer X", 
            Horário: "19:00", 
            imagem: "https://via.placeholder.com/600x400/FFDD44/333333?text=GAME+PARTY" 
        },
        { 
            id: 5, 
            nome: "Workshop de Graffiti", 
            data: "18/JAN", 
            local: "Muro Livre da Cidade", 
            Horário: "8:00", 
            imagem: "https://via.placeholder.com/600x400/FF7F41/FFFFFF?text=GRAFFITI" 
        }
    ];

    // Função para Criar o HTML do Card de Evento
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
            </div>
        `;
        return card;
    };

    // Função para Renderizar Eventos
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

    // Carregar Eventos na Inicialização
    renderizarEventos(eventos);

    // Botão de criar eventos
    const botaoFlutuante = document.querySelector('.botao-flutuante');
    botaoFlutuante.addEventListener('click', () => {
        alert('Botão "+" clicado! Abrir formulário para novo evento?');
        
    });

    // funcionalidade para os ícones de cabeçalho
    document.querySelector('.menu-icon').addEventListener('click', () => {
        alert('Menu lateral aberto!');
    });

    document.querySelector('.search-icon').addEventListener('click', () => {
        alert('Barra de pesquisa ativada!');
    });
});

