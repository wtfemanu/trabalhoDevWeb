<script setup>
import { ref } from 'vue';

</script>
<template>
    <section class="melhorVenda">
      <div class="escrita">

    <h1>O Fim de Tudo</h1>
    <p class="resumo">Essa edição conclui a gigantesca saga de Mark Grayson. Após anos de batalhas, perdas, reviravoltas e crescimento, vemos Mark como um homem totalmente diferente daquele jovem herói do começo da série. Agora ele está lidando com responsabilidades em escala intergaláctica, não só como super-herói, mas também como líder, pai e símbolo de esperança para muitos.</p>

    <a class="compra" href="https://www.amazon.com.br/Invincible-144-English-Robert-Kirkman-ebook/dp/B076HZQJHC"> Compre já!</a>
    </div>



    <img class="livroMaisVendido" src="/public/image/hq144.jpg" width="430" height="550">
    </section>


</template>

<style>
 .melhorVenda{
  display: flex;
  margin: 50px 250px 50px 250px;
 }

 h1{
  margin: 2vw 0 2vw 0;
  font-size: 2.5vw;
  color: #252525;
 }
 p.resumo{
  margin:  20px 30px 50px 30px;
  width: 70%;
  font-size: 1.4rem;
  color: #4D4C4C;
 }
 a.compra{
  color: white;
  background-color:#c8412d ;
  text-decoration: none;
  margin: 700px;
  padding: 15px;

 }


</style>
