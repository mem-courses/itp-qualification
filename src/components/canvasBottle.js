import { themeFromSourceColor, argbFromHex } from '@material/material-color-utilities';
import { components } from '../data.js';

export function drawPerfumeBottle() {
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

  // 定义液体层参数`
  const layers = components;

  function convertToLiquidColor(color, rate) {
    const theme = themeFromSourceColor(argbFromHex(color));
    const palette = theme.palettes;
    const rgbInt = palette.primary.tone(rate);
    const a = (rgbInt >> 24) & 255;
    const r = (rgbInt >> 16) & 255;
    const g = (rgbInt >> 8) & 255;
    const b = rgbInt & 255;
    console.log(`rgba(${r}, ${g}, ${b}, ${a})`, rgbInt, color, palette);
    return `rgb(${r}, ${g}, ${b})`;
  }

  for (const layer of layers) {
    layer.liquidColor = convertToLiquidColor(layer.color, 88);
    layer.highlightColor = convertToLiquidColor(layer.color, 70);
  }

  // 跟踪当前鼠标悬停的液体层
  let hoveredLayer = -1;

  // 瓶身路径
  function drawBottlePath(ctx, diff = 0) {
    // 绘制瓶身左侧
    ctx.moveTo(bottleX - diff, bottleY);
    ctx.lineTo(bottleX - diff, bottleY + bottleHeight - cornerRadius + diff);

    // 绘制左下圆角
    ctx.arcTo(
      bottleX - diff,
      bottleY + bottleHeight + diff,
      bottleX + cornerRadius,
      bottleY + bottleHeight + diff,
      cornerRadius,
    );

    // 绘制底部
    ctx.lineTo(bottleX + bottleWidth - cornerRadius, bottleY + bottleHeight + diff);

    // 绘制右下圆角
    ctx.arcTo(
      bottleX + bottleWidth + diff,
      bottleY + bottleHeight + diff,
      bottleX + bottleWidth + diff,
      bottleY + bottleHeight - cornerRadius,
      cornerRadius,
    );

    // 绘制瓶身右侧
    ctx.lineTo(bottleX + bottleWidth + diff, bottleY);
  }

  // 绘制香水瓶轮廓
  function drawBottle() {
    ctx.strokeStyle = '#a0a0a0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    drawBottlePath(ctx, ctx.lineWidth / 2);
    ctx.stroke();
  }

  // 绘制液体层
  function drawLayers(time) {
    ctx.save(); // 保存当前绘图状态
    ctx.beginPath();
    drawBottlePath(ctx);
    ctx.closePath();
    ctx.clip(); // 应用裁剪，确保液体只在瓶子内部绘制

    let totalHeight = 0;
    layers.forEach((layer) => {
      totalHeight += layer.height;
    });

    let currentHeight = bottleY + bottleHeight - liquidHeight;
    layers.forEach((layer, index) => {
      const layerHeight = liquidHeight * (layer.height / totalHeight);
      // console.log('animated', index, layer.height, currentHeight);

      // 设置填充颜色，如果是悬停层则变为高亮颜色
      ctx.fillStyle = index === hoveredLayer ? layer.highlightColor : layer.liquidColor;

      ctx.beginPath();
      ctx.moveTo(bottleX, currentHeight);
      for (let x = 0; x <= bottleWidth; x++) {
        // 绘制波浪效果
        const y = Math.sin((x / 80 + time / waveSpeed + layer.phase) * Math.PI) * waveAmplitude;
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
    let currentHeight = bottleY + bottleHeight; // ????
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
