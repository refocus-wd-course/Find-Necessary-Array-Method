const arr = [
  "Web Developer",
  "Refocus",
  "Web Developer",
  "Web Developer",
  "Refocus",
  "Awesome",
];

var count = {};

arr.forEach((value) => {
  count = { ...count, [value]: (count[value] || 0) + 1 };
});

console.log(count);
