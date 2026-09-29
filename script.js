/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {

    document.documentElement.setAttribute("data-theme", "dark");

    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

}


themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {

        document.documentElement.removeAttribute("data-theme");

        localStorage.setItem("portfolio-theme", "light");

        themeToggle.innerHTML =
            '<i class="fas fa-moon"></i>';

    } else {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        localStorage.setItem("portfolio-theme", "dark");

        themeToggle.innerHTML =
            '<i class="fas fa-sun"></i>';

    }

});


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement = document.querySelector(".typing-text");

const typingWords = [
    "Software Developer",
    "Web Developer",
    "Problem Solver",
    "Technology Enthusiast"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = typingWords[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= typingWords.length) {
                wordIndex = 0;
            }

        }

    }

    const speed = deleting ? 45 : 90;

    setTimeout(typeEffect, speed);
}


typeEffect();


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks =
    document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-text, " +
    ".about-card, " +
    ".skill-card, " +
    ".timeline-item, " +
    ".project-card, " +
    ".education-card, " +
    ".cert-card, " +
    ".organization-card, " +
    ".contact-box"
);


revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById("currentYear");

currentYear.textContent =
    new Date().getFullYear();


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================================
   PREVENT EMPTY PLACEHOLDER LINKS
========================================================= */

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", event => {
        event.preventDefault();
    });

});
