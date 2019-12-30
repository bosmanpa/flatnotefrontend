export default function reducer(state = {notes: [], current_user: 0}, action) {
    switch(action.type){
        case "ADD_NOTE":
            return{ ...state, notes: [...state.notes, {title: action.payload.title, body: action.payload.body}] }
        default:
            return state
    }
}
