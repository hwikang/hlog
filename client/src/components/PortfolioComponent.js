import React from 'react';

class PortfolioComponent extends React.Component {
    state = {
        post: ""
    }
    componentDidMount() {
        this.callApi()
            .then()
            .catch(err => console.log(err))
    }
    callApi = async () => {
        const res = await fetch('/post');
        console.log(typeof res)
        JSON.parse(res)
        console.log(typeof res)

        const body = res.json();
        return body
    }
    render() {
        return (
            <div>
                PortfolioComponent
            </div>
        )
    }
}

export default PortfolioComponent;
