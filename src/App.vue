<template>
  <div id="app" class="app-container">
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

    <AuthModal :visible="showAuthModal" @update:visible="val => showAuthModal = val" />


    <main>
      <router-view></router-view>
    </main>

    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>关于我们</h3>
          <ul class="footer-links">
            <li><a href="/team">团队介绍</a></li>
            <li><a href="/contact">联系方式</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>相关链接</h3>
          <ul class="footer-links">
            <li><a href="/tutorials/collection">绘画教程合集</a></li>
            <li><a href="/faq">常见问题解答</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>法律信息</h3>
          <ul class="footer-links">
            <li><a href="/privacy">隐私政策</a></li>
            <li><a href="/terms">使用条款</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>关注我们</h3>
          <div class="social-icons">
            <a href="#" class="social-icon">微信</a>
            <a href="#" class="social-icon">微博</a>
            <a href="#" class="social-icon">抖音</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 创意绘画伙伴. 保留所有权利.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import AuthModal from './components/auth/AuthModal.vue'

export default {
  data() {
    return {
      showAuthModal: false,
      isLoggedIn: false // 先设置为 false，方便测试
    };
  },
  components: {
    AuthModal
  },
  methods: {
    handleAuthSuccess() {
      this.showAuthModal = false;
      this.isLoggedIn = true; // 登录成功后更新状态
    }
  }
};
</script>

<style src="@/assets/css/nav.css"></style>
<style src="@/assets/css/footer.css"></style>
<style src="@/assets/css/modal.css"></style>
<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 20px 0;
  margin-top: 60px;
}
</style>