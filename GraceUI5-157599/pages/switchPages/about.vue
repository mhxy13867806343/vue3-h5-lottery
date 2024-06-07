<template>
	<gui-page :customHeader="true">
		<view slot="gHeader"><gui-demo-header></gui-demo-header></view>
		<view slot="gBody" class="gui-margin" style="padding-bottom:50rpx;">
			<gui-demo-banner title="GraceUI · 关于" 
			img="https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/8.png"></gui-demo-banner>
			<view class="gui-margin-top-large">
				<text class="gui-text gui-primary-color">
GraceUI 是一套基于 uni-app 的优秀前端框架，提供了极其丰富的组件、布局、界面及模板，会大幅度提高您的前端布局速度。\n
GraceUI 来自于近5年上百个小程序及APP项目的总结。我们是一线开发者，更深度地参与项目开发，所以能够为您提供更好的框架。\n
GraceUI 使用用户过万，通过1万+开发者的反馈加上我们长期的高频更新，框架已经极其稳定，兼容性极好！\n
自发布的2年多来我们一直坚持聆听并快速响应，快速更新，因为努力更值得信赖。\n
收费意味着责任、更快的反应速度、更多的成熟组件、更久远的持续更新，我们会用努力和坚持给您超值的开发体验。</text>
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
<style>
</style>