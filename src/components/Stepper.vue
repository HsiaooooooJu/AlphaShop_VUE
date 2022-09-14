<template>
  <section id="step-control" class="stepper">
    <h3 class="stepper__title my-5">結帳</h3>
    <div class="stepper__container container">

      <div class="stepper__step active">
        <div class="stepper__step__circle-container"></div>
        <span class="stepper__step__connect-line line-one"></span>
        <label class="stepper__step__label" for="">寄送地址</label>
      </div>

      <div class="stepper__step">
        <div class="stepper__step__circle-container"></div>
        <span class="stepper__step__connect-line line-two"></span>
        <label class="stepper__step__label" for="">運送方式</label>
      </div>
      
      <div class="stepper__step">
        <div class="stepper__step__circle-container"></div>
        <label class="stepper__step__label" for="">付款資訊</label>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Stepper',
}
</script>