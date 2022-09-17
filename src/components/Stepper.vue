<template>
  <section id="step-control" class="stepper">
    <h3 class="stepper__title my-5">結帳</h3>
    <div class="stepper__container container">

      <div v-for="step in steps" :key="step.id" :class="['stepper__step', { active: initialCurrentStep >= step.id }]">
        <div class="stepper__step__circle-container"></div>
        <label class="stepper__step__label" for="">{{ step.title }}</label>
      </div>
      <span class="stepper__step__connect-line line-one active"></span>
      <span class="stepper__step__connect-line line-two" :class="{ active: initialCurrentStep === 2 }"></span>

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
    },
    initialCurrentStep: {
      type: Number,
      default: 1
    },
  },
}
</script>