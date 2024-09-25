// import { hi, sayBye, a, b } from "./script2.js";

import * as script2 from "./script2.js";
import { sayHi } from "./script3.js";

function add(a, b) {
    return a + b;
}

console.log(add(script2.a, script2.b));

script2.hi("John Smith");
script2.sayBye("John Smith");
sayHi("John Smith");

// import { default as User, sayHi } from './user.js';

// import { sayHi } from './user.js';
// import Uesr from './user.js';

