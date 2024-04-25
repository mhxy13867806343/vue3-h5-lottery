<script setup>
import {getKfc,getHoliday} from '@/api/outer'
const active=ref(0)
const content=ref({
	msg:'',
	data:[],
	year:'',
	isLoad:false
})
const defaultIndex=ref(0)
const show=ref(false)
const columnsRef=ref([])
onMounted(()=>{
	selectDataKfc()
	const year=new Date().getFullYear()
	const startY=year-5
	const endY=year+10
	//循环startY到endY，获取每年年份
	const years = [];
	for (let i = startY; i <= endY; i++) {
		years.push({
			text:i,
			value:`${i}年`
		});
	}
	columnsRef.value=years
})
const onClickTable=(index)=>{
	content.value.msg=""
	content.value.year=""
	content.value.data=[]
	if(index==0){
		selectDataKfc()
	}else{
		content.value.isLoad=true
		const rusti32=new Date().getFullYear()
		const index=columnsRef.value.findIndex(item=>item.text==rusti32)
		defaultIndex.value=index||0
		onConfirm(rusti32)
		content.value.year=rusti32
	}
}
const selectDataKfc=()=>{
	getKfc().then(res=>{
		content.value.msg=res.msg
	})
}
const onConfirm=(value)=>{
	content.value.year=value.text
	
	getHoliday(value.text).then(res=>{
		content.value.data=res||[]
	}).catch(err=>{
		content.value.isLoad=true
		content.value.data=[]
	})
	content.value.isLoad=false
	show.value=false
}
const filteredHolidays = computed(() => {
	const data=content.value.data
	return Object.keys(data).map(key=>{
		return {
			key,
			name:data[key]?.name,
			data:data[key]?.date
		}
	})
});
</script>
<template>
	<view>
		<van-tabs v-model="active" sticky animated swipeable @change="onClickTable">
			<van-tab title="疯狂星期四">
				
				<view class="app-container">
					<uv-parse class="uv-content" :content="content.msg" lazy-load	 scroll-table	 selectable use-anchor	></uv-parse>
				</view>
			</van-tab>
			<van-tab title="日历">
				<van-cell center title="选择年月日" :value="content.year" label="" @click="show=true" />
				<van-cell-group inset v-if="filteredHolidays.length">
					<van-cell center :title="a.data" :value="a.name" :label="a.key"
					          v-for="(a,b) in filteredHolidays" :key="b"/>
				</van-cell-group>
				<van-empty v-if="content.isLoad&&!filteredHolidays.length" description="你的下面大吗？"></van-empty>
			</van-tab>
		</van-tabs>
		<van-popup v-model="show" round position="bottom"  >
			
			<van-picker
				toolbar-position="top"
				show-toolbar
				:default-index="defaultIndex"
				:columns="columnsRef"
				@cancel="show = false"
				@confirm="onConfirm"
			/>
		</van-popup>
	</view>
</template>




<style scoped
       lang="scss">

</style>
