<script setup>
import { ref, onMounted, watch } from 'vue';
import { useElementSize } from '@vueuse/core';
import CanvasNest from 'canvas-nest.js';
import { drawPerfumeBottle } from './canvasBottle.js';

const canvasWidth = ref(300);
const canvasHeight = ref(600);
const previewRef = ref(null);
const { width, height } = useElementSize(previewRef);

const zoom = ref(1);

// 添加一个函数来调整 zoom
const adjustZoom = () => {
	if (!canvasWidth.value || !canvasHeight.value || !width.value || !height.value) return;

	const canvasAspectRatio = canvasWidth.value / canvasHeight.value;
	const containerAspectRatio = width.value / height.value;

	if (canvasAspectRatio > containerAspectRatio) {
		zoom.value = width.value / canvasWidth.value;
	} else {
		zoom.value = height.value / canvasHeight.value;
	}
};

// 监听宽高变化
watch([width, height], () => {
	adjustZoom();
});

onMounted(() => {
	// 生成 nest 粒子效果
	new CanvasNest(document.getElementById('preview'), {
		color: '100,100,100',
		pointColor: '150,150,150',
		count: 50,
		zIndex: 10,
		opacity: 0.5,
	});
	// 初始化缩放比
	adjustZoom();
	// 绘制香水瓶
	drawPerfumeBottle();
});
</script>

<template>
	<mdui-card ref="previewRef" class="preview" id="preview" variant="elevated">
		<div class="canvas-container">
			<canvas id="perfume-bottle" class="perfume-bottle" :width="canvasWidth" :height="canvasHeight"></canvas>
		</div>
	</mdui-card>
</template>

<style scoped>
.preview {
	background: white;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.canvas-container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	opacity: 1;
}

.perfume-bottle {
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
}
</style>