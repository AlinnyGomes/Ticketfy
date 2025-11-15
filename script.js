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
