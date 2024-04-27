//Implement memorized and caching function


function myMemorize(fn,context){
      const res = {}
      return (
        function (...args){
            var argsCache = JSON.stringify(args);
            if(!res[argsCache]){
             res[argsCache] = fn.call(context || this,...args)
            } 
                return res[argsCache]
        }
      )
}

const clumsyProduct = (num1,num2) => {
    for (let i = 1; i < 1000; i++) {}
    return num1 * num2
}

const memorisedCallback = myMemorize(clumsyProduct)

// console.time("first" )

// console.log(memorisedCallback(9467,7649));

// console.timeEnd("First call")


// console.time("second" )

// console.log(memorisedCallback(9467,7649));

// console.timeEnd("Second call")


// output based question on Event loop


// console.log("a");

// setTimeout(() => {
//     console.log("set"); 
// }, 0);

// Promise.resolve(() => console.log('pro')).then((res) => res())

// console.log("b");


// o/p

// a
// b
//pro
//set

//implement infinite currying


function add(a) {
    return function(b){
        if(b) return add(a+b)
        return a;
    }
}

// console.log(add(5)(2)(4)(5)());


//Implement this code

const calc = {
    total:0,
    add:function (a) {
        this.total =  this.total + a
        return this
    },
    multiply(a){
        this.total =  this.total * a
        return this
    },
    subtract(a){
        this.total =  this.total - a
        return this
    }

}

const result = calc.add(10).multiply(5).subtract(30).add(10)

console.log(result.total);