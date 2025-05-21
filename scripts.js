let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let botaoCarrinho = document.querySelector(".botao-carrinho")

function mudarVisual(cor, imagem) {
    tenis.classList.add("troca-efeito")

    // muda o fundo do body
    body.style.background = cor;

    // muda a cor do botão
    botaoCarrinho.style.background = cor;

    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")
    }, 500)
}
