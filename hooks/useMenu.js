import{uniAppGetCurrentPages} from '@/common/uniappTools'
export default (options={})=>{
    const showPopover=ref(false)// 弹窗
    const qRCodeShow=ref(false) // 二维码弹窗
    const showShare=ref(false) // 分享弹窗
    const shareText=ref('')
    onShow(()=>{
        console.log('onUnload')
        if(options.type==='person'){
            
            showPopover.value=false
        }
       
        
    })
    const onItemSelect=(item)=>{
        if(item.type==="share-click"){
            showShare.value=true
        }
    }
    const onItemShareSelect=(item)=>{
        let {route,options,...page}=uniAppGetCurrentPages()
        shareText.value=`${window.location.href}`
        if(item.icon==='link'){
            uni.setClipboardData({
                data: shareText.value,
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
        }if(item.icon==='qrcode'){
            qRCodeShow.value=true
        }
        setTimeout(()=>{
            showShare.value=false
        },
            1500)
    }
    return {
        shareText,
        qRCodeShow,
        showPopover,
        showShare,
        onItemSelect,
        onItemShareSelect
    }
}
