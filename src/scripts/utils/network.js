export const API_URI = 'https://dev.icebear.me'

const http = ({ url = '', param = {}, ...other } = {}) => {
    wx.showLoading({
        title: '请求中，请耐心等待..'
    });
    let timeStart = Date.now();
    let token = '';
    return new Promise((resolve, reject) => {
        wx.request({
            url: getUrl(url),
            data: param,
            header: {
                'content-type': 'application/json' // 默认值 ,另一种是 "content-type": "application/x-www-form-urlencoded"
            },
            ...other,
            complete: (res) => {
                wx.hideLoading();
                console.log(`耗时${Date.now() - timeStart}`);
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data)
                } else {
                    reject(res)
                }
            }
        })
    })
}

const getUrl = (url) => {
    if (url.indexOf('://') == -1) {
        url = API_URI + url;
    }
    return url
}

// get方法
const _get = (url, param = {}) => {
    return http({
        url,
        param
    })
}

//post方法
const _post = (url, param = {}) => {
    return http({
        url,
        param,
        method: 'post'
    })
}

module.exports = {
    API_URI,
    _get,
    _post
}