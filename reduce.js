const arr = [1,2,3,4];

const initialValue = 0;

const finale = array.reduce((prev,current) => prev+current,initialValue);


const sumObj = [{x:1},{x:2},{x:3}].reduce((prev,current) => {
    return prev+current.x;
},0)

console.log(sumObj);