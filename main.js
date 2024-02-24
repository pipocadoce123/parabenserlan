const baloes = document.getElementById("baloes");

function removeBaloes(){
    baloes.style = "display:none";
}

setTimeout(removeBaloes,2900);

const botaoPresente = document.getElementById("botaoPresente");
const presente = document.getElementById("presente");

botaoPresente.addEventListener("click", () => {
    presente.classList.add("show");
})

const fechaPresente = document.getElementById("fechaPresente");

fechaPresente.addEventListener("click", () => {
    presente.classList.remove("show");
})

const botaoGaleria = document.getElementById("galeria");
const galeriaFotos = document.getElementById("galeriaFotos");
const fechaGaleria = document.getElementById("fechaGaleria");

botaoGaleria.addEventListener("click", () => {
    galeriaFotos.classList.add("show");
})

fechaGaleria.addEventListener("click", () => {
    galeriaFotos.classList.remove("show");
})

const botaoMusicas = document.getElementById("musicas");
const listaMusicas = document.getElementById("listaMusicas");
const fechaMusicas = document.getElementById("fechaMusicas");

botaoMusicas.addEventListener("click", () => {
    listaMusicas.classList.add("show");
})

fechaMusicas.addEventListener("click", () => {
    listaMusicas.classList.remove("show");
})