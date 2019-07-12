export const login = (user) =>{
    return {
        type:"LOGIN",
        payload:{
            isLogin : true,
            user:user
        }
    }
}
export const logout = () =>{
    return {
        type:"LOGOUT",
        payload:{
            isLogin:false,
            user:null
        }
    }
}

