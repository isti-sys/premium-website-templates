/*
=========================================
NAVBAR
=========================================
*/

function initNavbar() {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add(
                "navbar-glass",
                "shadow-lg"
            );

        } else {

            navbar.classList.remove(
                "navbar-glass",
                "shadow-lg"
            );

        }

    });

}