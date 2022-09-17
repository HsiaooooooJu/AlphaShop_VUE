<template>
  <section id="cart" class="cart-panel">
    <div class="cart__product container">
      <h3 class="cart__product__title">購物籃</h3>

      <div v-for="( product, index ) in products" :key="product.id" class="cart__product__row">
        <img :src="getImg(product.image)" class="product-img" alt="">
        <div class="product-details">
          <h5 class="product-details__name">{{ product.name }}</h5>
          <div class="product-details__amount">
            <div @click="minusQty(index)" class="amount__minus cursor-pointer">−</div>
            <div class="amount__count">{{ product.productAmount }}</div>
            <div @click="addQty(index)" class="amount__add cursor-pointer">＋</div>

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
      <div class="subtotal-price">{{ calcSubtotal }}</div>
    </div>
  </section>
</template>

<script>
// /* eslint-disable */
export default {
  name: 'CartPanel',
  props: {
    initialProducts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      products: this.initialProducts,
      productAmount: 0
    }
  },
  methods: {
    fetchProducts() {
      this.products = this.products.map(product => {
        return {
          ...product,
          productAmount: 1
        }
      })
    },
    getImg(img) {
      return require(`../assets/images/${img}`);
    },
    addQty(index) {
      this.products[index].productAmount += 1
      // console.log(this.products[index].productAmount)
    },
    minusQty(index) {
      if (this.products[index].productAmount <= 1) {
        return
      } else {
        this.products[index].productAmount -= 1
      }
    },
  },
  computed: {
    calcSubtotal() {
      const calc = this.products.map((product) => {
        return product.price * product.productAmount
      })
      const price = calc[0] + calc[1]
      // console.log(price)
      return price.toLocaleString('en-US')
    }
  },
  created() {
    this.fetchProducts()
  }
}
</script>