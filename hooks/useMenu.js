import{uniAppGetCurrentPages} from '@/common/uniappTools'
import{setClipboardData} from '@/common/tools'
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
        }if(item.type==="click"){
            uni.navigateTo({
                url:item.url
            })
        }
    }
    const onItemShareSelect=(item)=>{
        let {route,options,...page}=uniAppGetCurrentPages()
        shareText.value=`${window.location.href}`
        if(item.icon==='link'){
            setClipboardData(shareText.value)
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
