<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main class="main-content">
      <Stepper />

      <section class="form-panel">
        <form action="" class="form-panel__container__form">
          <!-- DestinationForm -->

          <!-- ShippingForm -->

          <!-- PaymentForm -->
          
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

export default {
  name: "Checkout",
  components: {
    Navbar,
    Stepper,
  }
};
</script>
