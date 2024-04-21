import request from '@/common/network';
export const getToTchTheFish=(type)=>{
    return request({
        url:'/v1/h5/outer/touchTheFish',
        data:{
            type
        }
    })
}
