<script setup>


</script>
<template>
    <section class="melhorVenda">
      <div class="escrita">

    <h1>O Fim de Tudo</h1>

    <p class="resumo">Essa edição conclui a gigantesca saga de Mark Grayson. Após anos de batalhas, perdas, reviravoltas e crescimento, vemos Mark como um homem totalmente diferente daquele jovem herói do começo da série. Agora ele está lidando com responsabilidades em escala intergaláctica, não só como super-herói, mas também como líder, pai e símbolo de esperança para muitos.</p>
     <a href="https://www.amazon.com.br/Invincible-144-English-Robert-Kirkman-ebook/dp/B076HZQJHC" class="piscando">Compre já!</a>
    </div>


    <div class="imagens">
    <img class="livroMaisVendido" src="/public/image/hq144.jpg" width="360px" height="530" >
    <img class="sobreposta" src="/public/image/bestvenda.png" width="140px" height="150px">
  </div>


    </section>


</template>

<style>
 .melhorVenda{
  display: flex;
  margin: 2vw 10vw 2vw 10vw;
 }

 h1{
  margin: 2vw 1.6vw 2vw 1.6vw;
  font-size: 2.8vw;
  color: #252525;
 }
 p.resumo{
  margin:  2vw 3vw 3vw 3vw;
  width: 90%;
  font-size: 1.8vw;
  color: #4D4C4C;
 }
 .imagens{
  position: relative;
  margin-top: 1.7vw;
 }
 img.livroMaisVendido{
  margin: 0 4vw 0 4vw;
  object-fit: cover;

 }
 img.sobreposta{
  position: absolute;
  top: 345px;
  right: 245px;
  width: 180px;
  height: 180px;
 }
 a.piscando{
  margin-left: 450px;
  background-color: #c8412d;
  padding: 12px 15px 12px 15px;
  border: none;
  color: 	#e1ebed;
  text-decoration: none;
 }


</style>
