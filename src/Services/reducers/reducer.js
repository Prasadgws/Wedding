


const iState = {
    Menu_Render:"Login",
    Email:"",
    Role:""
}
const reducer = (state=iState,action) =>{
    console.warn("=======ACTION IN REDUCER======"+action)
    if(action.type === "CHANGE_MENU")
    return{
        ...state,
        Menu_Render:action.payload.Logout,
        Email:action.payload.Email,
        Role:action.payload.Role
    }
    return state
}


export default reducer;