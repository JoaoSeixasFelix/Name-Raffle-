
const str            = document.querySelector(".Sortear");
const textarea       = document.querySelector("textarea");
const tagResultado   = document.querySelector(".resultado p");
const popUpResultado = document.querySelector(".resultado");
const btnFechar      = document.querySelector (".fechar")


function pegarDados () {

    const valorCampo = textarea.value
    const listaNomes = valorCampo.split(",");
    const tamanhoArray = listaNomes.length;
    const posicaoNome = gerarNumero(tamanhoArray);
    const nome  = listaNomes[posicaoNome];

    mostrarResultado(nome);

    textarea.value = ""

}

str.addEventListener("click", pegarDados);

//Gerando Numero Aleatorio.

function gerarNumero (tamanhoArray){

    return Math.floor(Math.random() * (tamanhoArray - 0) + 0);

}

function mostrarResultado(nome){
    
    tagResultado.innerText = `Resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")
}

function fecharPopUp () {
    
    popUpResultado.classList.remove("mostrarResultado")
}

btnFechar.addEventListener("click", fecharPopUp)



