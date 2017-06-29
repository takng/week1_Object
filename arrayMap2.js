var words = ["ground", "control", "to", "major", "tom"];

function map2(array, fun) {
  var answer = [];

  for (var i = 0; i < array.length; i++) {
    answer.push(fun(array[i]));
  }

  return answer;
}

var result = map2( words, function (word){ return word.length; });

console.log(words);

console.log(result);

