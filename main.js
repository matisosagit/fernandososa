const nav = document.querySelector("#barra");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    barra.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    barra.classList.remove("visible");
});


