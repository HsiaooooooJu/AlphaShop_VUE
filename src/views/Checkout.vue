<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main class="main-content">
      <Stepper />

      <section class="form-panel">
        <form action="" class="form-panel__container__form">
          <div class="form-content__part">

            <!-- DestinationForm -->
            <DestinationForm class="d-none" />

            <!-- ShippingForm -->
            <ShippingForm class="d-none" />

            <!-- PaymentForm -->
            <PaymentForm />
            
          </div>
        </form>
      </section>
      
      <!-- CartPanel -->
      <CartPanel :products="products" />
      
      <!-- ButtonPanel -->
      <BtnPanel />

    </main>
    <!-- Footer -->

  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Stepper from '../components/Stepper.vue'
import DestinationForm from '../components/DestinationForm.vue'
import ShippingForm from '../components/ShippingForm.vue'
import PaymentForm from '../components/PaymentForm.vue'
import BtnPanel from '../components/BtnPanel.vue'
import CartPanel from '../components/CartPanel.vue'

const productData = {
  products: [
    {
      id: 1,
      name: '破壞修身牛仔褲',
      price: 2000,
      image: 'dagny-petite-jeans.png'
    },
    {
      id: 2,
      name: '刷色寬筒牛仔褲',
      price: 2500,
      image: 'block-wide-jeans.png'
    }
  ]
}

export default {
  name: "Checkout",
  components: {
    Navbar,
    Stepper,
    DestinationForm,
    ShippingForm,
    PaymentForm,
    CartPanel,
    BtnPanel
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    fetchProducts() {
      this.products = productData.products.map(product => {
        return {
          ...product,
          // dynamic paths need to be wrapped in a require call
          image: require('../assets/images/' + product.image)
        }
      })
    }
  },
  created() {
    this.fetchProducts()
  }
};
</script>
