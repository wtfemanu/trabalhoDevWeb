<script></script>

<template>
  <hr>
  <body>
    <a href="app.vue"><img src="./icons/logo_escuro.png" alt="" width="40px" height="55px" /></a>

    <input type="text" placeholder="search" widht="5px" height=" 5px"/>

    <ul class="listaUm">
      <li><a href="">Termos</a></li>
      <li><a href="">Equipé</a></li>
      <li><a href="">Envio</a></li>
      <li><a href="">Devolução</a></li>
    </ul>

    <ul class="listaDois">
      <li><a href="">carrinho</a></li>
      <li><a href="">itens favoritos</a></li>
      <li><a href="">conta</a></li>
    </ul>

  </body>
  <hr>
</template>
<style>
  body{
    display: flex;
    margin:10px 50px 0px 50px;
  }
  input{
    height:10px ;
    margin:10px 4px 0px 4px;
  }

  .listaUm{
    display: flex;
  }
  .listaDois{
    display: flex;
  }
  body a{
    padding: 0 0 0 0;
  }
  ul{
    display:flex;
    margin:10px 4px 0px 4px;
  }
  ul li{
    list-style-type: none;
  }
  ul li a{

    margin:0 5px 0 5px;
    text-decoration:none;
    color: black;
  }

</style>
