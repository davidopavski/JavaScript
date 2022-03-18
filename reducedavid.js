let sum=[{x:1], {x:2}, {x:3}, reduce(function(previousValue, currentValue){
    return previousValue + currentValue.x
}, initialValue;
console.log(sum);
array = [1,2,3,5]
(4) [1, 2, 3, 5]
array.reduce(function(prosli, sadasnji){
                    return prosli+sadasnji;
},0);
11
let initialValue = 0;
undefined
let sum=[{x:1], {x:2}, {x:3}, reduce(function(previousValue, currentValue){
    return previousValue + currentValue.x
}, initialValue;
console.log(sum);
VM867:1 Uncaught SyntaxError: Unexpected token ']'
let sum=[{x:1], {x:2}, {x:3}].reduce(function(previousValue, currentValue){
    return previousValue + currentValue.x
}, initialValue;
console.log(sum);
VM891:1 Uncaught SyntaxError: Unexpected token ']'
let sum=[{x:1}, {x:2}, {x:3}].reduce(function(previousValue, currentValue){
    return previousValue + currentValue.x
}, initialValue;
console.log(sum);
VM902:3 Uncaught SyntaxError: missing ) after argument list
let sum=[{x:1}, {x:2}, {x:3}].reduce(function(previousValue, currentValue){
    return previousValue + currentValue.x
}), initialValue;
console.log(sum);
VM912:4 [object Object]23