<script >

  export default {
  data() {
    return {
      images: [
        'public/image/hq1.jpg',
        'public/image/hq32.jpg',
        'public/image/hq50.jpg',
        'public/image/hq72.jpg',
        'public/image/hq86.jpg',
        'public/image/hq102.jpg',
        'public/image/hq129.jpg',
        'public/image/hq144.jpg',
      ],
      currentImage: ''
    }
  },
  methods: {
    trocarImagem() {
      const indice = Math.floor(Math.random() * this.images.length)
      this.currentImage = this.images[indice]
    }
  },
  mounted() {
    this.trocarImagem()
  }
}
</script>
<template>
    <div class="main1">
        <div class="left">
          <h1>Invincible: Ultimate Collection</h1>
          <p>
            Na Invincible Comics, cada página conta uma história que vai além do comum. Explore um universo de heróis, vilões, reviravoltas e artes incríveis que fazem você mergulhar em novas realidades. Do clássico ao independente, temos a edição perfeita para cada tipo de leitor. Descubra sua próxima aventura aqui.


          </p>
          <div class="buttonTwo">
            <a href="#"><span>Acessar página do livro</span></a>
          </div>
        </div>
        <div class="right">
          <div class="imgContainer">
            <img :src="currentImage" alt="Imagem aleatória"/>
          </div>
        </div>
      </div>


</template>
<style>

body,
h1,
p {
    padding: 0;
    margin: 0;
    font-family: var(--font-nunito);
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

.main1 {
    height: 60vh;
    width: auto;
    padding: 100px 100px;
    gap: 50px;
    display: flex;
    background-color: var(--invincible-black);
    color: var(--invincible-white);
    font-family: "Roboto";
    position: relative;
    overflow: hidden;

}
.main1::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: linear-gradient(
        to right,
        var(--invincible-yellow),
        var(--invincible-blue),
        var(--invincible-yellow)
    );
    background-size: 200% 100%;
    animation: borderFlow 6s linear infinite;
}


.main1 .left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    gap: 20px;
}

.main1 .right {
    display: flex;
    height: 100%;
    width: auto;
}

.right .imgContainer {
    display: flex;
    justify-content: center;
    width: auto ;
    height: 100%;
    position: relative;
    display: inline-block;

}

.imgContainer img {
    height: 100%;
    width: auto;
    position: relative;
    z-index: 1;


}

.imgContainer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: rgba(0, 153, 255, 0.3);
    box-shadow: 0 0 30px 15px rgba(0, 153, 255, 0.6);
    z-index: 0;
    filter: blur(15px);
    animation: pulseGlow 3s ease-in-out infinite;
}
.main1 .left h1 {
    font-family: var(--font-roboto);
    font-size: 50px;
}

.main1 .left p {
    font-size: 22px;
}

.main1 .buttonTwo a {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 22px;
    color: var(--invincible-blue);
    text-decoration: none;
    border: 1px solid var(--invincible-blue);
    position: relative;
    overflow: hidden;
    display: inline-block;
    transition: color 0.3s ease, transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
    background-color: transparent;
}

.main1 .buttonTwo a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--invincible-blue);
    transition: all 0.3s ease;
    transform: scaleX(0);
    transform-origin: bottom right;
    z-index: 0;
}

.main1 .buttonTwo a:hover::before {
    transform: scaleX(1);
}

.main1 .buttonTwo a:hover {
    color: var(--invincible-black);
    border-color: var(--invincible-blue);
    background-color: var(--invincible-blue);
}

.main1 .buttonTwo a span {
    position: relative;
    z-index: 1;
}

.main1 .right {
    display: flex;
    flex: 1;
    justify-content: center;
    height: 100%;
}
</style>
