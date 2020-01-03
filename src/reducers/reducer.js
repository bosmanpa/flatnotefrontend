export default function reducer(state = {current_user: null, noteShow: null}, action) {
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
        case "NOTE_SHOW":
            return {
                ...state,
                noteShow: action.payload
            }
        case "DELETE_NOTE":
            const notes = state.current_user.notes.filter(note => note.id !== action.payload.id)
            return {
                ...state, 
                current_user: { 
                    ...state.current_user,
                    notes: notes
                }
            }
        case "NOTE_UPDATE":
            const notesArray = state.current_user.notes
            const updateIndex = notesArray.findIndex(note => note.id === action.payload.id)           
            return {
                ...state,
                current_user: {
                    ...state.current_user,
                    notes: [
                        ...notesArray.slice( 0, updateIndex), 
                        action.payload, 
                        ...notesArray.slice( updateIndex+1, notesArray.length)]
                }
            }
        default:
            return state
    }
}
