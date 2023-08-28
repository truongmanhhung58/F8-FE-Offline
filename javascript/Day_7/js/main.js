// Bài 1 
console.log("Bài 1");

var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}

var getError = function(field) {
    let message = ""
    if(field === "name") {
        message = errors.name.required
    }else if(field === "email") {
        message = errors.email.email
    }else if(field === "password") {
        message = errors.password.required
    }

    console.log(message)
}

getError('email')

// Bài 2
console.log("bài 2");

var customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" }
  ];
  
var createCustomers = function(customers) {
    customers.sort(function (cusAge1, cusAge2) {
        return cusAge1.age - cusAge2.age;
    });
    customers.forEach(function (customer) {
        var nameCut = customer.name.split(" ");

        var shortName = nameCut[0] + " " + nameCut[nameCut.length - 1];
        customer.shortName = shortName;
    });
    return customers;
}

console.log(createCustomers(customers));
  

// Bài 3
console.log("Bài 3");

var users = [];

var handleRegister = function(name, password, email) {
    if (!name || !password || !email ) {
        return "Vui lòng điền đầy đủ thông tin.";
    }
    var newUser = {
        name: name,
        password: password,
        email: email,
        role: "user",
    };

    users.push(newUser);
}

var login = function(name, password) {
    var user = users.find(function (user) {
        return user.name === name && user.password === password;
    });

    if (user) {
        console.log("Thông tin người dùng:");
        console.log(user);
    } else {
        console.log("Thông tin đăng nhập không hợp lệ.");
    }
}
var dataRegister = handleRegister(
    "Nguyen Van A",
    "1234567",
    "nguyenvana@email.com"
);
var dataRegister = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
);

var dataLogin = login("Nguyen Van B","1234567");

console.log("Tài khoản đã đăng kí", users); 




