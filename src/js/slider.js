// 1) CRIAÇÃO DAS VARIÁVEIS GLOBAIS

const imagens = document.querySelectorAll(".slide"); // Seleciona todo array de slides
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

// 2) CRIAÇÃO DO EVENTO DA SETA DE AVANÇAR

setaAvancar.addEventListener("click", function (){

    if (imagemAtual === imagens.length - 1){
        return;
    }

    imagemAtual++;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

// 3) CRIAÇÃO DO EVENTO DA SETA DE VOLTAR

setaVoltar.addEventListener("click", function (){

    if (imagemAtual === 0){
        return;
    }

    imagemAtual--;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

// 4) FUNÇÕES 

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
}

function mostrarImagem(){
    imagens[imagemAtual].classList.add("mostrar");
}

function mostrarOuEsconderSetas(){

    const naoEhAPrimeiraImagem = (imagemAtual !== 0);
    if (naoEhAPrimeiraImagem){
        setaVoltar.classList.remove("opacidade");
    }
    else{
        setaVoltar.classList.add("opacidade");
    }

    const chegouNaUltimaImagem = (imagemAtual !== 0) && (imagemAtual === imagens.length - 1);
    if (chegouNaUltimaImagem){
        setaAvancar.classList.add("opacidade");
    }
    else{
        setaAvancar.classList.remove("opacidade");
    }

}