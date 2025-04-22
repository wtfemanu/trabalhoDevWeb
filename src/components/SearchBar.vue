<script></script>

<template>

  <body>
    <nav>
    <a href="app.vue"><img src="./icons/logo_clara.png" alt="" width="60px" height="80px" /></a>



    <input type="text"  placeholder="search" widht="5px" height=" 5px"/>



    <ul class="listaUm">
      <li><a href="">Termos</a></li>
      <li><a href="">Equipé</a></li>
      <li><a href="">Envio</a></li>
      <li><a href="">Devolução</a></li>
    </ul>

    <ul class="listaDois">
      <li><a href=""><i class="fa-solid fa-cart-shopping"></i></a></li>
      <hr>
      <li><a href=""><i class="fa-solid fa-heart"></i></a></li>
      <hr>
      <li><a href=""><i class="fa-solid fa-user"></i></a></li>
    </ul>
  </nav>
  </body>
  <hr>
</template>
<style>
    body{
      background-color: #e1ebed;
    }
  body nav{
    display: flex;
    margin:0px 90px 0px 90px;

  }
  input {
    height:30px ;
    margin:12px 50px 0px 50px;
    background-color: rgb(219, 216, 216);
    border: none;
    width: 300px;
  }

  .listaUm{
    display: flex;
  }
  .listaDois{
    display: flex;
  }
  body a{
    padding: 0 10px 0 10px;
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
  hr {
    color: 	#c8412d;
    border:  solid 1px	#c8412d;
  }

</style>
