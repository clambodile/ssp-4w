## Overview

The level of precision that science and engineering require is unusual to laypeople.

Since our audience here is beginning programmers, we want to consciously model clarity and precision to them. Being consciously precise in our writing helps to train them to be precise as well.

This need for precision applies to:

* our diction
* our phrasing
* the visual structure of our writing
* the logical structure of our writing

Let's exude that precision everywhere it's appropriate, for their sake (without becoming unapproachable robots, obviously).

## Aim for the tone and clarity of Strunk & White

Read this section of [The Elements of Style](http://www.crockford.com/wrrrld/style3.html).

Emulate it.

The specific guidelines that follow in this document all flow from the spirit of Strunk & White.

## In general, aim for brevity and, above all, CLARITY.

Put yourself in the mind of the reader. Do you find yourself puzzling over what the writer means?  Don't be that writer! :)

Bad:

```
Given an object and a key, "getElementsGreaterThan10AtProperty" should return an array containing all the elements of the array located at the key that are greater than ten.
```

Good:

```
Given an object and a key, the function should find the array located at that key, then return all the array values greater than ten.
```

## We are professionals! Be vigilant about typos.

It looks really sloppy and unprofessional to overlook outright mistakes in our work.

Professional text should not have typos, period.

Bad:

```
Given an object and a key, "getElementsGreaterThan10AtProperty" should find the an array containing all the elements of the array located at the key that are greater than ten.
```

## Use proper punctuation.

Bad:

```
If no elements match, `keep` should return an empty array
```

Good:

```
If no elements match, `keep` should return an empty array.
```

## Begin the problem description with a clear instruction for the learner.  

First, the bad example. Notice how the reader at first does not quite know what s/he is expected to do. S/he just keeps reading, wondering what the actual instruction is.

Bad:

```
digitalSum takes each digit in an integer and sums them together. For
example, 1448 = 1 + 4 + 4 + 8 = 17. If the number is negative,
the first digit should count as negative, for example
-316 = -3 + 1 + 6 = 4.
```

Good:

```
Write a function called "digitalSum" that sums all the digits in the given integer.

Example:
1448 = 1 + 4 + 4 + 8 = 17.

If the number is negative, the first digit should count as negative.

Example:
-316 = -3 + 1 + 6 = 4.

```

## The function name should be clearly called out as a function name. 

Use both text and quotation marks to express this clearly. See below.

Bad:

```
bouncer accepts a person's name and age as arguments, and returns either...
```

Good:

```
Write a function called "bouncer" that accepts a person's name and age as arguments, and returns either...

```


## The function names that we specify in problems should follow our own function naming guidelines.

Our own guidelines specify the following:

*Function names should start with a verb -- in the form "{verbObject}", like "calculateTotal" or "listInventory" etc. That makes it self-describing, telling the code reader at a glance what the function's input and output are as well as a summary of the processing that transforms the former to the latter.*

Bad:

```
function lastElement(array) {
  // your code here
}
```

Good:

```
function getLastElement(array) {
  // your code here
} 
```

## Avoid ambiguity in function names.

Given this problem statement:

```
Write a function that returns the largest number in its passed in array. The array might contain values of a type other than numbers.
```

Consider the following possible function names:

Bad:

```
function largestNumberOfMixedElements {}
```

Good:

```
function largestNumberAmongMixedElements() {}
```

## In general, our own code samples should follow our own coding style guidelines.

Bad:

In the following example, note the lack of the `var` keyword, the non-descriptive single-letter variable names, the last two lines won't even interpret.

```
a = [1, 2];
b = addToFront(input, 3);
a --> [3, 1, 2];
b --> [1, 2]
```

Good:

```
var input = [1, 2];
var output = addToFront(input, 3);
console.log(input); // --> [3, 1, 2];
console.log(output); --> [1, 2]
```


## Use the word "given" to help call out which words in the description represent function parameters.


Bad:

The following example is bad in part because at first glance "takes each digit" suggests that the argument is a digit. But it's not, the argument is the given integer. 

```
Write a function called "digitalSum", that takes each digit in an integer and sums them together.
```

Good:

```
Write a function called "digitalSum" that sums all the digits in the given integer.
```

### Use the word "given" instead of "passed in"

Bad:

```
in its passed in array
```

Good:

```
in the given array
```


### Use the word "given" instead of "takes"

Saying "takes" is okay when talking colloquially about code -- we do talk about how some function takes an argument, sure.

However, our audience here is beginning programmers and we want to demonstrate clarity and precision, including our use of language. Doing so helps to train them to be precise as well. The level of precision that science and engineering require is unusual to laypeople. Let's exude that precision where appropriate, for their sake (without becoming unapproachable robots, obviously).

Bad:

```
"digitalSum" takes each digit in an integer and sums them together.
```

Good:

```
"digitalSum" sums each digit in the given integer.
```

## Provide an example, especially for simpler problems.

Instructions are a lot easier to understand when an example is provided. It's easy for the reader's eyes to glaze over while reading a chunk of problem-description text and lose track of what's being explained.

For the harder problems that come later in the course, we will intentionally avoid providing illustrative examples to force the learner to interpret the instructions as-is. But earlier, simpler problems should generally have an example.

Bad:

```
Write a function called "getFirstElementOfProperty" that return the first element of the array located at the key. 

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.
```

Good:

```
Write a function called "getFirstElementOfProperty" that return the first element of the array located at the key. 

Example:

var obj = {
  array: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'array');
console.log(output); // --> 1

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.
```

## Spell out helpful notes in their own, well-formatted section.

Bad:

```
Given an object and a key, getOddElementsAtProperty should return the an array containing all the odd elements of the array located at the key. If the array is empty, if it contains no odd elements, if the property at the given key is not an array, or, if there is no property at the key, getOddElementsAtProperty should return an empty array.
```
Good:

```
Given an object and a key, getOddElementsAtProperty should return the an array containing all the odd elements of the array located at the key. 

Notes:
* If the array is empty, it should return an empty array.
* If it contains no odd elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.
```


## Spell out resources in their own, well-formatted section.

Good:

```
Write a function called "areaOfACircle" which returns the area of a circle, given its radius.

Reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
```


## Code snippets should use "code block" formatting if the presentation format supports that.

Raw code stored in our Github content repo doesn't render code blocks in descriptions specially, of course, but Repl.it Classroom has its own "code block" formatting facility in its editor toolbar. 

It looks a lot better to use it.

*Note that Repl.it Classroom's description editor has a quirk where if the code block is at the very end of the article there's no way to add more text beyond it.  Add some vertical padding to compensate, so you can add text later if you need to.*





