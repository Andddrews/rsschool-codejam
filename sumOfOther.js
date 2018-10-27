function sumOfOther (a) {
let sum = 0;
let sumOf = [];
a.forEach( (x) => sum +=x);

for (let i=0; i< a.length; i++){

sumOf.push(sum-a[i]); 

}
 return sumOf;
}