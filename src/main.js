import './assets/main.css';

import { createApp } from 'vue';

import 'mdui';
import 'mdui/mdui.css';
import '@mdui/icons/menu.js';
import '@mdui/icons/insights.js';
import '@mdui/icons/auto-fix-high.js';
import '@mdui/icons/auto-awesome-mosaic.js';
import '@mdui/icons/attach-file.js';
import '@mdui/icons/arrow-forward.js';
import '@mdui/icons/settings.js';

// import { setColorScheme } from 'mdui/functions/setColorScheme.js';
// setColorScheme('#0061a4');

import App from './App.vue';

createApp(App).mount('#app');
