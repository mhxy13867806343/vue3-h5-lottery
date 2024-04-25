import request from '@/common/network';
export const getToTchTheFish=(type)=>{
    return request({
        url:'/v1/h5/outer/touchTheFish',
        data:{
            type
        }
    })
}
export const getHotlistall=(data)=>{
    return request( {
        url : '/v1/h5/outer/hotlistall' ,
        data
    })
}
export const getMobile=(mobile)=>{
    return request( {
        url : '/v1/h5/outer/mobile' ,
        data:{
            mobile
        }
    })
}

export const getDelivery=(nu)=>{
    return request( {
        url : '/v1/h5/outer/delivery' ,
        data:{
            nu
        }
    })
}
export const getRubbish=(name)=>{
    return request( {
        url : '/v1/h5/outer/rubbish',
        data:{
            name
        }
    })
}
export const getHotlist=(data)=>{
    return request( {
        url : '/v1/h5/outer/hotlist',
        data
    })
}
export const getGasolinePriceQuery=(data)=>{
    return request( {
        url : '/v1/h5/outer/youjia',
        data,
        method:'post'
    })
}
export const getBBaikeaike=(msg)=>{
    return request( {
        url : '/v1/h5/outer/baike',
        data:{
            msg
        }
    })
}
export const getPicture=(page=1)=>{
    return request( {
        url : '/v1/h5/outer/picture',
        data:{
            page
        }
    })
}
