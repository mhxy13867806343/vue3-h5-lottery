<script setup>
import useForm from "@/hooks/useForm";
const {    form,
	formRef,
	rules,
	onClickSubmit,
	onClickReset,
	startCountdown,onClickVerify}= useForm({})
</script>
<template>
	<view class="app-container">
		<uv-form labelPosition="left" :model="form" :rules="rules" ref="formRef">
			<uv-form-item label="新密码" prop="oldPassword" borderBottom
			:labelWidth="70"
			>
				<uv-input v-model="form.oldPassword" border="none" clearable password type="password">
				</uv-input>
			</uv-form-item>
			<uv-form-item 	:labelWidth="70" label="再次密码" prop="newPassword" borderBottom>
				<uv-input v-model="form.newPassword" border="none" clearable password type="password">
				</uv-input>
			</uv-form-item>
			<uv-form-item 	:labelWidth="70" label="验证码" prop="code" borderBottom>
				<uv-input v-model="form.code" border="none" clearable maxlength="20">
					<template #suffix>
						<view class="search-uv-flex">
							<uv-button type="primary"  size="mini"
							           :disabled="form.disabled"
							           @click="startCountdown('code')"
							           :customStyle="{
							 display: 'inline-block',
  width: '200rpx',
  height: '50rpx',
  lineHeight: '50rpx',
  fontSize: '24rpx',
  borderRadius: '10rpx',
  border: '.5px solid rgb(3 4 94 / 0%)',
  position: 'relative',
  overflow: 'hidden',
      backgroundColor: '#444141'
						}"
							>
								{{  form.text}}
							</uv-button>
							<uv-button type="primary"  size="mini"
							           @click="onClickVerify"
							           :disabled="!form.code.length"
							           :customStyle="{
							 display: 'inline-block',
  height: '50rpx',
  lineHeight: '50rpx',
  fontSize: '24rpx',
  borderRadius: '10rpx',
  border: '.5px solid rgb(3 4 94 / 0%)',
  position: 'relative',
  overflow: 'hidden',
     
						}"
							
							>验证</uv-button>
						</view>
					</template>
				</uv-input>
			</uv-form-item>
			<uv-button type="primary" text="提交" customStyle="margin-top: 10px" @click="onClickSubmit"></uv-button>
			<uv-button type="error" text="重置" customStyle="margin-top: 10px" @click="onClickReset"></uv-button>
		</uv-form>
	</view>
</template>




<style scoped lang="scss">

</style>
