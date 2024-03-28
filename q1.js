// Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 

function isPrime(n) {
    if (n <=1){
        return false;
    }
    for(let i=2; i < n; i++){
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function isFirstElement(arr){
    if (arr.length === 0){
        console.log("Array is empty");
        return false;
    }
    const firstElement = arr[0];
    if (isPrime(firstElement)) {
        console.log("The first element",firstElement,"is prime.");
        return true;
    } else {
        console.log("The first element",firstElement,"is not prime.")
        return false;
        
    }   
}

const array = [2, 11, 45, 48];
isFirstElement(array);

