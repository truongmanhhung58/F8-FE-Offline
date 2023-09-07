// Bài 1 
console.log("bài 1");

var sum = function(...args) {
    var total = 0;
    for(var value of args) {
        if(typeof value !== "number") {
            return "Không thực hiện được phép tính";
        }
        total += value;
    }
    return total;
}

console.log(`Total = ${sum(1, 2, 3 ,5)}`);

// Bài 2
console.log("bài 2");

Number.prototype.getCurrency = function(unit) {

    return this.toLocaleString() + unit;
}

var a = 22000000;
console.log(a.getCurrency(" vnđ"));

// Bài 3
console.log("Bài 3");

Array.prototype.push2 = function(value) {
    this[this.length] = value;
    return this.length;
}

var arr = [1, 2, "Hùng"];
arr.push2(3);
console.log(arr);

// Bài 4
console.log("Bài 4");

Array.prototype.filter2 = function(func) {
    var newArr = [];
    for (var i in this) {
        if(func(this[i], i, this)) {
            newArr.push2(this[i]);
        }
    }
    return newArr;
}

var arr = [2, 3, 4, 21];
var arr2 = arr.filter2(function(value) {
    return value % 3 === 0;
})

console.log(arr2);

// Bài 5

var categories = [
    {
      id: 1,
      name: "Chuyên mục 1",
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      children: [
        {
          id: 4,
          name: "Chuyên mục 2.1",
        },
        {
          id: 5,
          name: "Chuyên mục 2.2",
          children: [
            {
              id: 10,
              name: "Chuyên mục 2.2.1",
            },
            {
              id: 11,
              name: "Chuyên mục 2.2.2",
            },
            {
              id: 12,
              name: "Chuyên mục 2.2.3",
            },
          ],
        },
        {
          id: 6,
          name: "Chuyên mục 2.3",
        },
      ],
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      children: [
        {
          id: 7,
          name: "Chuyên mục 3.1",
        },
        {
          id: 8,
          name: "Chuyên mục 3.2",
        },
        {
          id: 9,
          name: "Chuyên mục 3.3",
        },
      ],
    },
]


var select = document.getElementById("select-category");


function addOptions(options, prefix) {
  for (var values of options) {
    var option = document.createElement("option");
    option.value = values.id;
    option.textContent = prefix + values.name;
    select.appendChild(option);
    if (values.children) {
      addOptions(values.children, prefix + " --| ");
    }
  }
}

addOptions(categories, "");







