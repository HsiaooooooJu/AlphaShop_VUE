<template>
  <div>
    <h3 class="form-content__part__title mb-5">付款資訊</h3>
    <div class="form-content__part__payment">
      <div class="payment__form-row form-row card-holder-row">
        <label for="card-host">持卡人姓名</label>
        <input type="text" id="card-host" placeholder="John Doe" required>
      </div>
      <div class="payment__form-row form-row card-num-row">
        <label for="card-num">卡號</label>
        <input type="text" id="card-num" placeholder="0000 0000 0000 0000" required>
      </div>
      <div class="payment__form-row form-row valid-date-row">
        <label for="card-date">有效期限</label>
        <input type="text" id="card-date" placeholder="MM/YY" required>
      </div>
      <div class="payment__form-row form-row cvc-row">
        <label for="security-code">CVC/CCV</label>
        <input type="text" id="security-code" placeholder="000" required>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentForm',
}
</script>