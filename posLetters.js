function count(str) {
  var noSpaces = str.split(" ").join("");
  var result = {};
  var alpha = '';

  for (var i = 0; i < noSpaces.length; i++)  {
    alpha = noSpaces[i];
//console.log(alpha);
//console.log(result[alpha]);
    if (result[alpha] === undefined) {
      result[alpha] = i.toString();
    } else {
      result[alpha] = (result[alpha]) + ',' + i.toString();
    }
  }

console.log(Object.keys(result));
  return result;
}

var myArgs = process.argv.slice(2);

console.log(count(myArgs[0]));
