<script setup>

</script>

<template>
  <div class="header">
        <nav>
          <div class="logo">
            <img src="./icons/Logo.png" alt="logo" />
          </div>
          <div class="buscar">
            <input type="text" placeholder="Pesquisar " />
            <span> <i class="fa-solid fa-magnifying-glass"></i></span>
          </div>
          <ul>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Envio</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Devoluções</a></li>
          </ul>
          <div class="cart">
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
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

  .header{
    background-color: var(--invincible-black);
    padding: 20px 5%;
    border-bottom: solid 1px var(--invincible-yellow);

}
.header nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
}
.header nav ul{
    display: flex;
    gap: 40px;
}
.header .buscar{
    position: relative;

}
.buscar span{
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%); /* Centraliza verticalmente */
    color: #aaa;
    margin-left: 380px;
}
.header .buscar input{
    all: unset;
    padding-left: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 400px;
    background-color: #404040;

}
.header nav ul li{
    list-style: none;
    text-decoration: none;
    color: var(--invincible-white);
}
.header nav a{
    font-size: 14px;
    list-style: none;
    text-decoration: none;
    color: var(--invincible-white);
}
.header nav ul li a:hover{
    color: var(--invincible-yellow);
    text-decoration: underline;
}
.header .cart a{
    color: var(--invincible-white);
}
.header .cart a:hover{
    color: var(--invincible-yellow);
}
</style>
