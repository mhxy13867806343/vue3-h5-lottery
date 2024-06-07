<template>
	<gui-page :customHeader="true">
		<view slot="gHeader"><gui-demo-header></gui-demo-header></view>
		<view slot="gBody" class="gui-margin" style="padding-bottom:50rpx;">
			<gui-demo-banner title="GraceUI 5" 
			img="https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/8.png"></gui-demo-banner>
			<view class="gui-margin-top">
				<text class="gui-text gui-color-gray">请开始您的项目开发吧 ^_^</text>
			</view>
		</view>
	</gui-page>
</template>
<script>
export default {
	data() { 
		return {
			
		}
	},
	methods: {
		
	}
}
</script>
<style scoped>
</style>
