<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main class="main-content">
      <Stepper :steps="steps" />

      <section class="form-panel">
        <form action="" class="form-panel__container__form">
          <div class="form-content__part">

            <!-- DestinationForm -->
            <DestinationForm />

            <!-- ShippingForm -->
            <ShippingForm :shipping-methods="shippingMethods" class="d-none" />

            <!-- PaymentForm -->
            <PaymentForm class="d-none" />

          </div>
        </form>
      </section>

      <!-- CartPanel -->
      <CartPanel :products="products" />

      <!-- ButtonPanel -->
      <BtnPanel />

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
    }
  },
}
</script>
