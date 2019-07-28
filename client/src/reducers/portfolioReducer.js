export default (state=[],action) =>{
    switch(action.type){
        case "FETCH_PORTFOLIOS":
            return action.payload;
        default :
            return state;
    }
}