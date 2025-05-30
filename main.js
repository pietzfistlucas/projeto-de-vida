const botoes =document.querySelectorAll(".botao");
const botoes =document.querySelectorAll(".aba-conteudo");

for (let i = 0;<botoes.length; j++){
botoes[i].onclick = function () {

    for (let j = 0; j < botoes.length; j++){
      botoes[j].classList.remove("ativo");
      texto[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    texto[j].classList.remove("ativo");
}
}

