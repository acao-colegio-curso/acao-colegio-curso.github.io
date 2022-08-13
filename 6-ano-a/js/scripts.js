const button = document.querySelector("#button");
const menu = document.querySelector("#menu-lateral");

function toggleMenu(event) {

    if(event.type === "touchstart") event.preventDefault();
    menu.classList.toggle("active");

    const active = menu.classList.contains("active");

    // if (window.screen.availWidth >= 800) {
    //     // menu.classList.add("active");
    //     console.log("oi");
    // }

    if (active) {
        button.innerHTML = `<span class="close"></span>`;
    } else {
        button.innerHTML = `<span class="open"></span>`;
    }

}

button.addEventListener("click", toggleMenu);
button.addEventListener("touchstart", toggleMenu);
