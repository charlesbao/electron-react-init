import React from 'react';
import './example.less';

class App extends React.Component{
    state = {
        text:'hello world'
    };
    constructor(props){
        super(props);
    }
    render(){
        return <div onClick={this.clickHandle}>{this.state.text}</div>
    }
    clickHandle = ()=>{
        let world = 'world';
        this.setState({text:`
        hello the ${world}`
        });

        let data = `from=1`;
        fetch(`http://wofan.miaoxueshu.com/admin/all?${data}`).then((resp)=>{
            return resp.json()
        }).then(data =>{
            console.log(data)
        }).catch(err =>{
            console.log(err)
        })
        console.log('ok')

    }
}

export default App
