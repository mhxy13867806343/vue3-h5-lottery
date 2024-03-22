export default (props={})=>{
    const refUvQrcode=ref()
    console.log('props',props)
    watch(()=>props.show,(val)=>{
        if(!val){
            nextTick(()=>{
                refUvQrcode.value.make({
                    success: () => {
                        uni.showToast({
                            title: '生成二维码成功',
                            icon: 'none'
                        })
                        props.show=true
                    },
                    fail: err => {
                        uni.showToast({
                            title: '生成二维码失败,请重试',
                            icon: 'none'
                        })
                        refUvQrcode.value.remake({
                            success: () => {
                                uni.showToast({
                                    title: '生成二维码成功',
                                    icon: 'none'
                                })
                            },
                            fail: err => {
                                console.log(err)
                            }
                        });
                    }
                });
            })
        }
    })
    const saveQrCode=()=>{
        refUvQrcode.value.save()
        
        uni.showToast({
            title: '保存成功',
            icon: 'none',
            duration: 1000,
            success:()=>{
                props.show=false
                refUvQrcode.value.hide()
            }
        })
        
    }
    return {
        refUvQrcode,
        saveQrCode
    }
}
