 # Reactor Prep Module 2: Writing Code Well

Welcome to Module 2!

This module's focus isn't just "writing code" that sorta-kinda works, it's "writing **good** code" that you _know_ works.

## The Goal

This module consists of a handful of harder problems that begin to realistically reflect the kinds of problems you are asked in admissions interviews. They also begin to reflect the kinds of problems that come up in the core immersive curriculum.

As you solve these problems, you will learn concepts and techniques that will help you code much more cleanly and professionally.

## What to do

### 1) Read the concepts and techniques of clean coding

Read the following short articles. The first is found in the _Module 1: Reading_ section while the rest are under the _Module 2: Reading_.

* Coding styleGuide
* A practical mental model of computer memory
* Functions and reliable systems
* Your code should tell a story
* Outlining and stubs
* Testing, and the value thereof
* Test Driven Development

### 2) Begin coding. First, verify that you meet the style guide!

* Click [this link](https://repl.it/classroom/invite/vGMiD2) to gain access to the Module 2 exercises.
* After gaining access, close the new window/tab and navigate the problems using the left side bar. 
* __Paid Users:__ At this point in the program, you will receive human feedback on your code. That's right, **your code will be evaluated by staff**. 
  * The _Module 2: Exercises_ start with something titled _Problem List_. Check this page occasionally to see if any of the code we reviewed was sent back and needs you to make changes and re-submit. Here is a short video explaining the workflow for problems in Module 2 that need resubmission.  

  <iframe width="560" height="315" src="https://www.youtube.com/embed/b7NbciD9ct0" frameborder="0" allowfullscreen></iframe>

* Start solving problems! Make sure to start with these four:
  * [evaluation 00] - get tests to pass
  * [evaluation 01] - get tests to pass
  * [testing 01]
    * Self assessment based on reference answers (Free/Paid Users)
    * submit your code for review (**Paid Users**)
  * [skeleton 00]
    * Self assessment based on reference answers (Free/Paid Users)
    * submit your code for review (**Paid Users**)
  * __Paid Users:__ This is a great point to schedule a Study Plan Check-In with your mentor. Just reach out on your private channel.

**Notes for Paid Users**: 
* A large amount of the feedback we give on first submissions have to do with the use of indentation, spacing, semicolons, and variable naming -- all things that are explicitly explained in the `Coding styleGuide`. It may seem like we're nitpicking but it is extremely important practice for you to follow the _styleGuide_. Not doing so during a technical interview can often lead to lots of small bad things happening, none of which are fatal in themselves, but which add up to a slow and unproductive interview performance. We will point out when we see these mistakes. We will not tell you which line you need to fix -- the entire point is to coach you so that you are writing and reviewing your code with a careful, meticulous eye.
  * Once you have completed these four problems, and received confirmation that your code follows the style guide, you may tackle the remaining exercises in any order.
  * Just like in the earlier modules, you need to make the tests pass for some of the problems.
  * For the most part, your submissions must pass human code review.
  * Any submission that doesn't pass review will be sent back to you for revision.
  * Don't worry, a moderate amount of back-and-forth between a code submitter and a code reviewer  is perfectly normal. Even when you are in out in industry working as a professional programmer, you will find that this is how we all work together to keep code quality high.


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

See the "Terminology note: Assertions are not unit tests!" section of the _Testing_ article which is found under _Module 2: Content_.

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

See the "How Do I Write Unit Tests" section of the _Testing_ article which is found under _Module 2: Content_.

Your final answers should be consistent in their vertical and horizontal spacing, as described in the style guide, indentation should always be 2 spaces, and there should be no stray comments left in your code. 


## Things to keep in mind

* You will need to complete 100% of these Module 2 assignments. 
* Problems do not need to completed in any order.
* If you want to talk about your problem, reach out to the community in the `#mod2_write_code_well` channel
* If you are pretty sure that a test or a problem is broken, please feel free to let us know in Slack, via the `#mod2_write_code_well` channel. 


## FAQ

### Am I allowed to "Submit Anyway" if I am stuck?

No, do not submit code that doesn't even pass the automated tests.  The real challenge in this module is _after_ you get the automated tests working -- making the code really clean.

You'll be able to do this. Just stick with it. Reach out on Slack if you find yourself spinning your wheels too much.


### Is this "open book"?

Yes, you can look up JavaScript syntax. For this purpose, we strongly recommend staying on the Mozilla Developer Network site, which has very reliable information, and not wandering randomly around the entire Internet.


### What happens if I'm really struggling on multiple problems?

Reach out on Slack, via the `#mod2_write_code_well` channel, and let's examine your situation. `**Paid Users:** You may also reach out to us on your private, dedicated support channel.`



