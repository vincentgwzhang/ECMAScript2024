function greet1() {
    console.log(`Hello, ${this.name}!`);
}
function greet2(greeting) {
    console.log(`${greeting}, ${this.name}!`);
}
function greet3(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'Alice' };



greet1.bind(person)();                 //用来创建一个新函数，并永久绑定 this 和可选的预置参数。
greet2.call(person, 'Hello');          //call 用来立即调用函数，同时指定 this 和独立的参数。
greet3.apply(person, ['Hello', '!']);  //apply用来立即调用函数，但参数是通过数组传递的
