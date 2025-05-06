<template>
  <link rel="stylesheet" href="/src/components/cart.js">

   <div class="main2">
        <h1>HQs</h1>
        <div class="cards" id="product-cards-1"></div>

        <div class="cards2" id="product-cards-2"></div>
        <!-- Cards são adicionados aqui -->
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


.main2 {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 100px 100px;
    background-color: var(--invincible-black);
    color: var(--invincible-white);
    font-family: var(--font-roboto);
    position: relative;
    overflow: hidden;

}
.main2::after{
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
.main2 h1 {
    font-size: 50px;
    margin-bottom: 50px;
    font-family: var(--font-roboto)
}

.main2 .cards {
    display: flex;
    gap: 50px;

}

.main2 .cards .card {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;
}

.card img {
    width: 100%;
    height: 90%
}

.card h2 {
    margin: 0;
}

.card p {
    color: #aaa;
}

.card a {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    color: var(--invincible-yellow);
    text-decoration: none;
    border: 1px solid;
    overflow: hidden;
    transition: color 0.3s ease-in-out, border 0.3s ease-in-out;
    gap: 5px;
}

.card a::before {
    content: '';
    position: absolute;
    top: 0;
    right: -100%;
    left: auto;
    width: 100%;
    height: 100%;
    background-color: var(--invincible-yellow);
    z-index: 0;
    transition: right 0.3s ease-in-out;
}

.card a:hover::before {
    right: 0;
}

.card a:hover {
    color: var(--invincible-black);
    border-color: var(--invincible-yellow);
}

.card a i,
.card a span {
    z-index: 1;
}

.cards2 {
    display: flex;
    gap: 50px;
}

.main2 .cards2 .card {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;
}
.footer{
    color: var(--invincible-black);
    background-color: var(--invincible-yellow);
}
.footer a{
    color: var(--invincible-black);
}
.footerUpper{
    display: flex;
    justify-content: space-between;
    padding: 50px 100px;
    border-bottom: 1px solid var(--invincible-black);
}
.footerUpper span{
        font-weight: 600;
}
.footerUpper .left{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}
.footerUpper .left .social{
    display: flex;
    gap: 10px;
}
.footerUpper .left .social a{
    font-size: 25px;
}
.footerUpper .right{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.footerLower{
    display: flex;
    justify-content: center;
    padding: 25px 0;
}
@keyframes borderFlow {
    0% {
        background-position: 0% 0;
    }
    100% {
        background-position: 200% 0;
    }
}
@keyframes pulseGlow {
    0%,
    100% {
        transform: scale(1);
        opacity: 0.4;
        box-shadow: 0 0 30px 15px rgba(0, 153, 255, 0.2);
    }

    50% {
        transform: scale(1.05);
        opacity: 0.6;
        box-shadow: 0 0 40px 20px rgba(0, 195, 255, 0.2);
    }
}</style>