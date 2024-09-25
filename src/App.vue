<script setup>
import '@mdui/icons/menu.js';
import '@mdui/icons/more.js';
import '@mdui/icons/close.js';
import 'mdui/components/button-icon.js';
import { ref } from 'vue';

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

const prompt = ref("请帮我设计一款香水【默认提示词】")
</script>

<template>
  <mdui-layout>
    <mdui-top-app-bar>
      <mdui-button-icon icon="menu" @click="toggleDrawer"></mdui-button-icon>
      <mdui-top-app-bar-title>Title</mdui-top-app-bar-title>
      <div style="flex-grow: 1"></div>
      <mdui-button-icon icon="more_vert"></mdui-button-icon>
    </mdui-top-app-bar>

    <mdui-navigation-drawer :open="isDrawerOpen" @open-change="handleDrawerOpenChange" close-on-overlay-click>
      <mdui-list>
        <mdui-list-item>关于我们</mdui-list-item>
      </mdui-list>
      <!-- <mdui-button-icon icon="close" @click="closeDrawer"></mdui-button-icon> -->
    </mdui-navigation-drawer>

    <mdui-layout-main class="example-layout-main" style="min-height: 300px">
      <mdui-card class="main container" variant="elevated">
        <div class="left part">
          <mdui-text-field class="prompt-textarea" label="提示词" :value="prompt" @input="prompt = $event.target.value"
            placeholder="在这里键入提示词来得到你想要的香水哦..." rows="3" maxlength="200" counter></mdui-text-field>

          <mdui-list>
            <mdui-collapse accordion>
              <mdui-collapse-item>
                <mdui-list-item icon="near_me" slot="header">Item 1</mdui-list-item>
                <div style="margin-left: 2.5rem">
                  <mdui-list-item>Item 1 - subitem</mdui-list-item>
                  <mdui-list-item>Item 1 - subitem</mdui-list-item>
                  <mdui-list-item>Item 1 - subitem</mdui-list-item>
                </div>
              </mdui-collapse-item>
              <mdui-collapse-item>
                <mdui-list-item icon="near_me" slot="header">Item 2</mdui-list-item>
                <div style="margin-left: 2.5rem">
                  <mdui-list-item>Item 2 - subitem</mdui-list-item>
                  <mdui-list-item>Item 2 - subitem</mdui-list-item>
                  <mdui-list-item>Item 2 - subitem</mdui-list-item>
                  <mdui-list-item>Item 2 - subitem</mdui-list-item>
                </div>
              </mdui-collapse-item>
            </mdui-collapse>
          </mdui-list>
        </div>

        <div class="divider"></div>

        <div class="right part">
          <mdui-card class="preview" variant="elevated">
            <!-- <mdui-chip>Chip</mdui-chip>
            <mdui-chip>Chip</mdui-chip>
            <mdui-chip>Chip</mdui-chip>
            <mdui-chip>Chip</mdui-chip> -->
          </mdui-card>
        </div>
      </mdui-card>
    </mdui-layout-main>
  </mdui-layout>
</template>

<style scoped>
.container {
  display: block;
  width: 960px;
  max-width: calc(100% - 3em);
  margin: 0 auto;
}

.main {
  margin-top: 1em;
  margin-bottom: 3em;
  padding: 3em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: calc(100vh - 5em - 64px);
  /* 页面高度 - padding 占用高度 - appbar 的高度*/
}

.part {
  flex: 1;
  margin: -1em;
}

.left.part {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* 防止内容溢出 */
}

.prompt-textarea {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.prompt-textarea::part(textarea) {
  flex-grow: 1;
  resize: none;
  /* 禁用手动调整大小 */
}


.divider {
  width: 1px;
  background-color: #ccc;
  margin: 0 2.5em;
}

@media (max-width: 1000px) {
  .main {
    flex-direction: column;
  }

  .divider {
    width: 100%;
    height: 1px;
    margin: 3em 0;
  }
}

.preview {
  background: white;
  width: 100%;
  height: 100%;
}
</style>
