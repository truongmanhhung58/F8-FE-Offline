
// Bài 1
console.log("Bài 1");


var arr1 = [3, 4, 1, 5, 11, -7];
var findMaxMin = function() {
    var positionMax = 0,positionMin = 0;
    var max = arr1[1];
    var min = arr1[1];
    for(var i in arr1) {
        if(max <= arr1[i]) {
            max = arr1[i];
            positionMax = i;
        }
    }
    console.log(`Số lớn nhất là: ${max} vị trí số: ${positionMax}`);

    for(var i in arr1) {
        
        if(min >= arr1[i]) {
            min = arr1[i];
            positionMin = i;
        }
    }
    console.log(`Số nhỏ nhất là: ${min} vị trí số: ${positionMin}`);

}   

findMaxMin();


// Bài 2 
console.log("Bài 2");

var arr2 = [1, 6, 8, 9, 3, 5, 11, 15];

var isPrime = function(n) {
    if (n < 2)
        return false;
    for (var i = 2; i <= Math.sqrt(n); i++)
    {
        if (n % i === 0)
        {
            return false;
        }
    }
    return true;
}

var avgPrime = function() {
    var avg = 0, total = 0, count = 0;
    for(var i in arr2) {
        if(isPrime(arr2[i])) {
            count++;
            total += arr2[i];
            avg = total / count;
        }
    }
    return avg;
}

console.log(`tổng các số nguyên tố = ${avgPrime()}`);

// Bài 3 
console.log("Bài 3");

var arr3 = [1,4, 0, 2, 2, 3, 3, 4, 5, 3];

console.log("mảng ban đầu", arr3);

// tìm phần tử trùng nhau trong mảng

var incompatible = function() {
    var newArr3 = [];
    var indexDel = [];
    var delArr3 = [];
    for(var i = 0; i < arr3.length; i++) {
        for(j = i + 1; j < arr3.length; j++) {
            if (arr3[i] === arr3[j]) {
                indexDel = j;
                delArr3[delArr3.length] = indexDel;
            } 
            
        }  
           
    }

    console.log("Vị trí cần xóa", delArr3);
    // xóa các phần tử của arr3 có chỉ số bằng với giá trị của delArr3 
    for (var i in arr3) { 
        var check = 0;
        for (var v of delArr3) {
            if (+i === +v) {
                check = 1;
                break;
            }   
        }
        if (check === 0) {
            newArr3[newArr3.length] = arr3[i];
        }
    }


    // return arr3;
    return newArr3;
}  

// incompatible();
console.log("Mảng lọc trùng", incompatible());

// Bài 4
console.log("Bài 4");

var arr4 = [2, 1, 4, 8, 11, 18, 5];

var insertionSort = function() {

    var i = 0, j = 0;
    for (i = 1; i < arr4.length; i++) {
        var key = arr4[i];
        j = i - 1;
        while (j >= 0 && arr4[j] > key) {
            arr4[j+1] = arr4[j];
            j--;
        }
        arr4[j+1] = key;
    }

    return arr4;
}

arr4[arr4.length] = 9;

console.log(arr4);
console.log(insertionSort());



