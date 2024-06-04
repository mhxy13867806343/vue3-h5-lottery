<script setup>
import {getCityname} from '@/api/outer'
import { cacheDataRef , getStorageSync } from "@/common/tools";
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
const isExist=ref(false)
const activeIndex=ref(-1)
const dataList=ref({})
const addressName=ref("")
// 准备数据


const cityComputed=computed(()=>getStorageSync(cacheDataRef.hotcity))
// ECharts 配置

const chart=ref(null)
const updateChart=(cityname)=>{
	let myChart = null
	isExist.value=false
	nextTick(async () => {
		try{
			const res=await getCityname(cityname)
			dataList.value=res.result||[]
			const {forecast}= dataList.value?.data
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
					data: dataList.value.data.forecast.map(function(item) {
						return item.ymd; // 使用日期
					}),
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
					data: forecast.map(function(item) {
						return parseInt(item.high.replace(/[^0-9]/g, ''), 10); // 提取并转换最高温度数字
					})
				}, {
					name: '最低温度',
					type: 'line',
					data: forecast.map(function(item) {
						return parseInt(item.low.replace(/[^0-9]/g, ''), 10); // 提取并转换最低温度数字
					})
				}, {
					name: '天气类型',
					type: 'line',
					data: forecast.map(function(item) {
						return item.type; // 天气类型
					})
				}]
			};
			if(!chartRef.value) return
			myChart= await chartRef.value.init(echarts)
			myChart.setOption(option)
			isExist.value=false
		}catch ( e ){
			myChart=null
			chartRef.value?.clear()
			dataList.value={
				message:'暂无数据'
			}
			isExist.value=true
		}
	})
}
onLoad(opt=>{
	addressName.value=opt.name
	if(opt.name){
		updateChart(opt.name)
		name.value=opt.name
	}
})

watch(dataList.value, () => {
	updateChart()
}, { deep: true })
const onCityClick=(item,index)=>{
	activeIndex.value=index
	name.value=item.name
	updateChart(item.name)
}
const init=()=>{
	if(!addressName.value){
		setTimeout(()=>{
			activeIndex.value=0
			updateChart(cityComputed.value[0].name)
			name.value=cityComputed.value[0].name
		},1000)
	}
	
}
const onClickRouter=()=>{
	uni.navigateTo({
		url:'/pages/morecity/morecity'
	})
}
</script>
<template>
	<view class="app-container">
		<view class="app-weather15">
			<van-notice-bar v-if="dataList&&dataList.message" scrollable :text="dataList&&dataList.message" />
			
			<van-cell-group inset>
				<van-field  centerrequired v-model="name" label="天气城市" placeholder="请输入或选择天气城市" clearable  >
					<template #button>
						<van-button  :type="!name.length?'default':'primary'"
						             :autoplay="2000"
						             :touchable="false"
						             :show-indicators="false" block
						             @click="updateChart(name)"
						             :disabled="!name.length"  hairline size="normal"
						>查询</van-button>
					</template>
				</van-field>
			</van-cell-group>
			<van-cell-group inset>
				<van-cell title="热门城市" center></van-cell>
				<view class="app-container-city">
					<view v-for="(a,b) in cityComputed" :key="b" class="app-container-item"
					@click="onCityClick(a,b)"
					      :class="{active:activeIndex===b}"
					>
						{{ a.name }}
					</view>
				</view>
				<van-cell title="更多城市"  center
				@click="onClickRouter"
				></van-cell>
			</van-cell-group>
			<view class="app-weather15-title">{{ name }}15天天气预报</view>
			<view style="width:100%; height:750rpx" v-if="!isExist">
				<l-echart ref="chartRef" @finished="init"></l-echart></view>
			<uv-empty mode="list"  v-else></uv-empty>
		
		
		</view>
	</view>
</template>




<style scoped lang="scss">
.app-container-city{
	display:flex;
	flex-wrap: wrap;
	margin-bottom:41rpx;
	.app-container-item{
		text-align: center;
		display: flex;
		padding: 10rpx;
		white-space: nowrap;
		color: #999;
		font-size: 28rpx;
		&.active{
			color: #f33434;
			font-size: 34rpx;
		}
	}
}

</style>
