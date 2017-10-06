import get from '../get'

export const getAdData = () => {
    const result = get('/api/homead');
    return result
}

export const getListData = (city, page) => {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page);
    return result
}