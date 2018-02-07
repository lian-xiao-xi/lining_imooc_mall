<template>
  <!-- madal 弹窗 -->
  <div class="component-modal">
    <div class="md-modal modal-msg md-modal-transition " :class="{'md-show':mdShow}">
      <div class="md-modal-inner">
        <div class="md-top">
          <button class="md-close" @click="closeModal">Close</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <slot name="message"></slot>
          </div>
          <div class="btn-wrap">
            <slot name="btnGroup"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="mdShow" @click="closeModal"></div>
  </div>
</template>

<script>
export default {
  props: ['mdShow'],
  data() {
    return {

    }
  },
  methods: {
    closeModal() {
      // this.mdShow = false;
      this.$emit('close') // 触发父组件的closeModal方法
    }
  }
  
}
</script>
