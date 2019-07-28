export const chooseCategory = category =>{
    return {
        type:"CATEGORY_CHOOSED",
        payload : category
    }
}

export const fetchHome = () => {
    return async dispatch => {
        const res = await fetch('/api');
        //reducer에게보냄
        res.json()
        .then(result=>{
           // console.log(result);
            dispatch({type: "FETCH_HOME",payload:result})
        })     
    }
}
export const fetchPortfolios = () => {
    return async dispatch => {
        const res = await fetch('/api/portfolio');
        //reducer에게보냄
        res.json()
        .then(result=>{
           // console.log(result);
            dispatch({type: "FETCH_PORTFOLIOS",payload:result.portfolio})
        })     
    }
}

export const fetchBlogs = () => {
    return async dispatch => {
        const res = await fetch('/api/post');
        res.json()
        .then(result=>{
            //console.log(result);
            dispatch({type: "FETCH_BLOGS",payload:result.blogs})
        })     
    }
}

