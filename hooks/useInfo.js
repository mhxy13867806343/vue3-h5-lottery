import { getUserInfo } from "@/api/outer";
import { Dialog } from 'vant';
import store from "@/store";
import { toast } from "@/uni_modules/uv-ui-tools/libs/function";

export default ()=>{
    const data=ref({})
    onShow(()=> {
        if(  store.state.token){
            getUserInfo().then(res=>{
                if(res.code===200){
                    data.value=res.result
                    if(res.result.emailStatus===0){
                        Dialog.confirm({
                                theme: 'round-button',
                                title: '提示',
                                message: '您的邮箱未绑定，是否前往绑定？',
                                showCancelButton: true,
                                confirmButtonText: '前往绑定',
                                cancelButtonText: '暂不绑定',
                                closeOnPopstate:false
                            })
                            .then(() => {
                                // on confirm
                                uni.navigateTo({
                                    url: '/pages/bindEmail/bindEmail'
                                })
                            })
                            .catch(() => {
                                toast('下次再说吧!')
                            });
                        return
                    }
                   
                    store.dispatch('setUserData1',res.result)
                }
                
            }).catch((err=> {
                console.log(err)
            }))
        }else{
           toast('请先登录')
        }
    })
    return {
        data
    }
}
