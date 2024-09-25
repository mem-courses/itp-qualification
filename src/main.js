import './assets/main.css';

import { createApp } from 'vue';

import 'mdui';
import 'mdui/mdui.css';
import '@mdui/icons/menu.js';

// import { setColorScheme } from 'mdui/functions/setColorScheme.js';
// setColorScheme('#0061a4');

import App from './App.vue';

createApp(App).mount('#app');

import CanvasNest from 'canvas-nest.js';
new CanvasNest(document.getElementById('app'), {
  color: '120,120,120',
  count: 88,
  zIndex: 200,
  opacity: 0.7,
});
