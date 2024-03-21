<script setup>
import useConnent from '@/hooks/useConnent';
const {  title,dynamicType,
	content, onClickSendSignature } = useConnent();
</script>

<template>
	<view class="app-container">
		<uv-input v-model="title" placeholder="请输入100字以内的动态标题" maxlength="100"
		clearable focus
		          count
		>
			<template v-slot:suffix>
				{{ title.length }}/100
			</template>
		</uv-input>
		<uv-textarea v-model="content" placeholder="请输入要发布的动态" count fixed maxlength="25"
		             clearable
		             :customStyle="{
			margin: '30rpx',
		             }"
		></uv-textarea>
		
		<uv-radio-group label="请选择动发布动态类型" v-model="dynamicType" :customStyle="{
		
		}">
			<uv-radio :name="0" label="公开" activeColor="red"
			:customStyle="{
			          margin:'20rpx'}"
			></uv-radio>
			<uv-radio :name="1" activeColor="red" label="私有"></uv-radio>
		</uv-radio-group>
		<uv-button type="primary" text="动态内容"
		           :disabled="!title.length&&!content.length"
		           @click="onClickSendSignature"
		></uv-button>
	</view>
</template>




<style scoped
       lang="scss">

</style>
