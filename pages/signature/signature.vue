<script setup>
import useConnent from '@/hooks/useConnent';
const { signature, onClickSendSignature } = useConnent();

</script>

<template>
	<view class="app-container">
		<uv-textarea v-model="signature" placeholder="写点东西吧,至少表示您还在地球上生活过" count fixed maxlength="64"
		clearable focus
		             :customStyle="{
			margin: '30rpx',
		             }"
		></uv-textarea>
		<uv-button type="primary" text="发布签名内容"
		           @click="onClickSendSignature"
		></uv-button>
	</view>
</template>




<style scoped
       lang="scss">

</style>
