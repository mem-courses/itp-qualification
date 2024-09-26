import { ref } from 'vue';
import { themeFromSourceColor, argbFromHex } from '@material/material-color-utilities';

export const prompt = ref(`香调：花香西普调
前调：玫瑰 藏红花 天竺葵
中调：肉豆蔻 胡椒 紫罗兰 葛缕子
后调：广藿香 香草 沉香(乌木)琥珀
标签：女士香水 玫瑰 清新辛辣 广藿香 优雅 深邃 沉醉 魅力 自信`);

export const insights = ref([
  '改为制作男士香水',
  '前调 添加血橙',
  '后调 删除香草',
  '修改“清新辛辣”标签为“温暖辛辣”',
]);

const ingredientsSource = [
  {
    name: '花椒水',
    rate: 5,
    color: '#f8766d',
    colorText: '淡红色',
    description:
      '花椒水由花椒果实提取得到，它在香水中可以贡献鲜明的辛辣香气，带有一丝柑橘和木质的气息，主要成分包括各种挥发性油和醛类化合物，具有增强香水持久度和稳定性的特性，常被用作香水的前调，与各种其他香料相结合，创造出独特的香气组合，提升其他香料的香气，增加香水的复杂度和层次感。',
  },
  {
    name: '乌木提取物',
    rate: 20,
    color: '#8B4513',
    colorText: '深褐色',
    description:
      '乌木提取物由乌木树提取得到，它在香水中可以贡献独特的木质香气，带有一丝甜味和烟熏的气息，主要成分包括各种醇类和酚类化合物，具有增强香水持久度和稳定性的特性，常被用作香水的基调，与各种其他香料相结合，创造出独特的香气组合，平衡其他香料的香气，增加香水的丰富度和深度。 ',
  },
  {
    name: '巴西红木鲜榨液',
    rate: 15,
    color: '#8B4513',
    colorText: '红棕色',
    description:
      '巴西红木鲜榨液由巴西红木树提取得到，它在香水中可以贡献了温暖、木质的气味，带有一丝甜味和香草的香气，主要成分包括各种醇类和酚类化合物，具有增强香水持久度和稳定性的特性，常被用作香水的基调，与各种其他香料相结合，创造出独特的香气组合，平衡其他香料的香气，增加香水的丰富度和深度。',
  },
  {
    name: '香草汁',
    rate: 10,
    color: '#FFFF00',
    colorText: '浅黄色',
    description:
      '香草汁由香草植物的豆荚提取得到，它在香水中可以贡献温暖、甜美和略带奶油香的香气，主要成分包括香草醛等，具有增强香水持久度和稳定性的特性，常被用作香水的基调，与各种其他香料相结合，创造出独特的香气组合，平衡其他香料的香气，增加香水的丰富度和深度。',
  },
  {
    name: '零陵香豆分离物',
    rate: 10,
    color: '#FFFF00',
    colorText: '淡黄棕色',
    description:
      '零陵香豆分离物由零陵香豆分离提取得到，它在香水中可以贡献甜美、带有焦糖和香草香气的特性，主要成分包括香豆素等，具有增强香水持久度和稳定性的特性，常被用作香水的基调，与各种其他香料相结合，创造出独特的香气组合，平衡其他香料的香气，增加香水的丰富度和深度。',
  },
  {
    name: '琥珀精华',
    rate: 10,
    color: '#FFFF00',
    colorText: '金黄色',
    description:
      '琥珀精华由化石树脂提取得到，它在香水中可以贡献温暖、甜蜜和木质，带有松香和地球的香气，其主要成分包括琥珀素等，具有增强香水持久度和稳定性的特性，常被用来提供一种深邃而神秘的基调，与各种其他香料相结合，创造出独特的香气组合。',
  },
  {
    name: '小豆蔻露',
    rate: 5,
    color: '#90EE90',
    colorText: '淡绿色',
    description:
      '小豆蔻露由小豆蔻种子提取得到，它在香水中可以贡献清新、辛辣而微甜的香气，主要成分包括各种挥发性油和醛类化合物，具有增强香水持久度和稳定性的特性，常被用作香水的中调或前调，与各种其他香料相结合，创造出独特的香气组合，提升其他香料的香气，增加香水的复杂度和层次感。',
  },
  {
    name: '香根草汁',
    rate: 10,
    color: '#006400',
    colorText: '深绿色',
    description:
      '香根草汁由香根草植物提取得到，它在香水中可以贡献深沉、木质和略带甜味的香气，主要成分包括香根草酮等，具有增强香水持久度和稳定性的特性，常被用作香水的基调，与各种其他香料相结合，创造出独特的香气组合，平衡其他香料的香气，增加香水的丰富度和深度。',
  },
  {
    name: '檀香冷凝液',
    rate: 15,
    color: '#1E90FF',
    colorText: '奶白色',
    description:
      '檀香冷凝液由檀香树提取得到，它在香水中可以贡献了温暖、丰富且带有木质和甜香的气味，主要成分包括檀香醇等，具有增强香水持久度和稳定性的特性，常被用作香水的基调，与各种其他香料相结合，创造出独特的香气组合，平衡其他香料的香气，增加香水的丰富度和深度。',
  },
];

export const ingredients = getIngredients(ingredientsSource);

export const layers = getLayers(ingredientsSource);

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

function getLayers(ingredients) {
  const layers = [];
  let rateSum = 0;
  for (const ingredient of ingredients) {
    rateSum += ingredient.rate;
  }
  for (const ingredient of ingredients) {
    layers.push({
      color: ingredient.color,
      height: ingredient.rate / rateSum,
      phase: Math.random() * 2,
      liquidColor:
        ingredient.color === '#FFFF00' ? '#FFFFCC' : convertToLiquidColor(ingredient.color, 94),
      highlightColor:
        ingredient.color === '#FFFF00' ? '#FFFF77' : convertToLiquidColor(ingredient.color, 88),
      dotColor: convertToLiquidColor(ingredient.color, 15),
      description: ingredient.description,
    });
  }
  // console.log(layers);
  return layers;
}

function getIngredients(ingredients) {
  const result = [];
  for (const ingredient of ingredients) {
    result.push({
      ...ingredient,
    });
  }
  return result;
}
