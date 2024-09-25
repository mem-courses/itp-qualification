<script setup>
import { ref, onMounted } from 'vue';
import CanvasNest from 'canvas-nest.js';

const canvasWidth = ref(300);
const canvasHeight = ref(700);

onMounted(() => {
	new CanvasNest(document.getElementById('preview'), {
		color: '100,100,100',
		pointColor: '150,150,150',
		count: 28,
		zIndex: 10,
		opacity: 0.5,
	});
});
</script>

<template>
	<mdui-card class="preview" id="preview" variant="elevated">
		<canvas id="perfume-bottle" :width="canvasWidth" :height="canvasHeight"></canvas>
	</mdui-card>
</template>

<style scoped>
.preview {
	background: white;
	width: 100%;
	height: 100%;
}
</style>