<template>
  <div class="dashboard-layout">
    <!-- Left Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-content">
        <!-- Navigation Menu
        <nav class="sidebar-nav">
          <a href="#" class="nav-item active">
            <div class="nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18.36 6.64A9 9 0 0 1 20.77 15"/>
                <path d="M6.16 6.16a9 9 0 1 0 12.68 12.68"/>
                <path d="M12 2v4"/>
                <path d="m2 2 20 20"/>
              </svg>
            </div>
            <span>帮助中心</span>
          </a>
          <a href="#" class="nav-item">
            <div class="nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            </div>
            <span>社区</span>
          </a>
          <a href="#" class="nav-item">
            <div class="nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <span>项目</span>
          </a>
          <a href="#" class="nav-item">
            <div class="nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="15" r="2" />
                <path d="M12 13v-2" />
                <path d="M12 2v12" />
              </svg>
            </div>
            <span>充值</span>
          </a>
        </nav> -->
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <section class="help-center-section">
        <h1 class="section-title">帮助中心</h1>
        <p class="help-description">
          找不到答案？请查看常见问题或联系我们的支持团队以获得帮助。
        </p>

        <!-- Four Blocks Layout -->
        <div class="help-blocks">
          <!-- Block 1: 开始使用 -->
          <div class="help-block">
            <h2 class="block-title">开始使用</h2>
            <ul class="block-list">
              <li><a href="#">如何注册账户</a></li>
              <li><a href="#">我的第一个项目怎么创建</a></li>
              <li><a href="#">如何上传图像进行编辑</a></li>
            </ul>
          </div>

          <!-- Block 2: AI 工具使用指南 -->
          <div class="help-block">
            <h2 class="block-title">AI 工具使用指南</h2>
            <ul class="block-list">
              <li><a href="#">图生图功能详解</a></li>
              <li><a href="#">文生图设置与提示技巧</a></li>
              <li><a href="#">固定角色形象的训练方法</a></li>
            </ul>
          </div>

          <!-- Block 3: 高级功能支持 -->
          <div class="help-block">
            <h2 class="block-title">高级功能支持</h2>
            <ul class="block-list">
              <li><a href="#">API 文档与调用方式</a></li>
              <li><a href="#">自定义模型训练教程</a></li>
              <li><a href="#">如何导出高质量图像</a></li>
            </ul>
          </div>

          <!-- Block 4: 常见问题 -->
          <div class="help-block">
            <h2 class="block-title">常见问题</h2>
            <ul class="block-list">
              <li><a href="#">账户安全问题</a></li>
              <li><a href="#">支付与充值问题</a></li>
              <li><a href="#">技术支持与反馈</a></li>
            </ul>
          </div>
        </div>

        <!-- Search and Support -->
        <div class="support-actions">
          <input type="text" placeholder="搜索帮助内容..." class="search-input" />
          <button class="contact-support-button">联系客服</button>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Overall Layout */
.dashboard-layout {
  display: flex;
  min-height: 100vh;
  background-color: #0e0e0e;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* Main Content */
.main-content {
  flex: 1;
  margin-left: 350px;
  padding: 2rem;
  overflow-y: auto;
}

.help-center-section {
  padding: 2rem;
  background-color: #1a1a1a;
  border-radius: 16px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.help-description {
  color: #ccc;
  font-size: 1rem;
  margin-bottom: 2rem;
}

/* Four Blocks Layout */
.help-blocks {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.help-block {
  background-color: #222;
  padding: 1.5rem;
  border-radius: 12px;
}

.block-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #fff;
}

.block-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.block-list li {
  margin-bottom: 0.75rem;
}

.block-list a {
  color: #f5c518;
  text-decoration: none;
  transition: color 0.2s ease;
}

.block-list a:hover {
  color: #e6b400;
}

/* Search and Support */
.support-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.search-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
}

.contact-support-button {
  padding: 0.75rem 1.5rem;
  background-color: #f5c518;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.contact-support-button:hover {
  background-color: #e6b400;
}
</style>