<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main class="main-content">
      <Stepper :steps="steps" :initial-current-step="currentStep" />

      <section class="form-panel">
        <form action="" class="form-panel__container__form">
          <div class="form-content__part">

            <!-- DestinationForm -->
            <DestinationForm v-show="currentStep === 1" />

            <!-- ShippingForm -->
            <ShippingForm :shipping-methods="shippingMethods" v-show="currentStep === 2" />

            <!-- PaymentForm -->
            <PaymentForm v-show="currentStep === 3" />

          </div>
        </form>
      </section>

      <!-- CartPanel -->
      <CartPanel :initial-products="products" />

      <!-- ButtonPanel -->
      <BtnPanel :steps="steps" :initial-current-step="currentStep" :total-step="totalSteps" @handle-step="handleStep" />

    </main>
    <!-- Footer -->
    <Footer />

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
    Footer
  },
  data() {
    const { shippingMethods, steps, productData } = CheckoutConfigs
    return {
      products: productData,
      steps,
      shippingMethods,
      totalSteps: steps.length,
      currentStep: 1,
      previousStep: 0,
      nextStep: 2
    }
  },
  methods: {
    handleStep(payload) {
      const { currentStep } = payload
      this.currentStep = currentStep
      // console.log(currentStep)
    },
  },
}
</script>
