


//Print odds 1-20
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}

//Print the sequence
for (var i = 4; i >= -3.5; i = i - 1.5 ) {
    console.log(i)
}

//Sigma
var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum = sum + i;
    console.log(sum)
}

//Factorial
//1*2*3*n....
var num = 1;
var maxNumber = 100000000
for (var i = 1; i <= maxNumber; i++) {
    console.log('THIS IS NUM * i', num*i)
    num = num * i;
    if (num > maxNumber) {
        break;
    }
    console.log(i)
}
