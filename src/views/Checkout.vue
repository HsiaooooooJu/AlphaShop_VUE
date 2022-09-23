<template>
  <div>
    <header>
      <Navbar :dark-mode="darkMode" @get-dark-mode-status="getDarkModeStatus" />
    </header>
    <main class="main-content">
      <Stepper :steps="steps" :initial-current-step="currentStep" />

      <section class="form-panel">
        <form action="" class="form-panel__container__form">
          <div class="form-content__part">

            <!-- DestinationForm -->
            <DestinationForm :order-receiver="order.receiver" v-show="currentStep === 1"
              @get-receiver-info="getReceiverInfo" />

            <!-- ShippingForm -->
            <ShippingForm :shipping-methods="shippingMethods" :initial-selected="order.shipping"
              v-show="currentStep === 2" @handle-shipping="handleShipping" />

            <!-- PaymentForm -->
            <PaymentForm :order-payment="order.payment" v-show="currentStep === 3"
              @handle-payment-info="handlePaymentInfo" />

          </div>
        </form>
      </section>

      <!-- CartPanel -->
      <CartPanel :initial-products="products" :order-shipping = "order.shipping" :order-cart="order.cart" @handle-cart-info="handleCartInfo" />

      <!-- ButtonPanel -->
      <BtnPanel :steps="steps" :initial-current-step="currentStep" :total-step="totalSteps" :order="order" @handle-step="handleStep" @handle-order="handleOrder" />

    </main>
    <!-- Footer -->
    <Footer :dark-mode="darkMode" />

    <!-- Modal -->
    <!-- <Modal v-show="showModal" :order="order" @close="showModal=false" /> -->

  </div>
</template>

<script>

import { CheckoutConfigs } from '../configs/CheckoutConfigs'

import Navbar from '../components/Navbar.vue'
import Stepper from '../components/Stepper.vue'
import DestinationForm from '../components/DestinationForm.vue'
import ShippingForm from '../components/ShippingForm.vue'
import PaymentForm from '../components/PaymentForm.vue'
import BtnPanel from '../components/BtnPanel.vue'
import CartPanel from '../components/CartPanel.vue'
import Footer from '../components/Footer.vue'

// import Modal from '../components/Modal.vue'

export default {
  name: "Checkout",
  components: {
    Navbar,
    Stepper,
    DestinationForm,
    ShippingForm,
    PaymentForm,
    CartPanel,
    BtnPanel,
    Footer,
    // Modal
  },
  data() {
    const { shippingMethods, steps, productData } = CheckoutConfigs
    return {
      storageKey: 'order',
      products: productData,
      steps,
      shippingMethods,
      totalSteps: steps.length,
      currentStep: 1,
      order: {
        receiver: {},
        shipping: {
          price: 0,
          picked: 'standard'
        },
        payment: {},
        cart: {}
      },
      darkMode: false,
      showModal: false
    }
  },
  methods: {
    fetchOrder() {
      const getOrder = JSON.parse(localStorage.getItem(this.storageKey))
      this.order = {
        ...this.order,
        ...getOrder
      }
      // console.log(this.order)
    },
    handleStep(payload) {
      const { currentStep } = payload
      this.currentStep = currentStep
      this.$router.push({ path: `/${this.currentStep}` })
      // console.log(currentStep)
    },
    getReceiverInfo(payload) {
      this.order.receiver = payload
      this.saveStorage()
    },
    handleShipping(payload) {
      this.order.shipping = payload
      // console.log(payload)
      this.saveStorage()
    },
    handlePaymentInfo(payload) {
      this.order.payment = payload
      this.saveStorage()
    },
    handleCartInfo(cartInfo){
      this.order.cart = cartInfo
      this.saveStorage()
    },
    getDarkModeStatus() {
      this.darkMode = !this.darkMode
      if(this.darkMode) {
        document.documentElement.setAttribute("data-theme", "dark")
      } else {
        document.documentElement.setAttribute("data-theme", "")
      }
    },
    handleOrder() {
      // this.showModal = true
      this.$swal.fire({
        title:  "訂單已送出!",
        text: `訂單總金額：${this.order.cart.subtotal}`,
        icon: "success",
        confirmButtonColor: '#F67599'
      });
      console.log(`
        Salutation : ${ this.order.receiver.gender }
        Name : ${ this.order.receiver.name }
        Phone : ${ this.order.receiver.tel }
        City : ${ this.order.receiver.county }
        Addr : ${ this.order.receiver.address }
        Shipping Fee : ${ this.order.shipping.price }
        Card Holder : ${ this.order.payment.cardHost }
        Card Number : ${ this.order.payment.cardNum }
        Expire Date : ${ this.order.payment.cardDate }
        CVV : ${ this.order.payment.securityCode }
        Total Price : ${ this.order.cart.subtotal }
      `)
    },
    saveStorage() {
      localStorage.setItem(this.storageKey, JSON.stringify(this.order))
    },
  },
  created() {
    this.fetchOrder()
    this.currentStep = Number(this.$route.params.stepId)
      ? Number(this.$route.params.stepId)
      : 1;
  },
}
</script>
