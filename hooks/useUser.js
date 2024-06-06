import store from "@/store";
import {getRegExPassword} from '@/common/regtools'
import {postLogin,postRegistered} from "@/api/outer";
import msgToaster from '@/common/msg'
import {
    toast
} from "@/uni_modules/uv-ui-tools/libs/function";
export default ()=>{
   
    const formRef=ref(null)
    const model=reactive({
        account: '18072783978',
        password: 'aS1234567!@',
        newpassword: 'aS1234567!@',
    })
    const isPassword=ref(true)
    const rules=reactive({
        account: [
            { required: true, message: '请输入用户名', trigger: ['blur', 'change']},
        ],
        password: [
            { required: true, message:msgToaster.pwd, trigger: ['blur', 'change']},
            {
                validator: (rule, value, callback) => {
                    if (!value) {
                        return callback(new Error('请输入密码'))
                    }
                    // if(!getRegExPassword(value)) {
                    //    return  callback ( new Error ( msgToaster.pwd1 ) )
                    // }
                    callback()
                },
                trigger: ['blur', 'change']
            }
        ],
        newpassword: [
            { required: true, message:  msgToaster.pwd, trigger: ['blur', 'change']},
            {
                validator: (rule, value, callback) => {
                    if (!value) {
                        return callback(new Error('请输入密码'))
                    }
                    // if(!getRegExPassword(value)) {
                    //     return callback ( new Error ( msgToaster.pwd1 ) )
                    // }
                    if(value!== model.password) {
                        return callback ( new Error ( msgToaster.pwd2 ) )
                    }
                    callback()
                },
                trigger: ['blur', 'change']
            }
        ],
    })
    
    const onClickSubmit = (type) => {
        const data={
            account : model.account ,
            password : model.password
        }
        if(type==="login"){
            postLogin( data).then(res => {
                if(res.code === 200) {
                    // 登录成功
                    const {token,...user}=res.result
                    store.dispatch('setUserToken', {
                        token,
                        userinfo: {
                           ...user
                        }
                    })
                    setTimeout(() => {
                        uni.reLaunch({
                            url: '/pages/home/home'
                        })
                    }, 1000)
                } else {
                    toast(res.message)
                }
            }).catch(err => {
                toast(err.message)
            })
        }else if(type==="register"){
            postRegistered( data).then(res => {
                if(res.code === 200) {
                    // 注册成功
                    toast(res.message)
                    setTimeout(() => {
                        uni.reLaunch({
                            url: '/pages/login/login'
                        })
                    }, 2000)
                } else {
                    toast(res.message)
                }
            }).catch(err => {
                toast(err.message)
            })
        }
        
      
    }
    // 提交
    const  submit=(type)=> {
        // 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
        formRef.value.validate().then(res => {
            if(type==='login'){
                // 登录
                onClickSubmit(type)
            }else if(type==='register'){
                // 注册
                onClickSubmit(type)
            }
            
        }).catch(errors => {
            uni.showToast({
                title: '请检查输入项',
                icon: 'none',
                duration: 2000
            })
        })
    }
    return {
        formRef,
        model,
        rules,
        submit,
        isPassword
    }
}
