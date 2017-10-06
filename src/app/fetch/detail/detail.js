import get from "../get"

export const getInfoData = (id) => {
    const result = get("/api/detail/info/" + id);
    return result

};
export const getCommentData = (page, id) => {
    const result = get("/api/detail/comment/" + page + "/" + id);
    return result

};