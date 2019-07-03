import React from 'react';
import 'styles/content.css'
const Content = ({ content }) => {
    console.log(content)
    return (
        <div className="content">
            제목: {content.title}
            내용: {content.description}
            분류 : {content.category}

        </div>
    )
}

export default Content;
