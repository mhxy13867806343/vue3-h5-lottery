<script setup>
const active=ref(0)
</script>
<template>
	<van-tabs v-model="active" sticky animated swipeable>
		<van-tab title="动态">
			<view v-for="item in 10000" :key="item">
				{{ item}}
			</view>
		</van-tab>
	</van-tabs>
</template>
