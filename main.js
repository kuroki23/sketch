const reset = document.getElementById("reset");
const bloco = document.getElementById("bloco");
const mais = document.getElementById("add");
const menos = document.getElementById("sub");
const cinza = document.getElementById("cinza");
const apagar = document.getElementById("apagar");
const rainbow = document.getElementById("colorido");
const hold = document.getElementById("hold");
const resetgrid = document.getElementById("resetgrid");
const nightmode = document.getElementById("nightmode");
const borda = document.getElementById("borda");
const left = document.getElementById("left");
const colorpicker = document.getElementById("colorpicker");

const tamBloco = 800 - 4;

let nDeQuadradosPorEixo = 16;

let cor = "rgb(61, 61, 61)";

let red = 61;
let blue = 61;
let green = 61;

let colorido = false;

let segurar = false;

let mouseDown = false;

document.addEventListener("pointerdown", () => (mouseDown = true));
document.addEventListener("pointerup", () => (mouseDown = false));
document.addEventListener("pointerleave", () => {
  mouseDown = false;
});

colorpicker.addEventListener("input", () => {
  cor = colorpicker.value;
  colorpicker.style.backgroundColor = cor;
  colorido = false;
});

hold.addEventListener("click", () => {
  segurar = !segurar;
  console.log(segurar);
});

rainbow.addEventListener("click", () => {
  colorido = true;
  console.log(cor);
});

cinza.addEventListener("click", () => {
  red = 61;
  blue = 61;
  green = 61;
  cor = "rgb(" + red + ", " + green + ", " + blue + ")";
  colorido = false;
});

apagar.addEventListener("click", () => {
  red = 255;
  blue = 255;
  green = 255;
  cor = "rgb(" + red + ", " + green + ", " + blue + ")";
  colorido = false;
});

mais.addEventListener("click", () => {
  nDeQuadradosPorEixo++;
  criarGrid(nDeQuadradosPorEixo);
});

menos.addEventListener("click", () => {
  nDeQuadradosPorEixo--;
  criarGrid(nDeQuadradosPorEixo);
});

console.log(nDeQuadradosPorEixo);

function criarGrid(nDeQuadradosPorEixo) {
  bloco.innerHTML = "";
  const tamQuadrado = tamBloco / nDeQuadradosPorEixo;

  for (let i = 0; i < nDeQuadradosPorEixo * nDeQuadradosPorEixo; i++) {
    const quadrado = document.createElement("div");
    quadrado.classList.add("quadrado");
    quadrado.style.width = `${tamQuadrado}px`;
    quadrado.style.height = `${tamQuadrado}px`;

    quadrado.addEventListener("pointerenter", () => {
      if (!segurar || mouseDown) {
        pintar(quadrado);
        return;
      }
    });

    // quadrado.addEventListener('mouseenter', () => {
    //   if (colorido === true) {
    //     cor = "rgb(" + Math.random()*255 + ", "+ Math.random()*255 + ", "  + Math.random()*255 + ")"
    //   }
    //   quadrado.style.background = `${cor}`;
    // });
    bloco.appendChild(quadrado);
  }
}

function pintar(quadrado) {
  if (colorido === true) {
    cor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
  }
  quadrado.style.background = cor;
}

reset.addEventListener("click", () => {
  nDeQuadradosPorEixo = 16;
  criarGrid(nDeQuadradosPorEixo);
});

resetgrid.addEventListener("click", () => {
  criarGrid(nDeQuadradosPorEixo);
});

criarGrid(nDeQuadradosPorEixo);

let night = false;

nightmode.addEventListener("click", () => {
  night = !night;

  if (night) {
    document.body.style.backgroundColor = "black";
    borda.style.backgroundColor = "rgb(23, 28, 31)";
    bloco.style.backgroundColor = "lightgrey";
    left.style.backgroundColor = "lightgrey";
    apagar.addEventListener("click", () => {
      cor = "lightgrey";
      colorido = false;
    });
  } else {
    document.body.style.backgroundColor = "";
    borda.style.backgroundColor = "";
    bloco.style.backgroundColor = "";
    left.style.backgroundColor = "";
  }

  console.log(night);
});
