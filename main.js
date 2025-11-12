const reset = document.getElementById('reset');
const bloco = document.getElementById('bloco');
const mais = document.getElementById('add')
const menos = document.getElementById('sub')

const tamBloco = 800-4;

let nDeQuadradosPorEixo = 16;

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
      quadrado.style.background = '#333';
    });
    bloco.appendChild(quadrado);
  }
}

reset.addEventListener('click', () => {
    nDeQuadradosPorEixo = 16
    criarGrid(nDeQuadradosPorEixo)
})

criarGrid(nDeQuadradosPorEixo);
