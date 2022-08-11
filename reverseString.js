//array style


function reverseArray(str){
    let newString = [];
    for(let i = str.length-1; i >=0; i--){
        // console.log(i)
        newString.push(str[i]);
    }
    return newString;
}

console.log(reverseArray('hello'))

//string style

function reverseString(str){
    let newString = '';
    for(let i = str.length-1; i >=0; i--){
        // console.log(i)
        newString = newString + str[i];
    }
    return newString;
}

console.log(reverseString('hello'))