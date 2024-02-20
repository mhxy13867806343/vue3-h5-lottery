import {reactive,ref} from '@vue/composition-api'
export default (opt)=>{
    const {cbList}=opt
    const status=reactive({
        keyword:'',//搜索关键字
        list:[],//列表
        page:1,//当前页
        pageSize:10,//每页数量
        total:0,//总数量
        status: 'loadmore',
        loadingText: '努力加载中',
        loadmoreText: '轻轻上拉',
        nomoreText: '实在没有了',
        active:0,//当前选中
    })
    
    const onClickSearch=async (value)=>{
        status.keyword=value;
        await getClear({
            keyword:status.keyword
        })
    }
    //上拉下载更多
    const  loadMore=async(params={})=>{
        status.page++;
        await getList(params);
    }
    //清空列表
    const  getClear=async(params={})=>{
        status.page=1;
        status.list=[];
        status.total=0;
        await getList(params);
    }
    //获取列表
    const  getList=async(params={})=>{
        status.status='loading'
        const data={
            page:status.page,
            pageSize:status.pageSize,
            ...params
        }
        try{
            const {total,result}=await cbList(data)
            status.total=total;
            if(Array.isArray(result)||Array.isArray(result.records)){
                const result1=result.records||result;
                
                if(result1.length){
                    status.list=[...status.list,...result1]
                    if(status.total>=status.list.length){
                        status.status='nomore'
                    }else{
                        status.status='loadmore'
                    }
                }else{
                    status.status='nomore'
                }
            }
        }catch ( e ){
            status.status = 'nomore';
        }
    }
    return {
        status,
        loadMore,
        getClear,
        getList,
    }
}
