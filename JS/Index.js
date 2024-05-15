// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

// Función que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    if (skills) {
        var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if (distancia_skills >= 300) {
            document.getElementById("html").classList.add("barra-progreso1");
            document.getElementById("js").classList.add("barra-progreso2");
            document.getElementById("bd").classList.add("barra-progreso3");
            document.getElementById("c").classList.add("barra-progreso4");
            document.getElementById("scharp").classList.add("barra-progreso5");
            document.getElementById("ph").classList.add("barra-progreso6");
        }
    } else {
        console.error('Elemento con ID "skills" no encontrado');
    }
}

// Función para abrir el popup
function abrirPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// Función para cerrar el popup
function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
