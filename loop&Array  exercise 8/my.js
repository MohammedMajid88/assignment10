const items = [3, 'd' ,'d' ,'d', 2 ,3,'d',3,'d',2,4,9,3];
const uniqueItems = [];

for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (uniqueItems.indexOf(item) === -1) {
        uniqueItems.push(item);
  }   
}
 
alert(uniqueItems);