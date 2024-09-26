import { ref } from 'vue';

export const prompt = ref(`香调：花香西普调
前调：玫瑰 藏红花 天竺葵
中调：肉豆蔻 胡椒 紫罗兰 葛缕子
后调：广藿香 香草 沉香(乌木)琥珀
标签：女士香水 玫瑰 清新辛辣 温暖辛辣 广藿香 优雅 深邃 沉醉 魅力 自信`);

export const components = [
  {
    color: '#F75C2F',
    height: 0.3,
    phase: 1.25,
  },
  {
    color: '#F8C3CD',
    height: 0.4,
    phase: 0,
  },
  {
    color: '#86473F',
    height: 0.3,
    phase: 2.123123,
  },
];

export const insights = ref(['添加xx前调', '删除xx后调', '修改xx标签']);

export const ingredients = ref([
  {
    name: '花椒水',
    rate: 5,
    color: '#a00000',
    colorText: '淡红色',
  },
  {
    name: '小豆蔻露',
    rate: 5,
    color: '#a00000',
    colorText: '淡绿色',
  },
  {
    name: '乌木提取物',
    rate: 20,
    color: '#a00000',
    colorText: '深褐色',
  },
  {
    name: '巴西红木鲜榨液',
    rate: 15,
    color: '#a00000',
    colorText: '红棕色',
  },
  {
    name: '檀香冷凝液',
    rate: 15,
    color: '#a00000',
    colorText: '奶白色',
  },
  {
    name: '香根草汁',
    rate: 10,
    color: '#a00000',
    colorText: '深绿色',
  },
  {
    name: '零陵香豆分离产物',
    rate: 10,
    color: '#a00000',
    colorText: '淡黄棕色',
  },
  {
    name: '香草汁',
    rate: 10,
    color: '#a00000',
    colorText: '浅黄色',
  },
  {
    name: '琥珀精华',
    rate: 10,
    color: '#a00000',
    colorText: '金黄色',
  },
]);
