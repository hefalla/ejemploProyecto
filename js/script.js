// ================================================
// REFERENCIAS AL DOM
// ================================================

const toTop = document.getElementById("topBtn");
const themeToggle = document.getElementById("themeToggle");


// ================================================
// SCROLL TO TOP
// ================================================

const scrollFunction = () => {
    toTop.style.display = window.scrollY > 100 ? "block" : "none";
};

const topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


// ================================================
// THEME TOGGLE
// ================================================

const applyTheme = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", theme);
};

const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "light" ? "dark" : "light");
};


// ================================================
// EVENTOS
// ================================================

window.addEventListener("scroll", scrollFunction);
toTop.addEventListener("click", topFunction);
themeToggle.addEventListener("click", toggleTheme);


// ================================================
// INICIALIZACIÓN
// Recupera la preferencia guardada o usa "light" por defecto
// ================================================

applyTheme(localStorage.getItem("theme") || "light");
