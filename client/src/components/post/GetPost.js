import React from 'react';
import List from './getPost/List';
import Category from './getPost/Category';

const GetPost = ({ categories, addPage }) => {
    return (
        <div>

            <Category categories={categories} />
            <List addPage={addPage}/>
        </div>
    )
}

export default GetPost;