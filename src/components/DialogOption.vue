<script setup>
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
		<div class="label">基准提示词</div>
		<mdui-text-field rows="5"></mdui-text-field>
	</div>
</template>

<style scoped></style>