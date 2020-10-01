















document.querySelector("form")
.addEventListener("submit", e => {
    console.log("enviar o formulário")

    // para evitar o envio do formulário.
    e.preventDefault();
});