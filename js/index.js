document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
    const body = document.body;


    // checking preferences from localStorages
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode"); //Adding dark mode to the body
        sunIcon.style.display = "block"; //displaying sun icon
        moonIcon.style.display = "none"; //excluding moon icon
    } else {
        body.classList.add("light-mode"); 
        sunIcon.style.display = "none";  
        moonIcon.style.display = "block"; 
    }

    // click event to change between the themes
    themeToggle.addEventListener("click", () => {
        console.log("Click captured!"); //testing for the hundredth timeee
        if (body.classList.contains("dark-mode")) {
            //behavior after the click, when in the dark mode
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            sunIcon.style.display = "none";  
            moonIcon.style.display = "block"; 
            localStorage.setItem("theme", "light"); 
        } else {
            //behavior after the click, when in the light mode
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            sunIcon.style.display = "block"; 
            moonIcon.style.display = "none"; 
            localStorage.setItem("theme", "dark"); 
        }
    });
});


const menuToggle = document.querySelector('#menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
