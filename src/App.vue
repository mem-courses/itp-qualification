<script setup>
import { ref } from 'vue';
import Main from './components/Main.vue';

const isDrawerOpen = ref(false);

const openDrawer = () => {
  isDrawerOpen.value = true;
};

const closeDrawer = () => {
  isDrawerOpen.value = false;
};

const toggleDrawer = () => {
  if (isDrawerOpen.value) {
    closeDrawer();
  } else {
    openDrawer();
  }
};

const handleDrawerOpenChange = (event) => {
  isDrawerOpen.value = event.detail.open;
};
</script>

<template>
  <mdui-layout>
    <mdui-top-app-bar>
      <mdui-button-icon @click="toggleDrawer">
        <mdui-icon-menu></mdui-icon-menu>
      </mdui-button-icon>
      <div style="flex-grow: 1"></div>
      <mdui-top-app-bar-title class="appbar-title">AI × PERFUME</mdui-top-app-bar-title>
    </mdui-top-app-bar>

    <mdui-navigation-drawer :open="isDrawerOpen" @open-change="handleDrawerOpenChange" close-on-overlay-click>
      <mdui-list>
        <mdui-list-item>关于我们</mdui-list-item>
      </mdui-list>
      <!-- <mdui-button-icon icon="close" @click="closeDrawer"></mdui-button-icon> -->
    </mdui-navigation-drawer>

    <mdui-layout-main style="min-height: 300px">
      <Main />
    </mdui-layout-main>
  </mdui-layout>
</template>

<style scoped>
.appbar-title {
  text-align: right;
}

@media (max-width: 840px) {
  .appbar-title {
    text-align: center;
    padding-right: calc(40px + 0.5rem);
  }
}
</style>
