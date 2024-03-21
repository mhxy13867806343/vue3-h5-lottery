<script setup>
import { ref } from '@vue/composition-api'
const name = ref('')
</script>
<template>
	<view class="user-update app-container p10">
		<uv-input placeholder="请输入昵称"
		v-model="name"
		          shape="circle"
		          maxlength="30"
		          clearable
		></uv-input>
		<view class="uv-flex p-margin-top p-flex-justify-content">
			<uv-button type="primary" text="提交" :disabled="!name.length"
			           
			           :custom-style="{
							           width: '160rpx',
							           height: '60rpx',
							           lineHeight: '60rpx',
							           borderRadius: '10rpx',
							           fontSize: '30rpx'
			           }"
			></uv-button>
		</view>
	</view>
</template>



<style lang="scss">

</style>
