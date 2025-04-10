<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute } from 'vue-router';

const selectedKeys = ref<string[]>(["1"]);

// 根据当前路由更新选中的菜单项
const route = useRoute();
const updateSelectedKey = () => {
  if (route.path === '/') {
    selectedKeys.value = ["1"];
  } else if (route.path === '/search') {
    selectedKeys.value = ["2"];
  } else if (route.path === '/test/test1') {
    selectedKeys.value = ["3"];
  }
};

// 监听路由变化
watch(() => route.path, updateSelectedKey);

// 初始化时设置选中的菜单项
onMounted(() => {
  updateSelectedKey();
});
</script>

<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <NuxtLink to="/" class="menu-link">首页</NuxtLink>
        </a-menu-item>
        <a-menu-item key="2">
          <NuxtLink to="/search" class="menu-link">查找</NuxtLink>
        </a-menu-item>
        <a-menu-item key="3">
          <NuxtLink to="/codeReference" class="menu-link">语言速查</NuxtLink>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div style="margin: 16px 0;"></div>
      <!-- <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb> -->
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <!-- 使用NuxtPage组件显示路由页面内容 -->
        <NuxtPage />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      <!-- Caro &copy;2025 Created by Darcy -->
    </a-layout-footer>
  </a-layout>
</template>

<style scoped lang="scss">
.layout {
  width: 100vw;
  height: 100vh;
}

.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

// [data-theme="dark"] .site-layout-content {
//   background: #141414;
// }

/* 菜单链接样式 */
.menu-link {
  color: inherit;
  text-decoration: none;
}
</style>
