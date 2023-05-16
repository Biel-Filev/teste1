const botaoAlteraTema = document.getElementById("botao-altera-tema");
const body = document.querySelector("body");
const imagemBotaoAlteraTema = document.querySelector(".imagem-botao")

botaoAlteraTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro");
        imagemBotaoAlteraTema.setAttribute("src", "./imagens/sun.png");
    } else {
        body.classList.add("modo-escuro");
        imagemBotaoAlteraTema.setAttribute("src", "./imagens/moon.png");
    }
});