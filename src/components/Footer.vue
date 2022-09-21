<template>
  <footer>
    <div class="footer__container container">
      <div class="navbar__brand__logo">
        <img v-show="darkMode" src="../assets/images/logo.svg" class="logo" alt="">
        <img v-show="!darkMode" src="../assets/images/white-logo.svg" class="white-logo" alt="">
      </div>
      <div class="footer__container__list">
        <h5 class="footer__container__list__title">客戶服務</h5>
        <ul class="footer__container__list__wrapper">
          <li class="footer__container__list__item">運送說明</li>
          <li class="footer__container__list__item">退換貨相關</li>
          <li class="footer__container__list__item">付款資訊</li>
          <li class="footer__container__list__item">FAQ</li>
        </ul>
      </div>
      <div class="footer__container__list">
        <h5 class="footer__container__list__title">關於我們</h5>
        <ul class="footer__container__list__wrapper">
          <li class="footer__container__list__item">品牌故事</li>
          <li class="footer__container__list__item">媒體聯繫</li>
          <li class="footer__container__list__item">Press Kit</li>
        </ul>
      </div>
      <div class="footer__container__list">
        <h5 class="footer__container__list__title">資訊</h5>
        <ul class="footer__container__list__wrapper">
          <li class="footer__container__list__item">隱私權政策</li>
          <li class="footer__container__list__item">Cookie</li>
          <li class="footer__container__list__item">GDPR</li>
        </ul>
      </div>
      <div class="footer__container__list">
        <h5 class="footer__container__list__title">追蹤 ALPHA SHOP</h5>
        <ul class="footer__container__list__wrapper">
          <li class="footer__container__list__item">+886 2123-0000</li>
          <li class="footer__container__list__item icon-list">
            <img class="list__item__icon mr-3" src="../assets/images/facebook.svg" style="width: 20px" alt="">
            <img class="list__item__icon mr-4" src="../assets/images/instagram.svg" style="width: 20px" alt="">
            <img class="list__item__icon" src="../assets/images/whatsapp.svg" style="width: 20px" alt="">
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>