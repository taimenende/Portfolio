document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
    const body = document.body;

    // Verificar se existe alguma configuração salva no localStorage
    let savedTheme = localStorage.getItem("theme");

    // Se não existir configuração, definir o tema escuro como padrão
    if (!savedTheme) {
        savedTheme = "dark";
        localStorage.setItem("theme", "dark");
    }

    // Aplicar o tema baseado no valor de `savedTheme`
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        sunIcon.style.display = "block"; // Mostrar ícone do sol
        moonIcon.style.display = "none"; // Esconder ícone da lua
    } else {
        body.classList.add("light-mode");
        sunIcon.style.display = "none"; // Esconder ícone do sol
        moonIcon.style.display = "block"; // Mostrar ícone da lua
    }

    // Alternar entre temas ao clicar no botão
    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            sunIcon.style.display = "none"; // Esconder ícone do sol
            moonIcon.style.display = "block"; // Mostrar ícone da lua
            localStorage.setItem("theme", "light"); // Salvar tema claro no localStorage
        } else {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            sunIcon.style.display = "block"; // Mostrar ícone do sol
            moonIcon.style.display = "none"; // Esconder ícone da lua
            localStorage.setItem("theme", "dark"); // Salvar tema escuro no localStorage
        }
    });
});
