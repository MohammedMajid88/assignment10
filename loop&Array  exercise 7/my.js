const items = [3, 'd' ,'d' ,'d', 2 ,3,'d',3,'d',2,4,9,3];
let item = null;
let largestCount = 1;

for (let i = 0; i < items.length; i++) {
    let count = 0;

    for(j = i; j < items.length; j++) {
      if (items[i] === items[j]) {
          count++;
      } 
    }

    if (count > largestCount) {
        largestCount = count;
        item = items[i];
    }
}
alert(item. largestCount);