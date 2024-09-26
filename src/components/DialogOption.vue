<script setup>
const maskContent = [
	"请帮助我配置一款香水，满足以下前提：",
	"1. 请给出使用的每种原料的占比和功用；",
	"2. 请使用天然原料，避免使用复合配方；",
	"进一步的要求如下：",
	"",
	"''''",
	"{ { prompt } } ",
	"''''",
].join('\n')
</script>

<template>
	<div class="dialog-content">
		<div class="label">模型</div>
		<mdui-radio-group value="gpt-4o">
			<mdui-radio value="gpt-4o">GPT 4o</mdui-radio>
			<mdui-radio value="claude-3.5-sonnet">Claude 3.5 Sonnet</mdui-radio>
			<mdui-radio value="kimi">Kimi</mdui-radio>
			<mdui-radio value="gpt-o1" disabled>GPT o1 (Premium Only)</mdui-radio>
		</mdui-radio-group>
		<div class="label">温度</div>
		<mdui-slider value="80" step="1" min="0" max="100"></mdui-slider>
		<div class="label">Top P</div>
		<mdui-slider value="50" step="1" min="0" max="100"></mdui-slider>
		<div class="label">面具</div>
		<mdui-text-field id="mask" rows="8" :value="maskContent"></mdui-text-field>
	</div>
</template>

<style scoped>
/* .dialog-content {
	overflow-y: auto;
} */
::v-deep(#mask)::part(input) {
	font-size: 0.85rem;
	line-height: 1.1rem;
}
</style>