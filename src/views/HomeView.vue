<template>
  <div>
    <!-- 顶部导航栏 -->
    <header>
      <nav class="navbar">
        <div class="navbar-left">
          <a href="#" class="logo">
            dzine<span class="beta">BETA</span>
          </a>

          <div class="nav-links">
            <!-- 添加首页、仪表盘、工具、关于我们导航项 -->
            <a href="/zh-hans" class="nav-link">首页</a>
            <a href="/zh-hans/dashboard" class="nav-link">仪表盘</a>
            <a href="/zh-hans/tool" class="nav-link">工具</a>
            <a href="/zh-hans/about" class="nav-link">关于我们</a>

            <div class="dropdown">
              <button class="dropdown-btn">
                工具 <span class="dropdown-arrow">▼</span>
              </button>
            </div>

            <div class="dropdown">
              <button class="dropdown-btn">
                资源 <span class="dropdown-arrow">▼</span>
              </button>
            </div>

            <a href="#pricing" class="nav-link">定价</a>
            <a href="#api" class="nav-link">API</a>
            <a href="#contact" class="nav-link">商务联系</a>
            <a href="#demo" class="nav-link">体验版</a>
          </div>
        </div>

        <div class="navbar-right">
          <a href="#" class="nav-link" @click="showLoginModal = true">登录</a>
          <button class="btn-primary">免费试用</button>
        </div>

        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ 'open': mobileMenuOpen }">
        <!-- 移动端导航项 -->
        <a href="/zh-hans" class="mobile-link">首页</a>
        <a href="/zh-hans/dashboard" class="mobile-link">仪表盘</a>
        <a href="/zh-hans/tool" class="mobile-link">工具</a>
        <a href="/zh-hans/about" class="mobile-link">关于我们</a>
        <a href="#" class="mobile-link">工具</a>
        <a href="#" class="mobile-link">资源</a>
        <a href="#pricing" class="mobile-link">价格</a>
        <a href="#api" class="mobile-link">API</a>
        <a href="#contact" class="mobile-link">商务联系</a>
        <a href="#demo" class="mobile-link">体验版</a>
        <a href="#" class="mobile-link" @click="showLoginModal = true">登录</a>
        <button class="btn-primary mobile-btn">免费试用</button>
      </div>
    </header>

    <!-- 内容区域 -->
    <main>
      <!-- 子路由的内容将在这里渲染 -->
      <router-view></router-view>
    </main>

    <!-- 底部信息 -->
    <footer>
      <p>&copy; 2025 我的应用</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      mobileMenuOpen: false,
      showLoginModal: false
    }
  }
}
</script>

<style scoped>
/* 添加变量定义 */
:root {
  --color-border: #555;
  --color-foreground: #fff;
  --color-muted: #aaa;
  --transition: all 0.3s ease;
}

/* Navigation */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 100;
}

.navbar-left,
.navbar-right {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-foreground);
  text-decoration: none;
  margin-right: 2rem;
}

.beta {
  font-size: 0.6rem;
  vertical-align: super;
  color: var(--color-muted);
  margin-left: 2px;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  transition: var(--transition);
  margin-right: 2rem;
  font-size: 1.2rem;
}

.nav-link:hover {
  color: var(--color-foreground);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: var(--transition);
}

.dropdown-btn:hover {
  color: var(--color-foreground);
}

.dropdown-arrow {
  font-size: 0.6rem;
}

header {
  background-color: #333;
  color: white;
  padding: 1rem;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 1rem;
}

main {
  flex: 1;
  padding: 1rem;
}

footer {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.mobile-menu.open {
  opacity: 1;
  pointer-events: all;
}

.mobile-link {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

.mobile-btn {
  margin-top: 1rem;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-btn span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
  transition: 0.4s;
}

/* 在小屏幕上显示移动端菜单 */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-menu {
    display: flex;
  }
}
</style>