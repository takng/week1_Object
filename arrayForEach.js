// The second argument/parameter is expected to be a function
function findWaldo(array, found) {
  array.forEach(function(obj, arrayIndex, arr) {
console.log("Found him at index " + arrayIndex + " !");
    if (obj === "Waldo") {
      found(arrayIndex);   // execute callback
    }
  })
}

function actionWhenFound(index) {
  console.log("Found him at index " + index + " !");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

