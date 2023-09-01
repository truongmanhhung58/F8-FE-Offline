// Bài 1
console.log("Bài 1");

var arr = [
    {
      id: 1,
      name: "Chuyên mục 1",
      parent: 0,
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      parent: 0,
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      parent: 0,
    },
    {
      id: 4,
      name: "Chuyên mục 2.1",
      parent: 2,
    },
    {
      id: 5,
      name: "Chuyên mục 2.2",
      parent: 2,
    },
    {
      id: 6,
      name: "Chuyên mục 2.3",
      parent: 2,
    },
    {
      id: 7,
      name: "Chuyên mục 3.1",
      parent: 3,
    },
    {
      id: 8,
      name: "Chuyên mục 3.2",
      parent: 3,
    },
    {
      id: 9,
      name: "Chuyên mục 3.3",
      parent: 3,
    },
    {
      id: 10,
      name: "Chuyên mục 2.2.1",
      parent: 5,
    },
    {
      id: 11,
      name: "Chuyên mục 2.2.2",
      parent: 5,
    },
];
  

  
function findChildren(parent) {
    // new array
    // console.log(parentId);
    var childrens = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].parent === parent) {
            var children = {
              id: arr[i].id,
              name: arr[i].name,
            };
            children.children = findChildren(arr[i].id);
        }
        childrens.push(children);
    }
    return childrens;
}

var categories = function() {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].parent === 0) {
            var category = {
                id: arr[i].id,
                name: arr[i].name,
        };
        category.children = findChildren(arr[i].id);
        newArr.push(category);
        }
    }
    return newArr;
}

  
console.log(categories());


// Bài 2
console.log("Bài 2");

var arr = [1, 2, 4, 11, 3];

Array.prototype.reduce2 = function(prev, value) {
  var i = 0;
  if (arguments.length < 2) {
    i = 1;
    value = this[0];
  }
  for (var i = 1; i < this.length; i++) {
    value = prev(value, this[i], i, this)
  }
  return value;
}


var newArr = arr.reduce2(function(prev, value) {
  return prev + value;
});

console.log(newArr);