let array = [-1,-2,-5,-6,-7,0,1,3,4,7,10,12,15,18,20,23,26,27,28,29]
let largest = array.reduce(function(x,y) {
    return (x > y) ? x : y;
    
});
alert(`The largest number is ${(largest)}`)




























// let arr = [-1,-2,-5,-6,-7,0,1,3,4,7,10,12,15,18,20,23,26,27,28,29];

// let number = arr.length;
// let res = 0 

// for (let i = 0; i < arr.length; i = i + 1 ) {
//    alert((Math.max(arr)));

//     // res = res    ;
//     // alert(res);
// }