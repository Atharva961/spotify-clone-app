export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE AFTER FINISHED DEVELOPING.....
    token: "BQCySOqPOEPU7eDXWuGqyiMyLCwEzXUpirq6vQjfw7289rW40AYjmrs0BxOfg9WI4CuH2cnEUuzNZFmKgE0goAvG8lBh4Iemesa67-Xw6aDxTa2EIuW7mX9rL0HD4AJGD4IjZk7kaVx6_4Un7__0Lje0pf6UdRR2A5KaVI3Ld_xJEH-XjnkVa4Re4107blwTnRmd0kSvil6-LKuIF-HVbw"
}

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type){
        case 'SET_USER':
            return{
                ...state, 
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer;