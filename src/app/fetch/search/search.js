import get from "../get"

const getSearchData = (page, cityName, category, keyword) => {
    const keywordStr = keyword ? "/" + keyword : "";
    const result = get("/api/search/" + page + "/" + cityName + "/" + category + "/" + keywordStr);
    return result
}

export default getSearchData