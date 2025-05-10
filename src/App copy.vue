// App.vue
<template>
  <div id='app'class="app-container">
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
    <AuthModal :visible="showAuthModal" @success="handleAuthSuccess" />
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
import AuthModal from './components/auth/AuthModal.vue';

export default {
  components: {
    AuthModal
  },
  data() {
    return {
      isLoggedIn: false,
      showAuthModal: false
    };
  },
  methods: {
    handleAuthSuccess() {
      this.isLoggedIn = true;
      this.showAuthModal = false;
    }
  }
};
</script>

<style>
/* 通用样式 */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  width: 360px;
  padding: 24px;
  background-color: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  color: #fff;
}

.modal-container h3 {
  margin-bottom: 20px;
  font-size: 20px;
  text-align: center;
  color: #f5c518;
}

.modal-container label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  color: #ccc;
}

.modal-container input {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  background-color: #2a2a2a;
  color: #fff;
}

.modal-container input:focus {
  outline: none;
  background-color: #333;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.modal-footer button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.modal-footer button[type="submit"] {
  background-color: #f5c518;
  color: #000;
}

.modal-footer button[type="submit"]:hover {
  background-color: #e6b400;
}

.modal-footer button[type="button"] {
  background-color: #444;
  color: #fff;
}

.modal-footer button[type="button"]:hover {
  background-color: #555;
}

/* 导航栏样式 */
.sticky-nav {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 60px;
}

.nav-logo {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.beta-tag {
  font-size: 10px;
  vertical-align: super;
  color: #ccc;
  margin-left: 2px;
}

.nav-list {
  display: flex;
  list-style: none;
  justify-content: center;
}

.nav-item {
  margin: 0 15px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #f5c518;
}

.nav-btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-login-btn {
  color: #fff;
  margin-right: 10px;
}

.nav-signup-btn {
  background-color: #f5c518;
  color: #000;
  margin-right: 10px;
}

.nav-signup-btn:hover {
  background-color: #e6b400;
}

/* 页脚样式 */
.site-footer {
  background-color: #1a1a1a;
  padding: 40px 0 20px;
  margin-top: 40px;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px;
}

.footer-section h3 {
  color: #fff;
  margin-bottom: 15px;
  font-size: 16px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #f5c518;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  color: #ccc;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #f5c518;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #333;
  color: #ccc;
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer-section {
    flex: 100%;
  }
}
</style>
