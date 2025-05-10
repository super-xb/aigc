<template>
  <div class="app">
    
    <!-- 副导航 -->
    <div class="sub-navbar">
      <button
        v-for="category in categories"
        :key="category.value"
        :class="['sub-nav-btn', { active: selectedCategory === category.value }]"
        @click="selectCategory(category.value)"
      >
        {{ category.label }}
      </button>
    </div>
    <!-- 内容展示区 -->
    <div class="gallery-content">
      <div v-if="selectedCategory === 'all'">
        <!-- 全部内容 -->
        <div class="image-grid">
          <img v-for="(image, index) in allImages" :key="index" :src="image" class="gallery-image" />
        </div>
      </div>
      <div v-else-if="selectedCategory === 'illustration'">
        <!-- 插图内容 -->
        <div class="image-grid">
          <img v-for="(image, index) in illustrationImages" :key="index" :src="image" class="gallery-image" />
        </div>
      </div>
      <div v-else-if="selectedCategory === 'avatar'">
        <!-- 头像内容 -->
        <div class="image-grid">
          <img v-for="(image, index) in avatarImages" :key="index" :src="image" class="gallery-image" />
        </div>
      </div>
      <div v-else-if="selectedCategory === 'photography'">
        <!-- 摄影内容 -->
        <div class="image-grid">
          <img v-for="(image, index) in photographyImages" :key="index" :src="image" class="gallery-image" />
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ 'open': mobileMenuOpen }">
      <a href="#" class="mobile-link">工具</a>
      <a href="#" class="mobile-link">资源</a>
      <a href="#" class="mobile-link" @click="showLoginModal = true">登录</a>
      <button class="btn-primary mobile-btn">控制台</button>
    </div>

    
    

  


  

    <!-- Login Modal -->
    <div class="modal-overlay" v-if="showLoginModal" @click="closeLoginModal"></div>
    <div class="login-modal" v-if="showLoginModal">
      <div class="modal-header">
        <h3 class="modal-title">Log in to Dzine.ai</h3>
        <button class="modal-close" @click="showLoginModal = false">×</button>
      </div>

      <div class="modal-body">
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="loginForm.email" placeholder="your@email.com" required>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <div class="password-input">
              <input :type="showPassword ? 'text' : 'password'" id="password" v-model="loginForm.password"
                placeholder="Enter your password" required>
              <button type="button" class="password-toggle" @click="showPassword = !showPassword">
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-eye">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-eye-off">
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                  <line x1="2" x2="22" y1="2" y2="22"></line>
                </svg>
              </button>
            </div>
          </div>

          <div class="form-options">
            <label class="checkbox-container">
              <input type="checkbox" v-model="loginForm.rememberMe">
              <span class="checkmark"></span>
              Remember me
            </label>
            <a href="#" class="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" class="btn-primary btn-full">Log in</button>
        </form>

        <div class="divider">
          <span>OR</span>
        </div>

        <div class="social-login">
          <button class="btn-social google">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-mail">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            Continue with Google
          </button>

          <button class="btn-social github">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-github">
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
              </path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            Continue with GitHub
          </button>
        </div>

        <p class="signup-prompt">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>

    
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';


// State
const mobileMenuOpen = ref(false);
const showLoginModal = ref(false);
const showPassword = ref(false);
const showPromoPopup = ref(false);
const activeTab = ref(0);
const activeImageIndex = ref(0);

const loginForm = ref({
  email: '',
  password: '',
  rememberMe: false
});

// Tools data
const tools = ref([
  {
    id: 1,
    title: "Image-to-Image",
    icon: 'svg-image',
    beforeImage: "https://placeholder.pics/svg/112x112",
    afterImage: "https://placeholder.pics/svg/112x112/DEDEDE-DEDEDE",
    bgColor: "bg-green",
    isHovered: false
  },
  {
    id: 2,
    title: "Text-to-Image",
    icon: 'svg-text',
    beforeImage: "https://placeholder.pics/svg/112x112",
    afterImage: "https://placeholder.pics/svg/112x112/DEDEDE-DEDEDE",
    bgColor: "bg-amber",
    isHovered: false
  },
  {
    id: 3,
    title: "Face Swap",
    icon: 'svg-user',
    beforeImage: "https://placeholder.pics/svg/112x112",
    afterImage: "https://placeholder.pics/svg/112x112/DEDEDE-DEDEDE",
    bgColor: "bg-purple",
    isHovered: false
  },
  {
    id: 4,
    title: "Local Edit",
    icon: 'svg-edit',
    beforeImage: "https://placeholder.pics/svg/112x112",
    afterImage: "https://placeholder.pics/svg/112x112/DEDEDE-DEDEDE",
    bgColor: "bg-green",
    isHovered: false
  },
  {
    id: 5,
    title: "Insert Object",
    icon: 'svg-plus',
    beforeImage: "https://placeholder.pics/svg/112x112",
    afterImage: "https://placeholder.pics/svg/112x112/DEDEDE-DEDEDE",
    bgColor: "bg-green",
    isHovered: false
  },
  {
    id: 6,
    title: "AI Eraser",
    icon: 'svg-eraser',
    beforeImage: "https://placeholder.pics/svg/112x112",
    afterImage: "https://placeholder.pics/svg/112x112/DEDEDE-DEDEDE",
    bgColor: "bg-blue",
    isHovered: false
  },
  {
    id: 7,
    title: "Expand",
    icon: 'svg-expand',
    beforeImage: "https://placeholder.pics/svg/112x112",
    afterImage: "https://placeholder.pics/svg/112x112/DEDEDE-DEDEDE",
    bgColor: "bg-purple",
    isHovered: false
  },
  {
    id: 8,
    title: "Enhance",
    icon: 'svg-wand',
    beforeImage: "https://placeholder.pics/svg/112x112",
    afterImage: "https://placeholder.pics/svg/112x112/DEDEDE-DEDEDE",
    bgColor: "bg-green",
    isHovered: false
  },
  {
    id: 9,
    title: "Product Background",
    icon: 'svg-bag',
    beforeImage: "https://placeholder.pics/svg/112x112",
    afterImage: "https://placeholder.pics/svg/112x112/DEDEDE-DEDEDE",
    bgColor: "bg-amber",
    isHovered: false
  },
  {
    id: 10,
    title: "Image-to-3D",
    icon: 'svg-cube',
    beforeImage: "https://placeholder.pics/svg/112x112",
    afterImage: "https://placeholder.pics/svg/112x112/DEDEDE-DEDEDE",
    bgColor: "bg-green",
    isHovered: false
  }
]);

// Methods
const closeLoginModal = (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    showLoginModal.value = false;
  }
};

const handleLogin = () => {
  // Here you would typically handle the login logic
  console.log('Login submitted:', loginForm.value);
  alert('Login successful!');
  showLoginModal.value = false;
};

const tabs = ref([
  {
    name: "人物设计",
    title: "生成动画角色",
    description: "借助AI辅助工具，设计师可以快速为动画和游戏创建和定制角色，包括将2D草图转换为动态3D角色。",
    images: [
      "https://static.dzine.ai/dzine_config/neo-index/use-case/character-design.png",
      "https://static.dzine.ai/dzine_config/neo-index/use-case/character-design.png",
      "https://static.dzine.ai/dzine_config/neo-index/use-case/character-design.png"
    ]
  },
  {
    name: "周边定制",
    title: "创建定制商品",
    description: "AI工具可以轻松地为按需印刷的产品（如t恤、马克杯和海报）设计定制图案、图形和艺术品，允许创作者在没有丰富的平面设计经验的情况下快速生成有市场的设计。",
    images: [
      "https://static.dzine.ai/dzine_config/neo-index/use-case/print-on-demand.png",
      "https://static.dzine.ai/dzine_config/neo-index/use-case/print-on-demand.png"
    ]
  },
  {
    name: "产品摄影",
    title: "专业产品展示",
    description: "试用背景替换，照明增强和构图工具将基本的产品照片转换为专业的营销海报，而无需昂贵的照片拍摄。",
    images: [
      "https://static.dzine.ai/dzine_config/neo-index/use-case/product-photography.png",
      "https://static.dzine.ai/dzine_config/neo-index/use-case/product-photography.png",
      "https://static.dzine.ai/dzine_config/neo-index/use-case/product-photography.png"
    ]
  },
  {
    name: "游戏美工",
    title: "创造游戏美术资源",
    description: "游戏开发者可以通过使用我们的工具来生成纹理、环境元素、角色概念和UI组件来加速制作。",
    images: [
      "https://static.dzine.ai/dzine_config/neo-index/use-case/game-design.png",
      "https://static.dzine.ai/dzine_config/neo-index/use-case/game-design.png"
    ]
  },
  {
    name: "室内设计",
    title: "可视化室内空间",
    description: "室内设计师可以使用工具来可视化房间的变化，测试不同的配色方案、家具布置和设计元素。创建逼真的渲染空间从简单的草图或现有的照片。",
    images: [
      "https://static.dzine.ai/dzine_config/neo-index/use-case/room-design.png",
      "https://static.dzine.ai/dzine_config/neo-index/use-case/room-design.png",
      "https://static.dzine.ai/dzine_config/neo-index/use-case/room-design.png"
    ]
  },
  {
    name: "营销设计",
    title: "为营销提供视觉素材",
    description: "营销人员可以使用工具快速创建专业的社交媒体帖子、广告、横幅和促销材料。",
    images: [
      "https://static.dzine.ai/dzine_config/neo-index/use-case/logo-design.png",
      "https://static.dzine.ai/dzine_config/neo-index/use-case/logo-design.png"
    ]
  }
]);

// Reset active image index when tab changes
watch(activeTab, () => {
  activeImageIndex.value = 0;
});

const setActiveTab = (index) => {
  activeTab.value = index;
};

const setActiveImage = (index) => {
  activeImageIndex.value = index;
};

const nextImage = () => {
  if (activeImageIndex.value < tabs.value[activeTab.value].images.length - 1) {
    activeImageIndex.value++;
  }
};

const prevImage = () => {
  if (activeImageIndex.value > 0) {
    activeImageIndex.value--;
  }
};

// Lifecycle hooks
onMounted(() => {
  // Show promo popup after 3 seconds
  setTimeout(() => {
    showPromoPopup.value = true;
  }, 3000);
});
</script>

<style>
:root {
  --color-background: #000000;
  --color-foreground: #ffffff;
  --color-primary: #efc83b;
  --color-primary-hover: #cfad31;
  --color-secondary: #1a1a1a;
  --color-secondary-hover: #2a2a2a;
  --color-muted: #666666;
  --color-border: #333333;
  --color-green-bg: linear-gradient(to bottom right, #0d3320, #051a10);
  --color-amber-bg: linear-gradient(to bottom right, #3a2e00, #1a1500);
  --color-purple-bg: linear-gradient(to bottom right, #2e0d3a, #15051a);
  --color-blue-bg: linear-gradient(to bottom right, #0d1a3a, #05091a);
  --border-radius: 8px;
  --transition: all 0.3s ease;
}
button:focus,
a:focus {
  outline: none !important;
  box-shadow: none !important;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

html,
body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  line-height: 1.6;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
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
  gap: 6px;
  transition: var(--transition);
  font-size: 16px;
}

.dropdown-btn:hover {
  color: var(--color-foreground);
}

.dropdown-arrow {
  font-size: 1.0rem;
}

.btn-primary {
  background-color: var(--color-primary);
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
}

.btn-secondary {
  background-color: var(--color-secondary);
  color: var(--color-foreground);
  border: 1px solid var(--color-border);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.btn-secondary:hover {
  background-color: var(--color-secondary-hover);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-foreground);
  border: 1px solid var(--color-border);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.btn-outline:hover {
  background-color: var(--color-secondary);
}

.btn-large {
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
}

.btn-full {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu-btn span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--color-foreground);
  margin: 5px 0;
  transition: var(--transition);
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background-color: var(--color-background);
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
  flex-direction: column;
  gap: 1rem;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 99;
}

.mobile-menu.open {
  transform: translateY(0);
}

.mobile-link {
  color: var(--color-muted);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: var(--transition);
}

.mobile-link:hover {
  color: var(--color-foreground);
}

.mobile-btn {
  margin-top: 0.5rem;
}

/* Hero Section */







.bg-green {
  background: var(--color-green-bg);
}

.bg-amber {
  background: var(--color-amber-bg);
}

.bg-purple {
  background: var(--color-purple-bg);
}

.bg-blue {
  background: var(--color-blue-bg);
}


.tool-icon {
  width: 16px;
  height: 16px;
}

.tool-title {
  font-weight: 500;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  padding: 8rem 0 5rem;
  text-align: center;
  background-color: #000000;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  pointer-events: none;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #ffffff;
  letter-spacing: 2px
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #9e9e9e;
  max-width: 800px;
  margin: 0 auto 3rem;
}

.hero-button {
  background-color: #f5cd18;
  color: #000000;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(245, 197, 24, 0.3);
}

.hero-button strong {
  font-weight: 800;
}

/* Tools Grid */
.tools-grid {
  padding: 3rem 0 6rem;
  background-color: #000000;
  position: relative;
  overflow: hidden;
}

.tools-grid::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, rgba(245, 197, 24, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
  pointer-events: none;
}

.tools-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.tool-card {
  border-radius: 16px;
  padding: 1.5rem;
  height: 350px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-5px);
}

.tool-image-to-image {
  background: linear-gradient(135deg, #291e00 0%, #3a2900 100%);
}

.tool-text-to-image {
  background: linear-gradient(135deg, #3a1700 0%, #4d1d00 100%);
}

.tool-consistent-character {
  background: linear-gradient(135deg, #002a1c 0%, #00402b 100%);
}

.tool-image-to-video {
  background: linear-gradient(135deg, #001a40 0%, #002966 100%);
}

.tool-insert-object {
  background: linear-gradient(135deg, #002a1c 0%, #00402b 100%);
}

.tool-ai-eraser {
  background: linear-gradient(135deg, #002940 0%, #003e66 100%);
}

.tool-expand {
  background: linear-gradient(135deg, #29004d 0%, #3d0073 100%);
}

.tool-enhance {
  background: linear-gradient(135deg, #002a1c 0%, #00402b 100%);
}

.tool-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.tool-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
}

.tool-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
}

.tool-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Demo Styles */
.demo-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.before-image, .after-image, .text-prompt, .generated-image {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.tag {
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  z-index: 1;
}

.transform-arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.8);
}

.text-prompt {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 8px;
  text-align: left;
}

.text-prompt p {
  margin: 0;
  color: white;
  font-size: 0.9rem;
  line-height: 1.4;
}

.character-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.video-demo {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-preview {
  position: relative;
  margin-bottom: 1rem;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.video-frames {
  border-radius: 8px;
  overflow: hidden;
}

.eraser-demo {
  position: relative;
}

.eraser-circle {
  position: absolute;
  top: 30%;
  left: 50%;
  width: 60px;
  height: 60px;
  border: 2px dashed white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.expand-demo {
  position: relative;
}

.expand-arrows {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.arrow {
  background-color: rgba(0, 0, 0, 0.5);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid white;
}

.top-left {
  top: 20px;
  left: 20px;
  border-right: none;
  border-bottom: none;
}

.top-right {
  top: 20px;
  right: 20px;
  border-left: none;
  border-bottom: none;
}

.bottom-left {
  bottom: 20px;
  left: 20px;
  border-right: none;
  border-top: none;
}

.bottom-right {
  bottom: 20px;
  right: 20px;
  border-left: none;
  border-top: none;
}

.split-image {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.split-line {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background-color: white;
}

.next-button {
  position: absolute;
  right: 2rem;
  bottom: 50%;
  transform: translateY(50%);
  width: 48px;
  height: 48px;
  background-color: #f5c518;
  color: #000000;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.next-button:hover {
  transform: translateY(50%) scale(1.1);
}

.small-object {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
}

.inserted-object {
  position: relative;
}

/* Responsive Adjustments */
@media (max-width: 1200px) {
  .tools-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 3.5rem;
  }
  
  .tools-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
  }
  
  .tools-container {
    grid-template-columns: 1fr;
  }
  
  .tool-card {
    height: 300px;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 6rem 0 4rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-button {
    padding: 0.875rem 1.75rem;
    font-size: 1.1rem;
  }
}

.tool-images {
  position: relative;
}

.before-image {
  width: 112px;
  height: 112px;
}

.before-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.after-image {
  position: absolute;
  right: -16px;
  bottom: -16px;
  width: 112px;
  height: 112px;
}

.after-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.arrow-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
}

/* Features Section */
.features {
  padding: 4rem 2rem;
  background-color: var(--color-secondary);
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--color-foreground);
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--color-muted);
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-5px);
  background-color: rgba(255, 255, 255, 0.08);
}

.feature-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(245, 197, 24, 0.1);
  border-radius: 50%;
  color: var(--color-primary);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.feature-description {
  color: var(--color-muted);
}

/* Pricing Section */
.pricing {
  padding: 4rem 2rem;
  text-align: center;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-card {
  padding: 2rem;
  background-color: var(--color-secondary);
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  transition: var(--transition);
  position: relative;
}

.pricing-card.featured {
  border-color: var(--color-primary);
  transform: scale(1.05);
}

.pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-primary);
  color: #000;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.875rem;
}

.pricing-header {
  margin-bottom: 2rem;
}

.pricing-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.pricing-price {
  font-size: 2.5rem;
  font-weight: bold;
}

.period {
  font-size: 1rem;
  color: var(--color-muted);
  font-weight: normal;
}

.pricing-features {
  list-style: none;
  margin-bottom: 2rem;
  text-align: left;
}

.pricing-features li {
  padding: 0.5rem 0;
  color: var(--color-muted);
}

.pricing-features li::before {
  content: "✓";
  color: var(--color-primary);
  margin-right: 0.5rem;
}

/* Testimonials */
.testimonials {
  padding: 4rem 2rem;
  background-color: var(--color-secondary);
  text-align: center;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  text-align: left;
}

.testimonial-content {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--color-muted);
}

.testimonial-name {
  font-weight: 500;
}

.testimonial-role {
  color: var(--color-muted);
  font-size: 0.875rem;
}

/* CTA Section */
.cta {
  padding: 6rem 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.cta-subtitle {
  font-size: 1.25rem;
  color: var(--color-muted);
  margin-bottom: 2rem;
}

.cta-note {
  margin-top: 1rem;
  color: var(--color-muted);
  font-size: 0.875rem;
}

/* Pre-Footer Section */
.pre-footer {
  background-color: var(--color-background);
  padding: 6rem 2rem;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
}

.pre-footer-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  color: var(--color-foreground);
}

/* New Footer */
.new-footer {
  background-color: var(--color-background);
  padding: 4rem 0 2rem;
  color: var(--color-foreground);
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  display: inline-flex;
  align-items: baseline;
  text-decoration: none;
  margin-bottom: 1rem;
}

.logo-text {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-foreground);
}

.logo-beta {
  font-size: 0.8rem;
  color: var(--color-primary);
  margin-left: 4px;
}

.footer-tagline {
  color: #ffffffb4;
  margin-bottom: 2rem;
  line-height: 1.5;
  text-align: left;
  font-weight: 200;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-icon {
  color: var(--color-muted);
  transition: var(--transition);
}

.social-icon:hover {
  color: var(--color-foreground);
}

.footer-links-section {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  text-align: left;
}

.footer-column-title {
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.25rem;
}

.footer-links a {
  color: #ffffffb4;
  text-decoration: none;
  font-size: 0.9rem;
  transition: var(--transition);
  font-weight: 100;


}

.footer-links a:hover {
  color: var(--color-foreground);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.copyright {
  color: var(--color-muted);
  font-size: 0.875rem;
}

/* Login Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}

.login-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-secondary);
  border-radius: var(--border-radius);
  width: 100%;
  max-width: 450px;
  z-index: 1001;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-border);
}

.modal-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.modal-close {
  background: none;
  border: none;
  color: var(--color-muted);
  font-size: 1.5rem;
  cursor: pointer;
  transition: var(--transition);
}

.modal-close:hover {
  color: var(--color-foreground);
}

.modal-body {
  padding: 1.5rem;
}

.login-form {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--color-foreground);
  transition: var(--transition);
}

.form-group input:focus {
  outline: none;
  border-color: var(--color-primary);
  background-color: rgba(255, 255, 255, 0.1);
}

.password-input {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-muted);
  cursor: pointer;
  transition: var(--transition);
}

.password-toggle:hover {
  color: var(--color-foreground);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-muted);
  font-size: 0.875rem;
}

.checkbox-container input {
  margin-right: 0.5rem;
}

.forgot-password {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: var(--transition);
}

.forgot-password:hover {
  text-decoration: underline;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1.5rem 0;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--color-border);
}

.divider span {
  padding: 0 10px;
  color: var(--color-muted);
  font-size: 0.875rem;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.btn-social {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  background-color: transparent;
  color: var(--color-foreground);
  cursor: pointer;
  transition: var(--transition);
}

.btn-social:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.signup-prompt {
  text-align: center;
  color: var(--color-muted);
  font-size: 0.875rem;
}

.signup-prompt a {
  color: var(--color-primary);
  text-decoration: none;
  transition: var(--transition);
}

.signup-prompt a:hover {
  text-decoration: underline;
}



.promo-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  cursor: pointer;
  z-index: 10;
  transition: var(--transition);
}

.promo-close:hover {
  background-color: rgba(255, 255, 255, 1);
}



.promo-decoration {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(244, 114, 182, 0.2);
}

.top-right {
  top: -50px;
  right: -50px;
}

.bottom-left {
  bottom: -50px;
  left: -50px;
}

.promo-title {
  color: #f472b6;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.promo-discount {
  color: #f472b6;
  font-size: 4rem;
  font-weight: bold;
  line-height: 1;
}

.discount-number {
  font-size: 4rem;
}

.discount-percent {
  font-size: 2rem;
  vertical-align: super;
}

.discount-label {
  color: #f472b6;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.promo-subtitle {
  color: #f472b6;
  margin-bottom: 1.5rem;
}

.promo-code {
  background-color: white;
  border-radius: var(--border-radius);
  padding: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.code-label {
  color: #666;
}

.code {
  border: 1px solid #f8bbd0;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  color: #f472b6;
  font-weight: bold;
}

.promo-note {
  color: #f472b6;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

.promo-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

/* SVG Icons */
[class^="svg-"] {
  display: inline-block;
  width: 16px;
  height: 16px;
}

/* Tool Icons */
.svg-image,
.svg-text,
.svg-user,
.svg-edit,
.svg-plus,
.svg-eraser,
.svg-expand,
.svg-wand,
.svg-bag,
.svg-cube {
  width: 16px;
  height: 16px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

/* Responsive Styles */
@media (max-width: 1200px) {


  .footer-links-section {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {


  .pricing-grid,
  .features-grid,
  .testimonials-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .footer-top {
    grid-template-columns: 1fr;
  }

  .footer-brand {
    margin-bottom: 2rem;
  }

  .footer-links-section {
    grid-template-columns: repeat(2, 1fr);
  }

  .pre-footer-title {
    font-size: 2.5rem;
  }
}

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




  .section-title {
    font-size: 2rem;
  }

  .pricing-card.featured {
    transform: none;
  }

  .footer-links-section {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
  }



  .pre-footer-title {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .navbar {
    padding: 1rem;
  }


  .features,
  .pricing,
  .testimonials,
  .cta,
  .pre-footer {
    padding: 3rem 1rem;
  }



 

  .login-modal {
    width: 90%;
  }


  .btn-social {
    font-size: 0.875rem;
  }

  .footer-links-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-column-title {
    margin-bottom: 1rem;
  }
}

/* Accessibility Improvements */
:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.use-cases-section {
  padding: 5rem 0;
  background-color: #000000;
  color: #ffffff;
}

.container {

  margin: 0 auto;
  padding: 0 5rem;
}

.use-cases-title {
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
}

.use-cases-subtitle {
  font-size: 1.25rem;
  color: #9e9e9e;
  text-align: center;
  margin-bottom: 3rem;
}

.use-cases-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  position: relative;
}

.use-cases-tabs::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #333;
}

.tab-button {
  background: transparent;
  border: none;
  color: #9e9e9e;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
}

.tab-button:hover {
  color: #ffffff;
}

.tab-button.active {
  color: #ffffff;
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-primary, #f5c518);
  z-index: 1;
}

.use-cases-content {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
}

.content-left {
  flex: 1;
  min-width: 300px;
}

.content-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.content-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #d1d1d1;
}

.content-right {
  flex: 2;
  min-width: 300px;
}

.image-carousel {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.carousel-images {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-image {
  width: 100%;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 12px;
}

.carousel-controls {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.control-button {
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.control-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.control-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.carousel-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: var(--color-primary, #f5c518);
  transform: scale(1.2);
}
.hero-image {
  max-width: 40%; 
  height: auto; 
  margin-bottom: 20px; 
}
/* Responsive adjustments */
@media (max-width: 992px) {
  .use-cases-content {
    flex-direction: column;
  }

  .content-left {
    text-align: center;
  }

  .use-cases-title {
    font-size: 2.5rem;
  }

  .content-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .use-cases-tabs {
    gap: 0.5rem;
  }

  .tab-button {
    font-size: 0.9rem;
    padding: 0.5rem;
  }

  .use-cases-title {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .use-cases-section {
    padding: 3rem 0;
  }

  .use-cases-tabs {
    flex-direction: column;
    gap: 0.25rem;
  }

  .tab-button {
    width: 100%;
    padding: 0.75rem;
    text-align: center;
  }

  .tab-button.active::after {
    height: 1px;
  }
}

.feature-sections {
  width: 100%;
  background-color: #000000;
  color: #ffffff;
}

.feature-section {
  padding: 5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.feature-section-reverse .feature-container {
  flex-direction: row-reverse;
}

.feature-image {
  flex: 1;
  min-width: 300px;
  border-radius: 16px;
  overflow: hidden;
}

.feature-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
  transition: transform 0.5s ease;
}

.feature-image:hover img {
  transform: scale(1.02);
}

.feature-image-colored {
  background-color: var(--feature-bg-color, #FFF176);
  padding: 2rem;
}

.feature-content {
  flex: 1;
  min-width: 300px;
}

.feature-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.feature-description {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #d1d1d1;
  margin-bottom: 2rem;
}

.feature-description strong {
  color: #ffffff;
}

.feature-button {
  display: inline-block;
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.feature-button:hover {
  background-color: #ffffff;
  color: #000000;
}

/* Responsive styles */
@media (max-width: 992px) {
  .feature-container {
    flex-direction: column;
    gap: 2rem;
  }

  .feature-section-reverse .feature-container {
    flex-direction: column;
  }

  .feature-content {
    text-align: center;
  }

  .feature-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .feature-section {
    padding: 3rem 1.5rem;
  }

  .feature-title {
    font-size: 2rem;
  }

  .feature-description {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .feature-section {
    padding: 2.5rem 1rem;
  }

  .feature-title {
    font-size: 1.75rem;
  }

  .feature-description {
    font-size: 1rem;
  }

  .feature-button {
    width: 100%;
    text-align: center;
  }
}
</style>

<script>
export default {
  name: 'SubNavbarFilter',
  data() {
    return {
      categories: [
        { label: 'All', value: 'all' },
        { label: '插图', value: 'illustration' },
        { label: '头像', value: 'avatar' },
        { label: '摄影', value: 'photography' }
      ],
      selectedCategory: 'all',
      allImages: [
        '/a1.jpg', '/a2.jpg', '/a3.jpg', '/a4.jpg','/a5.jpg', '/a6.jpg', '/static/mx.jpg', '/static/mx.jpg','/static/mx.jpg', '/static/mx.jpg', '/static/mx.jpg', '/static/mx.jpg','/static/mx.jpg', '/static/mx.jpg', '/static/mx.jpg', '/static/mx.jpg'
      ],
      illustrationImages: [
        'a1.jpg', 'illustration2.jpg', 'illustration3.jpg', 'illustration4.jpg', 'illustration5.jpg', 'illustration6.jpg', 'illustration7.jpg', 'illustration8.jpg'
      ],
      avatarImages: [
        'avatar1.jpg', 'avatar2.jpg', 'avatar3.jpg', 'avatar4.jpg', 'avatar5.jpg', 'avatar6.jpg', 'avatar7.jpg', 'avatar8.jpg'
      ],
      photographyImages: [
        'photography1.jpg', 'photography2.jpg', 'photography3.jpg', 'photography4.jpg', 'photography5.jpg', 'photography6.jpg', 'photography7.jpg', 'photography8.jpg'
      ]
    };
  },
  methods: {
    selectCategory(value) {
      this.selectedCategory = value;
    }
  }
};
</script>

<style scoped>
.sub-navbar {
  display: flex;
  margin-top: 35px;  /* 只保留上边的空白 */
  margin-left: 200px;  /* 左边不留空白 */
  margin-right: 200px;  /* 右边不留空白 */
  margin-bottom: 0;  /* 下边不留空白 */
}

.sub-nav-btn {
  flex: 1;
  padding: 8px 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #cfcfcf;
}

.sub-nav-btn.active {
  border-bottom: 2px solid #cfad31;
  color: #cfad31;
}

.gallery-content {
  padding: 100px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4列 */
  grid-gap: 12px; /* 图片间距 */
}

.gallery-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px; /* 圆角半径，可以根据需要调整 */
}
</style>