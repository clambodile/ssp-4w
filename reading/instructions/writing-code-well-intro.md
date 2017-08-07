 # SSP: Writing Code Well

This module's focus isn't just "writing code" that sorta-kinda works, it's "writing **good** code" that you _know_ works.

## The Goal

This module consists of a handful of harder problems that begin to realistically reflect the kinds of problems you are asked in admissions interviews. They also begin to reflect the kinds of problems that come up in the core immersive curriculum.

As you solve these problems, you will learn concepts and techniques that will help you code much more cleanly and professionally.

## What to do

### 1) Read the concepts and techniques of clean coding

Read the following short articles. The first is found in the _Building Blocks Mastery: Reading_ section while the rest are under the _Writing Code Well: Reading_ section.

* Coding styleGuide
* A practical mental model of computer memory
* Functions and reliable systems
* Your code should tell a story
* Outlining and stubs
* Testing, and the value thereof
* Test Driven Development

### 2) Begin coding. First, verify that you meet the style guide!

* Start solving problems! Make sure to start with these four:
  * [evaluation 00] - get tests to pass
  * [evaluation 01] - get tests to pass
  * [testing 01]
    * Self assessment based on reference answers
  * [skeleton 00]
    * Self assessment based on reference answers

**Notes for self evaluation**: 
* A large amount of the feedback that is overlooked during self evaluation has to do with the use of indentation, spacing, semicolons, and variable naming -- all things that are explicitly explained in the `Coding Style Guide`. It may seem like we're nitpicking but it is extremely important practice for you to follow the _Style Guide_. Not doing so during a technical interview can often lead to lots of small bad things happening, none of which are fatal in themselves, but which add up to a slow and unproductive interview performance. We will point out when we see these mistakes. We will not tell you which line you need to fix -- the entire point is to coach you so that you are writing and reviewing your code with a careful, meticulous eye.


## Sample Answer Structures

### Testing

```
function assertTrue(actual, testName) {
  if (actual === true) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected "true", but got "' + actual  + '"';
  }
}

var isValid = true;
assertTrue(isValid, 'should pass when input is true');
```

Please take careful note of the spacing, indentation, and order of the code. Listed at the top is the assertion function you have been asked to create. This is followed by any variables or additional functions that you will need in your tests, followed finally by a call to your unit test that wraps the assertion. 

See the "Terminology note: Assertions are not unit tests!" section of the _Testing_ article which is found under _Writing Code Well: Reading_.

### Skeleton and Problems

```
function sum(numbers) {
  // your code here
}

function average(numbers) {
  // your code here
}

function assertEqual(actual, expected, testName) {
  // this can be any of the assertion functions from this module:
  // assertEqual, assertArraysEqual, assertObjectsEqual, or assertWithinRange
  // feel free to write and use multiple assertion functions if necessary
}

var expectedAverage = average([1, 2, 3, 4, 5]);
var actualAverage = 3;

assertEqual(actualAverage, expectedAverage, 'should calculate the average of an array of numbers');
```

Please take note of the structure of this code. 

1. The code that implements the problem description is at the top.
1. Then assertion helpers such as `areArraysEqual` would come next.
1. You then write your unit tests last.

Each unit test is a block of code that sets up any variables needed to run your test, followed by a call to the relevant assertion helper function.

Each unit test only tests one thing, ideally.

See the "How Do I Write Unit Tests" section of the _Testing_ article which is found under _Writing Code Well: Reading_.

Your final answers should be consistent in their vertical and horizontal spacing, as described in the style guide, indentation should always be 2 spaces, and there should be no stray comments left in your code. 


## Things to keep in mind

* You will need to complete 100% of these Writing Code Well assignments. 
* Problems do not need to completed in any order.

## FAQ

The real challenge in this module is _after_ you get the automated tests working -- making the code really clean.

You'll be able to do this. Just stick with it. Reach out on Slack if you find yourself spinning your wheels too much.


### Is this "open book"?

Yes, you can look up JavaScript syntax. For this purpose, we strongly recommend staying on the Mozilla Developer Network site, which has very reliable information, and not wandering randomly around the entire Internet.


### What happens if I'm really struggling on multiple problems?

Submit a HelpDesk ticket!



