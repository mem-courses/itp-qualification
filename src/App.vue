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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

.appbar-title {
  text-align: right;
  padding-right: 1rem;
  letter-spacing: 1px;
  font-size: 2rem;
  /* font-weight: 400; */
  font-family: 'Roboto Slab', serif;
}

@media (max-width: 840px) {
  .appbar-title {
    text-align: center;
    font-size: 1.6rem;
    padding-right: calc(40px + 0.5rem);
  }
}
</style>
