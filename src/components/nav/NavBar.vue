<template>
  <nav class="sticky-nav">
    <div class="nav-container">
      <div class="nav-left">
        <a href="#" class="nav-logo">
          创意绘画伙伴<span class="beta-tag">BETA</span>
        </a>
      </div>
      <div class="nav-center">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/zh-hans/home" class="nav-link">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/zh-hans/tutorials" class="nav-link">绘画教程</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/zh-hans/inspiration" class="nav-link">创意灵感</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/zh-hans/community" class="nav-link">社区作品</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/zh-hans/profile" class="nav-link">个人中心</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/zh-hans/help" class="nav-link">帮助中心</router-link>
          </li>
        </ul>
      </div>
      <div class="nav-right">
        <a href="#" class="nav-btn nav-login-btn" v-if="!isLoggedIn" @click="showAuthModal = true">登录</a>
        <a href="#" class="nav-btn nav-signup-btn" v-if="!isLoggedIn" @click="showAuthModal = true">注册</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['isLoggedIn'],
  data() {
    return {
      showAuthModal: false
    }
  },
  methods: {
    emitShowAuthModal() {
      this.$emit('show-auth-modal')
    }
  }
}
</script>

<style lang="scss">
@import '@/components/nav/NavStyles.scss';
</style>