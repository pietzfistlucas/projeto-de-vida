const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll(".aba-conteudo");

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

  const contadores = document.querySelectorAll(".contador");
  const tempoObjetivo1 = new Date("2028-12-30T00:00:00");


  contadores[0].textContent = calculaTempo(tempoObjetivo1);

  function calculaTempo(tempoObjetivo); {
    let tempoAtual = new date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor (segundos / 60);
    let horas = Math.floor (horas / 60);
    let dias = Math.floor (dias / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    retun dias + " dias " + " horas " + " horas " + " minutos " + " minutos " + " segundos " + " segundos ";
  }
