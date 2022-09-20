<template>
  <div>
    <h3 class="form-content__part__title mb-5">寄送地址</h3>
    <div class="form-content__part__destination">

      <div class="destination__form-row form-row gender-row">
        <label for="gender">稱謂</label>
        <div class="form-row__select-wrapper">
          <select v-model="receiver.gender" name="gender" id="gender" required>
            <option value="" disabled selected>請選擇稱謂</option>
            <option value="mister">先生</option>
            <option value="miss">小姐</option>
          </select>
        </div>
      </div>

      <div class="destination__form-row form-row name-row">
        <label for="name">姓名</label>
        <input v-model="receiver.name" type="text" id="name" placeholder="請輸入姓名">
      </div>
      <div class="destination__form-row form-row tel-row">
        <label for="tel">電話</label>
        <input v-model="receiver.tel" type="text" id="tel" placeholder="請輸入電話">
      </div>
      <div class="destination__form-row form-row email-row">
        <label for="">Email</label>
        <input v-model="receiver.email" type="text" placeholder="請輸入電子郵件">
      </div>
      <div class="destination__form-row form-row county-row">
        <label for="county">縣市</label>
        <div class="form-row__select-wrapper">
          <select v-model="receiver.county" name="county" id="county" required>
            <option value="" disabled selected>請選擇縣市</option>
            <option value="Taipei">台北</option>
            <option value="Taichung">台中</option>
            <option value="Kaohsiung">高雄</option>
          </select>
        </div>
      </div>

      <div class="destination__form-row form-row address-row">
        <label for="address">地址</label>
        <input v-model="receiver.address" type="text" id="address" placeholder="請輸入地址">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DestinationForm',
  props: {
    orderReceiver: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      receiver: {
        gender: '',
        name: '',
        tel: '',
        email: '',
        county: '',
        address: '',
      }
    }
  },
  methods: {
    fetchReceiver() {
      this.receiver = {
        // 先展開 data 裡的預設值，也就是空白表單
        ...this.receiver,

        // 接著展開 props 裡的資料，也就是父層傳進來的資料
        // 如果有資料，就放進 data 空白表單裡
        ...this.orderReceiver
      }
    },
    getReceiverInfo() {
      this.$emit('get-receiver-info', this.receiver)
    }
  },
  // 要利用 watch 監視資料變化
  watch: {
    receiver: {
      deep: true,
      // handler: 如果資料改變，要執行的處理程序
      handler() {
        this.getReceiverInfo()
      }
    }
  },
  created() {
    this.fetchReceiver()
  }
}
</script>