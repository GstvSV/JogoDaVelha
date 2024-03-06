const slots = document.querySelectorAll(".slot");
const titulo = document.querySelector(".title");
const botao = document.querySelector(".button");
const linha = document.querySelector(".line");
const jogoContainer = document.querySelector(".jogo-container");
let cont = 0;
let spaces = new Array(9).fill(null);

function riscar(){
    if(spaces[0] !== null && spaces[0] === spaces[3] && spaces[0] === spaces[6]){
        linha.style.transitionProperty = "width";
        linha.style.top = "48px"
        linha.style.left = "10px"
        linha.style.width = "280px";
        linha.style.height = "2px";
    }

    if(spaces[1] !== null && spaces[1] === spaces[4] && spaces[1] === spaces[7]){
        linha.style.transitionProperty = "width";
        linha.style.top = "148px";
        linha.style.left = "10px"
        linha.style.width = "280px";
        linha.style.height = "2px";
    }

    if(spaces[2] !== null && spaces[2] === spaces[5] && spaces[2] === spaces[8]){
        linha.style.transitionProperty = "width";
        linha.style.top = "248px";
        linha.style.left = "10px"
        linha.style.width = "280px";
        linha.style.height = "2px";
    }

    if(spaces[0] !== null && spaces[0] === spaces[1] && spaces[0] === spaces[2]){
        linha.style.transitionProperty = "height";
        linha.style.top = "10px"
        linha.style.left = "48px";
        linha.style.width = "2px";
        linha.style.height = "280px";
    }

    if(spaces[3] !== null && spaces[3] === spaces[4] && spaces[3] === spaces[5]){
        linha.style.transitionProperty = "height";
        linha.style.top = "10px"
        linha.style.left = "148px";
        linha.style.width = "2px";
        linha.style.height = "280px";
    }

    if(spaces[6] !== null && spaces[6] === spaces[7] && spaces[6] === spaces[8]){
        linha.style.transitionProperty = "height";
        linha.style.top = "10px"
        linha.style.left = "248px";
        linha.style.width = "2px";
        linha.style.height = "280px";
    }
    
    if(spaces[0] !== null && spaces[0] === spaces[4] && spaces[0] === spaces[8]){
        linha.style.transitionProperty = "width";
        linha.style.top = "10px"
        linha.style.left = "10px";
        linha.style.width = "390px";
        linha.style.height = "2px";
        linha.style.transform = "rotate(45deg)";
        linha.style.transformOrigin = "left center";
    }

    if(spaces[6] !== null && spaces[6] === spaces[4] && spaces[6] === spaces[2]){
        linha.style.transitionProperty = "width";
        linha.style.top = "10px"
        linha.style.right = "10px";
        linha.style.left = "auto";
        linha.style.width = "390px";
        linha.style.height = "2px";
        linha.style.transform = "rotate(-45deg)";
        linha.style.transformOrigin = "right center";
    }

}

function ganhou() {
    if (
        (spaces[0] && spaces[0] === spaces[1] && spaces[0] === spaces[2]) ||
        (spaces[0] && spaces[0] === spaces[3] && spaces[0] === spaces[6]) ||
        (spaces[0] && spaces[0] === spaces[4] && spaces[0] === spaces[8]) ||
        (spaces[3] && spaces[3] === spaces[4] && spaces[3] === spaces[5]) ||
        (spaces[6] && spaces[6] === spaces[7] && spaces[6] === spaces[8]) ||
        (spaces[6] && spaces[6] === spaces[4] && spaces[6] === spaces[2]) ||
        (spaces[2] && spaces[2] === spaces[5] && spaces[2] === spaces[8]) ||
        (spaces[1] && spaces[1] === spaces[4] && spaces[1] === spaces[7])
    ) {
        if(cont % 2 == 0){
            titulo.innerHTML = "O ganhou!"
        }else{
            titulo.innerHTML = "X ganhou!"
        }
        jogoContainer.style.pointerEvents = "none";
        riscar();
    }else{
        if(cont === 9){
            titulo.innerHTML = "O jogo empatou!";
        }
    }
}

function reset() {
    slots.forEach((slot, i) => {
        slot.innerHTML = " ";
        slot.classList.add("disponivel");
        cont = 0;
        titulo.innerHTML = "Jogo da velha";
        spaces[i] = null; // Reinicia o array de espaços
    });
    
    linha.style.width = "0";
    linha.style.height = "0";
    linha.style.transform = "rotate(0)";
    jogoContainer.style.pointerEvents = "all";
}

slots.forEach((slot, i) => {
    slot.addEventListener("click", () => {
        if (slot.classList.contains("disponivel")) {
            if (cont % 2 == 0) {
                slot.innerHTML = "X";
                spaces[i] = "X";
            } else {
                slot.innerHTML = "O";
                spaces[i] = "O";
            }

            cont++;
            slot.classList.remove("disponivel");
            ganhou();
            
        }
    });
});

botao.addEventListener("click", reset);
