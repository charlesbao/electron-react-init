import React from 'react';
import GlobalAction from '../actions/GlobalAction'
import GlobalStore,{EventType,Event} from '../stores/GlobalStore'

import {environment} from 'react-router-component'

class MainPage extends React.Component{
    constructor(props){
        super(props);
        GlobalStore.addChangeListener(Event.ACTION_EVENT,this.actionChange)
    }
    actionChange(){
        console.log(GlobalStore.getEventResult(EventType.ACTION_EVENT,EventType.ACTION_EVENT.DATA))
    }
    componentDidMount(){
        GlobalAction.actions('Main')
    }
    componentWillUnmount(){
        GlobalStore.removeWholeListeners()
    }
    render(){
        return (
            <section>
                <div onClick={this.clickHandle.bind(this)}>234</div>
            </section>
        )
    }
    clickHandle(){
        environment.hashEnvironment.navigate('/SecondPage',function(err){})
    }
}

export default MainPage
