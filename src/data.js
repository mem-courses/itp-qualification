import { ref } from 'vue';
import { themeFromSourceColor, argbFromHex } from '@material/material-color-utilities';

export const prompt = ref(`香调：花香西普调
前调：玫瑰 藏红花 天竺葵
中调：肉豆蔻 胡椒 紫罗兰 葛缕子
后调：广藿香 香草 沉香(乌木)琥珀
标签：女士香水 玫瑰 清新辛辣 温暖辛辣 广藿香 优雅 深邃 沉醉 魅力 自信`);

export const insights = ref(['添加xx前调', '删除xx后调', '修改xx标签']);

const ingredientsSource = [
  {
    name: '花椒水',
    rate: 5,
    color: '#f8766d',
    colorText: '淡红色',
    description:
      '花椒水由花椒果实提取而成，其独特的气味既辛辣又稍带有柠檬的香甜。花椒水的主要成分包括花椒醇和花椒烯等，这些具有抗菌和抗炎的特性，使花椒水在传统医学中常被用于治疗消化不良、牙痛和皮肤疾病等。此外，花椒水的强烈和独特的气味也常被用于驱蚊和除臭。',
  },
  {
    name: '乌木提取物',
    rate: 20,
    color: '#8B4513',
    colorText: '深褐色',
    description: '123',
  },
  {
    name: '巴西红木鲜榨液',
    rate: 15,
    color: '#8B4513',
    colorText: '红棕色',
  },
  {
    name: '香草汁',
    rate: 10,
    color: '#FFFF00',
    colorText: '浅黄色',
  },
  {
    name: '零陵香豆分离物',
    rate: 10,
    color: '#FFFF00',
    colorText: '淡黄棕色',
  },
  {
    name: '琥珀精华',
    rate: 10,
    color: '#FFFF00',
    colorText: '金黄色',
  },
  {
    name: '小豆蔻露',
    rate: 5,
    color: '#90EE90',
    colorText: '淡绿色',
  },
  {
    name: '香根草汁',
    rate: 10,
    color: '#006400',
    colorText: '深绿色',
  },
  {
    name: '檀香冷凝液',
    rate: 15,
    color: '#1E90FF',
    colorText: '奶白色',
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
