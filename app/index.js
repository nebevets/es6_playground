// import addToDom from './add_to_dom';
// //import {sub, mult} from './math';
// import * as math from './math';

// addToDom('h1', `52 - 10 = ${math.sub(52,10)}`);
// addToDom('h2', `52 - 10 = ${math.mult(52,10)}`);

import SuperPerson from './person';

const bob = new SuperPerson('Bob', 'invisibility');
bob.greet();

bob.saySuperPower();