<template>
  <div class="modal-mask" v-if="visible" @click.self="closeModal">
    <div class="modal-container fade-in">
      <button class="modal-close-btn" @click="closeModal">
        <font-awesome-icon icon="xmark" />
      </button>
      <h3>登录</h3>
      <form>
        <label for="username">用户名：</label>
        <input type="text" id="username" required autocomplete="username">
        <label for="password">密码：</label>
        <input type="password" id="password" required autocomplete="current-password">
        <div class="modal-footer">
          <button type="submit">登录</button>
          <button type="button">取消</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  },
  mounted() {
    library.add(faXmark);
  },
  methods: {
    closeModal() {
      this.$emit('update:visible', false);
    },
  },
};
</script>
