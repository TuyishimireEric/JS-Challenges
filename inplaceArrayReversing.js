const arrayReversing = (arr)=>{
    for(let i=0; i<arr.length/2; i++){
       let temp;
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }

    return arr; 
}

const arr = [1,2,3,4,5,6];

console.log(arrayReversing(arr))