const arr = [
  "Web Developer",
  "Refocus",
  "Web Developer",
  "Web Developer",
  "Refocus",
  "Awesome",
];

const count = arr.reduce((accumulator, value) => {
  return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
}, {});

console.log(count);
