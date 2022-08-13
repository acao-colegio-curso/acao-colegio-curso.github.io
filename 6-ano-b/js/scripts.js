const button = document.querySelector("#button");
const menu = document.querySelector("#menu-lateral");
const conteudo = document.querySelector(".section__conteudo");


// DESCKTOP
if (window.screen.availWidth >= 800) {
    menu.classList.add("active");
    button.style.display = "none";
    conteudo.style.width = "calc(100% - 200px)";
    conteudo.style.marginLeft = "200px";
}


function toggleMenu(event) {

    if(event.type === "touchstart") event.preventDefault();
    menu.classList.toggle("active");

    const active = menu.classList.contains("active");


    if (active) {
        button.innerHTML = `<span class="close"></span>`;
    } else {
        button.innerHTML = `<span class="open"></span>`;
    }

}

button.addEventListener("click", toggleMenu);
button.addEventListener("touchstart", toggleMenu);
