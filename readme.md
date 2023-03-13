<h1 style="text-align: center;">Find the Necessary Array Method 💻🖥️</h1>

# Introduction

<p> Hello students 👋 In this repository we will check if your assignment passed the requirement. </p>

## Requirements:

<p>Find the most used item on the array using array methods.</p>

<i>Expeceted Outcome</i>

```txt
{ Web Developer: 3, Refocus: 2, Awesome: 1 }
```

---

## Steps:

### 1. We need to structure first the array.

```javascript
const arr = [
  "Web Developer",
  "Refocus",
  "Web Developer",
  "Web Developer",
  "Refocus",
  "Awesome",
];
```

### There are a lot of ways to solve this problem, here are some array method that you can use to achieve the expected outcome.

<i>Reduce Method</i>

- First we will create a constant variable named "count" with the value of the array "arr" with the method reduce. Inside this method we will create a callback and put two parameters named "accumulator" and "value".
- After the callback we will put the initial value of the reduce which is the "{}".
- The "accumulator" parameter will hold "{}" in the beginning because it is the initial value then the last returned value of the function.
- The "value" parameter will hold the current element being executed.

Now that you understand the parameters, let's understand how to show the expected output.

- Since our initial value is an "{}" or an empty object then we can use the "...accumulator". This means that the previous properties will be added to our object. Always remember that reduce method is somewhat looping, so this means that the first iteration of the reduce method our "accumulator" parameter is holding the initial value which is an empty object. Then when the second loops run the "accumulator" holds the previous element of the array which will now the value of our "...accumulator" and so on and so forth.
- Always remember too that object can only hold one property name at a time. So for example if you have a property named "myName: 'Tony Stark" and you want to add another propery with the same name, it will just update the value of that property and not the name.
- So with that being said the `[value]` which ever is the current value of the iteration will be added as key on our object. The value of that property will be either 0 or the value of the previous element. The logic is if the previous and current value are the same it will use that value and simply add 1.

```javascript
...
const count = arr.reduce((accumulator, value) => {
  return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
}, {});

console.log(count);
...
```

<i>forEach Method</i>

This method has the same logic with the reduce method but with different approach.

- We need to create a variable named "count" with the value of "{}" or empty object. This will be our initial value.
- Then we will use the "forEach" method to loop all the elements with the callback and parameter named "value".
- Then we update our "count" variable with same logic on our reduce method.

```javascript
...
var count = {};

arr.forEach((value) => {
  count = { ...count, [value]: (count[value] || 0) + 1 };
});

console.log(count);
...
```

---

# The End

<p> Don't worry if some of your approach is not the same on this repository, it doesn't mean that it is wrong. This is just a guide for you on how to make it. </p>
Happy Coding! 🧑‍💻👩‍💻
