import request from '@/common/network';
export const getToTchTheFish = (type) => {
    return request({
        url: '/v1/h5/outer/touchTheFish',
        data: {
            type
        }
    })
}
export const getHotlistall = (data) => {
    return request({
        url: '/v1/h5/outer/hotlistall',
        data
    })
}
export const getMobile = (mobile) => {
    return request({
        url: '/v1/h5/outer/mobile',
        data: {
            mobile
        }
    })
}

export const getDelivery = (nu) => {
    return request({
        url: '/v1/h5/outer/delivery',
        data: {
            nu
        }
    })
}
export const getRubbish = (name) => {
    return request({
        url: '/v1/h5/outer/rubbish',
        data: {
            name
        }
    })
}
export const getGasolinePriceQuery = (data) => {
    return request({
        url: '/v1/h5/outer/youjia',
        data,
        method: 'post'
    })
}
export const getBBaikeaike = (msg) => {
    return request({
        url: '/v1/h5/outer/baike',
        data: {
            msg
        }
    })
}
export const getPicture = (page = 1) => {
    return request({
        url: '/v1/h5/outer/picture',
        data: {
            page
        }
    })
}
export const getKfc = (page = 1) => {
    return request({
        url: '/v1/h5/outer/kfc',
        data: {
            page
        }
    })
}
export const getHoliday = (year = new Date().getFullYear()) => {
    return request({
        url: '/v1/h5/outer/holiday',
        data: {
            year
        }
    })
}
export const getWordcloud = (word) => {
    return request({
        url: '/v1/h5/outer/wordcloud',
        data: {
            word
        }
    })
}
export const getCity = (word) => {
    return request({
        url: '/v1/h5/outer/city',
        data: {
            word
        }
    })
}
export const getHotcity = (number = 12) => {
    return request({
        url: '/v1/h5/outer/hotcity',
        data: {
            number
        }
    })
}
export const getCityname = (cityname) => {
    return request({
        url: '/v1/h5/outer/cityname',
        data: {
            cityname
        }
    })
}
export const getZzxjj = () => {
    return request({
        url: '/v1/h5/outer/zzxjj',
        data: {}
    })
}

export const getDouyinMM = () => {
    return request({
        url: '/v1/h5/outer/douyinMM',
        data: {}
    })
}

export const getGirlMM = () => {
    return request({
        url: '/v1/h5/outer/girlMM',
        data: {}
    })
}
export const getGithubSearch = (data) => {
    return request({
        url: '/v1/h5/outer/search/q',
        data
    })
}
export const getGithubSearchMore = (data) => {
    return request({
        url: '/v1/h5/languages/search',
        data
    })
}

export const getGithubSearchUrlMore = (data) => {
    return request({
        url: '/v1/h5/outer/search/github',
        data,
        method:'get'
    })
}
export const getV2exMore = (data) => {
    return request({
        url: '/v1/h5/outer/v2ex',
        data,
        method:'get'
    })
}
export const getIthomeMore = (data) => {
    return request({
        url: '/v1/h5/outer/ithome',
        data,
        method:'get'
    })
}
export const getHotApiMore = (type="baiduhot") => {
    return request({
        url: `/v1/h5/outer/hotApi?type=${type}`,
        data:{},
        method:'get'
    })
}
export const getAuthorinfo = () => {
    return request({
        url: `/v1/authorinfo`,
        data:{},
        method:'get'
    })
}
