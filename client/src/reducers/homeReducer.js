export default (state=[],action) =>{
    switch(action.type){
        case "FETCH_HOME":
            return action.payload;
        default :
            return state;
    }
}