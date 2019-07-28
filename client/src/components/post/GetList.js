import React from 'react';
import Content from './Content';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchBlogs} from '../../actions';
class GetList extends React.Component {

 
    componentDidMount() {
        this.props.fetchBlogs();

    }
   
    render() {
        let contents = this.props.blogs
       // console.log(contents)
        let contentList = "";
        if (contents) {//contents 로딩되면
            if(this.props.choosedCategory !== 'All'){
                contents = contents.filter(content=>{
                    return content.category === this.props.choosedCategory
                })
            }
            
            contentList = contents.map((content) => {
                return (
                    <div key={content._id}  >
                        <Link to={"/post/" + content._id}><Content content={content} /></Link>
                    </div>
                )
            })
        }

        return (
            <div>
                {contentList}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        choosedCategory: state.choosedCategory,
        blogs : state.blogs
    }
}
export default connect(mapStateToProps,{fetchBlogs})(GetList);
