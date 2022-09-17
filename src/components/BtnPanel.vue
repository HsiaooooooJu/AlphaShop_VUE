<template>
  <section id="btn-control" class="btn-control-panel">
    <button v-show="currentStep > 1" @click.prevent.stop="handlePreviousStep" class="btn btn-white previous">
      <i class="fa-solid fa-arrow-left-long"></i>
      上一步
    </button>

    <button v-html="nextStepContent" @click.prevent.stop="handleNextStep" class="btn btn-primary next">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BtnPanel',
  props: {
    steps: {
      type: Array,
      required: true
    },
    initialCurrentStep: {
      type: Number,
      default: 1
    },
    totalStep: {
      type: Number,
      default: 1
    },
  },
  data() {
    return {
      currentStep: this.initialCurrentStep
    }
  },
  methods: {
    handlePreviousStep() {
      if (this.currentStep === 1) return
      this.currentStep -= 1
      this.$emit('handle-step', {
        currentStep: this.currentStep
      })
    },
    handleNextStep() {
      if (this.currentStep >= this.totalStep) return
      this.currentStep += 1
      this.$emit('handle-step', {
        currentStep: this.currentStep
      })
    }
  },
  computed: {
    nextStepContent() {
      if (this.currentStep === this.totalStep) {
        return '確認結帳'
      } else {
        return `下一步 <i class="fa-solid fa-arrow-right-long"></i>`
      }
    }
  }
}
</script>