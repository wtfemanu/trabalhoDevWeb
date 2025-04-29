<script setup></script>
<template>
  <div class="main1">
    <div class="left">
      <div class="buttonOne"></div>
      <h1>The end of all things</h1>
      <p>
        Essa edição conclui a gigantesca saga de Mark Grayson. Após anos de batalhas, perdas, reviravoltas e crescimento, vemos Mark como um homem totalmente diferente daquele jovem herói do começo da série. Agora ele está lidando com responsabilidades em escala intergaláctica, não só como super-herói, mas também como líder, pai e símbolo de esperança para muitos.
      </p>
      <div class="buttonTwo"><a href="#">Acessar página do livro</a></div>
    </div>
    <div class="right"><img src="/public/image/hq144.jpg" alt="HQ" /></div>
  </div>
</template>
<style>
.main1 {
  height: 70vh;
  width: auto;
  padding: 160px 100px;
  gap: 50px;
  display: flex;
  background-color: var(--invincible-black);
  color: var(--invincible-white);
  font-family: 'Roboto';
  border-bottom: solid 1px var(--invincible-yellow);
}
.main1 .left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  gap: 5px;
  padding: 50px 0;
}
.main1 .left h1 {
  font-family: var(--font-roboto);
  font-size: 50px;
}
.main1 .left p {
  font-size: 24px;
}
.main1 .buttonOne a {
  padding: 10px 20px;
  color: var(--invincible-yellow);
  text-decoration: none;
  border: 1px solid;
  transition: 0.5s ease-in-out;
}
.main1 .buttonOne a:hover {
  color: var(--invincible-blue);
}
.main1 .buttonTwo a {
  padding: 10px 20px;
  color: var(--invincible-yellow);
  text-decoration: none;
  border: 1px solid;
  transition: 0.5s ease-in-out;
}
.main1 .buttonTwo a:hover {
  color: var(--invincible-blue);
}
.main1 .right {
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100%;
}
</style>
