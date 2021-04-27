let number = prompt('');

if (isNaN(number) || number === null) {
    number = '0';
  
}

let total = 0;

for (let i = 0; i < number.length; i++) {
   total +=  parseInt(number[i]) ** number.length;
}

if(total === parseInt(number[i])) {
    alert('Narcissistic');
}else {
    alert('Not Narcissistic');
}