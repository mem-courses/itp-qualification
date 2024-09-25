<script setup>
import Preview from './Preview.vue';

import { prompt } from '../data.js';

// const temperature = ref(80);
</script>

<template>
	<mdui-card class="main container" variant="elevated">
		<div class="left part">
			<mdui-text-field class="prompt-textarea" label="提示词" :value="prompt" @input="prompt = $event.target.value"
				placeholder="在这里键入提示词来得到你想要的香水哦..." rows="3" maxlength="200" counter></mdui-text-field>

			<mdui-list>
				<!-- <mdui-collapse-item>
					<mdui-list-item slot="header">Item 1</mdui-list-item>
					<div style="margin-left: 2.5rem">
						<mdui-list-item>Item 1 - subitem</mdui-list-item>
						<mdui-list-item>Item 1 - subitem</mdui-list-item>
						<mdui-list-item>Item 1 - subitem</mdui-list-item>
					</div>
				</mdui-collapse-item> -->
				<mdui-collapse accordion>
					<mdui-collapse-item>
						<mdui-list-item slot="header">
							<mdui-icon-insights slot="icon"></mdui-icon-insights>
							Insights
						</mdui-list-item>
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
			<Preview />
		</div>
	</mdui-card>
</template>

<style scoped>
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
	margin: -1em;
}

.left.part {
	flex: 3;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	/* 防止内容溢出 */
}

.right.part {
	flex: 2;
}

.prompt-textarea {
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	border-radius: var(--shape-corner) !important;
	overflow: hidden;
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

@media (max-width: 840px) {
	.main {
		flex-direction: column;
		height: 240vw;
	}

	.divider {
		width: 100%;
		height: 1px;
		margin: 3em 0;
	}
}

mdui-list-item {
	border-radius: var(--shape-corner) !important;
	overflow: hidden;
}
</style>