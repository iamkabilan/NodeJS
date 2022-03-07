const _=require("lodash");

const arr=[1,[23,5,[8,3,[32,11,98],4,1]]];
const newarr=_.flattenDeep(arr);
console.log(newarr);