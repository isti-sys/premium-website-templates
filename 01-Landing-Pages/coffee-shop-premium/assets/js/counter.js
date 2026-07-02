/*
=========================================
COUNTER
=========================================
*/

function animateCounter(element) {

    const target = Number(element.dataset.target);

    let count = 0;

    const speed = target / 120;

    const update = () => {

        count += speed;

        if (count < target) {

            element.innerText = Math.floor(count);

            requestAnimationFrame(update);

        } else {

            element.innerText = target;

        }

    };

    update();

}

function initCounter() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    counters.forEach(counter => {

        animateCounter(counter);

    });

}
