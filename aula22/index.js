/* 
VALORES QUE RETORNAM FALSE NO JS

FALSY
false
0 
'' "" ``
null / undefined
NaN

*/
const a = 0;
const b = null;
const c = false;
const d = 'Leo';
const e = NaN;

console.log(a || b || c || d || e)