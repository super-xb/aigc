<!-- src/components/auth/LoginForm.vue -->
<template>
  <div>
    <h3>登录</h3>
    <form @submit.prevent="handleLogin">
      <label for="username">用户名：</label>
      <input type="text" v-model="username" required />

      <label for="password">密码：</label>
      <input type="password" v-model="password" required />

      <div class="modal-footer">
        <button type="submit">登录</button>
        <button type="button" @click="$emit('switch', 'RegisterForm')">注册</button>
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
    handleLogin() {
      // 模拟登录验证
      if (this.username === 'admin' && this.password === '1234') {
        this.$emit('success');
      } else {
        alert('用户名或密码错误');
      }
    }
  }
};
</script>
