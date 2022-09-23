<template>
  <div>
    <h3 class="form-content__part__title mb-5">運送方式</h3>
    <div class="form-content__part__shipping">

      <div v-for="shipping in shippingMethods" :key="shipping.id" class="shipping__form-row form-row cursor-pointer">
        <input v-model="selected.picked" @change="getShippingPrice(shipping.price)" :value="shipping.name"
          :id="shipping.name" type="radio" name="shipping-method">
        <label class="cursor-pointer" :for="shipping.name">
          <p class="shipping-method">{{ shipping.method }}</p>
          <p class="shipping-time">{{ shipping.days }}</p>
        </label>
        <span class="shipping-price">{{ shipping.price | shipping }}</span>
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
    },
    initialSelected: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      selected: {
        price: 0,
        // picked by :value="OOO"
        picked: 'standard'
      }
    }
  },
  methods: {
    fetchShippingPrice() {
      this.selected = {
        ...this.selected,
        ...this.initialSelected
      }
    },
    getShippingPrice(price) {
      this.selected.price = price
      this.$emit('handle-shipping', this.selected)
    },
  },
  filters: {
    shipping(price) {
      // 0 是 false
      return price ? '$ ' + price : '免費'
    }
  },
  created() {
    this.fetchShippingPrice()
  }
}
</script>