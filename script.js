document.addEventListener("DOMContentLoaded", function () {
    // Gestion du menu mobile
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("hidden");
    });

    // Défilement fluide des ancres
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

