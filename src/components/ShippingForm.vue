<template>
  <div>
    <h3 class="form-content__part__title mb-5">運送方式</h3>
    <div class="form-content__part__shipping">
      <div class="shipping__form-row form-row cursor-pointer">
        <input name="shipping-method" id="standard" type="radio" class="standard" checked>
        <label class="cursor-pointer" for="standard">
          <p class="shipping-method">標準運送</p>
          <p class="shipping-time">約 3-7 個工作天</p>
        </label>
        <span>免費</span>

      </div>
      <div class="shipping__form-row form-row cursor-pointer">
        <input name="shipping-method" id="express" type="radio" class="express">
        <label class="cursor-pointer" for="express">
          <p class="shipping-method">DHL 貨運</p>
          <p class="shipping-time">48 小時內送達</p>
        </label>
        <span>$ 500</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShippingForm',
}
</script>