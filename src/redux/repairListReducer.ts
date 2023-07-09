import { TRepairList, IAction } from "../types/types";


export const repairListReducer = (state:TRepairList[] | [] = [], action: IAction) => {
    switch (action.type) {
        case 'PUSH_REPAIR': 
            return [...state, action.payload]

        case 'REMOVE_REPAIR':
            return state.filter(item => item.id !== action.payload.id)
 
        case 'EDIT_REPAIR':
            return state.map(item => item.id === action.payload.id ? item = action.payload : item)

        default:
             return state;
    }
}
