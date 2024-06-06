import msg from "@/common/msg";
import { getEmail,getRegExPassword } from "@/common/regtools";
import msgDefault from '@/common/msg'
import {
    postUserBindEmail ,
    postUserVerifyEmail ,
    getUserInfo ,
    postUserVerifyCode ,
    postUserResetPwdEmail,postUserVerifyEmail1
} from "@/api/outer";
import store from "@/store";
import {Toast} from 'vant'
export default (options={})=>{
    
    let frameId = null;
    const form = reactive({
        email:'869710179@qq.com',
        oldPassword: '',
        newPassword: '',
        code: '',
        disabled: false,
        count:0,
        text:'获取验证码'
    })
    const formRef=ref(null)
    const rules=ref({
        code:[
            { required: true, message: msgDefault.pwd3, trigger: ['blur', 'change']},
        ],
        newPassword: [
            { required: true, message:msgDefault.pwd4, trigger: ['blur', 'change']},
            {
                validator: (rule, value, callback) => {
                    if(!value){
                        callback(new Error(msgDefault.pwd4))
                        return false
                    }
                    // if(!getRegExPassword(value)) {
                    //     callback ( new Error ( msgDefault.pwd1 ) )
                    //     return  false
                    // }
                    if(value!== form.oldPassword) {
                        callback ( new Error ( msgDefault.pwd5 ) )
                        return  false
                    }
                    callback()
                },
                trigger: ['blur',]
            }
        ],
        oldPassword: [{ required: true, message: msgDefault.pwd, trigger: ['blur', 'change']},
            {
                validator: (rule, value, callback) => {
                    if(!value){
                        callback(new Error(msgDefault.pwd))
                        return false
                    }
                    // if(!getRegExPassword(value)) {
                    //     callback ( new Error ( msgDefault.pwd1 ) )
                    //     return false
                    // }
                    callback()
                },
                trigger: ['blur', 'change']
            }],
        email: [{
            // 自定义验证函数，见上说明，注意这里面的逻辑不能出现语法报错，否则可能导致不验证
            validator: (rule, value, callback) => {
                if(!value){
                    callback(new Error('请输入邮箱'))
                    return false
                }
                if(!getEmail(value)){
                    callback(new Error('邮箱格式不正确'))
                    return false
                }
                // 此处业务逻辑省略
                // 返回true表校验通过，返回false表示不通过
                return true;
            },
            trigger: ['blur']
        }]
    })
    onMounted(()=>{
        if(store.state.token) {
            getUserInfo ().then ( res => {
                const { code , message , result } = res
                if ( code === 200 ) {
                    form.email = result.email
                    Toast.success ( message );
                }else{
                    Toast.fail ( message );
                }
            } ).catch ( err => {
                Toast.fail ( err.message );
            } )

        }
    })
    const onClickSubmit=()=>{
        const emailType=options.type
        formRef.value.validate().then(res => {
            Toast.loading({
                message: '处理中...',
                forbidClick: true,
                loadingType: 'spinner',
            });
            if(emailType==="bind") {
                postUserBindEmail ({
                    email: form.email,
                    code: form.code
                }).then ( res => {
                    const { code , message } = res
                    if ( code === 200 ) {
                        Toast.success ( message );
                        setTimeout ( () => {
                            uni.navigateBack ()
                        } , 1000 )
                    } else {
                        Toast.fail ( message );
                    }
                } ).catch ( err => {
                    console.log ( err )
                } )
            }
            if(emailType==="recover"){
            
            }
            if(emailType==='change' ){
                postUserResetPwdEmail({
                    email: form.email,
                    code: form.code,
                    password: form.newPassword
                }).then(res=>{
                    Toast.clear()
                    const { code , message } = res
                    if(code===200){
                        Toast.success(message)
                        setTimeout(()=>{
                            uni.navigateBack()
                        },1000)
                    }else{
                        Toast.fail(message)
                    }
                }).catch(e=>{
                    console.log(e)
                    Toast.clear()
                    Toast.fail(e.message)
                })
            }
        }).catch(errors => {
            return false
        })
    }
    const onClickReset=()=>{
        formRef.value.resetFields()
        formRef.value.clearValidate()
    }
    const startCountdown1=()=>{
        if(!form.email.length){
            uni.showToast({
                title: '请输入邮箱',
                icon: 'none'
            })
            return false
        }
        if(!getEmail(form.email)){
            uni.showToast({
                title: '邮箱格式不正确',
                icon: 'none'
            })
            return false
        }
        Toast.loading({
            message: '处理中...',
            forbidClick: true,
            loadingType: 'spinner',
        });
        postUserVerifyEmail({
            email: form.email
        }).then(res=>{
            const { code, message } = res
            Toast.clear()
            if (code === 200) {
                Toast.success(message)
                tickNowDuration()
            }
            else {
                uni.showToast({
                    title: message,
                    icon: 'none'
                })
            }
        }).catch(err=>{
            Toast.clear()
            uni.showToast({
                title: err.message||'请求失败',
                icon: 'none'
            })
        })
    }
//发送验证码
    const startCountdown = (type='') => {
        if(type==='email'){
            if(!form.email.length){
                uni.showToast({
                    title: '请输入邮箱',
                    icon: 'none'
                })
                return false
            }
            if(!getEmail(form.email)){
                uni.showToast({
                    title: '邮箱格式不正确',
                    icon: 'none'
                })
                return false
            }
            
        }if(type==='code'){
            if(!form.oldPassword.length){
                uni.showToast({
                    title: '请输入密码',
                    icon: 'none'
                })
                return false
            }if(!getRegExPassword(form.oldPassword)){
                uni.showToast({
                    title: '密码格式不正确',
                    icon: 'none'
                })
                return false
            }if(!form.newPassword.length){
                uni.showToast({
                    title: '请输入新密码',
                    icon: 'none'
                })
                return false
            }if(!getRegExPassword(form.newPassword)){
                uni.showToast({
                    title: '新密码格式不正确',
                    icon: 'none'
                })
                return false
            }if(form.newPassword!==form.oldPassword){
                uni.showToast({
                    title: '两次密码不一致',
                    icon: 'none'
                })
                return false
            }
        }
        Toast.loading({
            message: '处理中...',
            forbidClick: true,
            loadingType: 'spinner',
        });
        postUserVerifyEmail({
            email: form.email
        }).then(res=>{
            const { code, message } = res
            Toast.clear()
            if (code === 200) {
                Toast.success(message)
                tickNowDuration()
            }
            else {
                uni.showToast({
                    title: message,
                    icon: 'none'
                })
            }
        }).catch(err=>{
            Toast.clear()
            uni.showToast({
                title: err.message||'请求失败',
                icon: 'none'
            })
        })
       
    };
    const tickNowDuration=()=>{
        const duration = 60; // 倒计时总时长，单位秒
        let startTime = Date.now();
        
        const tick = () => {
            let elapsed = Math.floor((Date.now() - startTime) / 1000);
            form.count = duration - elapsed;
            form.text = form.count > 0 ? `${form.count}秒后重新获取` : '获取验证码';
            form.disabled = form.count > 0;
            
            if (form.count > 0) {
                frameId = requestAnimationFrame(tick);
            } else {
                cancelAnimationFrame(frameId);
                form.disabled = false;
            }
        };
        
        form.disabled = true;
        tick();
    }
    const onClickVerify=()=>{
     const type=options.type
     if(type==="change"){
         postUserVerifyCode1({
             email:form.email,
             code:form.code
         })
     }
    }
    const postUserVerifyCode1=data=>{
        Toast.loading({
            message: '验证中...',
            forbidClick: true,
            loadingType: 'spinner',
        });
        postUserVerifyCode(data).then(res=>{
            const { code, message } = res
            Toast.clear()
            if (code === 200) {
                Toast.success(message)
                tickNowDuration()
            }
            else {
            
            }
        }).catch(e=>{
            Toast.clear()
           
        })
    }
    return {
        form,
        formRef,
        rules,
        onClickSubmit,
        onClickReset,
        startCountdown,
        onClickVerify,
        startCountdown1
    }

}
