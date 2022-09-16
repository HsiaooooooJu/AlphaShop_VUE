<template>
  <section id="cart" class="cart-panel">
    <div class="cart__product container">
      <h3 class="cart__product__title">購物籃</h3>

      <div v-for="product in products" :key="product.id" class="cart__product__row">
        <img :src="getImg(product.image)" class="product-img" alt="">
        <div class="product-details">
          <h5 class="product-details__name">{{ product.name }}</h5>
          <div class="product-details__amount">
            <div class="amount__minus cursor-pointer">−</div>
            <div class="amount__count">1</div>
            <div class="amount__add cursor-pointer">＋</div>

          </div>
          <div class="product-details__price">{{ product.price }}</div>
        </div>
      </div>
    </div>

    <div class="cart__delivery">
      <div class="delivery-title">運費</div>
      <div class="delivery-price">免費</div>
    </div>
    <div class="cart__subtotal">
      <div class="subtotal-title">小計</div>
      <div class="subtotal-price">4,500</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CartPanel',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    getImg(img) {
      return require(`../assets/images/${img}`);
    }
  }
}
</script>