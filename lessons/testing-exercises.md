# Testing

[Slides](https://docs.google.com/presentation/d/1SMFhiRQLSTfXtQiQ65MU9u_m3Jt6liVPuG2eZwWoz8o/edit#slide=id.g1cb5f52775_0_5)

1.  Write a function called `average` that takes an array of numbers as a
    parameter and returns the *average* of those numbers.

    ```
    average([50, 25, 75, 10]); //40
    average([4, 12]); //8
    average([19, 23, 41, 99, 13]) //39
    ```

    After you write your function, you can test it using the above inputs to
    make sure that it behaves correctly.

2.  Write a function called `min` that finds the *smallest* number in an array of
    numbers.

    ```
    min([1, 20, 44, 64, 28]); //1
    min([400, 23, 87, 94, 21, 40]); //21
    min([10]); //10
    ```

    After you write your function, you can test it using the above inputs to
    make sure that it behaves correctly.

3.  Write a function `shortestWord` which returns
    the first *shortest* word from the input string.

    ```
    shortestWord('the wheels on the bus'); //'on'
    shortestWord('she sells sea shells'); //'she'
    shortestWord('one string to rule them all'); //'to'

    ```

    After you write your function, you can test it using the above inputs to
    make sure that it behaves correctly.

4.  Write a function `countCharacters` that, when given a string as an argument,
    returns an object containing counts of the occurrences of each *character* in
    the string.

    ```js
    function countCharacters(s) {
      // ...
    }
    countCharacters("hello"); // => {"h": 1, "e": 1, "l": 2, "o": 1}
    ```

    **HINT:** You will want to make use of the string method `split`. Try
    `\"hello".split("")` at a console to see how it works.

    After you write your function, you can test it using the above inputs to
    make sure that it behaves correctly.

5.  Write a function `select` that accepts two arguments: an object and an
    array. The **array** should contain names of keys that will be *selected* from
    the object:

    ```js
    function select(obj, keys) {
      // ...
    }
    select({a: 1, b: 2, c: 3}, ["a"]); // => {a: 1}
    select({a: 1, b: 2, c: 3}, ["a", "c"]); // => {a: 1, c: 3}
    select({a: 1, b: 2, c: 3}, ["a", "c", "d"]); // => {a: 1, c: 3}
    ```

    After you write your function, you can test it using the above inputs to
    make sure that it behaves correctly.

6.  Write a function called `squareNumericValues` that takes an *object* as a
    parameter and returns an object with all of the numeric values in the object
    squared, *e.g.*

    ```js
    function squareNumericValues(obj) {
      // TODO: Your code here
    }
    squareNumericValues({a: 4, b: 7, c: 2}); // => {a: 16, b: 49, c: 4}
    squareNumericValues({name: "Phuong", age: 25}); // => {name: "Phuong", age: 625}
    ```

    One observation to make when writing this function is that you'll need to
    only square the values that are actually *numbers* -- notice how in the
    second example invocation above (`squareNumericValues({name: "Phuong", age:
    25})`) the value *"Phuong"* is unchanged because its value is a *string*.

    To handle this, you will need to use the `typeof` operator to determine each
    value's type. Enter the following into a console to get an idea of how
    `typeof` works:

    ```js
    typeof 1; // => "number"
    typeof "hello"; // => "string"
    typeof true; // => "boolean"
    ```
    After you write your function, you can test it using the above inputs to
    make sure that it behaves correctly.