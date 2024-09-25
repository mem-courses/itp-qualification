<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <mdui-layout>
    <mdui-top-app-bar class="example-top-app-bar">
      <mdui-top-app-bar-title>Top App Bar</mdui-top-app-bar-title>
    </mdui-top-app-bar>

    <!-- <mdui-navigation-drawer open class="example-navigation-drawer">
      <mdui-list>
        <mdui-list-item>Navigation drawer</mdui-list-item>
      </mdui-list>
    </mdui-navigation-drawer> -->

    <mdui-layout-main class="example-layout-main" style="min-height: 300px">Main</mdui-layout-main>
  </mdui-layout>
</template>

<style scoped></style>
