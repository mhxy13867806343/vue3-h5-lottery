<script setup>
const active=ref(0)
const content=ref('12344')
const show=ref(false)
const currentDate = ref(new Date());
</script>
<template>
	<view>
		<van-tabs v-model="active" sticky animated swipeable>
			<van-tab title="疯狂星期四">
				<van-cell center title="选择年月日" value="" label="" @click="show=true" />
				<view>
					数据
				</view>
			</van-tab>
			<van-tab title="日历">
				<uv-parse class="uv-content" :content="content" lazy-load	 scroll-table	 selectable use-anchor	></uv-parse>
			</van-tab>
		</van-tabs>
		<van-popup v-model="show" round position="bottom"  >
			
			<van-datetime-picker
				v-model="currentDate"
				type="date"
				title="选择年月日"
			/>
		
		</van-popup>
	</view>
</template>




<style scoped
       lang="scss">

</style>
