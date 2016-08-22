//demo js

var x = 1;

// for (var index = 0; index < 10; index++) {
//     console.log(index);
    
// }


var object = (function(params) {
    var x =1;
    var y= 2;
    return{
        X : x
    }
})


var newobject = object();
console.log(newobject.X);


