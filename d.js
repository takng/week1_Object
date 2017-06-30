var countdownGenerator = function (x) {
  var i = x;
  var list = [];
  return function(){
    while( i > 0 ){
      console.log("T-minus",i ,"...");
         i --;
    }
console.log("Blast Off!");
 console.log("Rockets already gone, bub!");
 console.log("Rockets already gone, bub!");
  }
return ;
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

