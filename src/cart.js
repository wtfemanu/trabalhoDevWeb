// Lista de produtos
const produtos = [
  {
      id: 1,
      titulo: 'HQ 1',
      empresa: 'Invincible Comics',
      preco: 29.9,

  },
  {
      id: 2,
      titulo: 'HQ 32',
      empresa: 'Invincible Comics',
      preco: 29.9,

  },
  {
      id: 3,
      titulo: 'HQ 50',
      empresa: 'Invincible Comics',
      preco: 29.9,

  },
  {
      id: 4,
      titulo: 'HQ 72' ,
      empresa: 'Invincible Comics',
      preco: 29.9,

  },
  {
      id: 5,
      titulo: 'HQ 86',
      empresa: 'Invincible Comics',
      preco: 29.9,

  },
  {
    id: 6,
    titulo: 'HQ 102',
    empresa: 'Invincible Comics',
    preco: 29.9,

},
{
    id: 7,
    titulo: 'HQ 129',
    empresa: 'Invincible Comics',
    preco: 29.,

},
{
    id: 8,
    titulo: 'HQ 144',
    empresa: 'Invincible Comics',
    preco: 199.9,

},
];

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // Verifica se o produto já está no carrinho
  const existente = carrinho.find(item => item.id === produto.id);
  if (existente) {
    // Se o produto já existir, aumenta a quantidade
    existente.quantidade += 1;
  } else {
    // Se o produto não existir, adiciona ele ao carrinho
    carrinho.push({ ...produto, quantidade: 1 });
  }

  // Atualiza o carrinho no localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Função para criar os cards de produtos
function criarCards() {
  const container1 = document.getElementById('product-cards-1');
  const container2 = document.getElementById('product-cards-2');

  const metade = Math.ceil(produtos.length / 2);
  const parte1 = produtos.slice(0, metade);
  const parte2 = produtos.slice(metade);

  const criarCardHTML = (produto) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="cardText">
        <h2>${produto.nome}</h2>
        <p>${produto.descricao}</p>
        <h3>${produto.preco}</h3>
      </div>
      <a href="#" class="comprar" data-id="${produto.id}">
        <i class="fa-solid fa-cart-shopping"></i><span>Comprar</span>
      </a>
    `;
    // Adiciona evento de clique ao botão de comprar
    card.querySelector('.comprar').addEventListener('click', (e) => {
      e.preventDefault();
      adicionarAoCarrinho(produto);
    });
    return card;
  };

  parte1.forEach(prod => container1.appendChild(criarCardHTML(prod)));
  parte2.forEach(prod => container2.appendChild(criarCardHTML(prod)));
}

// Chama a função ao carregar o conteúdo da página
document.addEventListener('DOMContentLoaded', criarCards);

//quadrinho random

document.addEventListener("DOMContentLoaded", () => {
  const numeroAleatorio = Math.floor(Math.random() * 8) + 1; // número de 1 a 8
  const caminhoImagem = `assets/hq${numeroAleatorio}.jpeg`;

  const img = document.querySelector(".imgContainer img");
  if (img) {
    img.src = caminhoImagem;
  }
});
