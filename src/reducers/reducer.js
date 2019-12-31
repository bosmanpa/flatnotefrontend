export default function reducer(state = {notes: [], current_user: []}, action) {
    switch(action.type){
        case "USER_LOGIN":
            return{...state, current_user: action.payload}
        
        case "ADD_NOTE":
            return{ ...state, notes: [...state.notes, {title: action.payload.title, body: action.payload.body, id: action.payload.id}] }
        
        default:
            return state
    }
}
