

<template>

  <div id="app" style="min-height: 100vh; background-color: #1a1a1a; color: white; display: flex; flex-direction: row;">
    <!-- 左侧导航 -->
    <div style="width: 260px; background-color: #1a1a1a; box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2); padding: 20px; flex-shrink: 0;">
      <a href="/gallery" style="display: block; text-align: center; margin-bottom: 20px;">
        <img src="../img/logo.png" alt="Logo" style="height: 80px; width: auto; filter: brightness(1.2); border-radius: 8px;" />
      </a>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="margin-bottom: 30px;">
          <div 
            style="display: flex; align-items: center; padding: 10px 20px; border-radius: 8px; cursor: pointer;" 
            :class="{'selected': currentSession, 'normal': !currentSession}" 
            @click="handleCurrentSession"
          >
            <span style="font-size: 24px; color: white; margin-right: 16px;">👤</span>
            <span style="font-size: 16px; color: white;">当前会话</span>
          </div>
        </li>
        <li style="margin-bottom: 30px;">
          <div 
            style="display: flex; align-items: center; padding: 10px 20px; border-radius: 8px; cursor: pointer;" 
            :class="{'selected': historySession1, 'normal': !historySession1}" 
            @click="handleHistorySession(1)"
          >
            <span style="font-size: 24px; color: orangered; margin-right: 16px;">⏳</span>
            <span style="font-size: 16px; color: white;">历史会话 1</span>
          </div>
        </li>
        <li style="margin-bottom: 30px;">
          <div 
            style="display: flex; align-items: center; padding: 10px 20px; border-radius: 8px; cursor: pointer;" 
            :class="{'selected': historySession2, 'normal': !historySession2}" 
            @click="handleHistorySession(2)"
          >
            <span style="font-size: 24px; color: orangered; margin-right: 16px;">📄</span>
            <span style="font-size: 16px; color: white;">历史会话 2</span>
          </div>
        </li>
        <li style="margin-bottom: 30px;">
          <div 
            style="display: flex; align-items: center; padding: 10px 20px; border-radius: 8px; cursor: pointer;" 
            :class="{'selected': historySession3, 'normal': !historySession3}" 
            @click="handleHistorySession(3)"
          >
            <span style="font-size: 24px; color: orangered; margin-right: 16px;">📁</span>
            <span style="font-size: 16px; color: white;">历史会话 3</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- 右侧内容区域 -->
    <div style="flex: 1; display: flex; flex-direction: column;">
      <!-- Header -->
      <div style="background-color: #1a1a1a; padding: 20px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);">
        <h1 style="margin: 0; font-size: 28px; font-weight: bold; letter-spacing: 1px; color: #ffffff;">Welcome to Kingdom of Inspiration</h1>
        <button style="background-color: #007bff; border: none; font-size: 16px; padding: 8px 20px; border-radius: 20px; color: white; cursor: pointer;">Logout</button>
      </div>

      <!-- 搜索栏 -->
      <div style="display: flex; justify-content: center; margin: 24px 0;">
        <div style="display: flex; width: 80%; max-width: 600px; background-color: #2a2a2a; border-radius: 30px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);">
          <input
            type="text"
            placeholder="输入关键词搜索..."
            v-model="searchQuery"
            @keyup.enter="onSearch"
            style="flex: 1; height: 70px; line-height: 70px; font-size: 18px; padding: 0 20px; border: none; border-radius: 30px 0 0 30px; background-color: #1a1a1a; color: white; outline: none;"
          />
          <button
            style="height: 70px; line-height: 70px; padding: 0 24px; border: none; border-radius: 0 30px 30px 0; background-color: #007bff; color: white; font-weight: bold; font-size: 18px; cursor: pointer;"
            @click="onSearch"
          >
            Search
          </button>
        </div>
      </div>

      <!-- 内容区 -->
      <div style="flex: 1; margin: 24px; padding: 24px; background-color: #1a1a1a; border-radius: 16px; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);">
        <div v-if="showImage" style="text-align: center;">
          <img src="../img/inspiration.png" alt="Inspiration" style="max-width: 23%; height:auto; border-radius: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);" />
        </div>
        <div v-else style="color: white; font-size: 20px; text-align: center; line-height: 1.6;">
          <p>Welcome to your inspiration dashboard. Start exploring!</p>
          <button
            style="margin-top: 20px; font-size: 18px; padding: 12px 28px; border-radius: 24px; background-color: #007bff; color: white; border: none; cursor: pointer;"
          >
            Get Started
          </button>
        </div>
      </div>

      <!-- Footer -->
      <div style="text-align: center; background-color: #1a1a1a; color: white; padding: 20px; font-size: 14px; letter-spacing: 0.5px;">
        Inspiration Hub ©2023 Created by Wang Wang Team
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      showImage: false,
      currentSession: true,
      historySession1: false,
      historySession2: false,
      historySession3: false,
    };
  },
  methods: {
    onSearch() {
      if (this.searchQuery.trim() !== '') {
        this.showImage = true;
      }
    },
    handleCurrentSession() {
      this.currentSession = true;
      this.historySession1 = false;
      this.historySession2 = false;
      this.historySession3 = false;
    },
    handleHistorySession(sessionNumber) {
      this.currentSession = false;
      switch (sessionNumber) {
        case 1:
          this.historySession1 = true;
          this.historySession2 = false;
          this.historySession3 = false;
          break;
        case 2:
          this.historySession1 = false;
          this.historySession2 = true;
          this.historySession3 = false;
          break;
        case 3:
          this.historySession1 = false;
          this.historySession2 = false;
          this.historySession3 = true;
          break;
      }
    },
  },
};
</script>

<style scoped>
.selected {
  background-color: rebeccapurple;
  color: white;
}

.normal {
  background-color: transparent;
  color: white;
}
#components-layout-demo-responsive .logo {
  height: 32px;
  background: #2d2d2d;
  margin: 16px;
}

/* 自定义菜单项样式 */
.custom-menu-item {
  margin-bottom: 30px !important;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
}

.menu-content {
  display: flex;
  align-items: center;
}

.menu-icon {
  font-size: 24px;
  color: orangered;
  margin-right: 16px;
}

.nav-text {
  font-size: 16px;
  vertical-align: middle;
  color: white;
}

.ant-menu-item-selected {
  background-color: rebeccapurple !important;
  color: white !important;
}

.ant-menu-item-selected .menu-icon {
  color: white !important;
}

/* 搜索栏外层容器，用于控制整体居中 */
.search-wrapper {
  display: flex;
  justify-content: center;
  margin: 24px 0;
}

/* 自定义搜索框样式 */
.custom-search-input {
  width: 80%;
  max-width: 600px;
}

/* 覆盖输入框样式 */
.custom-search-input .ant-input {
  height: 70px;
  line-height: 70px;
  font-size: 18px;
  padding: 0 20px;
  border-radius: 30px 0 0 30px;
  background-color: #f0f0f0;
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* 覆盖按钮样式 */
.custom-search-input .ant-btn {
  height: 70px;
  line-height: 70px;
  padding: 0 24px;
  border-radius: 0 30px 30px 0;
  background-color: #007bff;
  color: white;
  border: none;
  font-weight: bold;
}

/* 搜索前缀图标 */
.custom-search-input .ant-input-affix-wrapper .ant-input-prefix {
  margin-right: 10px;
}

/* 内容区域 */
.ant-layout-content {
  background-color: #1a1a1a;
  color: white;
}

/* Footer 样式 */
.ant-layout-footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
/* 其他样式保持不变 */


</style>