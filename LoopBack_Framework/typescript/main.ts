export{}
let message = 'hello world!';
console.log(message);
console.log("hey");

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'sachin';
let sentence: string = `My Name is ${name}
I'm Beginner in TS`;

console.log(sentence);

//array
let list1: number[] = [1,2,3];
let list2:Array<string> = ["abc", "cdf", "lkm"];

//tuples
let person1:[string, number] = ["steve", 24];

//enum
enum Color {Red = 5, Green, Blue};
let c: Color = Color.Green;
console.log(c);

//any
let randomValue: any = 10;
randomValue = true;
randomValue = "string"
console.log(randomValue);

//Union of type
let multitype: number | boolean;
multitype = true;
multitype = 12;


function add(num1: number, num2?: number): number{
    if(num2)
     return num1 + num2;
    else
     return num1;
}

function fullName(person:{firstName: string, lastName: string}){
    console.log(`${person.firstName} ${person.lastName} `);
}

let p = {
    firstName: 'sachin',
    lastName: 'sharma'
}
fullName(p);

//interfaces
interface Person {
    firstName: string;
    lastName: string;
}
function fullNames(person: Person){
    console.log(`${person.firstName} ${person.lastName} `);
}
fullNames(p);

//class

class Employee {
    public employeeName: string;
    id: number;
    constructor(name: string, id: number) {
        this.employeeName = name;
        this.id = id;
    }

    greet(){
        console.log(`Good Night ${this.employeeName} your id is=${this.id} `);
    }

}
let emp1 = new Employee('Sachin', 1);
console.log(emp1);
console.log(emp1.employeeName);

emp1.greet();


class Manager extends Employee{
    constructor(managerName: string, id: number) {
        super(managerName, id);
    }
    delegateWork(){
        console.log(`Manager delegating tasks`)
    }
}
let m1 = new Manager('Bruce', 2);
m1.delegateWork();
m1.greet();


