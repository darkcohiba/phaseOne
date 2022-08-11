function sumAll(number){
    if (number < 1){
        return number;
    }else {
        return number + sumAll(number-1);
    }
}

console.log(sumAll(10))