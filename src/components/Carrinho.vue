<script setup>
import { onMounted } from 'vue'
import SearchBar from './SearchBar.vue'
import rodape from './rodape.vue'
import cartStore from '../stores/cartStore.js'

const { carrinho, aumentar, diminuir, remover, limpar, total } = cartStore

onMounted(() => {
  cartStore.carregarCarrinho()
})
</script>

<template>
  <SearchBar />

  <div class="mainCart">
    <h1>Carrinho</h1>

    <div class="legenda">
      <div class="item"><h2>Título</h2></div>
      <div class="buttons"><h2>Quantidade</h2></div>
      <div class="subtotal"><h2>Subtotal</h2></div>
    </div>

    <div v-for="item in carrinho" :key="item.id" class="cart-info">
      <div class="item">
        <div class="img-remover">
          <img :src="item.imagem" :alt="item.titulo" />
          <button class="btn-remover-item" @click="remover(item.id)"><span>Remover</span></button>
        </div>
        <div class="atributos">
          <h2>{{ item.titulo }}</h2>
          <p>{{ item.empresa }}</p>
          <p>R$ {{ item.preco.toFixed(2) }}</p>
        </div>
      </div>
      <div class="buttons">
        <div class="organizer">
          <button class="btn-remover" @click="diminuir(item)">-</button>
          <span>{{ item.quantidade }}</span>
          <button class="btn-adicionar" @click="aumentar(item)">+</button>
        </div>
      </div>

      <div class="subtotal">
        <p>R$ {{ (item.preco * item.quantidade).toFixed(2) }}</p>
      </div>
    </div>

    <div class="last">
      <button id="limpar-carrinho" @click="limpar"><span>Limpar Carrinho</span></button>
      <p>.</p>
      <div id="cart-total">Total: R$ {{ total }}</div>
    </div>
  </div>

  <rodape />
</template>

<style>
.mainCart {
  display: flex;
  flex-direction: column;
  background-color: var(--invincible-black);
  color: var(--invincible-white);
  padding: 100px 100px;
}

.mainCart h1 {
  font-family: var(--font-roboto);
  padding-bottom: 25px;
  background: linear-gradient(
    to left,
    var(--invincible-yellow),
    var(--invincible-blue),
    var(--invincible-yellow)
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: gradientFlow 6s linear infinite;
}

.mainCart .legenda {
  display: flex;
  justify-content: space-around;
  padding: 25px 0 25px 0;
  border-bottom: solid 1px #aaa;
  font-family: var(--font-roboto);
}

.mainCart .legenda > * {
  flex: 1;
  display: flex;
  justify-content: center;
}
.legenda h2 {
  margin: 0;
}
.mainCart .cart-info {
  display: flex;
  justify-content: space-around;
  padding: 25px 0 25px 0;
  margin: 25px 0 25px 0;
  border-bottom: solid 1px #aaa;
}

.mainCart .cart-info > * {
  flex: 1;
  display: flex;
  justify-content: center;
}

.mainCart .cart-info h2 {
  margin: 0;
  font-family: var(--font-roboto);
}

.mainCart .cart-info .item {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.item .img-remover {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.img-remover .btn-remover-item {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: var(--invincible-red); /* Cor inicial do texto */
  background-color: transparent;
  border: 1px solid var(--invincible-red); /* Cor da borda */
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.img-remover .btn-remover-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--invincible-red);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
  z-index: 0;
}

.img-remover .btn-remover-item:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.img-remover .btn-remover-item:hover {
  color: var(--invincible-black);
  background-color: var(--invincible-red);
  border-color: var(--invincible-red);
}

.img-remover .btn-remover-item span {
  position: relative;
  z-index: 1;
}

.item img {
  height: 300px;
}

.item .atributos {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.mainCart .cart-info span p {
  color: #aaa;
}
.subtotal {
  display: flex;
  align-items: center;
}
.subtotal p {
  font-weight: bold;
  font-size: x-large;
  font-family: var(--font-roboto);
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons .organizer {
  display: flex;
  gap: 10px;
  align-items: center;
}
.buttons .organizer > * {
  font-size: x-large;
  font-weight: bold;
}
button.btn-remover,
button.btn-adicionar {
  position: relative;
  overflow: hidden;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease;
}

/* ---------------- REMOVER (vermelho) ---------------- */
button.btn-remover {
  color: var(--invincible-red);
  border: 1px solid var(--invincible-red);
}

button.btn-remover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--invincible-red);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.5s ease;
  z-index: 0;
}

button.btn-remover:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

button.btn-remover:hover {
  color: var(--invincible-black);
  border-color: var(--invincible-red);
  background-color: var(--invincible-red);
}

/* ---------------- ADICIONAR (verde) ---------------- */
.btn-adicionar {
  color: var(--invincible-green);
  border: 1px solid var(--invincible-green);
}

.btn-adicionar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--invincible-green);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.5s ease;
  z-index: 0;
}

.btn-adicionar:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.btn-adicionar:hover {
  color: var(--invincible-black);
  border-color: var(--invincible-green);
  background-color: var(--invincible-green);
}

.btn-remover span,
.btn-adicionar span {
  position: relative;
  z-index: 1;
}

.last {
  display: flex;
  margin-top: 25px;
  font-size: xx-large;
  font-family: var(--font-roboto);
}
.last > * {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.last p {
  color: transparent;
}
.last #limpar-carrinho {
  color: var(--invincible-red);
  padding: 10px 0 10px 0;
  border: 1px solid var(--invincible-red);
  background-color: transparent;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition:
    color 0.5s ease,
    background-color 0.5s ease,
    border-color 0.5s ease;
}

.last #limpar-carrinho::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--invincible-red);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.5s ease;
  z-index: 0;
}

.last #limpar-carrinho:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.last #limpar-carrinho:hover {
  color: var(--invincible-black);
  background-color: var(--invincible-red);
}

.last #limpar-carrinho span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  font-size: 25px;
  position: relative;
  z-index: 2;
}
.last #cart-total {
  font-family: var(--font-roboto);

  background: linear-gradient(
    to left,
    var(--invincible-yellow),
    var(--invincible-blue),
    var(--invincible-yellow)
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: gradientFlow 6s linear infinite;
}
@keyframes gradientFlow {
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: 0% center;
  }
}
</style>
