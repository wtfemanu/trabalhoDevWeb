<script setup>

</script>

<template>
  <div class="header">
    <nav>
      <div class="logo">
        <img src="/src/components/icons/Logo.png" alt="logo" />
      </div>

      <div class="buscar">
        <input type="text" placeholder="Pesquisar" />
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
      </div>

      <ul>
        <li><a href="#">Termos</a></li>
        <li><a href="#">Envio</a></li>
        <li><router-link to="/">Início</router-link></li>
        <li><a href="#">Devoluções</a></li>
      </ul>

      <div class="cart">
        <router-link to="/carrinho">
          <i class="fa-solid fa-cart-shopping"></i>
        </router-link>

      </div>
    </nav>
  </div>
</template>


<style>
:root{
  /* FONT */
  --font-nunito: "Nunito";
  --font-roboto: "Roboto";

  /* COLORS */
  --invincible-white: #e1ebed;
  --invincible-black:#303539;
  --invincible-yellow:#ffe556;
  --invincible-blue:#00bcf0;
}
body,
h1,
p {
    padding: 0;
    margin: 0;
    font-family: var(--font-nunito);
}

.header {
    background-color: var(--invincible-black);
    padding: 25px 10%;
    position: relative;
    overflow: hidden;
}

.header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: linear-gradient(
        to right,
        var(--invincible-yellow) 0%,
        var(--invincible-yellow) 25%,
        var(--invincible-blue) 50%,
        var(--invincible-yellow) 75%,
        var(--invincible-yellow) 100%
    );
    background-size: 200% 100%;
    background-repeat: repeat-x;
    animation: borderFlow 6s linear infinite;
}

.header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
}

.header nav ul {
    display: flex;
    gap: 40px;
}

.header .buscar {
    position: relative;

}

.buscar span {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #aaa;
    margin-left: 380px;
}

.header .buscar input {
    all: unset;
    padding-left: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 400px;
    background-color: var(--invincible-off-black);
    color: var(--invincible-white);
    border-radius: 30px;

}

.header nav ul li {
    list-style: none;

    text-decoration: none;
    color: var(--invincible-white);
}

.header nav a {
    font-size: 16px;
    list-style: none;
    text-decoration: none;
    color: var(--invincible-white);
    transition: transform 0.2s ease-in-out

}

.header nav ul li a:hover {
    color: var(--invincible-yellow);
    text-decoration: underline;

}

.header .cart a {
    color: var(--invincible-white);
    display: inline-block;
    will-change: transform;
}

.header .cart a:hover {
    color: var(--invincible-yellow);
    transform: scale(1.2);
}

</style>
