import React from 'react';
import Content from './Content';
import {Link} from 'react-router-dom';
class List extends React.Component {

    state = {
        list: '',
        view: false
    }
    componentDidMount() {
        this.getList()
            .then(data => {
                console.log(data);
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

        const contents = this.state.list
        console.log(contents)
        let contentList = "";
        if (contents) {
            contentList = contents.map((content) => {
                return (
                    <div key={content._id}  >
                        <Link to={"/post/"+content._id}><Content content={content} /></Link>
                    </div>
                )
            })
        }

        return (
            <div>
                <button onClick={this.props.addPage} className="btn btn-primary">Add new post </button>
                <div>
                    {contentList}
                </div>
            </div>
        )
    }
}

export default List;
