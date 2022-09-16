<template>
  <section id="step-control" class="stepper">
    <h3 class="stepper__title my-5">結帳</h3>
    <div class="stepper__container container">

      <div v-for="step in steps" :key="step.id" class="stepper__step">
        <div class="stepper__step__circle-container"></div>        
        <label class="stepper__step__label" for="">{{ step.title }}</label>
        <span class="stepper__step__connect-line line-one"></span>
        <span class="stepper__step__connect-line line-two"></span>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    steps: {
      type: Array,
      required: true
    }
  }
}
</script>