import {ref} from '@vue/composition-api'
export default (options)=>{
    const {cbDetails}=options
    const details=ref({})//详情
    const list=ref([])//列表
    const empty=ref(false)//是否为空
    onLoad(async(opt)=>{
        await getDetails(opt.id)
    })
    //获取某条记录
    const  getDetails=async(id)=>{
        try{
            const {result}=await cbDetails(id)
            details.value=result;
        }catch ( e ){
            empty.value=true;
        }
    }
    return {
        details,
        empty,
        list,
    }
}
