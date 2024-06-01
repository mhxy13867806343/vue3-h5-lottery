import { getEmail,getRegExPassword } from "@/common/regtools";

export default (options={})=>{
    
    let frameId = null;
    const form = reactive({
        emial:'',
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
            { required: true, message: '请输入验证码', trigger: ['blur', 'change']},
        ],
        newPassword: [
            { required: true, message: '请输入新密码', trigger: ['blur', 'change']},
            {
                validator: (rule, value, callback) => {
                    if(!value){
                        callback(new Error('请输入新密码'))
                        return false
                    }
                    if(!getRegExPassword(value)) {
                        callback ( new Error ( '最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符' ) )
                        return  false
                    }
                    if(value!== form.oldPassword) {
                        callback ( new Error ( '两次密码不一致' ) )
                        return  false
                    }
                    callback()
                },
                trigger: ['blur',]
            }
        ],
        oldPassword: [{ required: true, message: '请输入密码', trigger: ['blur', 'change']},
            {
                validator: (rule, value, callback) => {
                    if(!value){
                        callback(new Error('请输入密码'))
                        return false
                    }
                    if(!getRegExPassword(value)) {
                        callback ( new Error ( '最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符' ) )
                        return false
                    }
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
                if(!getEmail(form.emial)){
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
    const onClickSubmit=()=>{
        formRef.value.validate().then(res => {
            console.log('校验通过')
        }).catch(errors => {
            return false
        })
    }
    const onClickReset=()=>{
        formRef.value.resetFields()
        formRef.value.clearValidate()
    }
//发送验证码
    const startCountdown = (type='') => {
        if(type==='email'){
            if(!form.emial.length){
                uni.showToast({
                    title: '请输入邮箱',
                    icon: 'none'
                })
                return false
            }
            if(!getEmail(form.emial)){
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
    };
    const onClickVerify=()=>{
    
    }
    return {
        form,
        formRef,
        rules,
        onClickSubmit,
        onClickReset,
        startCountdown,
        onClickVerify
    }

}
