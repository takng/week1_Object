var countdownGenerator = function (x) {
  var countDown = x;
  return function(){
    if (countDown === 0) {
      console.log("Blast Off!");
      countDown --;
    }
    else if (countDown < 0) {
      console.log("Rockets already gone, bub!");
    } else {
      console.log("T-minus " + countDown + "...");
      countDown --;
    }
    return;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

