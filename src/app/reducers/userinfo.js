import * as Types from '../constants/userinfo'

const initialState = {};

const userinfo = (state = initialState, action) => {
    switch (action.type) {
        // 登录
        case Types.USERINFO_LOGIN :
            return action.data;

        // 修改城市
        case Types.UPDATE_CITYNAME :
            return action.data;

        case Types.USERINFO_UPDATE:
            return action.data;


        default:
            return state
    }
};
export default userinfo