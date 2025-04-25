<script>
</script>

<template>


    <nav>
      <div class="logo">
    <a href="app.vue"><img src="./icons/logo_clara.png" alt="" width="45px" height="75px" /></a>
      <hr class="logoo">
      <p>INVINCIBLE COMICS</p>
    </div>

    <input type="text"  placeholder="search" widht="5px" height=" 5px"/>



    <ul class="listaUm">
      <li><a href="">Termos</a></li>
      <li><a href="">Equipe</a></li>
      <li><a href="">Envio</a></li>
      <li><a href="">Devolução</a></li>
    </ul>



    <ul class="listaDois">
      <li><a href=""><i class="fa-solid fa-cart-shopping"></i></a></li>
      <hr class="divisinho">
      <li><a href=""><i class="fa-solid fa-heart"></i></a></li>
      <hr class="divisinho">
      <li><a href=""><i class="fa-solid fa-user"></i></a></li>
    </ul>
  </nav>


  <hr class="divisor">

</template>

<style>

    body{
      background-color: #e1ebed;
    }
 nav{
    display: flex;
    margin:0px 60px 0px 60px;

  }
  div.logo{
    margin: 0 1px 0 30px ;
  }
  nav .logo{
    display: flex;
  }
  nav .logo p{
    margin: 17px 5px 16px 5px;
    font-weight: bolder;
    width: 50%;

  }
  input {
    height:30px ;
    margin:20px 50px 20px 50px;
    background-color: rgb(240, 238, 238);
    border: none;
    width: 500px;
    height: 30px;

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
    margin:23px 4px 23px 4px;
  }
  ul li{
    list-style-type: none;

  }
  ul.listaUm li a{
    font-size: 20px;
    margin:1px 12px 1px 12px;
    text-decoration:none;
    color: #7B7881;
  }
  ul.listaDois li a{
    font-size: 20px;
    margin:1px 12px 1px 12px;
    text-decoration:none;
    color: #c8412d;;

  }
  hr {
    color: 	#c8412d;
    border:  solid 1px	#c8412d;


  }
  hr.logoo{
    color: 	#c8412d;
    border:  solid 1px	#c8412d;
    margin: 15px 0 1px 0;
    height: 45px;
  }
  hr.divisor{
    width: 2500px;
  }
  hr.divisinho{
    height: 20px;
    margin: 1px 0 1px 0;
  }


</style>
