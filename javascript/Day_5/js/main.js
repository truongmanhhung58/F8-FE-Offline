// Bài 1
console.log("Bài 1");

var arrA = [1, 4, 3, 2],
    arrB = [5, 2, 6, 7, 1];


var newArr1 = function() {
    var newArr = [];

    for (var i of arrA) {
        var value1 = 0;
        for (var j of arrB) {
            if (i === j) {
                value1 = i;
                newArr.push(value1);
            }
        }
        
    }
    return newArr
}


console.log(newArr1());

// Bài 2 
console.log("Bài 2");

var arr2 = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
// dùng phương thức flat để làm phẳng chuỗi ban đầu
// console.log(arr2.flat(Infinity)); 
var newArr = [];
var flatten = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        if (Array.isArray(arr[i])) {
            flatten(value);
        } else { 
            newArr.push(value);
        }
    }
    return newArr;
}


console.log(flatten(arr2));



// Bài 3
console.log("Bài 3");

var arr3 = [["a", 1, true], ["b", 2, false]];
var newArr3 = [[], [], []];

newArr3 = arr3.forEach(function(value) {
    value.forEach(function(item) {
        if(typeof item === 'string') {
            newArr3[0].push(item);
        } else if (typeof item === 'number') {
            newArr3[1].push(item);
        } else if (typeof item === 'boolean') {
            newArr3[2].push(item);
        }
        
    });
    console.log(newArr3);
});






