# Coding Style Guide for Reactor Prep 

### What is readability?

Code readability refers to writing code whose purpose is clear and self-explanatory, and whose syntax, layout, and structure are consistent and unsurprising.

Code with lots of inconsistencies requires more mental effort from the code reader, who must parse through random visual differences to determine what differences are actually meaningful. 

Often that confused code reader is **you**.

Confusing yourself and struggling to parse your own code in the context of an interview is Bad News. Don't make things harder for yourself!

Follow these guidelines, and you'll be ok.

## Indentation

When writing any block of code that is logically subordinate, that block should be indented two spaces more than the surrounding lines.

Indent with spaces, not tabs. Do not put any tab characters anywhere in your code. You would do well to stop pressing the tab key entirely.

When a line opens a block, the next line starts 2 spaces further in than the line that opened:

Good:

```
if (condition) {
  action();
}
```

Bad:

```
if (condition) {
action();
}
```

When a line closes a block, that line starts at the same level as the line that opened the block
     
Good:
```
if (condition) {
  action();
}
```

Bad:
```
if (condition) {
  action();
  }
```

No two lines should ever have more or less than 2 spaces difference in their indentation. Any number of mistakes in the above rules could lead to this, but one example would be:

Bad:

```
transmogrify({
  a: {
    b: function(){
    }
}});
```

## Variable declaration

Use a new line for each variable declaration.

Use a new `var` statement for each line you declare a variable on.

Good:

```
var ape;
var bat;
```

Bad:

```
var cat,
    dog
```

Bad:

```
var eel, fly;
```

## Naming

### Variable names

A single descriptive word is best.  "Descriptive" preferably means it's directly describing some noun in the "domain" of your problem. Name your variables after their purpose, not their structure.

Good:

```
var animals = ['cat', 'dog', 'fish'];
```

Bad:

```
var targetInputs = ['cat', 'dog', 'fish'];
```

Bad:

```
var array = ['cat', 'dog', 'fish'];
```

Collections such as arrays and maps should have plural noun variable names.

Good:

```
var animals = ['cat', 'dog', 'fish'];
```

Bad:

```
var animalList = ['cat', 'dog', 'fish'];
```

Bad:

```
var animal = ['cat', 'dog', 'fish'];
```
### Boolean names

Variables that represent boolean values should be named accordingly. Since a boolean either is true or false, typically you prefix the variable name with `is` or `are`.

E.g., `isValid` or `areAvailable`.

Good:

```
var areEqual = true;
```

Bad:

```
var pass = true;
```

### Function names

Function names should start with a verb -- in the form "{verbObject}", like "calculateTotal" or "listInventory" etc. That makes it self-describing, telling the code reader at a glance what the function's input and output are as well as a summary of the processing that transforms the former to the latter.

Bad:

```
var waterBlocks = function() {
  // count how many blocks of water are collected between each tower
}
```

Good:

```
var countWaterBlocks = function() {
  // do stuff 
}
```

Good:

```
var counterWaterBlocksBetweenTowers = function() {
  // do stuff 
}
```

### Capital letters in variable names

* Most people choose to use capitalization of the first letter in their variable names to indicate that they contain a [class](http://en.wikipedia.org/wiki/Class_(computer_science)).
* Optionally, some people use a capital letter only on functions that are written to be run with the keyword `new`.
* Use all-caps for constant variables (ones that will not change throughout the life of your program).

```
// Example of a capitalized class constructor function name.
function Animal() {
}

// Example of an all-caps constant variable name.
const MAX_ITEMS_IN_QUEUE = 100;

```

## Symbols / punctuation

### Don't omit braces (even if you can)

Never omit braces for statement blocks (although they are technically optional).

Good:

```
for (key in object) {
  alert(key);
}
```

Bad:

```
for (key in object)
  alert(key);
```


### Quoting

Prefer single quotes around JavaScript strings, rather than double quotes.

Having a standard of any sort is preferable to a mix-and-match approach, and single quotes allow for easy embedding of HTML, which prefers double quotes around tag attributes.

Good:

```
var dog = 'dog';
var cat = 'cat';
```

Acceptable:

```
var dog = "dog";
var cat = "cat";
```

Bad:

```
var dog = 'dog';
var cat = "cat";
```


### Semicolons

Don't forget semicolons at the end of lines

Good:

```
alert('hi');
```

Bad:
```
alert('hi')
```

Semicolons are not required at the end of statements that include a block--i.e. `if`, `for`, `while`, etc.

Good:

```
if (condition) {
  response();
}
```

Bad:;

```
if (condition) {
  response();
};
```

Misleadingly, a function may be used at the end of a normal assignment statement, and would require a semicolon (even though it looks rather like the end of some statement block).

Good:

```
var greet = function () {
  alert('hi');
};
```

Bad:

```
var greet = function () {
  alert('hi');
}
```

## Operators and keywords

### Use strict comparison operators 
Always use `===` and `!==`, since `==` and `!=` will automatically convert types in ways you're unlikely to expect.

Good:

```
// this comparison evaluates to false, because the number zero is not the same as the empty string.
if (0 === '') {
  alert('looks like they\'re equal');
}
```

Bad:

```
// This comparison evaluates to true, because after type coercion, zero and the empty string are equal.
if (0 == '') {
  alert('looks like they\'re equal');
}
```

### Use of the ternary operator (x ? y : z)

The ternary operator is the form:

```
x ? y : z;
```

It evaluates to `y` if `x` is true, otherwise it evaluates to `z`.

The ternary operator makes for compact code, but it can be hard to read.

Which of the following do you think is easier to read?

Uses ternary:

```
return (actual === expected) ? 'passed' : 'FAILED ['+ testName + '] Expected "'+expected+'",but got '+'"'+actual+'"';
```

Uses simple if-statement:

```
if (actual !== expected) {
  console.log('FAILED ' + testName + ': Expected ' + expected + ', but got ' + actual);
} else {
  console.log('passed');
}
```

Only use the ternary operator if it's extremely clear and short to do so. Don't just use it to be clever.

### Use of the not-operator (!)

The idiom is to keep the not-operator right next to the item it is negating:

Bad:

```
if (! isEqual) {
```

Good:

```
if (!isEqual) {
```

## Flow control

### Switch statements

Avoid use of `switch` statements altogether.

They are prone to error due to missing `break` statements. See [this article](https://ericleads.wordpress.com/2012/12/11/switch-case-considered-harmful/) for more detail.

### Mixing conditionals and returns can make the flow hard to trace

Be careful about mixing conditionals and return statements in the middle of your conditional logic. It can make it hard to keep track of the logical flow.

With this in mind, you have a couple of choices.

#### Option A - no `else` clauses

You can have no "else" clauses, since you're short-circuiting all further processing with the "return" statement anyway.

Bad:

```
if (!text){
  return true;
} else {
  var mySet = new Set();
  // [...]
}
```

It's better to avoid the extra indentation and braces and machinery of the "else" clause and just do this:

Good:

```
if (!text){
  return true;
}

var mySet = new Set();

// [...]
```

#### Option B: No returns in the middle of the flow

You can avoid `return` statements in the middle of the flow. Just maintain one return at the end of the function body.

Good:

```
function isIsogram(text) {
  var isIsogram = false;
  if (!text){
    isIsogram = true;
  } else {
    var mySet = new Set();
    for (var i = 0; i < text.length; i++){
      mySet.add(text.charAt(i).toLowerCase());
    }
    isIsogram = (mySet.size === text.length);
  }
  return isIsogram;
}
```

A variation: you could skip the hassle of manipulating a maybe-redundant "return value" variable and just evaluate a final return value at the end of the function, like this:

Good:

```
function getUniqueCaseInsensitiveCharSet(text) {
  return text.split('').reduce(function(charSet, char) {
    charSet.add(char);
    return charSet;
  }, new Set());
}

function isIsogram(text) {
  var isBlank = (text === '');
  var charSet = getUniqueCaseInsensitiveCharSet(text);
  var isAllUniqueChars = (charSet.size === text.length);
  return isBlank || isAllUniqueChars;
}
```

## Brevity

### Write the least code you can that is still completely clear.

Not as good:

```
function square(n) {
  var squaredN = n * n;
  return squaredN;
}
```

Good:

```
function square(n) {
  return n * n;
}
```

The principle is to write just enough code to be self-describing. The aim is for any reasonable code reader to be able to glance at a given piece of code and understand what it's doing, with no comments, without asking anybody for an explanation, and without having to pore over the surrounding code for clues. 

### Avoid negation

Whenever you find yourself with lots of negation, you might have an opportunity to increase clarity by converting it to positive.

A bit confusing to work out:

```
if(!equalSizes || !equalValues) {

              // negative outcome

} else {

              // positive outcome

}
```

More straightforward: 

```
if(equalSizes && equalValues) {

              // positive outcome

} else {

              // negative outcome

}
```

### Return boolean results directly

Whenever you find yourself returning true or false from within a conditional, you might have an opportunity for brevity.

Verbose:

```
if(charSet.size < text.length) {

  return false;

}

return true;
```

Concise:

```
return charSet.size > text.length;
```


## Spacing

### Code density

* Conserve vertical space by minimizing the number of lines you write. The more concisely your code is written, the more context can be seen in one screen.

Good:

```
function square(n) {
  return n * n;
}

function assertEqual(actual, expected, testName) {
  // compare actual and expected
}
```

Bad:

```
function square(n) {
  return n * n;
}



function assertEqual(actual, expected, testName) {
  // compare actual and expected
}
```

* Conserve line length by minimizing the amount of complexity you put on each line. Long lines are difficult to read. Try to make it easily read in one glance.
  * This goal is in conflict with the line quantity goal, so you must do your best to balance them.

### Padding & additional whitespace

Generally, we don't care where you put extra spaces, provided they are not distracting.

You may use it as padding for visual clarity. If you do though, make sure it's balanced on both sides.

Good:

```
alert('I chose to put no visual padding around this string');
```

Good:

```
alert( 'I chose to put visual padding around this string' );
```

Bad:

```
alert( 'I only put visual padding on one side of this string');
```

You may use it to align two similar lines, but it is not recommended. This pattern usually leads to unnecessary edits of many lines in your code every time you change a variable name.

```
// discouraged:
var firstItem  = getFirst();
var secondItem = getSecond();
```

Put `else` and `else if` statements on the same line as the ending curly brace for the preceding `if` block

Good:

```
if (condition) {
  response();
} else {
  otherResponse();
}
```

Bad:

```
if (condition) {
  response();
}
else {
  otherResponse();
}
```

### Spacing between commas

Bad:

```
assertEqual(Math.pow(3,2),9,'Math.pow squares properly');
```

Good:

```
assertEqual(Math.pow(3, 2), 9, 'Math.pow squares properly');
```

### Spacing around operators

Bad:

```
'Failed ['+testName+']'...
```

Good:

```
'Failed [' + testName + ']'...
```

Bad:

```
if(actual===excepted){
  // action
}else{
  // alternate action
}
```

Good:

```
if (actual === expected) {
  // action
} else {
  // alternate action
}
```

## Code comments

* Code comments are usually less effective than a good variable names and function names.
* Having to write comments suggests that your code structure and naming are not sufficient to convey the "story" (the flow of data and processing) of your code by themselves. That's a bad sign.
* Comments make a file longer and drift out of sync with the code they annotate.
* If you do comment, then comment on the purpose of the code (the "why"), not the mechanics of implementing it (the "how").
* Do not leave stray comments (aka "cruft", or leftover junk) sitting in your code. Just delete unnecessary / outdated / temporary-scaffolding type of comments.

## JavaScript gotchas

### ES6

Knowledge and usage of new Javascript features is impressive. However, in an interview context, complicated machinery is often disallowed. The interviewer mostly wants to see evidence of your logic, and having cool latest-and-greatest machinery can obscure that sometimes. There is also an element of overwhelming yourself. In general, it is best to keep it simple when possible.

Bad:

```
if (actual === expected) {
  consloe.log(`passed`);
} else {
  console.log(`Failed [${testName}] Expected "${expected}", but got "${actual}"`);
}
```

Good:

```
if (actual === expected) {
  console.log('passed');
} else {
  console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
}
```

Bad:

```
var result = array.map((element) => element * 2);
```

Good:

```
var result = array.map(function(element) {
  return element * 2;
});
```

### Avoid for...in

Do not use `for...in` statements with the intent of iterating over a list of numeric keys. Use a for-with-semicolons statement in stead.

Good:

```
var list = ['a', 'b', 'c']
for (var i = 0; i < list.length; i++) {
  alert(list[i]);
}
```

Bad:

```
var list = ['a', 'b', 'c']
for (var i in list) {
  alert(list[i]);
}
```

### Snake vs. Camel Casing

In Javascript, the convention is use 'Camel Casing' when naming variables. This is opposed to the convention called 'Snake Casing', which is used in other programming languages like Ruby.

Good:

```
var camelCased = 'Used in javascript';
```

Bad:

```
var snake_cased = 'Used in other languages';
```

Under certain circumstaces, you will see people use snake-casing for constants in Javascript.

```
const MAX_ITEMS_IN_QUEUE = 100;
```

## Chaining Methods

Chaining methods is a very common occurance in javascript programs, and can increase the modularity of your programs.

### Anonymous Functions

Good:

```
function foo() {
  return numbers.map(function(number) {
    return number + 1;
  }).filter(function(number) {
    return number % 2 === 0;
  })
}
```

Bad:

```
function foo() {
  return numbers.map(function(number) {
                      return number + 1;
  }).filter(function(number) {
                      return number % 2 ===0;
  })
}
```

### Named Functions

Good:

```
function getLaceNameDataForShoes(inventory) {
  return getAllShoes(inventory)
         .filter(isLacedShoe)
         .map(getLaceNameDataForShoe);
}
```

Bad:

```
function getLaceNameDataForShoes(inventory) {
  return getAllShoes(inventory).filter(isLacedShoe).map(getLaceNameDataForShoe);
}
```


