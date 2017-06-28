function count(str) {
  var noSpaces = str.split(" ").join("");
  var result = {};
  var alpha = '';

  for (var i=0; i < noSpaces.length; i++)  {
    alpha = noSpaces[i];
//console.log(alpha);
//console.log(result[alpha]);
    result[alpha] = (result[alpha] || 0) + 1;
  }

  return result;
}

var myArgs = process.argv.slice(2);

console.log(count(myArgs[0]));
