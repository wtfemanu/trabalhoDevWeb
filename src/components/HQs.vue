<template>
  <div class="main2">
    <h1>HQs</h1>
    <ul class="hq-list">
      <li v-for="produto in produtos" :key="produto.id" class="hq-item">
        <img :src="produto.imagem" :alt="produto.titulo" width="200" height="300" />
        <h2>{{ produto.titulo }}</h2>
        <p>{{ produto.empresa }}</p>
        <h3>R$ {{ produto.preco.toFixed(2) }}</h3>
        <button @click="adicionarAoCarrinho(produto)"><span><i class="fa-solid fa-cart-shopping"></i>Adicionar ao carrinho </span></button>
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

      const itemExistente = carrinho.find(item => item.id === produto.id);
      if (itemExistente) {

        itemExistente.quantidade += 1;
      } else {

        carrinho.push({ ...produto, quantidade: 1 });
      }


      localStorage.setItem('carrinho', JSON.stringify(carrinho));

    }
  }
};
</script>

<style>
 /* deixei isso aq só pra ter uma ideia padrão de como ficaria os bgl alinhado*/

 .hq-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  list-style: none;
  justify-content: center;
}

.hq-item {
display: flex;
flex-direction: column;
  width: calc(25% - 20px);
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;

}
.hq-item img{
width: 100%;
height: 90%;

}
.hq-item p{
 color: #aaa;
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

.hq-item  button {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    background-color: var(--invincible-black);
    color: var(--invincible-yellow);
    text-decoration: none;
    border: 1px solid;
    overflow: hidden;
    transition: color 0.3s ease-in-out, border 0.3s ease-in-out;
}

.hq-item button::before {
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

.hq-item button:hover::before {
    right: 0;
}

.hq-item button:hover {
    color: var(--invincible-black);
    border-color: var(--invincible-yellow);
}

.hq-item span, .hq-item span i{
  display: flex;
  gap: 5px;
    z-index: 1;
    font-size: 18px;
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
