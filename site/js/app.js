sayHello();
sayHi();

// Immediately Invoked Function Expression
// IIFE
(function (name) {
  console.log("Hello " + name);
})("Coursera!");




// var object={
// 	depth:4,
// 	func:function(){
// 		console.log(this)
// 	}
// }
// console.log(object)
// object.func()


var object=function(){
	var func=function(){
		console.log(this);
	}
	object.func=func;
	func();
}

object();
object.func();
console.log(object);