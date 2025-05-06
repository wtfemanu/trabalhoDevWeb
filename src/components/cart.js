// Lista de produtos
const produtos = [
  {
    id: 1,
    nome: "Invincible Vol. 1",
    descricao: "Invencible Comics",
    preco: "27,90",
    imagem: "/public/image/hq1.jpg"
  },
  {
    id: 2,
    nome: "Invincible Vol. 2",
    descricao: "Invencible Comics",
    preco: "27,90",
    imagem: "assets/hq2.jpeg"
  },
  {
    id: 3,
    nome: "Invincible Vol. 3",
    descricao: "Invencible Comics",
    preco: "27,90",
    imagem: "assets/hq3.jpeg"
  },
  {
    id: 4,
    nome: "Invincible Vol. 4",
    descricao: "Invencible Comics",
    preco: "27,90",
    imagem: "assets/hq4.jpeg"
  },
  {
    id: 5,
    nome: "Invincible Vol. 5",
    descricao: "Invencible Comics",
    preco: "27,90",
    imagem: "assets/hq5.jpeg"
  },
  {
    id: 6,
    nome: "Invincible Vol. 6",
    descricao: "Invencible Comics",
    preco: "27,90",
    imagem: "assets/hq6.jpeg"
  },
  {
    id: 7,
    nome: "Invincible Vol. 7",
    descricao: "Invencible Comics",
    preco: "27,90",
    imagem: "assets/hq7.jpeg"
  },
  {
    id: 8,
    nome: "Invincible Vol. 8",
    descricao: "Invencible Comics",
    preco: "27,90",
    imagem: "assets/hq8.jpeg"
  }
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
