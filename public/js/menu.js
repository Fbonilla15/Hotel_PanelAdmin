let icon1 = document.getElementById("icon1");
let menu1 = document.getElementById("menu1");
const showMenu1 = (flag) => {
    if (flag) {
        icon1.classList.toggle("rotate-180");
        menu1.classList.toggle("hidden")
    }
}

let Main = document.getElementById("Main");
let contenido = document.getElementById("contenido");
let open = document.getElementById("open");
let close = document.getElementById("close")

const showNav = (flag) => {
    if (flag) {
        Main.classList.toggle("translate-x-[-100%]")
        Main.classList.toggle("translate-x-0")
        Main.classList.toggle("sm:translate-x-[-100%]")
        Main.classList.toggle("sm:translate-x-0")
        contenido.classList.toggle("sm:ml-64")
        open.classList.toggle("hidden");
        close.classList.toggle("hidden")
    }
};