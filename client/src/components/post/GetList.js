import React from 'react';
import Content from './Content';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
class GetList extends React.Component {

    state = {
        list: ''
        
    }
    componentDidMount() {
        this.getList()
            .then(data => {
                //console.log(data.blogs);
                this.setState({
                    list: data.blogs
                })
            })

    }
    getList = async () => {
        const res = await fetch('/api/post', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const body = await res.json();
        return body;
    }

    render() {
        // console.log(this.props)

        let contents = this.state.list
        console.log(contents)
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
    return {choosedCategory: state.choosedCategory}
}
export default connect(mapStateToProps)(GetList);
