<template>
  <nav class="navbar">
    <input type="checkbox" class="navbar__toggle" id="navbar__toggle">
    
    <ul class="navbar__menu">
      <li v-for="item in navItems" :key="item.id" class="navbar__menu__item">
        <router-link :to="item.link" class="navbar__menu__item__link">{{item.title}}</router-link>
      </li>

      <li class="navbar__menu__item">
        <router-link to="#" class="navbar__menu__item__link search mr-5">
          <img src="../assets/images/search.svg" alt="">
        </router-link>

        <router-link to="#" class="navbar__menu__item__link cart mr-5">
          <img src="../assets/images/cart.svg" alt="">
        </router-link>

        <div class="menu__item__link dark-mode">
          <label @click="handleDarkMode" for="dark-mode__toggle" class="dark-mode__label">
            <img v-show="!darkMode" src="../assets/images/moon.svg" alt="">
            <img v-show="darkMode" src="../assets/images/sun.svg" alt="">
          </label>
          <input type="checkbox" id="dark-mode__toggle" class="dark-mode__input d-none">
        </div>
      </li>
      
    </ul>

    <label for="navbar__toggle" class="navbar__toggle-label cursor-pointer">
      <img src="../assets/images/hamburger.svg" class="toggle-label__hamburger">
    </label>

    <router-link to="/" class="navbar__brand align-center mt-1">
      <img v-show="!darkMode" src="../assets/images/logo.svg" alt="">
      <img v-show="darkMode" src="../assets/images/white-logo.svg" alt="">
    </router-link>
    
  </nav>
</template>

<script>
const navbarMenu = {
  navItems: [
    {
      id: 1,
      title: '男裝',
      link: ''
    },
    {
      id: 2,
      title: '女裝',
      link: ''
    },
    {
      id: 3,
      title: '最新消息',
      link: ''
    },
    {
      id: 4,
      title: '聯絡我們',
      link: ''
    },
    {
      id: 5,
      title: '客製商品',
      link: ''
    },
  ]
}

export default {
  name: 'Navbar',
  props: {
    darkMode: {
      type: Boolean
    }
  },
  data() {
    return {
      navItems: navbarMenu.navItems,
    }
  },
  methods: {
    handleDarkMode() {
      this.$emit('get-dark-mode-status')
    },
  },
}
</script>