<template>
  <a-layout id="components-layout-demo-responsive" style="min-height: 100vh; background-color: #1a1a1a; color: white;">
    <!-- 左侧导航 -->
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      style="background-color: #141414;"
    >
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        :default-selected-keys="['2']"
        style="background-color: #141414; color: white; padding-top: 20px;"
      >
        <a-menu-item key="1" class="custom-menu-item">
          <span class="menu-content">
            <a-icon type="user" class="menu-icon" />
            <span class="nav-text">当前会话</span>
          </span>
        </a-menu-item>
        <a-menu-item key="2" class="custom-menu-item">
          <span class="menu-content">
            <a-icon type="video-camera" class="menu-icon" />
            <span class="nav-text">历史会话 1</span>
          </span>
        </a-menu-item>
        <a-menu-item key="3" class="custom-menu-item">
          <span class="menu-content">
            <a-icon type="upload" class="menu-icon" />
            <span class="nav-text">历史会话 2</span>
          </span>
        </a-menu-item>
        <a-menu-item key="4" class="custom-menu-item">
          <span class="menu-content">
            <a-icon type="user" class="menu-icon" />
            <span class="nav-text">历史会话 3</span>
          </span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <!-- 右侧内容区域 -->
    <a-layout style="background-color: #1a1a1a;">
      <a-layout-header
        :style="{ background: '#141414', padding: '0 16px', color: 'white' }"
      >
        欢迎来到灵感圣地
      </a-layout-header>

      <!-- 新增：搜索框 -->
        <a-input-search
      placeholder="input search text"
      enter-button
      @search="onSearch"
      class="custom-search-input"
    />

      <a-layout-content
        :style="{ margin: '24px 16px 0', color: 'white' }"
      >
        <div
          :style="{
            padding: '24px',
            background: '#222',
            minHeight: '360px',
          }"
        >
          content
        </div>
      </a-layout-content>

      <a-layout-footer
        style="text-align: center; background-color: #141414; color: white;"
      >
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  methods: {
    onCollapse(collapsed, type) {
      console.log('Collapse:', collapsed, type);
    },
    onBreakpoint(broken) {
      console.log('Breakpoint:', broken);
    },
    onSearch(value) {
      console.log(value);
    },
  },


};

</script>

<style scoped>
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

/* 图标大小 */
.menu-icon {
  font-size: 24px;
  color: orangered;
  margin-right: 16px;
}

/* 导航文字样式 */
.nav-text {
  font-size: 16px;
  vertical-align: middle;
  color: white;
}

/* 选中状态样式 */
.ant-menu-item-selected {
  background-color: rebeccapurple !important; /* 蓝色背景 */
  color: white !important; /* 白色文字 */
}

.ant-menu-item-selected .menu-icon {
  color: white !important; /* 白色图标 */
}


.custom-search-input {
  width: 80%;
  margin: 24px auto; /* 居中并加点上下间距 */
}

/* 覆盖输入框样式 */
.custom-search-input .ant-input {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  padding: 0 15px;
  background-color: #f0f0f0; /* 白色背景 */
  border: 1px solid #ccc; /* 边框 */
}

/* 覆盖按钮样式 */
.custom-search-input .ant-btn {
  height: 50px;
  line-height: 50px;
  background-color: #007bff; /* 搜索按钮背景色 */
  color: white;
  border: none;
}

</style>