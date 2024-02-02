const getPrimeNumbers = (arr) =>{
    let primeNumberArr = [];

    for(let i=0; i<arr.length; i++){
        let temp = [];
        for(let fact=1; fact<=arr[i]; fact++){
            if(arr[i]%fact == 0){
                temp.push(fact);
            }
        }

        if(temp.length <= 2) primeNumberArr.push(arr[i]);
    }

    return primeNumberArr;
}

const arr = [1,2,3,4,5,6,9,10,21,33,7,13,11,23];

console.log(getPrimeNumbers(arr));