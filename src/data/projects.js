import panpanAccount from '../assets/xhs-panpan.webp';
import specialWatchAccount from '../assets/xhs-special-watch.webp';
import zishaCommunityFull from '../assets/zisha-community-full.webp';
import shopWechatStore from '../assets/shop-wechat-store.webp';
import shopDouyinStore from '../assets/shop-douyin-store.webp';
import wechatChronosportOfficial from '../assets/wechat-chronosport-official.webp';
import wechatJzzishaOfficial from '../assets/wechat-jzzisha-official.webp';

export const projects = [
  {
    id: 'chronosport-xhs',
    name: 'CHRONOSPORT 腕表门店小红书运营',
    type: '社媒运营 / 门店转化 / 私域承接',
    cover: specialWatchAccount,
    accountName: '一些特别的表',
    accountId: '201178141',
    accountIntro: '分享一些机械审美',
    link: 'https://www.xiaohongshu.com/discovery/item/6870e3de000000002300622e?source=webshare&xhsshare=pc_web&xsec_token=ABPsJna5DRHGM7QwH3W9FQrghmZAyDis7eugxcuZXTCZQ=&xsec_source=pc_share',
    background:
      '为腕表门店建立小红书内容阵地，通过机械审美、到店场景、品牌标签和私信承接，把内容曝光转化为门店线索。',
    role: '账号搭建、内容选题、拍摄剪辑、文案发布、私信承接、KOL 对接、品牌沙龙执行。',
    actions: [
      '从 0 搭建小红书官号、KOS、抖音、视频号和微信私域。',
      '围绕腕表审美、门店体验、到店理由和品牌故事规划内容栏目。',
      '通过私信、到店反馈和投放数据持续调整选题。',
      '把账号展示、门店位置和品牌标签放入同一条用户触达链路。',
    ],
    metrics: [
      { label: '小红书粉丝', value: '2.2万' },
      { label: '获赞与收藏', value: '23万' },
      { label: '关注', value: '41' },
      { label: '全平台粉丝', value: '4万+' },
    ],
  },
  {
    id: 'panpan-watch-content',
    name: '盼盼每一秒腕表内容账号',
    type: '腕表内容 / 生活方式种草 / 视频笔记',
    cover: panpanAccount,
    accountName: '盼盼每一秒',
    accountId: '94731069184',
    accountIntro: '每一块表都是生活的注脚。时间在手，也在心上。',
    link: 'https://www.xiaohongshu.com/discovery/item/68b15216000000001d01df50?source=webshare&xhsshare=pc_web&xsec_token=AB5eJD5WN8sjQ4OSqqysKFdasP8AjeGFqF5qwRi3AzvPw=&xsec_source=pc_share',
    background:
      '以腕表细节、视频笔记和生活化描述搭建内容展示页，让垂直兴趣用户能快速理解账号调性。',
    role: '内容表达、图文结构、视频笔记展示和账号视觉整理。',
    actions: [
      '用腕表细节和场景化标题降低专业品类的理解门槛。',
      '通过草稿箱、视频笔记和图文卡片组织内容资产。',
      '用生活化文案让产品审美和用户情绪发生连接。',
    ],
    metrics: [
      { label: '粉丝', value: '43' },
      { label: '获赞与收藏', value: '798' },
      { label: '关注', value: '54' },
    ],
  },
  {
    id: 'chronosport-official-account',
    layout: 'phone-screens',
    name: 'CHRONOSPORT 公众号内容运营',
    type: '公众号运营 / 小众制表 / 深度腕表资讯',
    cover: wechatChronosportOfficial,
    gallery: [
      { src: wechatChronosportOfficial, title: 'CHRONOSPORT 公众号内容页' },
    ],
    accountName: 'CHRONOSPORT',
    accountId: '小众制表集合店 / 公众号',
    accountIntro: '以硬核技术解析与独特审美视角切入小众腕表内容。',
    link: 'https://mp.weixin.qq.com/s/ozhbFpdNLQeo5MU53sENOA',
    background:
      '内容定位：专注于小众制表领域，提供深度腕表资讯与品牌介绍，以硬核技术解析与独特审美视角切入。',
    role:
      '公众号内容定位、选题策划、品牌介绍结构梳理、腕表资讯表达和图文内容呈现。',
    actions: [
      '围绕小众制表品牌、门店动态和腕表技术点建立公众号内容方向。',
      '用开业资讯、品牌幕后和机械结构解析承接高兴趣用户的深度阅读需求。',
      '将硬核参数、品牌故事和审美观点转译成更容易阅读的图文内容。',
    ],
    metrics: [
      { label: '内容赛道', value: '小众制表' },
      { label: '内容形式', value: '公众号图文' },
      { label: '表达重点', value: '技术解析' },
      { label: '审美视角', value: '独特' },
    ],
  },
  {
    id: 'jzzisha-official-account',
    layout: 'phone-screens',
    name: '匠制紫砂壶公众号内容运营',
    type: '公众号运营 / 紫砂文化 / 匠人工艺 / 品牌故事',
    cover: wechatJzzishaOfficial,
    gallery: [
      { src: wechatJzzishaOfficial, title: '匠制紫砂壶公众号内容页' },
    ],
    accountName: '匠制紫砂壶',
    accountId: '紫砂垂直赛道 / 公众号',
    accountIntro: '围绕紫砂历史文化、匠人工艺细节与品牌背后故事做深度内容输出。',
    link: 'https://mp.weixin.qq.com/s/LTtjfW9VIttsdaR2ag42sA',
    background:
      '内容定位：深耕紫砂垂直赛道，围绕紫砂历史文化、匠人工艺细节与品牌背后故事进行深度内容输出。',
    role:
      '公众号内容定位、紫砂文化选题、工艺细节拆解、品牌故事梳理和图文内容呈现。',
    actions: [
      '围绕紫砂历史、博物馆场景、壶型知识和工艺细节建立长期内容栏目。',
      '把专业紫砂知识转化成普通用户能理解、愿意停留阅读的图文表达。',
      '通过品牌背后故事和匠人细节，强化紫砂产品的文化信任感。',
    ],
    metrics: [
      { label: '内容赛道', value: '紫砂垂直' },
      { label: '内容形式', value: '公众号图文' },
      { label: '表达重点', value: '历史文化' },
      { label: '内容深度', value: '工艺故事' },
    ],
  },
  {
    id: 'private-community-sop',
    name: '私域社群转化与晒单承接',
    type: '社群运营 / 用户分层 / UGC 征集 / 活动转化',
    cover: zishaCommunityFull,
    gallery: [
      { src: zishaCommunityFull, title: '紫砂雅集晒单社区' },
    ],
    accountName: '紫砂私域案例',
    accountId: '晒单社区 + 节庆活动',
    accountIntro: '把真实买家内容沉淀为可复用的信任资产。',
    link: 'http://blog.jzzisha.com/',
    background:
      '围绕紫砂壶高信任决策场景，搭建晒单社区承接真实买家秀，并配合春节、元宵等节点活动，把社群内容、活动海报、私聊话术和福利机制串成一条转化链路。',
    role: '私域社群 SOP、用户分层、晒单社区搭建、活动策划、海报素材制作、1v1 沟通素材整理。',
    actions: [
      '按来源和购买意向分层运营用户社群，持续沉淀真实晒单内容。',
      '用晒单社区集中展示用户买家秀，降低新用户的信任成本。',
      '围绕春节、元宵等节点制作活动海报和福利机制，承接节庆消费情绪。',
      '根据用户反馈调整商品卡、活动话术和私域转化节奏。',
    ],
    metrics: [
      { label: '用户社群', value: '15+' },
      { label: '私域流水', value: '100万左右' },
      { label: '购买率', value: '40%左右' },
      { label: 'ROI', value: '每月约 3' },
    ],
  },
  {
    id: 'shop-operation',
    layout: 'phone-screens',
    name: '店铺运营',
    type: '微信小店 / 抖音小店 / 商品运营 / 客服订单',
    cover: shopWechatStore,
    gallery: [
      { src: shopWechatStore, title: '微信小店运营页面' },
      { src: shopDouyinStore, title: '抖音小店商品页面' },
    ],
    accountName: '店铺从 0 到 1',
    accountId: '微信小店 + 抖音小店',
    accountIntro: '从店铺搭建到订单承接，建立完整线上交易链路。',
    link: '',
    background:
      '独立运营微信小店与抖音小店，负责店铺搭建、商品选品、上架 SKU、视觉优化及客服订单全流程，实现店铺从 0 到 1 的独立运营，月销售额稳定增长。',
    role: '店铺搭建、商品选品、SKU 上架、商品视觉优化、客服承接、订单处理和经营复盘。',
    actions: [
      '完成微信小店与抖音小店基础搭建，整理店铺信息、商品结构和交易入口。',
      '根据产品卖点与用户搜索习惯完成商品选品、标题优化和 SKU 上架。',
      '优化商品主图、详情展示和店铺视觉，让用户能更快理解产品价值。',
      '承接客服咨询、订单处理和售后反馈，持续根据成交数据调整商品与话术。',
    ],
    metrics: [
      { label: '店铺搭建', value: '0 到 1' },
      { label: '运营渠道', value: '2 个' },
      { label: '订单链路', value: '全流程' },
      { label: '销售趋势', value: '稳定增长' },
    ],
  },
];
