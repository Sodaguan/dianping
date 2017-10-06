import * as Types from "../constants/store"

const initialState = [];

const store = (state = initialState, action) => {
    switch (action.type) {
        case Types.STORE_UPDATE:
            return action.data;
        case Types.STORE_ADD:
            state.unshift(action.data);
            return state;
        case Types.STORE_RM:
            return state.filter(item => {
                if (item.id !== action.data.id) {
                    return item

                }
            });
        default :
            return state
    }
}
export default store