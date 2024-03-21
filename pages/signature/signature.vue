<script setup>
import useConnent from '@/hooks/useConnent';
const { signature, onClickSendSignature } = useConnent();
</script>

<template>
	<view class="app-container">
		<uv-textarea v-model="signature" placeholder="请输入签名内容" count fixed maxlength="25"
		clearable focus
		             :customStyle="{
			margin: '30rpx',
		             }"
		></uv-textarea>
		<uv-button type="primary" text="发布签名内容"
		:disabled="!signature.length"
		           @click="onClickSendSignature"
		></uv-button>
	</view>
</template>




<style scoped
       lang="scss">

</style>
