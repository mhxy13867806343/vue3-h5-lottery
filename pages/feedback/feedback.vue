<script setup>
import {getEmail} from '@/common/regtools'

const title = ref('')//标题
const email = ref('')//邮箱
const isEmail = ref(false)
const feedback = ref('')//反馈内容
const uvInputRef = ref(null)
watch(()=>email.value, (newVal, oldVal) => {
	const result=getEmail(newVal)
	if(result){
		isEmail.value = false
	}else{
		isEmail.value = true
	}
	if (!newVal.length){
		isEmail.value = false
	}
})
const handleSubmit=()=>{
	if(!email.value.length){
		uni.showToast({
			title: '邮箱不能为空',
			icon: 'none'
		})
		return
	}
	if(!getEmail(email.value)){
		uni.showToast({
			title: '邮箱格式不正确',
			icon: 'none'
		})
		return
	}
	if(!feedback.value.length){
		uni.showToast({
			title: '反馈内容不能为空',
			icon: 'none'
		})
		return
	}
}
</script>
<template>
	<view class="feedback app-container">
		<uv-input  maxlength="21" v-model="title" placeholder="请输入标题(可选)21字以内 " border="surround" clearable
		          :customStyle="{
			marginBottom: '30rpx',
			
		          }"
		></uv-input>
		<uv-input  ref="uvInputRef" v-model="email" placeholder="请输入邮箱号码(必填) " border="surround" clearable
		          :placeholderStyle="isEmail? 'color: #ee0a24' : ''"
		          :color="isEmail? '#ee0a24' : '#303133'"
		          :customStyle="{
			marginBottom: '30rpx',
		          }"
		></uv-input>
		<uv-textarea   :customStyle="{
			marginBottom: '30rpx',
			
		          }" count height="300" fixed :maxlength="420" autoHeight v-model="feedback" placeholder="您的反馈内容(必填)"></uv-textarea>
		<uv-button type="primary" text="提交"
		@click="handleSubmit"
		></uv-button>
	</view>
</template>




<style scoped
       lang="scss">

</style>
