import React from 'react';
import Content from './Content';

class List extends React.Component {

    state = {
        list: ''
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
    addClick = (e) => {

    }

    render() {
        // console.log(this.props)

        const contents = this.state.list
        console.log(contents)
        let contentList = "";
        if (contents) {
            contentList = contents.map((content, index) => {
                return <Content key={index} content={content} />
            })
        }

        return (
            <div>
                <button onClick={this.props.changePage} className="btn btn-primary">Add new post </button>
                {contentList}
            </div>
        )
    }
}

export default List;
