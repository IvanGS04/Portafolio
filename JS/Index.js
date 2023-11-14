//Funcionalidad del loader
window.addEventListener("load", function(){
    this.document.getElementById("loader").classList.toggle("loader2");
});

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("office");
        habilidades[3].classList.add("cmasmas");
        habilidades[4].classList.add("ccharp");
        habilidades[5].classList.add("javaB");
        habilidades[6].classList.add("phy");
        habilidades[7].classList.add("css");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("dedicacion");
       

    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 