

<template>
 <div class="footer">
        <div class="footerUpper">
          <div class="left">
            <span><p>Invincible Comics</p></span>
            <div class="social">
              <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-square-x-twitter"></i></a>
            </div>
          </div>
          <div class="right">
            <span><p>Contato</p></span>
            <p><i class="fa-solid fa-phone"></i> +55 47 4002-8922</p>
            <p><i class="fa-solid fa-clock"></i> 8h ás 23h - Seg a Sex</p>
            <p>
              <i class="fa-solid fa-envelope"></i> contato@invenciblecomics.com
            </p>
          </div>
        </div>
        <div class="footerLower">
          <p>&copy; Alguns direitos reservados. Invincible Comics 2025.</p>
        </div>
      </div>

</template>

<style>
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
}
</style>
