import React from 'react';
class GetContent extends React.Component {
    state={
        content:''
    }
    componentDidMount(){
        this.getContent()
       
       // console.log("state="+this.state.content);

    }
    fetchAll = async () =>{
        const prop = this.props.match
       // console.log(prop.params.contentId)
        const res = await fetch('/api/post/'+prop.params.contentId)
        const body = await res.json()
        return body
    }
    getContent = () =>{
        return this.fetchAll()
        .then(result=>{
            //console.log(result[0])

            this.setState({
                content: result[0]
            })
        })
        .catch(err=>console.log(err));
    }
    
    render() {
        
        return (
            <div className="container">

                <div className="row">
                    <div className="col">
                        <h1 className="text-center"> {this.state.content.title} </h1>
                        <p className="text-center">{this.state.content.category}</p>
                        <hr/>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h6 className="text-center" dangerouslySetInnerHTML={{__html:this.state.content.description}}></h6>
                        <hr/>
                    </div>
                </div>

             
            </div>
        )
    }
}

export default GetContent;