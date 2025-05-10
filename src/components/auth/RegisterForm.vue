<!-- src/components/auth/RegisterForm.vue -->
<template>
  <div>
    <h3>注册</h3>
    <form @submit.prevent="handleRegister">
      <label for="username">用户名：</label>
      <input type="text" v-model="username" required />

      <label for="password">密码：</label>
      <input type="password" v-model="password" required />

      <div class="modal-footer">
        <button type="submit">注册</button>
        <button type="button" @click="$emit('switch', 'LoginForm')">登录</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleRegister() {
      // 模拟注册逻辑
      if (this.username && this.password) {
        this.$emit('success');
      } else {
        alert('请填写完整信息');
      }
    }
  }
};
</script>
