// let a = [];
// let b= [];
// compare memory location
// console.log(a == b); //false
// console.log(a===b); // false

//2

// let a =[];
// let b= a;

// same memory location

// console.log(a == b);//true
// console.log(a===b); //true

//3

// let a = [20];
// let b = [20];
// // compare only value not memory location
// console.log(a[0] == b[0]); // true
// console.log(a[0] === b[0]); // true

//4

// let z = [1,2,3,4]

// let a = {name:"anil"}

// console.log(...z);//1 2  3 4


//5

// console.log(typeof NaN); // number


//6

// let data = 10 - -10
// console.log(data); //20


//7

// const set = new Set([1,1,2,3,4])


// console.log(set); // Set(4) {1,2,3,4}


//8

// let data = {name:"Anil"}

// console.log(delete data.name); // true

// console.log(data); // {}



//9

// const data = {name:"Anil"}


// console.log(delete data); // false


//10

// const data = ["hellow","hi","bye"]

// const [y] = data

// console.log(y); // hellow


//11

// const data = ["peter","anil","sam"]

// const [,y] = data // how to get second

// console.log(y); // anil


//12

// const data = {name:"anil",age:29,skill:"35"}
 
// const {name} = data // getting name without using . operator

// console.log(name) // anil


//13

// let data = {name:"anil",age:29}

// let info = {city:"noid",mail:"a@gmail.com"}

//merge 2 objects
 
// console.log({...data,...info});//{ name: 'anil', age: 29, city: 'noid', mail: 'a@gmail.com' }


//14


// let data = {name:"anil",age:29}

// let info = {city:"noid",mail:"a@gmail.com"}

// data = {data, ...info}

// console.log(data);//{ data: { name: 'anil', age: 29 }, city: 'noid', mail: 'a@gmail.com' }

//15

// let data = {name:"anil",age:29,skill:"hello"}

// let info = {city:"noid",mail:"a@gmail.com",skill:"world"}

// data = {...data,...info}

// console.log(data); 
// {
//     name: 'anil',
//     age: 29,
//     skill: 'world',
//     city: 'noid',
//     mail: 'a@gmail.com'
//   }

//16

// const name = "anil"

// console.log(name()); // TypeError: name is not a function


//17

// const result = false || {} || null

// console.log(result); // {}

//18

// const result = false || null || ''


// console.log(result); // nothing is true returns last value means empty string


//19

// const result = [] || 0 || true

// console.log(result); // []


//20

// console.log(Promise.resolve(5)) // Promise {5}

//21

// console.log("heardemoji" === "heardemoji"); // true


//22

// JSON.parse() // A
 
// what this method will do 
// A. parses JSON to javascript value
// B. parses a javascript object  to JSON
// C . parses any javascript value to JSON
// D. parses JSON to a javascript object only

//23

// let name = 'anil';
// function getName(){
//     console.log(name);
//     let name='bhavana'
// }

// console.log(getName()); 
// ReferenceError: Cannot access 'name' before initialization


//24

// let name = 'bhavana'

// function getName(){
//     console.log(name);
// }

// console.log(getName()); // bhavana

//25

// console.log(`${(x=>x) ("I love ")} to program`); // I love  to program


//26


// function sumValues(x,y,z){
//     return x+y+z
// }

//A. sumValues([...1,2,3])

//B. sumValues([...[1,2,3]])

//c. sumValues(...[1,2,3]) // Correct answer will give value 6

//D.sumValues([1,2,3])



//27 

// const name="code step by step"

// console.log(!typeof name === 'object'); //false

// console.log(!typeof name === 'string'); //false

//28

// const name =  "subscribe"

// const age = 21

// console.log(isNaN(name)); //true

// console.log(isNaN(age)); //false

//29

//remove first element

// let data = [1,2,3,4]

// data.shift()

// console.log(data); // [2,3,4]

//30

//remove last element

// let data = [1,2,3,4]

// data.pop()

// console.log(data); // [1,2,3]


//31

//check odd or even

// let a = 30

// if(a %2 == 0){
//     console.log("even");
// }
// else {
//     console.log("odd");

// }

//32


// let data = {
//     name:"anil"
// }

// delete data.name

// console.log(data); // {}

//33

// const data = "true"
 
// //convert to boolean false

// console.log(typeof !data); // boolean


//34

// const data = 'true'

// // comvert to boolean true


// console.log(!!data);

//35 diff between map and foreach


// map will return value foreach doesnot return anything



//36

// let data = ["anil","bhavana","sandeep"]

// delete data[1]

// console.log(data);//[ 'anil', <1 empty item>, 'sandeep' ]


//37

// let data = ["anil","bhavana","sandeep"]

// delete data[1]

// console.log(data.length); // 3


//38

// let a = [1,2,3]
// let b = [4,5,6]

// let c = [...a,...b]

// console.log(c); // [1,2,3,4,5,6]


//39

// let a = [1,2,3,4]
// let b = [4,5,6]

// let c = [...a,...b]

// console.log(c); [1,2,3,4,4,5,6]

//40

// let c =  3 ** 3

// console.log(c); //27


//41

// let a = 2;

// setTimeout(() => {
//      console.log(a); //20
// },0)
// a= 20


//42

// let a = 20;

// let A= 30;

// console.log(A); //30


//43


// let A10 = "20"

// let 10A = "30"


// console.log(10A);

//44

// let a ='like'

// let b = `like`

// console.log(a === b); //true

//45

// let a = 1;
// let c= 2;

// console.log(--c === a); // true

//46

// let a= 1;
// let b = 1;
// let c = 2;

// // breakdown
// // a===b //true
// // true === 1 //false
// console.log(a === b === --c); //false


//47

// console.log(3 *3);
// console.log(3 ** 3);

// console.log(3 *** 3);


//48

// console.log(a); //undefined
// var a;

//49

// console.log(b); // b is not defined


//50

// how to find os name

// navigator.platform
// 'Linux x86_64'


//51

// let for = 100
// SyntaxError: Unexpected token 'for'

//52

// function fruit () {
//     console.log(name);
//     console.log(price);
//     var name = "bhavana"
//     let price = 20
// }

// console.log(fruit()); // undefined //ReferenceError: Cannot access 'price' before initialization


//53

// for(var i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i);   //3 3 3
//     }, 1);
// }

//54

// for(let i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i);   //0 1 2
//     }, 1);
// }

//55

// console.log(+true); // 1
// console.log(typeof +true); // number


//56

// console.log(!"anil"); //false
// console.log(typeof("anil")); //string


//57


// let data = "size"

// const bird ={
//     size:"small"
// }


// console.log(bird[data]);//small
// console.log(bird["size"]); //small
// console.log(bird.size); //small
// console.log(bird.data); // undefined


//58

// let c ={name:"peter"}

// let d;

// d=c;

// c.name= "anil"

// console.log(d.name); // anil

//59


// var x;
// var x = 10;

// console.log(x); //10

//60

// var x;
// let x = 20;
// console.log(x); //  already been declared

//61

// let a =3;
// let b = new Number(3)

// console.log(typeof a , typeof b); // number object

// console.log(a === b); //false

// console.log(a==b); // true

//62

// let name;
// nmae = {}

// console.log(name); // undefined

//63

// function fruit (){
//     console.log("woof!");
// }

// fruit().name = "apple"

// console.log(fruit()); // woof!   TypeError: Cannot set property 'name' of undefined

//64

// function sum (a,b){
//     return a + b
// }

// console.log(sum(1 + '2')); // 12


//65

// let number =0;

// console.log(number++);//0
// console.log(++number);//2
// console.log(number);//2

//66

// function getAge(...args){
//     console.log(typeof args);//object
// }


// getAge(21)

//67

// function getAge(){
//     'use strict'
//     age = 21;
//     console.log(age);//ReferenceError: age is not defined
// }


// getAge()

//68

// const sum  = eval('10*10 + 5')

// console.log(sum);//105


//69 How long cookie_secret accessible

// sessionStorage.setItem("cookie_secret",123) // tab or browser closes


//70 

// const obj = {1:'a',2:"b",3:"c"}

// console.log(obj.hasOwnProperty("1")); //true

// console.log(obj.hasOwnProperty(1)); // true

//71

// const obj = {a:1,b:2,a:3}

// console.log(obj); // {a:3,b:2}

//72

// for(let i=1;i<5;i++){
//     if(i===3) continue;
//     console.log(i); // 1 2 4
// }

//73

// const foo= () => console.log("foo");

// const bar = () => setTimeout(() => console.log("bar"))

// const baz = () => console.log("baz");

// bar();
// foo();
// baz();

// //o/p

// //foo
// //baz
// //bar


// foo(); 
// bar();
// baz();

// o/p:
// foo 
// baz
// bar

//74

{/* <div onclick="console.log(`first div`)">
<div onclick="console.log(`second div`)">
    <button onclick="console.log(`button`)">button</button>
</div>
</div>
o/p:
<!--
button
second div
first div --> */}


//75

// const person = {name:"anil"}

// function sayHi(age){
//  return `${this.name} is ${age}`
// }


// console.log(sayHi.call(person,21)); // anil is 21

//  console.log(sayHi.bind(person,21)); // [Function: bound sayHi]


//76

// function sayHi(){
//      return (() => 0)()
// }

// console.log( typeof sayHi()); // number

//77

// function sayHi(){
//     return () => 0
// }

// console.log( typeof sayHi()); // function

//78

// console.log(typeof typeof 1); //string

// console.log(typeof typeof "a"); // string

//79

// const numbers = [1,2,3];

// numbers[6] = 11 ;

// console.log(numbers);//[ 1, 2, 3, <3 empty items>, 11 ]

//80

// const numbers = [1,2,3];

// numbers[6] = numbers ;

// console.log(numbers);


// 81
// Everything in javascript is either a object or primitive

//82

// console.log(! null); // true

// console.log(!!null); // false

// console.log(!!1); // true

// console.log(!''); // true

// console.log(!!"");//false


//83

// console.log(setInterval(() => {
//    console.log("hi"); 
// }, 1000));

// console.log(setInterval(() => {
//     console.log("hi"); 
//  }, 1000));

//  console.log(setInterval(() => {
//     console.log("hi"); 
//  }, 1000));


//84

// console.log([..."anil"]); ['a','n','i','l']

//85

// Promise.race will give either resolved or rejected value which satisifies first in the given array of promises

// const firstPromise = new Promise((res,rej) => {
//     setTimeout(res,500,"one");
// })

// const secondPromise = new Promise((res,rej) => {
//     setTimeout(res,500,"two");
// })

// Promise.race([firstPromise,secondPromise]).then((res) => console.log(res)) //one 

//86

// let person = {name:"anil"}

// const members = [person]

// person = null


// console.log(members); [{name:"anil"}]


//87

// const person = {
//     name:"peter",
//     age:20
// }

// for (const item in person) {
//    console.log(item); // name age
// }

//88

// let data =  3+4 +"5"

// console.log(typeof data); //string


// console.log( typeof 3 + 4 + '5'); number45

// console.log(typeof (3+4 + '5')); // string


// console.log([] == []); //false


// let data = [1,2,3].map((item) => {
//     if(typeof item === "number") return
//         return item *2
    
// })

// console.log(data);


// (() =>{
//     let x = (y=10)
// })()

// console.log(typeof x); //undefined


// (() =>{
//     let x = y=10
//     let x;
// })()

// console.log(typeof y); //undefined

