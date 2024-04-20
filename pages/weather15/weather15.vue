<script setup>
// 全量包  二选一


// 按需引入 二选一
import * as echarts from 'echarts/core';
import {LineChart, BarChart} from 'echarts/charts';
import 'echarts/lib/component/dataZoom'

import {TitleComponent,TooltipComponent,GridComponent, DatasetComponent, TransformComponent, LegendComponent } from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import {LabelLayout,UniversalTransition} from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 是必须的一步
import {CanvasRenderer} from 'echarts/renderers';

// 按需引入 注册必须的组件
echarts.use([
	LegendComponent,
	TitleComponent,
	TooltipComponent,
	GridComponent,
	DatasetComponent,
	TransformComponent,
	LineChart,
	BarChart,
	LabelLayout,
	UniversalTransition,
	CanvasRenderer
]);
const chartRef = ref(null)
const name=ref('')
const data=ref({
	code: 200,
	message: "获取成功",
	result: {
		cityInfo: {
			city: "杭州市",
			citykey: "101210101",
			parent: "浙江",
			updateTime: "08:31"
		},
		data: {
			forecast: [
				{
					aqi: 37,
					date: "20",
					fl: "2级",
					fx: "北风",
					high: "高温 26℃",
					low: "低温 17℃",
					notice: "不要被阴云遮挡住好心情",
					sunrise: "05:25",
					sunset: "18:30",
					type: "阴",
					week: "星期六",
					ymd: "2024-04-20"
				},
				{
					aqi: 35,
					date: "21",
					fl: "1级",
					fx: "东北风",
					high: "高温 23℃",
					low: "低温 16℃",
					notice: "不要被阴云遮挡住好心情",
					sunrise: "05:24",
					sunset: "18:30",
					type: "阴",
					week: "星期日",
					ymd: "2024-04-21"
				},
				{
					aqi: 49,
					date: "22",
					fl: "1级",
					fx: "东风",
					high: "高温 22℃",
					low: "低温 15℃",
					notice: "不要被阴云遮挡住好心情",
					sunrise: "05:23",
					sunset: "18:31",
					type: "阴",
					week: "星期一",
					ymd: "2024-04-22"
				},
				{
					aqi: 59,
					date: "23",
					fl: "1级",
					fx: "北风",
					high: "高温 22℃",
					low: "低温 14℃",
					notice: "不要被阴云遮挡住好心情",
					sunrise: "05:22",
					sunset: "18:32",
					type: "阴",
					week: "星期二",
					ymd: "2024-04-23"
				},
				{
					aqi: 59,
					date: "24",
					fl: "2级",
					fx: "东风",
					high: "高温 24℃",
					low: "低温 13℃",
					notice: "不要被阴云遮挡住好心情",
					sunrise: "05:21",
					sunset: "18:32",
					type: "阴",
					week: "星期三",
					ymd: "2024-04-24"
				},
				{
					aqi: 61,
					date: "25",
					fl: "2级",
					fx: "东风",
					high: "高温 25℃",
					low: "低温 15℃",
					notice: "雨虽小，注意保暖别感冒",
					sunrise: "05:20",
					sunset: "18:33",
					type: "小雨",
					week: "星期四",
					ymd: "2024-04-25"
				},
				{
					aqi: 56,
					date: "26",
					fl: "2级",
					fx: "东风",
					high: "高温 24℃",
					low: "低温 18℃",
					notice: "不要被阴云遮挡住好心情",
					sunrise: "05:19",
					sunset: "18:34",
					type: "阴",
					week: "星期五",
					ymd: "2024-04-26"
				},
				{
					aqi: 57,
					date: "27",
					fl: "1级",
					fx: "东风",
					high: "高温 22℃",
					low: "低温 16℃",
					notice: "雨虽小，注意保暖别感冒",
					sunrise: "05:18",
					sunset: "18:34",
					type: "小雨",
					week: "星期六",
					ymd: "2024-04-27"
				},
				{
					aqi: 58,
					date: "28",
					fl: "1级",
					fx: "北风",
					high: "高温 24℃",
					low: "低温 15℃",
					notice: "雨虽小，注意保暖别感冒",
					sunrise: "05:18",
					sunset: "18:35",
					type: "小雨",
					week: "星期日",
					ymd: "2024-04-28"
				},
				{
					aqi: 62,
					date: "29",
					fl: "2级",
					fx: "东风",
					high: "高温 22℃",
					low: "低温 13℃",
					notice: "不要被阴云遮挡住好心情",
					sunrise: "05:17",
					sunset: "18:36",
					type: "阴",
					week: "星期一",
					ymd: "2024-04-29"
				},
				{
					aqi: 53,
					date: "30",
					fl: "2级",
					fx: "北风",
					high: "高温 21℃",
					low: "低温 15℃",
					notice: "记得随身携带雨伞哦",
					sunrise: "05:16",
					sunset: "18:36",
					type: "中雨",
					week: "星期二",
					ymd: "2024-04-30"
				},
				{
					aqi: 51,
					date: "01",
					fl: "2级",
					fx: "北风",
					high: "高温 20℃",
					low: "低温 14℃",
					notice: "不要被阴云遮挡住好心情",
					sunrise: "05:15",
					sunset: "18:37",
					type: "阴",
					week: "星期三",
					ymd: "2024-05-01"
				},
				{
					aqi: 45,
					date: "02",
					fl: "1级",
					fx: "东风",
					high: "高温 20℃",
					low: "低温 14℃",
					notice: "阴晴之间，谨防紫外线侵扰",
					sunrise: "05:14",
					sunset: "18:38",
					type: "多云",
					week: "星期四",
					ymd: "2024-05-02"
				},
				{
					aqi: 40,
					date: "03",
					fl: "2级",
					fx: "东北风",
					high: "高温 20℃",
					low: "低温 14℃",
					notice: "不要被阴云遮挡住好心情",
					sunrise: "05:13",
					sunset: "18:38",
					type: "阴",
					week: "星期五",
					ymd: "2024-05-03"
				},
				{
					aqi: 34,
					date: "04",
					fl: "2级",
					fx: "东风",
					high: "高温 21℃",
					low: "低温 14℃",
					notice: "不要被阴云遮挡住好心情",
					sunrise: "05:12",
					sunset: "18:39",
					type: "阴",
					week: "星期六",
					ymd: "2024-05-04"
				}
			],
			ganmao: "各类人群可自由活动",
			pm10: 31,
			pm25: 17,
			quality: "优",
			shidu: "91%",
			wendu: "22",
			yesterday: {
				aqi: 32,
				date: "19",
				fl: "2级",
				fx: "东南风",
				high: "高温 22℃",
				low: "低温 14℃",
				notice: "雨虽小，注意保暖别感冒",
				sunrise: "05:26",
				sunset: "18:29",
				type: "小雨",
				week: "星期五",
				ymd: "2024-04-19"
			}
		},
		date: "20240420",
		message: "success感谢又拍云(upyun.com)提供CDN赞助",
		status: 200,
		time: "2024-04-20 11:08:47"
	}
})
// 准备数据
var dates = data.value.result.data.forecast.map(function(item) {
	return item.ymd; // 使用日期
});

var highs = data.value.result.data.forecast.map(function(item) {
	return parseInt(item.high.replace(/[^0-9]/g, ''), 10); // 提取并转换最高温度数字
});

var lows = data.value.result.data.forecast.map(function(item) {
	return parseInt(item.low.replace(/[^0-9]/g, ''), 10); // 提取并转换最低温度数字
});

var types = data.value.result.data.forecast.map(function(item) {
	return item.type; // 天气类型
});

// ECharts 配置
const option = {
	tooltip: {
		trigger: 'axis',
		show:true
	},
	legend: {
		data: ['最高温度', '最低温度', '天气类型']
	},
	xAxis: {
		type: 'category',
		data: dates,
		axisLabel: {
		
		}
	},
	dataZoom: [
		{
			type: 'slider',
			start: 0,
			end: 50,
			realtime: true,
			height: 7
		}
	],
	yAxis: {
		type: 'value',
		name: '温度 (°C)',
	},
	series: [{
		name: '最高温度',
		type: 'line',
		data: highs
	}, {
		name: '最低温度',
		type: 'line',
		data: lows
	}, {
		name: '天气类型',
		type: 'line',
		data: types
	}]
};
const chart=ref(null)
onMounted(() => {
	updateChart()
})
const updateChart=()=>{
	nextTick(async () => {
		
		if(!chartRef.value) return
		const myChart = await chartRef.value.init(echarts)
		myChart.setOption(option)
	})
}
watch(data, () => {
	updateChart()
}, { deep: true })
</script>
<template>
	<view class="app-container">
		<view class="app-weather15">
			<van-cell-group inset>
				<van-field  centerrequired v-model="name" label="天气城市" placeholder="请输入或选择天气城市" clearable  >
					<template #button>
						<van-button  :type="!name.length?'default':'primary'"
						             :autoplay="2000"
						             :touchable="false"
						             :show-indicators="false" block
						             :disabled="!name.length"  hairline size="normal"
						>查询</van-button>
					</template>
				</van-field>
			</van-cell-group>
			<view class="app-weather15-title">{{ name }}15天天气预报</view>
			<view style="width:100%; height:750rpx">
				<l-echart ref="chartRef" @finished="updateChart"></l-echart></view>
		
		</view>
	</view>
</template>




<style scoped
       lang="scss">

</style>
