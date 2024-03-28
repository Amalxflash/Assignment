// Write a JavaScript program to find the most frequent item of an array

var arr1 = [3, 5, 5, 2, 6, 2, 2, 6];

var mf = 1;
var m = 0;
var item;

for (var i=0; i < arr1.length; i++){
    for(j=1; j < arr1.length; j++){
        if(arr1[i] == arr1[j])
        m++;
    if(mf<m){
        mf = m;
        item = arr1[i];
    }
    }
    m=0;
}
console.log("Most frequent item is "+ item + "("+mf+ " times)");

