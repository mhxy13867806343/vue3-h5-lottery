import {ref} from '@vue/composition-api'
export default ()=>{
    const title = ref('')
    const content = ref('')
    const signature = ref('')
    const dynamicType = ref(0) // 动态类型
// 点击发布按钮弹出提示框
    const onClickSendSignature = () => {
        uni.showModal({
            title: '提示',
            content: '是否要发布此签名内容？',
            confirmText: '发布',
            cancelText: '取消',
            success: res=>{
                if (res.confirm) {
                    console.log('用户点击确定');
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
