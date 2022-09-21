<template>
  <div>
    <h3 class="form-content__part__title mb-5">付款資訊</h3>
    <div class="form-content__part__payment">
      <div class="payment__form-row form-row card-holder-row">
        <label for="card-host">持卡人姓名</label>
        <input v-model="payment.cardHost" type="text" id="card-host" placeholder="John Doe" required>
      </div>
      <div class="payment__form-row form-row card-num-row">
        <label for="card-num">卡號</label>
        <input v-model="payment.cardNum" type="text" id="card-num" placeholder="0000 0000 0000 0000" required>
      </div>
      <div class="payment__form-row form-row valid-date-row">
        <label for="card-date">有效期限</label>
        <input v-model="payment.cardDate" type="text" id="card-date" placeholder="MM/YY" required>
      </div>
      <div class="payment__form-row form-row cvc-row">
        <label for="security-code">CVC/CCV</label>
        <input v-model="payment.securityCode" type="text" id="security-code" placeholder="000" required>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentForm',
  props: {
    // 存在 localStorage 裡的資料：order.payment
    orderPayment: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      payment: {
        cardHost: '',
        cardNum: '',
        cardDate: '',
        securityCode: ''
      }
    }
  },
  methods: {
    fetchPayment() {
      this.payment = {
        ...this.payment,
        ...this.orderPayment
      }
    },
    getPaymentInfo() {
      this.$emit('handle-payment-info', this.payment)
    }
  },
  watch: {
    payment: {
      deep: true,
      handler() {
        this.getPaymentInfo()
      }
    }
  },
  created() {
    this.fetchPayment()
  }
}
</script>