import React from 'react';
import List from './List';
import Category from './Category';

const GetPost = ({ categories, changePage }) => {
    return (
        <div>

            <Category categories={categories} />
            <List changePage={changePage} />
        </div>
    )
}

export default GetPost;