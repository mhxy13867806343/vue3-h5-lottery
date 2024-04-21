<script setup>
import {setStorageSync,cacheDataRef} from '@/common/tools'
const data=ref([{
	name: "微博",
	subtitle: "热搜榜",
	update_time: "2024-04-20 16:46:32",
	data: [
		{
			index: 1,
			title: "只有Miss选了郭碧婷",
			hot: "72.8万",
			url: "https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89Miss%E9%80%89%E4%BA%86%E9%83%AD%E7%A2%A7%E5%A9%B7%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89Miss%E9%80%89%E4%BA%86%E9%83%AD%E7%A2%A7%E5%A9%B7%23&Refer=index"
		},
		{
			index: 2,
			title: "花27万彩礼订婚准新娘十余天后自杀身亡",
			hot: "63.9万",
			url: "https://s.weibo.com/weibo?q=%23%E8%8A%B127%E4%B8%87%E5%BD%A9%E7%A4%BC%E8%AE%A2%E5%A9%9A%E5%87%86%E6%96%B0%E5%A8%98%E5%8D%81%E4%BD%99%E5%A4%A9%E5%90%8E%E8%87%AA%E6%9D%80%E8%BA%AB%E4%BA%A1%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E8%8A%B127%E4%B8%87%E5%BD%A9%E7%A4%BC%E8%AE%A2%E5%A9%9A%E5%87%86%E6%96%B0%E5%A8%98%E5%8D%81%E4%BD%99%E5%A4%A9%E5%90%8E%E8%87%AA%E6%9D%80%E8%BA%AB%E4%BA%A1%23&Refer=index"
		},
		{
			index: 3,
			title: "中国互联网三十而立再出发",
			hot: "4.3万",
			url: "https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%92%E8%81%94%E7%BD%91%E4%B8%89%E5%8D%81%E8%80%8C%E7%AB%8B%E5%86%8D%E5%87%BA%E5%8F%91%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%92%E8%81%94%E7%BD%91%E4%B8%89%E5%8D%81%E8%80%8C%E7%AB%8B%E5%86%8D%E5%87%BA%E5%8F%91%23&Refer=index"
		},
		{
			index: 4,
			title: "周冠宇f1主场战",
			hot: "NaN万",
			url: "https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%A0%E5%AE%87f1%E4%B8%BB%E5%9C%BA%E6%88%98%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%A0%E5%AE%87f1%E4%B8%BB%E5%9C%BA%E6%88%98%23&Refer=index"
		},
		{
			index: 5,
			title: "央媒发文放假绝不是假放",
			hot: "181.9万",
			url: "https://s.weibo.com/weibo?q=%23%E5%A4%AE%E5%AA%92%E5%8F%91%E6%96%87%E6%94%BE%E5%81%87%E7%BB%9D%E4%B8%8D%E6%98%AF%E5%81%87%E6%94%BE%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%A4%AE%E5%AA%92%E5%8F%91%E6%96%87%E6%94%BE%E5%81%87%E7%BB%9D%E4%B8%8D%E6%98%AF%E5%81%87%E6%94%BE%23&Refer=index"
		},
		{
			index: 6,
			title: "66升油箱加出67升油车主报警",
			hot: "45.7万",
			url: "https://s.weibo.com/weibo?q=%2366%E5%8D%87%E6%B2%B9%E7%AE%B1%E5%8A%A0%E5%87%BA67%E5%8D%87%E6%B2%B9%E8%BD%A6%E4%B8%BB%E6%8A%A5%E8%AD%A6%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%2366%E5%8D%87%E6%B2%B9%E7%AE%B1%E5%8A%A0%E5%87%BA67%E5%8D%87%E6%B2%B9%E8%BD%A6%E4%B8%BB%E6%8A%A5%E8%AD%A6%23&Refer=index"
		},
		{
			index: 7,
			title: "鹿晗回应大B哥",
			hot: "45.2万",
			url: "https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%9B%9E%E5%BA%94%E5%A4%A7B%E5%93%A5%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%9B%9E%E5%BA%94%E5%A4%A7B%E5%93%A5%23&Refer=index"
		},
		{
			index: 8,
			title: "鹿晗天选谷雨代言人",
			hot: "NaN万",
			url: "https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%A4%A9%E9%80%89%E8%B0%B7%E9%9B%A8%E4%BB%A3%E8%A8%80%E4%BA%BA%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%A4%A9%E9%80%89%E8%B0%B7%E9%9B%A8%E4%BB%A3%E8%A8%80%E4%BA%BA%23&Refer=index"
		},
		{
			index: 9,
			title: "小奶狗被打碎下巴女子坚持送医救治",
			hot: "41.0万",
			url: "https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A5%B6%E7%8B%97%E8%A2%AB%E6%89%93%E7%A2%8E%E4%B8%8B%E5%B7%B4%E5%A5%B3%E5%AD%90%E5%9D%9A%E6%8C%81%E9%80%81%E5%8C%BB%E6%95%91%E6%B2%BB%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A5%B6%E7%8B%97%E8%A2%AB%E6%89%93%E7%A2%8E%E4%B8%8B%E5%B7%B4%E5%A5%B3%E5%AD%90%E5%9D%9A%E6%8C%81%E9%80%81%E5%8C%BB%E6%95%91%E6%B2%BB%23&Refer=index"
		},
		{
			index: 10,
			title: "花少聚会没有迪丽热巴",
			hot: "38.5万",
			url: "https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E8%81%9A%E4%BC%9A%E6%B2%A1%E6%9C%89%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E8%81%9A%E4%BC%9A%E6%B2%A1%E6%9C%89%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23&Refer=index"
		},
		{
			index: 11,
			title: "张予曦你多高啊我33啊",
			hot: "31.8万",
			url: "https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E4%BD%A0%E5%A4%9A%E9%AB%98%E5%95%8A%E6%88%9133%E5%95%8A%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E4%BD%A0%E5%A4%9A%E9%AB%98%E5%95%8A%E6%88%9133%E5%95%8A%23&Refer=index"
		},
		{
			index: 12,
			title: "调休",
			hot: "31.5万",
			url: "https://s.weibo.com/weibo?q=%23%E8%B0%83%E4%BC%91%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E8%B0%83%E4%BC%91%23&Refer=index"
		},
		{
			index: 13,
			title: "徐志胜女朋友",
			hot: "94.3万",
			url: "https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%A5%B3%E6%9C%8B%E5%8F%8B%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%A5%B3%E6%9C%8B%E5%8F%8B%23&Refer=index"
		},
		{
			index: 14,
			title: "小时候的甜牛奶你还在喝吗",
			hot: "12.2万",
			url: "https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E7%94%9C%E7%89%9B%E5%A5%B6%E4%BD%A0%E8%BF%98%E5%9C%A8%E5%96%9D%E5%90%97%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E7%94%9C%E7%89%9B%E5%A5%B6%E4%BD%A0%E8%BF%98%E5%9C%A8%E5%96%9D%E5%90%97%23&Refer=index"
		},
		{
			index: 15,
			title: "中央财经大学多名学生吐槽800米体测",
			hot: "71.8万",
			url: "https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E8%B4%A2%E7%BB%8F%E5%A4%A7%E5%AD%A6%E5%A4%9A%E5%90%8D%E5%AD%A6%E7%94%9F%E5%90%90%E6%A7%BD800%E7%B1%B3%E4%BD%93%E6%B5%8B%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E8%B4%A2%E7%BB%8F%E5%A4%A7%E5%AD%A6%E5%A4%9A%E5%90%8D%E5%AD%A6%E7%94%9F%E5%90%90%E6%A7%BD800%E7%B1%B3%E4%BD%93%E6%B5%8B%23&Refer=index"
		},
		{
			index: 16,
			title: "鹿晗回复关晓彤好宠",
			hot: "58.6万",
			url: "https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%9B%9E%E5%A4%8D%E5%85%B3%E6%99%93%E5%BD%A4%E5%A5%BD%E5%AE%A0%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%9B%9E%E5%A4%8D%E5%85%B3%E6%99%93%E5%BD%A4%E5%A5%BD%E5%AE%A0%23&Refer=index"
		},
		{
			index: 17,
			title: "当伴娘的赵奕欢",
			hot: "34.9万",
			url: "https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BC%B4%E5%A8%98%E7%9A%84%E8%B5%B5%E5%A5%95%E6%AC%A2%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BC%B4%E5%A8%98%E7%9A%84%E8%B5%B5%E5%A5%95%E6%AC%A2%23&Refer=index"
		},
		{
			index: 18,
			title: "哈尔滨通报索菲亚广场火灾事故",
			hot: "29.7万",
			url: "https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E9%80%9A%E6%8A%A5%E7%B4%A2%E8%8F%B2%E4%BA%9A%E5%B9%BF%E5%9C%BA%E7%81%AB%E7%81%BE%E4%BA%8B%E6%95%85%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E9%80%9A%E6%8A%A5%E7%B4%A2%E8%8F%B2%E4%BA%9A%E5%B9%BF%E5%9C%BA%E7%81%AB%E7%81%BE%E4%BA%8B%E6%95%85%23&Refer=index"
		},
		{
			index: 19,
			title: "女性排卵时身体会有5种改变",
			hot: "29.1万",
			url: "https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E6%8E%92%E5%8D%B5%E6%97%B6%E8%BA%AB%E4%BD%93%E4%BC%9A%E6%9C%895%E7%A7%8D%E6%94%B9%E5%8F%98%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E6%8E%92%E5%8D%B5%E6%97%B6%E8%BA%AB%E4%BD%93%E4%BC%9A%E6%9C%895%E7%A7%8D%E6%94%B9%E5%8F%98%23&Refer=index"
		},
		{
			index: 20,
			title: "陈昊宇 黑马",
			hot: "27.9万",
			url: "https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%8A%E5%AE%87%20%E9%BB%91%E9%A9%AC%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%8A%E5%AE%87%20%E9%BB%91%E9%A9%AC%23&Refer=index"
		},
		{
			index: 21,
			title: "北大还行撒贝宁 平凡生活郭碧婷",
			hot: "27.8万",
			url: "https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E8%BF%98%E8%A1%8C%E6%92%92%E8%B4%9D%E5%AE%81%20%E5%B9%B3%E5%87%A1%E7%94%9F%E6%B4%BB%E9%83%AD%E7%A2%A7%E5%A9%B7%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E8%BF%98%E8%A1%8C%E6%92%92%E8%B4%9D%E5%AE%81%20%E5%B9%B3%E5%87%A1%E7%94%9F%E6%B4%BB%E9%83%AD%E7%A2%A7%E5%A9%B7%23&Refer=index"
		},
		{
			index: 22,
			title: "中国游客涌入日本扫货",
			hot: "25.3万",
			url: "https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E6%B6%8C%E5%85%A5%E6%97%A5%E6%9C%AC%E6%89%AB%E8%B4%A7%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E6%B6%8C%E5%85%A5%E6%97%A5%E6%9C%AC%E6%89%AB%E8%B4%A7%23&Refer=index"
		},
		{
			index: 23,
			title: "长生cos王昭君是自愿的",
			hot: "31.4万",
			url: "https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9Fcos%E7%8E%8B%E6%98%AD%E5%90%9B%E6%98%AF%E8%87%AA%E6%84%BF%E7%9A%84%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9Fcos%E7%8E%8B%E6%98%AD%E5%90%9B%E6%98%AF%E8%87%AA%E6%84%BF%E7%9A%84%23&Refer=index"
		},
		{
			index: 24,
			title: "闲鱼现大量转卖SU7创始车型订单",
			hot: "21.3万",
			url: "https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E7%8E%B0%E5%A4%A7%E9%87%8F%E8%BD%AC%E5%8D%96SU7%E5%88%9B%E5%A7%8B%E8%BD%A6%E5%9E%8B%E8%AE%A2%E5%8D%95%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E7%8E%B0%E5%A4%A7%E9%87%8F%E8%BD%AC%E5%8D%96SU7%E5%88%9B%E5%A7%8B%E8%BD%A6%E5%9E%8B%E8%AE%A2%E5%8D%95%23&Refer=index"
		},
		{
			index: 25,
			title: "我突然明白了读书的意义",
			hot: "20.9万",
			url: "https://s.weibo.com/weibo?q=%23%E6%88%91%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E4%BA%86%E8%AF%BB%E4%B9%A6%E7%9A%84%E6%84%8F%E4%B9%89%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E6%88%91%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E4%BA%86%E8%AF%BB%E4%B9%A6%E7%9A%84%E6%84%8F%E4%B9%89%23&Refer=index"
		},
		{
			index: 26,
			title: "金价暴涨后线上金店拒发货",
			hot: "19.5万",
			url: "https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9A%B4%E6%B6%A8%E5%90%8E%E7%BA%BF%E4%B8%8A%E9%87%91%E5%BA%97%E6%8B%92%E5%8F%91%E8%B4%A7%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9A%B4%E6%B6%A8%E5%90%8E%E7%BA%BF%E4%B8%8A%E9%87%91%E5%BA%97%E6%8B%92%E5%8F%91%E8%B4%A7%23&Refer=index"
		},
		{
			index: 27,
			title: "湖南旅行攻略给你备好了",
			hot: "7.6万",
			url: "https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E6%97%85%E8%A1%8C%E6%94%BB%E7%95%A5%E7%BB%99%E4%BD%A0%E5%A4%87%E5%A5%BD%E4%BA%86%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E6%97%85%E8%A1%8C%E6%94%BB%E7%95%A5%E7%BB%99%E4%BD%A0%E5%A4%87%E5%A5%BD%E4%BA%86%23&Refer=index"
		},
		{
			index: 28,
			title: "LPL",
			hot: "18.6万",
			url: "https://s.weibo.com/weibo?q=%23LPL%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23LPL%23&Refer=index"
		},
		{
			index: 29,
			title: "杨紫苗族服饰旧照",
			hot: "17.6万",
			url: "https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%8B%97%E6%97%8F%E6%9C%8D%E9%A5%B0%E6%97%A7%E7%85%A7%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%8B%97%E6%97%8F%E6%9C%8D%E9%A5%B0%E6%97%A7%E7%85%A7%23&Refer=index"
		},
		{
			index: 30,
			title: "小米汽车",
			hot: "17.5万",
			url: "https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23&Refer=index"
		}
	]
},{
	name: "微博",
	subtitle: "热搜榜",
	update_time: "2024-04-20 16:46:32",
	data: [
		{
			index: 1,
			title: "只有Miss选了郭碧婷",
			hot: "72.8万",
			url: "https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89Miss%E9%80%89%E4%BA%86%E9%83%AD%E7%A2%A7%E5%A9%B7%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89Miss%E9%80%89%E4%BA%86%E9%83%AD%E7%A2%A7%E5%A9%B7%23&Refer=index"
		},
		{
			index: 2,
			title: "花27万彩礼订婚准新娘十余天后自杀身亡",
			hot: "63.9万",
			url: "https://s.weibo.com/weibo?q=%23%E8%8A%B127%E4%B8%87%E5%BD%A9%E7%A4%BC%E8%AE%A2%E5%A9%9A%E5%87%86%E6%96%B0%E5%A8%98%E5%8D%81%E4%BD%99%E5%A4%A9%E5%90%8E%E8%87%AA%E6%9D%80%E8%BA%AB%E4%BA%A1%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E8%8A%B127%E4%B8%87%E5%BD%A9%E7%A4%BC%E8%AE%A2%E5%A9%9A%E5%87%86%E6%96%B0%E5%A8%98%E5%8D%81%E4%BD%99%E5%A4%A9%E5%90%8E%E8%87%AA%E6%9D%80%E8%BA%AB%E4%BA%A1%23&Refer=index"
		},
		{
			index: 3,
			title: "中国互联网三十而立再出发",
			hot: "4.3万",
			url: "https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%92%E8%81%94%E7%BD%91%E4%B8%89%E5%8D%81%E8%80%8C%E7%AB%8B%E5%86%8D%E5%87%BA%E5%8F%91%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%92%E8%81%94%E7%BD%91%E4%B8%89%E5%8D%81%E8%80%8C%E7%AB%8B%E5%86%8D%E5%87%BA%E5%8F%91%23&Refer=index"
		},
		{
			index: 4,
			title: "周冠宇f1主场战",
			hot: "NaN万",
			url: "https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%A0%E5%AE%87f1%E4%B8%BB%E5%9C%BA%E6%88%98%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%A0%E5%AE%87f1%E4%B8%BB%E5%9C%BA%E6%88%98%23&Refer=index"
		},
		{
			index: 5,
			title: "央媒发文放假绝不是假放",
			hot: "181.9万",
			url: "https://s.weibo.com/weibo?q=%23%E5%A4%AE%E5%AA%92%E5%8F%91%E6%96%87%E6%94%BE%E5%81%87%E7%BB%9D%E4%B8%8D%E6%98%AF%E5%81%87%E6%94%BE%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%A4%AE%E5%AA%92%E5%8F%91%E6%96%87%E6%94%BE%E5%81%87%E7%BB%9D%E4%B8%8D%E6%98%AF%E5%81%87%E6%94%BE%23&Refer=index"
		},
		{
			index: 6,
			title: "66升油箱加出67升油车主报警",
			hot: "45.7万",
			url: "https://s.weibo.com/weibo?q=%2366%E5%8D%87%E6%B2%B9%E7%AE%B1%E5%8A%A0%E5%87%BA67%E5%8D%87%E6%B2%B9%E8%BD%A6%E4%B8%BB%E6%8A%A5%E8%AD%A6%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%2366%E5%8D%87%E6%B2%B9%E7%AE%B1%E5%8A%A0%E5%87%BA67%E5%8D%87%E6%B2%B9%E8%BD%A6%E4%B8%BB%E6%8A%A5%E8%AD%A6%23&Refer=index"
		},
		{
			index: 7,
			title: "鹿晗回应大B哥",
			hot: "45.2万",
			url: "https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%9B%9E%E5%BA%94%E5%A4%A7B%E5%93%A5%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%9B%9E%E5%BA%94%E5%A4%A7B%E5%93%A5%23&Refer=index"
		},
		{
			index: 8,
			title: "鹿晗天选谷雨代言人",
			hot: "NaN万",
			url: "https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%A4%A9%E9%80%89%E8%B0%B7%E9%9B%A8%E4%BB%A3%E8%A8%80%E4%BA%BA%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%A4%A9%E9%80%89%E8%B0%B7%E9%9B%A8%E4%BB%A3%E8%A8%80%E4%BA%BA%23&Refer=index"
		},
		{
			index: 9,
			title: "小奶狗被打碎下巴女子坚持送医救治",
			hot: "41.0万",
			url: "https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A5%B6%E7%8B%97%E8%A2%AB%E6%89%93%E7%A2%8E%E4%B8%8B%E5%B7%B4%E5%A5%B3%E5%AD%90%E5%9D%9A%E6%8C%81%E9%80%81%E5%8C%BB%E6%95%91%E6%B2%BB%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A5%B6%E7%8B%97%E8%A2%AB%E6%89%93%E7%A2%8E%E4%B8%8B%E5%B7%B4%E5%A5%B3%E5%AD%90%E5%9D%9A%E6%8C%81%E9%80%81%E5%8C%BB%E6%95%91%E6%B2%BB%23&Refer=index"
		},
		{
			index: 10,
			title: "花少聚会没有迪丽热巴",
			hot: "38.5万",
			url: "https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E8%81%9A%E4%BC%9A%E6%B2%A1%E6%9C%89%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E8%81%9A%E4%BC%9A%E6%B2%A1%E6%9C%89%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23&Refer=index"
		},
		{
			index: 11,
			title: "张予曦你多高啊我33啊",
			hot: "31.8万",
			url: "https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E4%BD%A0%E5%A4%9A%E9%AB%98%E5%95%8A%E6%88%9133%E5%95%8A%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E4%BD%A0%E5%A4%9A%E9%AB%98%E5%95%8A%E6%88%9133%E5%95%8A%23&Refer=index"
		},
		{
			index: 12,
			title: "调休",
			hot: "31.5万",
			url: "https://s.weibo.com/weibo?q=%23%E8%B0%83%E4%BC%91%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E8%B0%83%E4%BC%91%23&Refer=index"
		},
		{
			index: 13,
			title: "徐志胜女朋友",
			hot: "94.3万",
			url: "https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%A5%B3%E6%9C%8B%E5%8F%8B%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%A5%B3%E6%9C%8B%E5%8F%8B%23&Refer=index"
		},
		{
			index: 14,
			title: "小时候的甜牛奶你还在喝吗",
			hot: "12.2万",
			url: "https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E7%94%9C%E7%89%9B%E5%A5%B6%E4%BD%A0%E8%BF%98%E5%9C%A8%E5%96%9D%E5%90%97%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E7%94%9C%E7%89%9B%E5%A5%B6%E4%BD%A0%E8%BF%98%E5%9C%A8%E5%96%9D%E5%90%97%23&Refer=index"
		},
		{
			index: 15,
			title: "中央财经大学多名学生吐槽800米体测",
			hot: "71.8万",
			url: "https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E8%B4%A2%E7%BB%8F%E5%A4%A7%E5%AD%A6%E5%A4%9A%E5%90%8D%E5%AD%A6%E7%94%9F%E5%90%90%E6%A7%BD800%E7%B1%B3%E4%BD%93%E6%B5%8B%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E8%B4%A2%E7%BB%8F%E5%A4%A7%E5%AD%A6%E5%A4%9A%E5%90%8D%E5%AD%A6%E7%94%9F%E5%90%90%E6%A7%BD800%E7%B1%B3%E4%BD%93%E6%B5%8B%23&Refer=index"
		},
		{
			index: 16,
			title: "鹿晗回复关晓彤好宠",
			hot: "58.6万",
			url: "https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%9B%9E%E5%A4%8D%E5%85%B3%E6%99%93%E5%BD%A4%E5%A5%BD%E5%AE%A0%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%9B%9E%E5%A4%8D%E5%85%B3%E6%99%93%E5%BD%A4%E5%A5%BD%E5%AE%A0%23&Refer=index"
		},
		{
			index: 17,
			title: "当伴娘的赵奕欢",
			hot: "34.9万",
			url: "https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BC%B4%E5%A8%98%E7%9A%84%E8%B5%B5%E5%A5%95%E6%AC%A2%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BC%B4%E5%A8%98%E7%9A%84%E8%B5%B5%E5%A5%95%E6%AC%A2%23&Refer=index"
		},
		{
			index: 18,
			title: "哈尔滨通报索菲亚广场火灾事故",
			hot: "29.7万",
			url: "https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E9%80%9A%E6%8A%A5%E7%B4%A2%E8%8F%B2%E4%BA%9A%E5%B9%BF%E5%9C%BA%E7%81%AB%E7%81%BE%E4%BA%8B%E6%95%85%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E9%80%9A%E6%8A%A5%E7%B4%A2%E8%8F%B2%E4%BA%9A%E5%B9%BF%E5%9C%BA%E7%81%AB%E7%81%BE%E4%BA%8B%E6%95%85%23&Refer=index"
		},
		{
			index: 19,
			title: "女性排卵时身体会有5种改变",
			hot: "29.1万",
			url: "https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E6%8E%92%E5%8D%B5%E6%97%B6%E8%BA%AB%E4%BD%93%E4%BC%9A%E6%9C%895%E7%A7%8D%E6%94%B9%E5%8F%98%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E6%8E%92%E5%8D%B5%E6%97%B6%E8%BA%AB%E4%BD%93%E4%BC%9A%E6%9C%895%E7%A7%8D%E6%94%B9%E5%8F%98%23&Refer=index"
		},
		{
			index: 20,
			title: "陈昊宇 黑马",
			hot: "27.9万",
			url: "https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%8A%E5%AE%87%20%E9%BB%91%E9%A9%AC%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%8A%E5%AE%87%20%E9%BB%91%E9%A9%AC%23&Refer=index"
		},
		{
			index: 21,
			title: "北大还行撒贝宁 平凡生活郭碧婷",
			hot: "27.8万",
			url: "https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E8%BF%98%E8%A1%8C%E6%92%92%E8%B4%9D%E5%AE%81%20%E5%B9%B3%E5%87%A1%E7%94%9F%E6%B4%BB%E9%83%AD%E7%A2%A7%E5%A9%B7%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E8%BF%98%E8%A1%8C%E6%92%92%E8%B4%9D%E5%AE%81%20%E5%B9%B3%E5%87%A1%E7%94%9F%E6%B4%BB%E9%83%AD%E7%A2%A7%E5%A9%B7%23&Refer=index"
		},
		{
			index: 22,
			title: "中国游客涌入日本扫货",
			hot: "25.3万",
			url: "https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E6%B6%8C%E5%85%A5%E6%97%A5%E6%9C%AC%E6%89%AB%E8%B4%A7%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E6%B6%8C%E5%85%A5%E6%97%A5%E6%9C%AC%E6%89%AB%E8%B4%A7%23&Refer=index"
		},
		{
			index: 23,
			title: "长生cos王昭君是自愿的",
			hot: "31.4万",
			url: "https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9Fcos%E7%8E%8B%E6%98%AD%E5%90%9B%E6%98%AF%E8%87%AA%E6%84%BF%E7%9A%84%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9Fcos%E7%8E%8B%E6%98%AD%E5%90%9B%E6%98%AF%E8%87%AA%E6%84%BF%E7%9A%84%23&Refer=index"
		},
		{
			index: 24,
			title: "闲鱼现大量转卖SU7创始车型订单",
			hot: "21.3万",
			url: "https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E7%8E%B0%E5%A4%A7%E9%87%8F%E8%BD%AC%E5%8D%96SU7%E5%88%9B%E5%A7%8B%E8%BD%A6%E5%9E%8B%E8%AE%A2%E5%8D%95%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E7%8E%B0%E5%A4%A7%E9%87%8F%E8%BD%AC%E5%8D%96SU7%E5%88%9B%E5%A7%8B%E8%BD%A6%E5%9E%8B%E8%AE%A2%E5%8D%95%23&Refer=index"
		},
		{
			index: 25,
			title: "我突然明白了读书的意义",
			hot: "20.9万",
			url: "https://s.weibo.com/weibo?q=%23%E6%88%91%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E4%BA%86%E8%AF%BB%E4%B9%A6%E7%9A%84%E6%84%8F%E4%B9%89%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E6%88%91%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E4%BA%86%E8%AF%BB%E4%B9%A6%E7%9A%84%E6%84%8F%E4%B9%89%23&Refer=index"
		},
		{
			index: 26,
			title: "金价暴涨后线上金店拒发货",
			hot: "19.5万",
			url: "https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9A%B4%E6%B6%A8%E5%90%8E%E7%BA%BF%E4%B8%8A%E9%87%91%E5%BA%97%E6%8B%92%E5%8F%91%E8%B4%A7%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9A%B4%E6%B6%A8%E5%90%8E%E7%BA%BF%E4%B8%8A%E9%87%91%E5%BA%97%E6%8B%92%E5%8F%91%E8%B4%A7%23&Refer=index"
		},
		{
			index: 27,
			title: "湖南旅行攻略给你备好了",
			hot: "7.6万",
			url: "https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E6%97%85%E8%A1%8C%E6%94%BB%E7%95%A5%E7%BB%99%E4%BD%A0%E5%A4%87%E5%A5%BD%E4%BA%86%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E6%97%85%E8%A1%8C%E6%94%BB%E7%95%A5%E7%BB%99%E4%BD%A0%E5%A4%87%E5%A5%BD%E4%BA%86%23&Refer=index"
		},
		{
			index: 28,
			title: "LPL",
			hot: "18.6万",
			url: "https://s.weibo.com/weibo?q=%23LPL%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23LPL%23&Refer=index"
		},
		{
			index: 29,
			title: "杨紫苗族服饰旧照",
			hot: "17.6万",
			url: "https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%8B%97%E6%97%8F%E6%9C%8D%E9%A5%B0%E6%97%A7%E7%85%A7%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%8B%97%E6%97%8F%E6%9C%8D%E9%A5%B0%E6%97%A7%E7%85%A7%23&Refer=index"
		},
		{
			index: 30,
			title: "小米汽车",
			hot: "17.5万",
			url: "https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23&Refer=index",
			mobilUrl: "https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23&Refer=index"
		}
	]
}])
const goClickDetail=(url, mobilUrl)=>{
	uni.navigateTo({
		url: `/pages/localUrl/localUrl?type=hot`
	})
	setStorageSync(cacheDataRef.hot, mobilUrl)

}
</script>
<template>
	<view class="app-container">
		<view class="hotlist-list" v-for="(item, index) in data" :key="index">
			<view class="hotlist-header">
				<view class="hotlist-name">
					{{ item.name}}
				</view>
				<view class="hotlist-subtitle">
					<text>{{ item.subtitle}}</text>
					<text> {{ item.update_time}}</text>
				</view>
				
			</view>
			<view v-for="(item2, index2) in item.data" :key="index2" class="hotlist-item">
				<view class="hotlist-item-top">
					<text class="hotlist-item-top-last" :class="{'hotlist-item-top-hot': item2.index<4}">
						{{ item2.index}}
					</text>
					
				</view>
				<view class="hotlist-item-bottom">
					<view class="hotlist-item-left">  {{ item2.title }}</view>
					<view class="hotlist-item-right">
						<view class="iconfont icon-liulanliang"></view>
						<text>{{ item2.hot }}</text>
						<view class="hotlist-item-detail" @click="goClickDetail(item2.url, item2.mobilUrl)">详情</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>




<style scoped
       lang="scss">
.hotlist-list{
	box-shadow: 0 0 10rpx 3rpx hsla(0,0%,64.7%,.5);
	border-radius: 10rpx;
	padding: 14rpx;
	margin-bottom: 40rpx;
	.hotlist-header{
		display: flex;
		justify-content: space-between;
		padding-bottom: 14rpx;
		.hotlist-name{
			font-weight: bold;
		}
		.hotlist-subtitle{
			uni-text{
				font-weight: 100;
				color: #222;
				padding-left: 10rpx;
				&:first-child{}
				&:last-child{}
			}
		}
	}
	
	.hotlist-item{
		box-shadow: 0 0 10rpx 3rpx hsla(0,0%,64.7%,.2);
		border-radius: 10rpx;
		padding: 30rpx;
		margin-top: 14rpx;
		display: flex;
		.hotlist-item-top{
			align-items: center;
			display: flex;
			.hotlist-item-top-last{
				font-size: 36rpx;
				margin-right: 16rpx;
			}
			.hotlist-item-top-hot{
				font-size: 50rpx;
				color: #fe2d46;
				
			}
		}
		.hotlist-item-bottom{
			flex:1;
			font-smoothing: antialiased;
			.hotlist-item-left,.hotlist-item-right{
				font-size: 26rpx;
				line-height: 40rpx;
			}
			.hotlist-item-left{}
			.hotlist-item-right{
				color: #222;
				display: flex;
				uni-text{
					padding-left: 10rpx;
				}
				.hotlist-item-detail{
					display: inline-flex;
					flex:1;
					justify-content: flex-end;
				}
			}
		}
	}
}
</style>
