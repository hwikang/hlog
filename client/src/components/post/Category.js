import React from 'react';
import {connect} from 'react-redux';
import{chooseCategory} from '../../actions';
const Category = ({categories , chooseCategory}) => {
    
    const categoryList = categories.map((category,index)=>{
        return(
            <li className="nav-item" key={index} onClick={()=>chooseCategory(category)}>
                <p className="nav-link"> {category} </p>
            </li>
        )
    })
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <p className="navbar-brand">Category</p>
                <button className="navbar-toggler" type="buton" data-toggle="collapse" data-target="#categories">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="categories">
                    <ul className="navbar-nav">
                        {categoryList}
                    </ul>
                </div>
            </nav>
        </div>
    )
}
const mapStateToProps = (state) =>{
    console.log(state)
    return {categories:state.categories}
}
export default connect(mapStateToProps,{chooseCategory:chooseCategory})(Category);
