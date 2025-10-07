const form = document.querySelector(".formulario");
const mascara = document.querySelector(".mascaraForm");


function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function fecharFormulario() {
    form.style.left = "-600px"
    mascara.style.visibility = "hidden"
}

