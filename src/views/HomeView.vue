<template>
  <div class="app-container">
    <nav class="sticky-nav">
      <div class="nav-container">
        <div class="nav-left">
          <a href="#" class="nav-logo">
            创意绘画伙伴<span class="beta-tag">BETA</span>
          </a>
        </div>
        <div class="nav-center">
          <ul class="nav-list">
            <li class="nav-item"><a href="/home" class="nav-link">首页</a></li>
            <li class="nav-item"><a href="/tutorials" class="nav-link">绘画教程</a></li>
            <li class="nav-item"><a href="/inspiration" class="nav-link">创意灵感</a></li>
            <li class="nav-item"><a href="/community" class="nav-link">社区作品</a></li>
            <li class="nav-item"><a href="/profile" class="nav-link">个人中心</a></li>
            <li class="nav-item"><a href="/help" class="nav-link">帮助中心</a></li>
          </ul>
        </div>
        <div class="nav-right">
          <a href="/login" class="nav-btn nav-login-btn">登录</a>
          <!-- <a href="/trial" class="nav-btn nav-trial-btn">免费试用</a> -->
        </div>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
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

.nav-left {
  display: flex;
  align-items: center;
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

.nav-center {
  flex: 1;
  margin: 0 20px;
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

.nav-right {
  display: flex;
  align-items: center;
}

.nav-btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
}

/* .nav-login-btn {
  color: #fff;
  margin-right: 10px;
} */

.nav-login-btn {
  background-color: #f5c518;
  color: #000;
  margin-right: 10px;
}

.nav-trial-btn {
  background-color: #f5c518;
  color: #000;
}

.nav-trial-btn:hover {
  background-color: #e6b400;
}

</style>