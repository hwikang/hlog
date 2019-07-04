import React from 'react';
const Category = ({categories}) => {
    console.log(categories)
    const categoryList = categories.map((category,index)=>{
        return(
            <li className="nav-item" key={index}>
                <p className="nav-link"> {category} </p>
            </li>
        )
    })
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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

export default Category;
