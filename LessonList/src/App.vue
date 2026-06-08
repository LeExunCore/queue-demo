<template>
  <div class="app">
    <el-container>
      <el-header>
        <div class="header-content">
          <h1>学生课表管理系统</h1>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/settings">设置</el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <p>© 2024 学生课表管理系统</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref('/');
</script>

<style scoped>
.app {
  height: 100vh;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.header-content h1 {
  margin: 0;
  font-size: 24px;
  color: #333;
}

.el-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
}

.el-footer {
  text-align: center;
  background-color: #f8f9fa;
  border-top: 1px solid #e0e0e0;
  padding: 20px;
}

.el-main {
  padding: 20px;
}
</style>
