"use strict";
exports.__esModule = true;
exports.printAllProducts = exports.strJoin = exports.sqrarr = exports.minmax = exports.sqr = exports.add = void 0;
//questopn 1
function add(a) {
    var sum = 0;
    var t = 0;
    while (t != 0) {
        var num = t % 10;
        sum += num;
        t = Math.floor(t / 10);
    }
    return sum;
}
exports.add = add;
//question 2
function sqr(x, y) {
    return Math.pow(x, y);
}
exports.sqr = sqr;
//question 3
function minmax(a) {
    var max = 0;
    var min = 1000;
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var i = a_1[_i];
        if (i > max)
            max = i;
        if (min > i)
            min = i;
    }
    return "maximus is " + max + " minimum is " + min;
}
exports.minmax = minmax;
//question 4
function sqrarr(a) {
    var b = new Array();
    for (var _i = 0, a_2 = a; _i < a_2.length; _i++) {
        var i = a_2[_i];
        var x = i * i;
        b.push(x);
    }
    console.log(b);
}
exports.sqrarr = sqrarr;
//question 5
function strJoin() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var str = [];
    var seperator = arg[0];
    for (var i = 1; i < arguments.length; i++) {
        str[i - 1] = arguments[i];
    }
    var s = str.sort();
    console.log(s.join(seperator));
}
exports.strJoin = strJoin;
//question 6
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.show = function () {
        console.log(this.name + " " + this.price);
    };
    return Product;
}());
function printAllProducts() {
    var products = [new Product("Pen", 10), new Product("Pencil", 12), new Product("Eraser", 5)];
    products.forEach(function (p) {
        p.show();
    });
}
exports.printAllProducts = printAllProducts;
