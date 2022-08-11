function fizzBuzz(n){
    for (var i = 1; i <= n; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
}


let array = [];

function fizzBuzz(n){
    for (var i = 1; i <= n; i++) {
        if (i % 15 == 0) array.push("FizzBuzz");
        else if (i % 3 == 0) array.push("Fizz");
        else if (i % 5 == 0) array.push("Buzz");
        else array.push(i);
    }
    console.log(array)
}

fizzBuzz(30)