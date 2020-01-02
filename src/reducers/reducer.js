export default function reducer(state = {current_user: null, showNote: null}, action) {
    switch(action.type){
        case "USER_LOGIN":
            return{...state, current_user: action.payload}
        case "NEW_NOTE":
            return {
                ...state, 
                current_user: { 
                    ...state.current_user,
                    notes: [...state.current_user.notes, action.payload]
                }
            }
        case "SHOW_NOTE":
            return {
                ...state,
                showNote: action.payload
            }
        default:
            return state
    }
}
