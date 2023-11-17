//Funcionalidad del loader
window.addEventListener("load", function(){
    this.document.getElementById("loader").classList.toggle("loader2");
});

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("c").classList.add("barra-progreso4");
        document.getElementById("scharp").classList.add("barra-progreso5");
        document.getElementById("ph").classList.add("barra-progreso6");
    }
}