# This lesson has slides and exercises for "Filter", "Reduce", and "Reduce Optional"

# Filter

## Lesson

[Filter Slides](https://docs.google.com/presentation/d/16lqFtoGd41QgkclAwS6VeOsvJhZ3qmUT4kJfJ33nXAU/embed?start=false&loop=false&delayms=3000)

## Exercises

```js
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}
```

### Basic Requirements

Use `filter` to write the following functions:

1. Write a function called `evens` that takes an array of **numbers** as a
   parameter, and returns **an array of only the even numbers** in the parameter.

2. Write a function called `multiplesOfThree` that takes an array of **numbers** as a
   parameter, and returns an array of only the numbers that are multiples of
   three.

3. Write a function called `positives` that takes an array of **numbers** as a
   parameter, and returns an array of only the numbers that are positive.

4. Write a function called `evenLength` that takes an array of **strings** and
   returns an array of only the strings with an even length.

### More Practice

1. Use `filter` to write the following functions:
   - `odds`: Accepts an array of numbers, and returns the *odd* ones.
   - `negatives`: Like `positives`, but with negatives!
   - `largerThanSix`: given an array of numbers, returns those larger than 6.

2. Using `filter`, write a function `startsWithChar` that accepts two parameters:
   an array of strings, and a character (*e.g.* "a"), and returns an array of
   only the strings that start with that character:

   ```js
   function startsWithChar(strings, character) {
     // ...
   }
   var words = "the quick brown fox jumps over the lazy dog".split(" ");
   startsWithChar(words, "q"); // => ["quick"]
   startsWithChar(words, "t"); // => ["the", "the"]
   ```

3. Extend the `filter` function to pass the *index* of each element to the
   predicate; then, complete the following:

   Write a function called `evenIndexedEvenLengths` (yeah, a bit of a mouthful)
   that accepts an array of strings as a parameter, and returns only the strings
   that are found at an even index that *also* have an even length, *e.g.*:

   ```js
   function evenIndexedEvenLengths(strings) {
     // TODO: your code here
   }
   evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]);
   // => ["lion", "doge"]
   evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]);
   // => ["purple", "yellow"]
   ```

   **HINT:** You'll need to ensure that your version of `filter` also passes
   each elements' *index* (or *key* in the case of objects) to the predicate.

4. Write a version of `filter` that works on arrays **and** objects; then, use
   your updated version of `filter` to filter an object with values of mixed
   types to an object with *only* numeric values. You should be able to use your
   modified version of `filter` as follows:

   ```js
   filter({a: 1, b: "dog", c: true}, function(value) {
     return typeof value === "number";
   });
   // => {a: 1}
   ```

   # Reduce

## Lesson
[Reduce Slides](https://docs.google.com/presentation/d/1yu633rF1dKzorxKEw3IiVTTveDR0e9fXMtv4avtftd4/embed?start=false&loop=false&delayms=3000)
## Exercises

```js
function reduce(array, f, start) {
  var acc = start;
  each(array, function(element) {
    acc = f(acc, element);
  });
  return acc;
}
```

### Basic Requirements

1. We've shown that we can write the function `sum` -- which sums an array of
   numbers -- using `reduce` like this (see slides for more):

   ```js
   function sum(numbers) {
     return reduce(numbers, function(total, number) {
       return total + number;
     }, 0);
   }
   ```

   Replace the `???` below to complete the implementation of `product`, that
   returns the *product* of an array of numbers.

   ```js
   function product(numbers) {
     return reduce(???, function(???, number) {
       return ??? * number;
     }, ???);
   }
   ```

2. Rewrite the `averageAge` function from the warmup using `reduce`. The
   function signature and people array are copied below for your convenience:

   ```js
   var people = [
     {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
     {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
     {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
     {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
     {name: {first: "Louis", last: "Reasoner"}, age: 21}
   ];

   function averageAge(people) {
     // First you'll need to compute the sum of all the ages
     // Second, divide the sum by the number of people (people.length)

     // YOUR CODE HERE
   }
   ```

3. The `range` function from yesterday looks like this:

   ```js
   function range(start, end) {
     var acc = [];
     for (var i = start; i < end; i++) {
       acc.push(i);
     }
     return acc;
   }
   ```

   Using `range` and `reduce`, complete the factorial function below that should
   compute the factorial of `n`.

   ```js
   function factorial(n) {
     // YOUR CODE HERE
   }
   ```

   **HINT:** If you cannot think of how to do this, it may help to *first* try
   writing the function using `each`, and then refactor it to use `range`
   & `reduce`.

### More Practice

1. The `sumBy` function from previous lessons can be implemented using `each`
   like this:

   ```js
   function sumBy(numbers, f) {
     var sum = 0;
     each(numbers, function(number) {
       sum = sum + f(number);
     });
     return sum;
   }
   ```

   Rewrite `sumBy` using `reduce`.

2. The `max` function below takes an array of numbers as a parameter, and
   returns the maximum number in the array:

   ```js
   function max(numbers) {
     var max = numbers[0];
     each(numbers, function(number) {
       if (number > max) {
         max = number;
       }
     });
     return max;
   }
   ```

   Rewrite `max` using `reduce`.

3. Write a function called `countOccurrences` that, given a string and a
   character (a string with length one) as parameters, returns the total number
   of times that character occurs in the string. For example:

   ```js
   countOccurrences("hello", "l"); // => 2
   countOccurrences("the", "z"); // => 0
   countOccurrences("hello, world!", "l"); // => 3
   ```

4. In the lecture (see slides) we ran through a function called
   `everyNumberEven` -- write functions like it that do the following:

   + Given an array of numbers, determine if every one of them is **odd**
   + Given an array of numbers, determine if every one of them is **positive**
   + Given an array of strings, determine if all of them have a length greather
     than 3.
   + Given an array of strings, determines if all of them contain the letter "e".

5. Write a function `every` that takes two parameters: an array and a
   *predicate* (a function that returns true or false). `every` should return
   `true` if the predicate returns `true` for every element in the array. You
   should be able to use it to write `everyNumberEven` like this:

   ```js
   function everyNumberEven(numbers) {
     return every(numbers, function(number) {
       return number % 2 === 0;
     });
   }
   ```

   Test that it works by rewriting the functions in exercise (4) above using
   `every`.

### Advanced

1. Let's write a function called `join` that works just like the built-in
   `join`, but using `reduce`! If you're unfamiliar with the built-in version of
   join, this is how it works:

   ```js
   ["the", "quick", "brown", "fox"].join(" "); // => "the quick brown fox"
   ["one", "two", "three"].join(":"); // => "one:two:three"
   ```

   **Part One:** First, write a function called `joinWith` that takes three
   arguments: the string to join onto, the string that will be joined, and a
   separator. That is, it should work like this:

    ```js
   function joinWith(onto, next, separator) {
     // YOUR CODE HERE
   }
   joinWith("the quick", "brown", " "); // => "the quick brown"
   joinWith("one:two", "three", ":"); // => "one:two:three"
   ```

   **Part Two:** Now, using `joinWith` and `reduce`, write `join`:

   ```js
   function join(array, separator) {
     // YOUR CODE HERE
   }
   join(["the", "quick", "brown", "fox"], " "); // => "the quick brown fox"
   join(["one", "two", "three"], ":"); // => "one:two:three"
   ```

2. Uses of `reduce` are not restricted to turning arrays into numbers -- use
   `reduce` to rewrite `map` (instead of using `each`).

3. We previously covered the function `countWords` that worked like this:

   ```js
   function countWords(s) {
     var acc = {};
     var words = s.split(" ");
     for (var i = 0; i < words.length; i = i + 1) {
       var word = words[i];
       if (acc[word] === undefined) {
         acc[word] = 1;
       } else {
         acc[word]++;
       }
     }
     return acc;
   }
   ```

   + Rewrite `countWords` using `reduce`.
   + Write the function `countChars` that works like `countWords`, but counts
     characters instead of words (using `reduce` of course).

     # Improved `reduce`: Optional Starting Point & Optional Parameters

## Lesson
[Reduce Optional Slides](https://docs.google.com/presentation/d/1kt6NI97HrZ4nKrUbXqDI2eHsN7wutuJ2VVjF1T1Rzxs/embed?start=false&loop=false&delayms=3000)

## Exercises

```js
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}
```

### Basic Requirements

1. The `factorial` function can be written using `reduce` and `range`; and
   furthermore, this is a case where the initial value can be omitted. Write
   `factorial` using our updated version of `reduce` and omit the third
   argument.

   **HINT:** Remember that the `factorial` of a number `n` is the *product* of
   all of the numbers from `1` to `n`, and the `range` function (shown below in
   problem 3) produces an array of numbers from `start` to `end`...

2. Use the updated version of `reduce` to write a function `max` that computes
   the maximum number in an array of numbers. Be sure to **not** include the
   third argument (the starting point).

3. The `range` function that we've explored so far looks like this:

   ```js
   function range(start, end) {
     var acc = [];
     for (var i = start; i < end; i++) {
       acc.push(i);
     }
     return acc;
   }
   ```

   Modify `range` so that the `end` parameter is optional, and in the event that
   it is not supplied, `range` computes a range from `0` to `start`.

### Advanced

There is a way to implement `reduce` such that it works on both arrays **and**
objects. You'll likely want to make use of `Object.keys` function.