import AppDispatcher from'./Dispatcher';
import WebAPI from './WebAPI'
import {EventType} from '../stores/GlobalStore'


var GlobalAction = {
    actions: function(value){
        WebAPI.action(value,function(result){
            AppDispatcher.dispatch({
                type: EventType.ACTION_EVENT,
                data: result
            });
        })
    }
};

export default GlobalAction