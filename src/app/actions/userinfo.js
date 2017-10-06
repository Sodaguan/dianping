import * as Types from "../constants/userinfo"

export const login = (data) => ({
    type: Types.USERINFO_LOGIN,
    data
});

export const updateCityName = (data) => ({
    type: Types.UPDATE_CITYNAME,
    data
});

export const update = (data) => ({
    type: Types.USERINFO_UPDATE,
    data
});