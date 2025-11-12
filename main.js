const reset = document.getElementById('reset');
const bloco = document.getElementById('bloco');
const mais = document.getElementById('add')
const menos = document.getElementById('sub')
const cinza = document.getElementById('cinza')
const apagar = document.getElementById('apagar')

const tamBloco = 800-4;

let nDeQuadradosPorEixo = 16;

let cor = 333

cinza.addEventListener('click', () => {
    cor = '333'
})

apagar.addEventListener('click', () => {
    cor = 'FFF'
})

mais.addEventListener('click', () => {
    nDeQuadradosPorEixo++
    criarGrid(nDeQuadradosPorEixo)
})

menos.addEventListener('click', () => {
    nDeQuadradosPorEixo--
    criarGrid(nDeQuadradosPorEixo)
})

console.log(nDeQuadradosPorEixo)

function criarGrid(nDeQuadradosPorEixo) {
  bloco.innerHTML = '';
  const tamQuadrado = tamBloco / nDeQuadradosPorEixo;

  for (let i = 0; i < nDeQuadradosPorEixo * nDeQuadradosPorEixo; i++) {
    const quadrado = document.createElement('div');
    quadrado.classList.add('quadrado');
    quadrado.style.width = `${tamQuadrado}px`;
    quadrado.style.height = `${tamQuadrado}px`;
    quadrado.addEventListener('mouseenter', () => {
      quadrado.style.background = `#${cor}`;
    });
    bloco.appendChild(quadrado);
  }
}

reset.addEventListener('click', () => {
    nDeQuadradosPorEixo = 16
    criarGrid(nDeQuadradosPorEixo)
})

criarGrid(nDeQuadradosPorEixo);
