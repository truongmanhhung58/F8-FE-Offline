// Bài 1 
console.log("Bài 1");

var taxiPrice = function(distance) {
    var price = 0
        price1 = 15000 
        price2 = 13500
        price3 = 11000;

    if(distance <= 1) {
        price = price1 * distance;
        return price;
    } else if (distance > 1 && distance <= 5) {
        price = distance* price2;
        return price;
    } else if (distance > 5) {
        if (distance > 120) {
            price = distance * price3 - (distance * price3 * 10) / 100;
            return price;
        }
        price = distance * price3;
        return price;
    } 
};

console.log(taxiPrice(121));

// Bài 2 
console.log("Bài 2");

var electricityBill = function(electricNumber) {
    var price = 0
        price1 = 1678
        price2 = 1734
        price3 = 2014
        price4 = 2536
        price5 = 2834
        price6 = 2927;

    if (electricNumber <= 0) {
        return "chưa dùng đến điện!";
    } else if (electricNumber > 0 && electricNumber <= 50) {
        price = electricNumber * price1;
        return price;
    } else if (electricNumber > 50 && electricNumber <= 100) {
        price = 50 * price1 + (electricNumber - 50) * price2;
        return price;
    } else if (electricNumber > 100 && electricNumber <= 200) {
        price = 50 * price1 + 100 * price2 + (electricNumber - 100) * price3;
        return price;
    } else if  (electricNumber > 200 && electricNumber <= 300) {
        price = 50 * price1 + 100 * price2 + 200 * price3 + (electricNumber - 200) * price4;
        return price;
    } else if (electricNumber > 300 && electricNumber <= 400) {
        price = 50 * price1 + 100 * price2 + 200 * price3 + 300 * price4 + (electricNumber - 300) * price5;
        return price;
    } else {
        price = 50 * price1 + 100 * price2 + 200 * price3 + 300 * price4 + 300 * price5 + (electricNumber - 400) * price6;
        return price;
    }
}

console.log("Số tiền điện phải trả: ", electricityBill(100));

// Bài 3 
console.log("Bài 3");

var S = function(n) {
    var S = 0;
    for(var i = 1; i <= n; i++) {
        S += i*(i+1);
    }
    return S;
}

console.log("S = ", S(11));

// Bài 4
console.log("Bài 4");

var isPrime = function(n) {
    var count = 0;
    if (n < 2) {
        return `${n} không là số nguyên tố`;
    }
    for(var i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0){
            return `${n} không là số nguyên tố`;
        }
    }
    return `${n} là số nguyên tố`;
}

console.log(isPrime(5));

// Bài 5
console.log("Bài 5");

var triangleNumber = function(n) {
    for (var i = 1; i <= n; i++) {
        var count = i * (i +1) / 2 - i + 1;
        let row = "";
        for (var j = 1; j <= i; j++) {
            row += count++;
        }
        console.log(row);
    }
}

triangleNumber(5);

// Bài 6
console.log("Bài 6");

var chess = function() {
    let board = "";
    for(var i = 1; i <= 8; i++) {
        for(var j = 0; j <= 8; j ++){
            if (board.indexOf(i + " " + j) == -1) {
                i % 2 === j % 2 ? (board += "W") : (board += "B");  
              }
        }
        board += "\n";
    }
    console.log(board)
}
chess(); 



// Bài 7
console.log("Bài 7");

var multiplicationTable = function() {
    for(var i = 1; i <= 10; i++) {
        console.log("bảng cửu chương: ", i);
        for (var j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = `, i * j);
        }
    }
}

multiplicationTable();

// Bài 8

console.log("Bài 8");

var Sn = function(n) {
    if (n === 1) {
      return 1;
    }
    return 1/n + Sn(n -1);         
};
  
console.log(Sn(4)); 

