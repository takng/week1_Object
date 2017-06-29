var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(
function (obj, arrayIndex, array){
console.log("YYYY" + arrayIndex);
console.log("ZZZX" + array[arrayIndex].x);
console.log("ZZZY" + array[arrayIndex].y);
//var a = array[arrayIndex].x;
//var b = array[arrayIndex].y;
var a = obj.x;
var b = obj.y;
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
);

console.log(result);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


