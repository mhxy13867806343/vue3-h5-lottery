<script setup>
    import store from "@/store";
    import {
        getPhone
    } from '@/common/reg'
    import {
        toast
    } from "@/uni_modules/uv-ui-tools/libs/function";
    import {
        ref
    } from '@vue/composition-api'
    const phone = ref('18072783978'); //用户名
    const code = ref(''); //密码
    const isDisabled = ref(false); //是否禁用登录按钮
    const __countdown = ref(61); //倒计时
    const countdown = ref(__countdown.value) //倒计时
    const tips = ref('获取验证码') //提示文字
    const timer = ref(null) //定时器
    const isClickShowToast = () => {
        if (!phone.value.length) {
            uni.showToast({
                title: '请输入手机号',
                icon: 'none'
            })
            return false
        }
        if (phone.value.length !== 11) {
            uni.showToast({
                title: '请输入11位手机号',
                icon: 'none'
            })
            return false
        }
        if (!getPhone(phone.value)) {
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
            setTimeout(() => {
                uni.hideLoading()
            }, 2000)
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
                }
            }, 1000)
        }

    }
    const onClickSubmit = () => {
        if (isClickShowToast()) {
            if (!code.value.length) {
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
</script>
<template>
    <view>
        <uv-input border="bottom" v-model="phone" placeholder="手机号" type="number" maxlength="11" clearable>
            <template #prefix>
                <view class="prefix">+86</view>
            </template>
        </uv-input>
        <uv-input placeholder="输入验证码" maxlength="6" clearable type="number" v-model="code" border="bottom">
            <!-- vue3模式下必须使用v-slot:suffix -->
            <template v-slot:suffix>
                <uv-button @click="onClickLogin" :disabled="isDisabled" :text="tips"
                    :type="isDisabled?'error':'primary'" size="mini">
                    {{ tips}}
                </uv-button>
            </template>
        </uv-input>

        <uv-button type="primary" hairline text="登录" :customTextStyle="{}" :customStyle="{}" @click="onClickSubmit"
            :disabled="!phone.length||!code.length"></uv-button>
    </view>
</template>



<style lang="scss">

</style>