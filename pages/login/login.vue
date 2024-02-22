<script setup>
    import store from "@/store";
    import {
        getPhone
    } from '@/common/reg'
    import {
        toast
    } from "@/uni_modules/uv-ui-tools/libs/function";
    import {
        ref,reactive
    } from '@vue/composition-api'
    const formRef=ref(null)
    const uCode=ref(null)
    const model=reactive({
	    phone: '18072783978',
	    code: '123456'
    })
    const rules=reactive({
	    phone: [
		    { required: true, message: '请输入手机号', trigger: 'blur' },
		    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
	    ],
	    code: [
		    { required: true, message: '请输入验证码', trigger: 'blur' }
	    ]
    })
    const isDisabled = ref(false); //是否禁用登录按钮
    const __countdown = ref(60); //倒计时
    const countdown = ref(__countdown.value) //倒计时
    const tips = ref('获取验证码') //提示文字
    const timer = ref(null) //定时器
    const isClickShowToast = () => {
        if (!model.phone.length) {
            uni.showToast({
                title: '请输入手机号',
                icon: 'none'
            })
            return false
        }
        if (model.phone.length !== 11) {
            uni.showToast({
                title: '请输入11位手机号',
                icon: 'none'
            })
            return false
        }
        if (!getPhone(model.phone)) {
            uni.showToast({
                title: '请输入正确的手机号',
                icon: 'none'
            })
            return false
        }
        return true
    }
    const onClickLogin = () => {
        if (isClickShowToast()) {
	        uni.showLoading({
		        title: '正在获取验证码'
	        })
	        setTimeout(() => {
		        uni.hideLoading()
		        toast('发送成功')
		        uCode.value.start()
		        isDisabled.value=true
		        timer.value = setInterval(() => {
			        if (countdown.value > 0) {
				        countdown.value--
				        tips.value = `${countdown.value}秒后重新获取`
				        isDisabled.value = true
			        } else {
				        clearInterval(timer.value)
				        countdown.value = __countdown.value
				        tips.value = '重新获取'
				        isDisabled.value = false
				        uCode.value.reset()
			        }
		        }, 1000)
	        }, 1000)
	       
        
        }

    }
    const onClickSubmit = () => {
        if (isClickShowToast()) {
            if (!model.code.length) {
                uni.showToast({
                    title: '请输入验证码',
                    icon: 'none'
                })
                return false
            }
            toast('开始登录了')
            store.dispatch('setUserToken', {
                token: '1234',
                userinfo: {
                    a: 1,
                    b: 2
                }
            })
            setTimeout(() => {
                uni.reLaunch({
                    url: '/pages/home/home'
                })
            }, 2000)
        }
    }
    // 重置
    const reset=()=> {
	    formRef.value.resetFields();
	    formRef.value.clearValidate();
    }
	    // 提交
    const  submit=()=> {
	    // 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
	    formRef.value.validate().then(res => {
		    uni.showToast({
			    icon: 'success',
			    title: '校验通过'
		    })
		    onClickSubmit()
	    }).catch(errors => {
		    uni.showToast({
			    icon: 'error',
			    title: '校验失败'
		    })
	    })
    }
</script>
<template>
    <view class="app-container">
	    <uv-form labelPosition="left" :model="model" :rules="rules" ref="formRef">
		    <uv-form-item label="手机号" prop="phone" borderBottom labelWidth="100rpx">
			    <uv-input clearable v-model="model.phone" border="none"  placeholder="手机号" type="number" maxlength="11" >
			    </uv-input>
		    </uv-form-item>
		    <uv-form-item label="验证码" prop="code" borderBottom labelWidth="100rpx">
			    <uv-input clearable v-model="model.code" border="none"  placeholder="6位验证码" type="number" maxlength="6" >
				    <template v-slot:suffix>
					    <uv-code
						    ref="uCode"
						    @change="text=>tips=text"
						    :seconds="countdown"
						    changeText="X秒重新获取哈哈哈"
					    ></uv-code>
					    <uv-button
						    :disabled="isDisabled"
						    @click="onClickLogin"
						    :text="tips"
						    :type="!isDisabled?'success':'default'"
						    size="mini"
					    ></uv-button>
				    </template>
			    </uv-input>
		    </uv-form-item>
		    <uv-button type="primary" text="提交" customStyle="margin-top: 10px" @click="submit"></uv-button>
		    <uv-button type="error" text="重置" customStyle="margin-top: 10px" @click="reset"></uv-button>
	    </uv-form>
    </view>
</template>



<style lang="scss">

</style>
