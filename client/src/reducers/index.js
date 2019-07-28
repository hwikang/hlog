import { combineReducers } from "redux";
import homeReducer from './homeReducer';
import blogReducer from './blogReducer';
import portfolioReducer from "./portfolioReducer";
const categoriesReducer = () =>{
    //console.log("category reducer")

    return ['All','JS', 'React.js', 'Node.js', 'CS', '일상'];
}
const choosedCategoryReducer = (choosed='All' , action) =>{
   // console.log(choosed);
    //console.log("choose category reducer")
    if(action.type==="CATEGORY_CHOOSED"){
        return action.payload
    }
    return choosed

}            //이전 로그인 상태
const loginReducer = (isLogin=null, action) =>{
    if(action.type==="LOGIN"){
        return action.payload
    }
    return isLogin
}
//{isLogin:false,user:null}
export default combineReducers({
    categories:categoriesReducer,
    choosedCategory : choosedCategoryReducer,
    isLogin : loginReducer,
    home :homeReducer,
    blogs: blogReducer,    
    portfolios: portfolioReducer
    
})

