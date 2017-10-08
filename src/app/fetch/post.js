import 'whatwg-fetch'

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
const obj2params = (obj) => {
    let result = '';

    for (let item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    //去掉第一个&符
    if (result) {
        result = result.slice(1);
    }

    return result;
}

// 发送 post 请求
const post = (url, paramsObj) => {
    const result = fetch(url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        body: obj2params(paramsObj)
    });

    return result;
}
export default post