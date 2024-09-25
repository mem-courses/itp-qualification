<script setup>
import { ref, onMounted, watch } from 'vue';
import { useElementSize } from '@vueuse/core';
import CanvasNest from 'canvas-nest.js';

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

function drawPerfumeBottle() {

	// 获取canvas元素和2D绘图上下文
	const canvas = document.getElementById('perfume-bottle');
	const ctx = canvas.getContext('2d');

	// 定义香水瓶的参数
	const bottleWidth = 200; // 瓶子宽度
	const bottleHeight = 520; // 瓶子高度
	const liquidHeight = bottleHeight * 0.8; // 液体高度
	const bottleX = (canvas.width - bottleWidth) / 2; // 瓶子左上角X坐标
	const bottleY = 40; // 瓶子左上角Y坐标
	const cornerRadius = bottleWidth / 5; // 瓶子底部圆角半径
	// const bottomCurveHeight = bottleWidth / 3; // 底部曲线的高度


	const waveSpeed = 1000; // 波浪越小速度越快
	const waveAmplitude = 5; // 波浪振幅

	// 定义液体层参数
	const layers = [
		{
			color: 'rgb(255, 0, 0)',
			height: 0.4,
			phase: 0,
			originalColor: 'rgb(255, 0, 0)',
		},
		{
			color: 'rgb(0, 255, 0)',
			height: 0.3,
			phase: 2,
			originalColor: 'rgb(0, 255, 0)',
		},
		{
			color: 'rgb(0, 0, 255)',
			height: 0.3,
			phase: 4,
			originalColor: 'rgb(0, 0, 255)',
		},
	];

	// 跟踪当前鼠标悬停的液体层
	let hoveredLayer = -1;

	// 瓶身路径
	function drawBottlePath(ctx) {
		// 绘制瓶身左侧
		ctx.moveTo(bottleX, bottleY);
		ctx.lineTo(bottleX, bottleY + bottleHeight - cornerRadius);

		// 绘制左下圆角
		ctx.arcTo(
			bottleX,
			bottleY + bottleHeight,
			bottleX + cornerRadius,
			bottleY + bottleHeight,
			cornerRadius
		);

		// 绘制底部
		ctx.lineTo(bottleX + bottleWidth - cornerRadius, bottleY + bottleHeight);

		// 绘制右下圆角
		ctx.arcTo(
			bottleX + bottleWidth,
			bottleY + bottleHeight,
			bottleX + bottleWidth,
			bottleY + bottleHeight - cornerRadius,
			cornerRadius
		);

		// 绘制瓶身右侧
		ctx.lineTo(bottleX + bottleWidth, bottleY);
	}

	// 绘制香水瓶轮廓
	function drawBottle() {
		ctx.strokeStyle = '#a0a0a0';
		ctx.lineWidth = 2;
		ctx.beginPath();
		drawBottlePath(ctx);
		ctx.stroke();
	}

	// 绘制液体层
	function drawLayers(time) {
		ctx.save(); // 保存当前绘图状态
		ctx.beginPath();
		drawBottlePath(ctx);
		ctx.closePath();
		ctx.clip(); // 应用裁剪，确保液体只在瓶子内部绘制

		let currentHeight = bottleY + bottleHeight - liquidHeight;
		layers.forEach((layer, index) => {
			const layerHeight = liquidHeight * layer.height;
			// console.log('animated', index, layer.height, currentHeight);

			// 设置填充颜色，如果是悬停层则变为红色
			ctx.fillStyle = index === hoveredLayer ? 'rgba(255, 0, 0, 0.5)' : layer.color;
			ctx.beginPath();
			ctx.moveTo(bottleX, currentHeight);

			// 绘制波浪效果
			for (let x = 0; x <= bottleWidth; x++) {
				const y = Math.sin((x / 80 + time / waveSpeed + layer.phase + index * 0.5) * Math.PI) * waveAmplitude;
				ctx.lineTo(bottleX + x, currentHeight + y);
			}

			ctx.lineTo(bottleX + bottleWidth, bottleY + bottleHeight);
			ctx.lineTo(bottleX, bottleY + bottleHeight);
			ctx.closePath();
			ctx.fill();

			currentHeight += layerHeight;
		});

		ctx.restore(); // 恢复之前的绘图状态
	}

	// 动画循环函数
	function animate(time) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawBottle();
		drawLayers(time);
		requestAnimationFrame(animate);
	}

	// 获取鼠标悬停的液体层索引
	function getHoveredLayer(mouseY) {
		let currentHeight = bottleY + liquidHeight; // ????
		for (let i = layers.length - 1; i >= 0; i--) {
			const layerHeight = liquidHeight * layers[i].height;
			currentHeight -= layerHeight;
			if (mouseY > currentHeight) {
				return i;
			}
		}
		return -1;
	}

	// 鼠标移动事件监听器
	canvas.addEventListener('mousemove', (event) => {
		const rect = canvas.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

		// 检查鼠标是否在瓶子区域内
		if (
			mouseX >= bottleX &&
			mouseX <= bottleX + bottleWidth &&
			mouseY >= bottleY &&
			mouseY <= bottleY + bottleHeight
		) {
			hoveredLayer = getHoveredLayer(mouseY);
			console.log('hoveredLayer', hoveredLayer);
		} else {
			hoveredLayer = -1;
		}
	});

	// 鼠标移出画布事件监听器
	canvas.addEventListener('mouseout', () => {
		hoveredLayer = -1;
	});

	// 启动动画
	animate(0);
}
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
	opacity: 0.7;
}

.perfume-bottle {
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
}
</style>