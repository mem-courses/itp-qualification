<script setup>
import { onMounted } from 'vue';
import { prompt, insights, ingredients } from '../data.js';
import { createSnackbar } from '../snackbar.js';
import Preview from './Preview.vue';
import Price from './Price.vue';
import DialogBuy from './DialogBuy.vue';
import DialogOption from './DialogOption.vue';

onMounted(() => {
	{
		const dialog = document.getElementById("options-dialog");
		console.log('!', dialog);
		const openButton = dialog.nextElementSibling;
		const closeButtons = dialog.querySelectorAll("mdui-button");

		openButton.addEventListener("click", () => dialog.open = true);
		closeButtons.forEach(button => button.addEventListener("click", () => dialog.open = false));
	}

	{
		const dialog = document.getElementById("buy-dialog");
		const openButton = dialog.nextElementSibling;
		const closeButtons = dialog.querySelectorAll("mdui-button");

		openButton.addEventListener("click", () => dialog.open = true);
		closeButtons.forEach(button => button.addEventListener("click", () => dialog.open = false));
	}
});
</script>

<template>
	<mdui-card class="main container" variant="elevated">
		<div class="left part">
			<mdui-text-field id="prompt" class="prompt-textarea" label="提示词" :value="prompt"
				@input="prompt = $event.target.value" placeholder="在这里键入提示词来得到你想要的香水哦..." rows="3" maxlength="200"
				counter></mdui-text-field>

			<!-- <mdui-slider value="80" name="温度"></mdui-slider> -->

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
					</mdui-collapse-item>
				</mdui-collapse>
				<mdui-list-item nonclickable>
					<mdui-icon-insights slot="icon"></mdui-icon-insights>
					成分 Ingredients
				</mdui-list-item>
				<div class="item-content">
					<mdui-chip v-for="ingredient in ingredients" :key="ingredient.name" class="item ingredient"
						@click="createSnackbar(ingredient.description)">
						{{ ingredient.name }}
						<div :style="{ backgroundColor: ingredient.color }" class="ingredient-color"></div>
					</mdui-chip>
				</div>
				<mdui-list-item nonclickable>
					<mdui-icon-auto-fix-high slot="icon"></mdui-icon-auto-fix-high>
					灵感 Insights
				</mdui-list-item>
				<div class="item-content">
					<mdui-chip v-for="insight in insights" :key="insight" class="item insight">
						{{ insight }}
					</mdui-chip>
				</div>
			</mdui-list>


			<div class="action-group">
				<mdui-button variant="tonal" class="action">随机生成</mdui-button>

				<mdui-dialog id="options-dialog" close-on-overlay-click close-on-esc>
					<mdui-top-app-bar-title>高级选项</mdui-top-app-bar-title>
					<DialogOption />
					<mdui-button slot="action" variant="text">取消</mdui-button>
					<mdui-button slot="action" variant="tonal">保存</mdui-button>
				</mdui-dialog>
				<mdui-button variant="tonal" class="action">
					高级选项
					<!-- <mdui-icon-settings slot="end-icon"></mdui-icon-settings> -->
				</mdui-button>

				<mdui-dialog id="buy-dialog" close-on-overlay-click close-on-esc>
					<mdui-top-app-bar-title>订单 #123456</mdui-top-app-bar-title>
					<DialogBuy />
					<Price slot="action" />
					<mdui-button slot="action" variant="filled">立即购买</mdui-button>
				</mdui-dialog>
				<mdui-button class="action">
					开始定制
					<!-- <mdui-icon-arrow-forward slot="end-icon"></mdui-icon-arrow-forward> -->
				</mdui-button>
			</div>


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

.item-content {
	margin-left: 2.5rem;
	/* margin-top: 0.5rem; */
	line-height: 1.5rem;
}

.item-content mdui-chip {
	margin-right: 0.75rem;
}

.item.ingredient .ingredient-color {
	--size: 0.4em;
	display: inline-block;
	width: var(--size);
	height: var(--size);
	border-radius: 50%;
	margin-left: 0.5em;
	margin-top: calc((1em - var(--size)));
	margin-right: -0.25rem;
}

@media (max-width: 840px) {
	.main {
		flex-direction: column;
		height: 300vw;
	}

	.divider {
		width: 100%;
		height: 1px;
		margin: 3em 0;
	}
}

mdui-list {
	margin-top: -1rem;
	padding-top: 0rem !important;
	padding-bottom: 0.75rem !important;
}

mdui-list-item {
	border-radius: 0.75rem !important;
	overflow: hidden;
	transition: border-radius 4s;
}

mdui-list-item .container {
	padding: 0rem 1.5rem 0rem 1rem !important;
}

/* mdui-list-item:hover {
	border-radius: 0.5rem !important;
} */

.action-group {
	display: flex;
	justify-content: space-between;
	margin-top: 0.5em;
}

.action-group .action {
	flex: 1;
	margin: 0 0.5em;
	font-size: 0.90rem;
}

.action-group .action:first-child {
	margin-left: 0;
}

.action-group .action:last-child {
	margin-right: 0;
}

.panel {
	min-width: 30rem !important;
	max-width: 80vw !important;
}

mdui-dialog mdui-top-app-bar-title {
	font-size: 1.5rem;
	padding: 0.5rem;
}

::v-deep(#options-dialog)::part(panel),
::v-deep(#buy-dialog)::part(panel) {
	width: 40rem !important;
	max-width: 80vw !important;
}


::v-deep(#prompt)::part(container) {
	border-radius: 0.5rem !important;
	overflow: hidden;
}

::v-deep(#prompt)::part(input) {
	padding-top: 2rem;
	font-size: 1rem;
	line-height: 1.75rem;
	letter-spacing: 0.02rem;
}
</style>