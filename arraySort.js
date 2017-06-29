var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "alex",     age: 40 },
  { id: 6, name: "alex",     age: 20 },
  { id: 7, name: "alex",     age: 30 }
];

console.log (students);

students.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  if (a.age < b.age) {
    return -1
  }

  if (a.age > b.age) {
    return 1
  }

  return 0;
});

console.log ("************************");
console.log (students);

