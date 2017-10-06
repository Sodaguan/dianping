import 'whatwg-fetch'

const get = (url) => {
    const result = fetch(url, {
        //固定参数
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    return result;
}

export default get