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
      <!-- ButtonPanel -->

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

export default {
  name: "Checkout",
  components: {
    Navbar,
    Stepper,
    DestinationForm,
    ShippingForm,
    PaymentForm
  }
};
</script>
