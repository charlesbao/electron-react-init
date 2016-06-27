import {EventEmitter} from 'events';
import assign from 'object-assign';

import Dispatcher from '../actions/Dispatcher';

var _EventStore = {};
var _Event = {
    ACTION_EVENT:'ACTION_EVENT'
};
var _EventType = {
    ACTION_EVENT:{DATA:'data'}
};

var GlobalStore = assign({}, EventEmitter.prototype, {

    emitChange: function(event) {
        this.emit(event);
    },

    addChangeListener: function(event, callback) {
        this.on(event, callback);
    },

    removeWholeListeners: function(){
        this.removeAllListeners()
    },

    setEventResult: function(eventName,result){
        if(!_EventType[eventName])throw "No EventType";
        for(let key in _EventType[eventName]){
            let each = _EventType[eventName][key]
            _EventStore[eventName][each] = result[each]
        }
        this.emitChange(eventName);
    },

    getEventResult: function(eventName,key){
        return _EventStore[eventName][key]
    }

});

GlobalStore.dispatchToken = Dispatcher.register(function(action) {
    GlobalStore.setEventResult(action.type,action.data);
});

export default GlobalStore;
export let Event = _Event;
export let EventType = _EventType;