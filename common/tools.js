export const setClipboardData=(data)=>{
    uni.setClipboardData({
        data,
        success: ()=> {
            uni.showToast({
                title: '链接已复制,快去分享吧',
                icon: 'none'
            })
        },
        fail: ()=> {
            alert('复制失败')
        }
    });
}
