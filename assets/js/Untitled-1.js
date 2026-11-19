
function GATO() {
    alert("KOKORO MANGA - Síguenos en Instagram");
}

function abrirSoporte() {
    alert("Centro de Soporte Kokoro Manga");
}

function publicarComentario() {
    const input = document.getElementById('comentarioInput');
    const texto = input.value.trim();

    if (texto === "") {
        alert("Por favor, escribe un comentario antes de publicar.");
    } else {
        alert("¡Comentario publicado en Kokoro Manga!");
        input.value = "";
    }
}

function toggleMenu() {
    const menuMovil = document.getElementById('menuMovil');
    menuMovil.classList.toggle('abierto');
}

const formulario = document.getElementById('formularioContacto');
if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('¡Formulario enviado con éxito!');
        formulario.reset();
    });
}

const secciones = document.querySelectorAll("section");
const enlacesNav = document.querySelectorAll("nav a, .menu-movil a");

window.addEventListener("scroll", () => {
    let actual = "";
    secciones.forEach((sec) => {
        const topSeccion = sec.offsetTop - 120;
        if (window.scrollY >= topSeccion) {
            actual = sec.getAttribute("id");
        }
    });

    enlacesNav.forEach((enlace) => {
        if (enlace.getAttribute("href") === `#${actual}`) {
            enlacesNav.forEach(e => e.classList.remove("activo"));
            enlace.classList.add("activo");
        }
    });
});
