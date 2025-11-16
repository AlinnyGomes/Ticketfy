    // Pegando os elementos do html

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");


  // Função da aba entrar
loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    loginForm.classList.add("active");
    registerForm.classList.remove("active");
});

  // Função da aba cadastrar

registerTab.addEventListener("click", () => {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    registerForm.classList.add("active");
    loginForm.classList.remove("active");
});


// Ingressos caindo 

const container = document.querySelector('.falling-tickets-container');

// Ajuste este número para controlar quantos ingressos você quer no total
const totalTickets = 30; 

function createFallingTicket() {
    // 1. Cria o elemento div
    const ticket = document.createElement('div');
    ticket.classList.add('mini-ticket');

    // 2. Define a posição horizontal aleatória (vw = viewport width)
    const randomX = Math.random() * 100; 
    ticket.style.left = `${randomX}vw`;

    // 3. Define a duração e o atraso aleatórios
    const randomDuration = Math.random() * 8 + 5; // Duração entre 5s e 13s
    const randomDelay = Math.random() * 5; // Atraso inicial entre 0s e 5s

    ticket.style.animationDuration = `${randomDuration}s`;
    ticket.style.animationDelay = `${randomDelay}s`;

    // 4. Adiciona o ingresso ao contêiner
    container.appendChild(ticket);

    // 5. Remove e recria o ingresso após a animação terminar para um fluxo infinito
    const totalTime = (randomDuration + randomDelay) * 1000;
    setTimeout(() => {
        ticket.remove();
        createFallingTicket(); // Cria um novo para manter o fluxo
    }, totalTime); 
}

// Inicia a criação do lote inicial de ingressos
// Sem este loop, nada será criado inicialmente!
for (let i = 0; i < totalTickets; i++) {
    // Adiciona um pequeno atraso inicial para que todos não comecem ao mesmo tempo
    setTimeout(createFallingTicket, i * 200); 
}