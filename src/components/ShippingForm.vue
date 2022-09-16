<template>
  <div>
    <h3 class="form-content__part__title mb-5">運送方式</h3>
    <div class="form-content__part__shipping">

      <div v-for="shipping in shippingMethods" :key="shipping.id" class="shipping__form-row form-row cursor-pointer">
        <input name="shipping-method" id="standard" type="radio" class="standard" checked>
        <label class="cursor-pointer" for="standard">
          <p class="shipping-method">{{ shipping.method }}</p>
          <p class="shipping-time">{{ shipping.days }}</p>
        </label>
        <span>{{ shipping.price }}</span>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'ShippingForm',
  props: {
    shippingMethods: {
      type: Array,
      required: true
    }
  }
}
</script>