var $ = require('jquery');

var WebAPIActions = {
    action: function(value,callback){
        // $.ajax({
        //     url:'',
        //     dataType:'jsonp',
        //     type:'get',
        //     success:function(result){
        //         callback(result)
        //     }
        // })
        let result = value;
        callback(result)
    }
};

export default WebAPIActions

