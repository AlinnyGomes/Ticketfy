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
const totalTickets = 50; 

function createFallingTicket() {
    // Cria o elemento div
    const ticket = document.createElement('div');
    ticket.classList.add('mini-ticket');
    // Define a posição
    const randomX = Math.random() * 100; 
    ticket.style.left = `${randomX}vw`;

    //Define a duração e o atraso 
    const randomDuration = Math.random() * 8 + 5; // Duração 
    const randomDelay = Math.random() * 5; // Atraso inicial

    ticket.style.animationDuration = `${randomDuration}s`;
    ticket.style.animationDelay = `${randomDelay}s`;

    // 4. Adiciona o ingresso ao contêiner
    container.appendChild(ticket);

    // fluxo infinito
    const totalTime = (randomDuration + randomDelay) * 1000;
    setTimeout(() => {
        ticket.remove();
        createFallingTicket(); 
    }, totalTime); 
}

    // cria lote inicial de ingressos
    for (let i = 0; i < totalTickets; i++) {
    // atraso inicial 
    setTimeout(createFallingTicket, i * 200); 
}