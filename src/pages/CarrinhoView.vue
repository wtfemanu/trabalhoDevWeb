<script setup>
import { onMounted } from 'vue'
import rodape from '../components/rodape.vue'
import { useCartStore } from '../stores/cartStore'
const cartStore = useCartStore()
const { aumentar, diminuir, remover, limpar } = cartStore

onMounted(() => {
  cartStore.carregarCarrinho()
})
</script>

<template>
  <div class="mainCart">
    <h1>Carrinho</h1>

    <div class="legenda">
      <div class="item"><h2>Título</h2></div>
      <div class="buttons"><h2>Quantidade</h2></div>
      <div class="subtotal"><h2>Subtotal</h2></div>
    </div>

    {{ carrinho }}

    <div v-for="item in cartStore.carrinho" :key="item.id" class="cart-info">
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
          <button class="btn-remover" @click="diminuir(item)"><span>-</span></button>
          <span>{{ item.quantidade }}</span>
          <button class="btn-adicionar" @click="aumentar(item.id)"><span>+</span></button>
        </div>
      </div>

      <div class="subtotal">
        <p>R$ {{ (item.preco * item.quantidade).toFixed(2) }}</p>
      </div>
    </div>

    <div class="last">
      <button id="limpar-carrinho" @click="cartStore.limpar"><span>Limpar Carrinho</span></button>
      <button id="pagar" @click="cartStore.limpar"><span>pagar</span></button>
      <div id="cart-total">Total: R$ {{ cartStore.total }}</div>
    </div>
  </div>

  <rodape />
</template>

<style>
.mainCart {
  display: flex;
  flex-direction: column;
  background-color: #303539;
  color: #e1ebed;
  padding: 100px 100px;
}

.mainCart h1 {
  font-family: var(--font-roboto);
  padding-bottom: 25px;
  background: linear-gradient(to left, #ffe556, #00bcf0, #ffe556);
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
/* ---------------- REMOVER ITEM (vermelho) ---------------- */
.img-remover .btn-remover-item {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #c8412d;
  background-color: transparent;
  border: 1px solid #c8412d;
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
  background-color: #c8412d;
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
  color: #303539;
  background-color: #c8412d;
  border-color: #c8412d;
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
  color: #c8412d;
  border: 1px solid #c8412d;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease;
}

button.btn-remover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #c8412d;
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
  color: #303539;
  background-color: #c8412d;
  border-color: #c8412d;
}

button.btn-remover span {
  position: relative;
  z-index: 1;
}

/* ---------------- ADICIONAR (verde) ---------------- */
button.btn-adicionar {
  color: #15772d;
  border: 1px solid #15772d;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease;
}

button.btn-adicionar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #15772d;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.5s ease;
  z-index: 0;
}

button.btn-adicionar:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

button.btn-adicionar:hover {
  color: #303539;
  background-color: #15772d;
  border-color: #15772d;
}

button.btn-adicionar span {
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
/* ---------------- LIMPAR CARRINHO ---------------- */
button#limpar-carrinho {
  color: #c8412d;
  padding: 10px 20px;
  border: 1px solid #c8412d;
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  transition:
    color 0.5s ease,
    background-color 0.5s ease,
    border-color 0.5s ease;
}

button#limpar-carrinho::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #c8412d;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.5s ease;
  z-index: 0;
}

button#limpar-carrinho:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

button#limpar-carrinho:hover {
  color: #303539;
  background-color: #c8412d;
  border-color: #c8412d;
}

button#limpar-carrinho span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  font-size: 25px;
  position: relative;
  z-index: 2;
}

button#pagar {
  color: #15772d;
  padding: 10px 20px;
  border: 1px solid #15772d;
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  transition:
    color 0.5s ease,
    background-color 0.5s ease,
    border-color 0.5s ease;
}

button#pagar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #15772d;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.5s ease;
  z-index: 0;
}

button#pagar:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

button#pagar:hover {
  color: #303539;
  background-color: #15772d;
  border-color: #15772d;
}

button#pagar span {
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

  background: linear-gradient(to left, #ffe556, #00bcf0, #ffe556);
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
