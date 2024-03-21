<script setup>
const active=ref(0)
const tabList=ref([{title:'公开',active:0},{title:'私有',active:1}])
</script>

<template>
	<van-tabs v-model="active"  animated swipeable sticky>
		<van-tab :title="item.title" v-for="(item, index) in tabList" :key="index">
			
			<scroll-view  scroll-y="true" class="scroll-Y" >
				<view v-for="(item, index) in 11110" :key="index">
					{{item}}
				</view>
			</scroll-view>
		</van-tab>
	</van-tabs>
</template>


<style lang="scss">

</style>
