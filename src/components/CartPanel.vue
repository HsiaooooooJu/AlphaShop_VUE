<template>
  <section id="cart" class="cart-panel">
    <div class="cart__product container">
      <h3 class="cart__product__title">購物籃</h3>

      <div v-for="( product, index ) in cart.products" :key="product.id" class="cart__product__row">
        <img :src="getImg(product.image)" class="product-img" alt="">
        <div class="product-details">
          <h5 class="product-details__name">{{ product.name }}</h5>
          <div class="product-details__amount">
            <div @click="minusQty(index)" class="amount__minus cursor-pointer">−</div>
            <div class="amount__count">{{ product.amount }}</div>
            <div @click="addQty(index)" class="amount__add cursor-pointer">＋</div>

          </div>
          <div class="product-details__price">{{ product.price }}</div>
        </div>
      </div>
    </div>

    <div class="cart__delivery">
      <div class="delivery-title">運費</div>
      <div class="delivery-price">{{ orderShipping.price | priceFilter }}</div>
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
    },
    orderShipping: {
      type: Object,
      required: true,
    },
    orderCart: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      cart: {
        products: [],
        subtotal: 0
      }
    }
  },
  methods: {
    fetchProducts() {
      // this.cart = this.orderCart
      this.cart.products = this.initialProducts.map((product => {
        return {
          ...product,
          amount: 1
        }
      }))
    },
    getImg(img) {
      return require(`../assets/images/${img}`);
    },
    addQty(index) {
      this.cart.products[index].amount += 1
      // console.log(this.products[index].amount)
    },
    minusQty(index) {
      if (this.cart.products[index].amount <= 1) {
        return
      } else {
        this.cart.products[index].amount -= 1
      }
    },
    getCartInfo() {
      this.cart.subtotal = this.calcSubtotal
      this.$emit('handle-cart-info', this.cart)
    }
  },
  filters: {
    priceFilter(price) {
      return price? '$ ' + price : '免費'
    },
  },
  computed: {
    calcSubtotal() {
      let price = 0
      this.cart.products.forEach(product => {
        return price += product.price * product.amount
      })
      price += this.orderShipping.price
      return price.toLocaleString('en-US')
    }
  },
  watch: {
    cart: {
      handler() {
        this.getCartInfo()
      },
      deep: true,
    },
  },
  created() {
    this.fetchProducts()
  }
}
</script>