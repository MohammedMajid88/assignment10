let arr = [-1,-2,-5,-6,-7,0,1,3,4,7,10,12,15,18,20,23,26,27,28,29];

let number = arr.length;
let res = 0 
for (let i = 0; i < arr.length; i++ ) {    
    res = res  +  arr[i];
   
}
alert(`The average is ${(res = res / arr.length)}`)