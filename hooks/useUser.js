import store from "@/store";
import {getRegExPassword} from '@/common/regtools'
import {
    toast
} from "@/uni_modules/uv-ui-tools/libs/function";
import {
    ref,reactive
} from '@vue/composition-api'
export default ()=>{
   
    const formRef=ref(null)
    const model=reactive({
        account: '18072783978',
        password: '123456',
        newpassword: '',
    })
    const isPassword=ref(true)
    const rules=reactive({
        account: [
            { required: true, message: '请输入用户名', trigger: ['blur', 'change']},
        ],
        password: [
            { required: true, message: '请输入密码', trigger: ['blur', 'change']},
            {
                validator: (rule, value, callback) => {
                    if(!getRegExPassword(value)) {
                        callback ( new Error ( '密码强度太弱啦,第我位字符必须以字母或特殊字符开头，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符' ) )
                    }
                    callback()
                },
                trigger: ['blur', 'change']
            }
        ],
        newpassword: [
            { required: true, message: '请输入新密码', trigger: ['blur', 'change']},
            {
                validator: (rule, value, callback) => {
                    if(!getRegExPassword(value)) {
                        callback ( new Error ( '密码强度太弱啦,第我位字符必须以字母或特殊字符开头，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符' ) )
                    }
                    if(value!== model.password) {
                        callback ( new Error ( '两次密码不一致' ) )
                    }
                    callback()
                },
                trigger: ['blur', 'change']
            }
        ],
    })
    
    const onClickSubmit = () => {
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
    // 提交
    const  submit=(type)=> {
        // 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
        formRef.value.validate().then(res => {
            uni.showToast({
                icon: 'success',
                title: '校验通过'
            })
           
            if(type==='login'){
                // 登录
                onClickSubmit()
            }else if(type==='register'){
                // 注册
                alert('注册成功')
            }
            
        }).catch(errors => {
            uni.showToast({
                icon: 'error',
                title: type==='login'?'登录失败':'注册失败'
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
