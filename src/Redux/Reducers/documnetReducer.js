import * as actionTpyes from "../actionTypes";
import initialstate from "../initialstate.json";
export default function documentReducer(state = initialstate.document, action) {
    switch (action.type) {
        case actionTpyes.SET_SKIN: return action.payload;
        case actionTpyes.UPDATE_SKIN: return {
            id: state.id,
            skinCd: action.payload,
        }
        default: return state;
    }
}