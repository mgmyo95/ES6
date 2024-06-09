import { Phone } from "/phone.js";

const obj1 = new Phone("iPhone", "5G");
console.log(obj1);
console.log(obj1.getbrandname());  // iPhone 
console.log(obj1.getphonenetwork());  // 5G 
console.log(obj1.getcolorcode());

// console.log(_brand.get(obj1));	  // iPhone
// console.log(_network.get(obj1));  // 5G 
// console.log(_color.get(obj1)());  // Phone {}

console.log("Hello World");
