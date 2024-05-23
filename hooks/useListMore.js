

export default ()=>{
    const offset=ref(0)//偏移量
    const limit=ref(50)//数量
    const list=ref([])
    const isLen=ref(false)
    const isLenMore=ref(false)
    const onClickOffset=(cb)=>{
        if(offset.value===0){
            offset.value=0*limit.value+limit.value
        }else{
            offset.value=offset.value+limit.value
        }
        if(!isLen.value){
            cb()
            isLenMore.value=false
        }else{
            isLenMore.value=true
        }
       
    }
    const onListReset=()=>{
        list.value=[]
    }
    const getGithubSearchUrlMoreCbAjax=(cb,data)=>{
        cb(data).then(res=>{
            list.value=[...list.value,...res] ||[]
           if(!res.length){
               isLen.value=true
           }
        }).catch(e=>{
        
        })
    }
    const onOffsetReset=()=>{
        offset.value=0
        isLenMore.value=false
        isLen.value=false
    }
    return {
        offset,
        limit,
        list,
        onClickOffset,
        isLen,
        isLenMore,
        onListReset,
        onOffsetReset,
        getGithubSearchUrlMoreCbAjax
    }
}
