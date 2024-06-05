import request from '@/common/network';
export const postLogin = (data) => {
    return request({
        url: '/v1/h5/user/login',
        data,
        method: 'post'
    })
}
export const postRegistered = (data) => {
    return request({
        url: '/v1/h5/user/registered',
        data,
        method: 'post'
    })
}

export const getUserInfo = (data) => {
    return request({
        url: '/v1/h5/user/info',
        data,
        method: 'post'
    })
}

export const postUserUpdate = (data) => {
    return request({
        url: '/v1/h5/user/update',
        data,
        method: 'post'
    })
}

export const getListSendEmail = (data) => {
    return request({
        url: '/v1/h5/email/list',
        data,
        method: 'get'
    })
}

export const postSendEmail = (data) => {
    return request({
        url: '/v1/h5/email/send',
        data,
        method: 'post'
    })
}

export const postUserLogout = () => {
    return request({
        url: '/v1/h5/user/logout',
        data:{},
        method: 'post'
    })
}
export const postUserBindEmail = (data) => {
    return request({
        url: '/v1/h5/user/bind',
        data,
        method: 'post'
    })
}
export const postUserVerifyEmail = (data) => {
    return request({
        url: '/v1/h5/user/verify',
        data,
        method: 'post'
    })
}
export const postUserResetPwdEmail = (data) => {
    return request({
        url: '/v1/h5/user/resetpwd',
        data,
        method: 'post'
    })
}

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
export const getDesign = (data) => {
    return request({
        url: `/v1/h5/outer/design`,
        data,
        method:'get'
    })
}
export const getCategory = () => {
    return request({
        url: `/v1/h5/outer/ai/tool/category`,
        data:{},
        method:'get'
    })
}
export const getToolaiAiCategory = (data) => {
    return request({
        url: `/v1/h5/outer/toolaiAi`,
        data,
        method:'get'
    })
}
