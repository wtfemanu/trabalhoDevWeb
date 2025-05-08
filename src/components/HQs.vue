<template>
  <div class="main2">
    <h1>HQs</h1>
    <ul>
      <li v-for="produto in produtos" :key="produto.id" class="hq-item">
        <img :src="produto.imagem" :alt="produto.titulo" width="200" height="300" />
        <h2>{{ produto.titulo }}</h2>
        <p>{{ produto.empresa }}</p>
        <h3>R$ {{ produto.preco.toFixed(2) }}</h3>
        <button @click="adicionarAoCarrinho(produto)">Adicionar ao carrinho</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListaDeLivros",
  data() {
    return {
      produtos: [
        { id: 1, titulo: 'HQ 1', empresa: 'Invincible Comics', preco: 29.90, imagem: 'public/image/hq1.jpg' },
        { id: 2, titulo: 'HQ 32', empresa: 'Invincible Comics', preco: 29.90, imagem: 'public/image/hq32.jpg' },
        { id: 3, titulo: 'HQ 50', empresa: 'Invincible Comics', preco: 29.90, imagem: 'public/image/hq50.jpg' },
        { id: 4, titulo: 'HQ 72', empresa: 'Invincible Comics', preco: 29.90, imagem: 'public/image/hq72.jpg' },
        { id: 5, titulo: 'HQ 86', empresa: 'Invincible Comics', preco: 29.90, imagem: 'public/image/hq86.jpg' },
        { id: 6, titulo: 'HQ 102', empresa: 'Invincible Comics', preco: 29.90, imagem: 'public/image/hq102.jpg' },
        { id: 7, titulo: 'HQ 129', empresa: 'Invincible Comics', preco: 29.90, imagem: 'public/image/hq129.jpg' },
        { id: 8, titulo: 'HQ 144', empresa: 'Invincible Comics', preco: 29.90, imagem: 'public/image/hq144.jpg' }
      ]
    };
  },
  methods: {
    adicionarAoCarrinho(produto) {
      let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

      // Verificar se o item já existe no carrinho
      const itemExistente = carrinho.find(item => item.id === produto.id);
      if (itemExistente) {
        // Se já existe, apenas aumentar a quantidade
        itemExistente.quantidade += 1;
      } else {
        // Caso contrário, adicionar o item com quantidade 1
        carrinho.push({ ...produto, quantidade: 1 });
      }

      // Atualizar o carrinho no localStorage
      localStorage.setItem('carrinho', JSON.stringify(carrinho));

      // Feedback ao usuário
      alert(`${produto.titulo} adicionado ao carrinho!`);
    }
  }
};
</script>

<style>
 /* deixei isso aq só pra ter uma ideia padrão de como ficaria os bgl alinhado*/
  .main2 ul{
    display: flex;
    flex-wrap: wrap
  }


.main2 {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 100px 100px;
    background-color: var(--invincible-black);
    color: var(--invincible-white);
    font-family: var(--font-roboto);
    position: relative;
    overflow: hidden;

}
.main2::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: linear-gradient(
        to right,
        var(--invincible-yellow),
        var(--invincible-blue),
        var(--invincible-yellow)
    );
    background-size: 200% 100%;
    animation: borderFlow 6s linear infinite;
}
.main2 h1 {
    font-size: 50px;
    margin-bottom: 50px;
    font-family: var(--font-roboto)
}

.main2 .cards {
    display: flex;
    gap: 50px;

}

.main2 .cards .card {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;
}

.card img {
    width: 100%;
    height: 90%
}

.card h2 {
    margin: 0;
}

.card p {
    color: #aaa;
}

.card a {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    color: var(--invincible-yellow);
    text-decoration: none;
    border: 1px solid;
    overflow: hidden;
    transition: color 0.3s ease-in-out, border 0.3s ease-in-out;
    gap: 5px;
}

.card a::before {
    content: '';
    position: absolute;
    top: 0;
    right: -100%;
    left: auto;
    width: 100%;
    height: 100%;
    background-color: var(--invincible-yellow);
    z-index: 0;
    transition: right 0.3s ease-in-out;
}

.card a:hover::before {
    right: 0;
}

.card a:hover {
    color: var(--invincible-black);
    border-color: var(--invincible-yellow);
}

.card a i,
.card a span {
    z-index: 1;
}

.cards2 {
    display: flex;
    gap: 50px;
}

.main2 .cards2 .card {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;
}
</style>
