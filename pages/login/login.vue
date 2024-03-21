<script setup>
import useUser from "@/hooks/useUser";
const {   formRef,
	model,
	rules,
	submit,
	isPassword}=useUser();
</script>
<template>
    <view class="app-container">
	    <uv-form labelPosition="left" :model="model" :rules="rules" ref="formRef">
		    <uv-form-item label="用户名" prop="account" borderBottom labelWidth="100rpx">
			    <uv-input clearable v-model="model.account" border="none"  placeholder="请输入用户名"  >
			    </uv-input>
		    </uv-form-item>
		    <uv-form-item label="密码" prop="password" borderBottom labelWidth="100rpx">
			    <uv-input
				    :password="isPassword"
				    clearable v-model="model.password" border="none"  placeholder="请输入密码"  minlength="6" maxlength="20" >
				    <template v-slot:suffix>
					    <uv-icon :name="isPassword?'eye':'eye-off-outline'" color="#2979ff" size="28"
					             @click="isPassword=!isPassword"
					    ></uv-icon>
				    </template>
			    </uv-input>
		    </uv-form-item>
		    <uv-button type="primary" text="提交" customStyle="margin-top: 10px" @click="submit('login')"></uv-button>
		    
	    </uv-form>
	    <uv-cell-group :customStyle="{
			marginTop: '35%'
	    }">
		    <uv-cell title="注册帐号" isLink url="/pages/registered/registered" center></uv-cell>
	    </uv-cell-group>
    </view>
</template>



<style lang="scss">

</style>
