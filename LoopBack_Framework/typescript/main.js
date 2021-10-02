"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'hello world!';
console.log(message);
console.log("hey");
var isBeginner = true;
var total = 0;
var name = 'sachin';
var sentence = "My Name is " + name + "\nI'm Beginner in TS";
console.log(sentence);
//array
var list1 = [1, 2, 3];
var list2 = ["abc", "cdf", "lkm"];
//tuples
var person1 = ["steve", 24];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//any
var randomValue = 10;
randomValue = true;
randomValue = "string";
console.log(randomValue);
//Union of type
var multitype;
multitype = true;
multitype = 12;
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
function fullName(person) {
    console.log(person.firstName + " " + person.lastName + " ");
}
var p = {
    firstName: 'sachin',
    lastName: 'sharma'
};
fullName(p);
function fullNames(person) {
    console.log(person.firstName + " " + person.lastName + " ");
}
fullNames(p);
//class
var Employee = /** @class */ (function () {
    function Employee(name, id) {
        this.employeeName = name;
        this.id = id;
    }
    Employee.prototype.greet = function () {
        console.log("Good Night " + this.employeeName + " your id is=" + this.id + " ");
    };
    return Employee;
}());
var emp1 = new Employee('Sachin', 1);
console.log(emp1);
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName, id) {
        return _super.call(this, managerName, id) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce', 2);
m1.delegateWork();
m1.greet();
