/*
=========================================
SCROLL BUTTON
=========================================
*/

function initScrollButton() {

    const button = document.getElementById("topBtn");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.remove("hidden");

        } else {

            button.classList.add("hidden");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

/*
=========================================
PARALLAX HERO
=========================================
*/

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".parallax");

    if (!hero) return;

    hero.style.transform =
        `translateY(${window.scrollY * 0.35}px)`;

});

}