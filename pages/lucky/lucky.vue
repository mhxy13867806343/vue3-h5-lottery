<script setup>
import LuckyWheel from '@/components/@lucky-canvas/uni/lucky-wheel' // 大转盘
import LuckyGrid from '@/components/@lucky-canvas/uni/lucky-grid' // 九宫格
import slotMachine from '@/components/@lucky-canvas/uni/slot-machine' // 九宫格
const myLucky=ref(null)
const blocks=ref([{ padding: '13px', background: '#617df2' }])
const prizes=ref([
	{
		range: [0, 45],
		fonts: [
			{ text: '洗碗机', top: '10%', fontSize: '24px' },
			{ text: '剩余23', top: '40%' },
		]
	},
	{
		fonts: [
			{ text: '谢谢参与', top: '10%', fontSize: '24px', fontColor: '#aaa' },
		]
	},
	{
		fonts: [
			{ text: '特斯拉', top: '10%', fontSize: '24px', fontColor: 'red', fontWeight: '700' },
			{ text: '剩余1', top: '40%' },
		]
	},
	{
		fonts: [
			{ text: '谢谢参与', top: '10%', fontSize: '24px', fontColor: '#aaa' },
		]
	},
	{
		fonts: [
			{ text: '颐和园门票', top: '10%', fontSize: '20px' },
			{ text: '剩余99', top: '40%' },
		]
	},
	{
		fonts: [
			{ text: '谢谢参与', top: '10%', fontSize: '24px', fontColor: '#aaa' },
		]
	},
])
const buttons= [
	{ radius: '50px', background: '#617df2' },
	{ radius: '45px', background: '#afc8ff' },
	{
		radius: '40px', background: '#869cfa',
		pointer: true,
		fonts: [{ text: '开始\n抽奖', top: '-20px' }]
	},
]
const defaultStyle={}
function startCallBack (e) {
	console.log(e,222)
	// 先开始旋转
	myLucky.value.play ()
	// 使用定时器来模拟请求接口
	setTimeout ( () => {
		// 假设后端返回的中奖索引是0
		const index = 0
		// 调用stop停止旋转并传递中奖索引
		myLucky.value.stop ( index )
	} , 3000 )
}
function endCallBack (prize) {
	// 奖品详情
	console.log(prize)
}
</script>
<template>
	<view class="app-container">
		<LuckyWheel
			ref="myLucky"
			width="600rpx"
			height="600rpx"
			:blocks="blocks"
			:prizes="prizes"
			:buttons="buttons"
			:defaultStyle="defaultStyle"
			@start="startCallBack"
			@end="endCallBack"
		/>
	</view>
</template>




<style scoped
       lang="scss">

</style>
