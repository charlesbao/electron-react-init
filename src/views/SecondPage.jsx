import React from 'react';
import GlobalAction from '../actions/GlobalAction'
import GlobalStore,{EventType} from '../stores/GlobalStore'

import {environment} from 'react-router-component'

class MainPage extends React.Component{
    constructor(props){
        super(props);
        GlobalStore.addChangeListener(ActionEvents.ACTION_EVENT,this.actionChange)
    }
    actionChange(){
        console.log(GlobalStore.getEventResult(EventType.ACTION_EVENT,EventType.ACTION_EVENT.DATA))
    }
    componentDidMount(){
        GlobalAction.actions('second')
    }
    componentWillUnmount(){
        GlobalStore.removeWholeListeners()
    }
    render(){
        return (
            <section>
                <div onClick={this.clickHandle.bind(this)}>123</div>
            </section>
        )
    }
    clickHandle(){
        environment.hashEnvironment.navigate('/',{transitionName:'pop-right'},function(err){})
    }
}

export default MainPage
