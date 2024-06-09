import {postSignatureAdd,getSignatureConnent} from '@/api/outer'
export default ()=>{
    const title = ref('')
    const content = ref('')
    const signature = ref('')
    const oldsignature=ref('')
    const dynamicType = ref(0) // 动态类型
    onMounted(()=>{
        getSignatureConnent().then(res=>{
            signature.value = res.result.content
            oldsignature.value = res.result.content
        })
    })
// 点击发布按钮弹出提示框
    const onClickSendSignature = () => {
        if (oldsignature.value === signature.value) {
            uni.showToast({
                title: '内容未发生改变',
                icon: 'none',
                duration: 2000
            })
            return
        }
        uni.showModal({
            title: '提示',
            content: '是否要发布此签名内容？',
            confirmText: '发布',
            cancelText: '取消',
            success: res=>{
                if (res.confirm) {
                    postSignatureAdd({content:signature.value}).then(res=>{
                        uni.showToast({
                            title: res.message,
                            icon: 'success',
                            duration: 2000
                        })
                        setTimeout(()=>{
                            uni.navigateBack()
                        
                        },1500)
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消');
                }
            }
        });
    }
    return {
        dynamicType,
        title,
        content,
        signature,
        onClickSendSignature
    }
}
