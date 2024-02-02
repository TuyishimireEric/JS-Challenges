const arrayReversing = (arr)=>{
    let reversed = [];

    for(let i=0; i<arr.length; i++){
        reversed.push(arr[arr.length-1-i])
    }

    return reversed; 
}

const arr = [1,2,3,4,5,6];

console.log(arrayReversing(arr))