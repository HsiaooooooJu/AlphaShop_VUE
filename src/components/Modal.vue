<template>
  <div class="modal__container">
    <div class="modal__container__content">
      <h1 class="mb-4">Checkout</h1>
      <p>Salutation : <span>{{ order.receiver.gender }}</span></p>
      <p>Name : <span>{{ order.receiver.name }}</span></p>
      <p>Phone : <span>{{ order.receiver.tel }}</span></p>
      <p>City : <span>{{ order.receiver.county }}</span></p>
      <p>Addr : <span>{{ order.receiver.address }}</span></p>
      <p>Shipping Fee : <span>{{ order.shipping.price }}</span></p>
      <p>Card Holder : <span>{{ order.payment.cardHost }}</span></p>
      <p>Card Number : <span>{{ order.payment.cardNum }}</span></p>
      <p>Expire Date : <span>{{ order.payment.cardDate }}</span></p>
      <p>CVV : <span>{{ order.payment.securityCode }}</span></p>
      <p>Total Price : <span>{{ order.cart.subtotal }}</span></p>
      <button @click="$emit('close')" class="modal__close-btn">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    order: {
      type: Object,
      required: true
    }
  },
}
</script>
