<script setup></script>
<template>
  <section class="melhorVenda">
    <div class="escrita">
      <h1>O Fim de Tudo</h1>

      <p class="resumo">
        Essa edição conclui a gigantesca saga de Mark Grayson. Após anos de batalhas, perdas,
        reviravoltas e crescimento, vemos Mark como um homem totalmente diferente daquele jovem
        herói do começo da série. Agora ele está lidando com responsabilidades em escala
        intergaláctica, não só como super-herói, mas também como líder, pai e símbolo de esperança
        para muitos.
      </p>
      <a
        href="https://www.amazon.com.br/Invincible-144-English-Robert-Kirkman-ebook/dp/B076HZQJHC"
        class="piscando"
        >Compre já!</a
      >
    </div>

    <div class="imagens">
      <img class="livroMaisVendido" src="/public/image/hq144.jpg" width="360vw" height="530vw" />
      <img class="sobreposta" src="/public/image/bestvenda.png" width= 180vw; height= 180vw; />
    </div>
  </section>
</template>

<style>
.melhorVenda {
  display: flex;
  margin: 2vw 10vw 2vw 10vw;
}

h1 {
  margin: 2vw 1.6vw 2vw 1.6vw;
  font-size: 2.8vw;
  color: #252525;
}
p.resumo {
  margin: 2vw 3vw 3vw 3vw;
  width: 90%;
  max-width: 90%;
  font-size: 1.8vw;
  color: #4d4c4c;
}
.imagens {
  position: relative;
  margin-top: 1.7vw;
}
img.livroMaisVendido {
  margin: 0 4vw 0 4vw;
  object-fit: cover;
}
img.sobreposta {
  position: absolute;
  top: 10vw;
  right: 6vw;
  width: 320px;
  height: 320px;
}
a.piscando {
  margin-left: 38vw;
  background-color: #c8412d;
  padding: 1vw 1.5vw 1vw 1.5vw;
  border: none;
  color: #e1ebed;
  text-decoration: none;
  font-size: 1vw;
}
</style>
