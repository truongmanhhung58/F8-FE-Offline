// Bài 1

console.log("Bài 1");

var a = 10
    b = 15;

a = a + b;
b = a - b;
a = a - b;

console.log(`a = ${a}, b = ${b}`);

// Bài 2
console.log("Bài 2");

var S = 0;

S = 10 + 20 + Math.pow(5,10) / 2;

console.log(`S = ${S}`);

// Bài 3
console.log("Bài 3");

var a = 11
    b = 18
    c = 5
    max = 0;

if (a >= b && a >= c) {
    max = a;
    console.log(`max = a = ${max}`);
} else if (b >= a && b >= c) {
    max = b;
    console.log(`max = b = ${max}`);
} else if (c >= a && c >= b) {
    max = c;
    console.log(`max = c = ${max}`);
}

// Bài 4
console.log("Bài 4");

var a = 4;
    b = -4;

if(a * b > 0) {
    console.log("2 số cùng dấu");
} else if (a * b === 0) {
    console.log("không cùng dấu không trái dấu :v");
} else {
    console.log("2 số trái dấu");
}

// Bài 5
console.log("Bài 5");

var a = 5
    b = 18
    c = 11
    temp = 0;
console.log(`chưa sắp xếp: ${a}, ${b}, ${c}`);



if (a > b) {
    tem = a;
    a = b;
    b = temp;
}

if (a > c) {
    tem = a;
    a = c;
    c = temp;
}

if (b > c) {
    temp = b;
    b = c;
    c = temp;
}

console.log(`sắp xếp: ${a}, ${b}, ${c}`);


