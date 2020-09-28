# JavaScript Testing(Practice)

### Assignment

<div class="lesson-content__panel" markdown="1">
Write tests for the following functions, and then make the tests pass!

1. `capitalize(string)` takes a string and returns that string with the first character capitalized.

2. `reverseString(string)` takes a string and returns it reversed.

3. A `calculator` object that contains the basic operations: `add`, `subtract`, `divide`, and `multiply`.

4. Caesar Cipher. [Read about it on this website](http://practicalcryptography.com/ciphers/caesar-cipher/)

   1. Don’t forget to test wrapping from `z` to `a`.
   2. Don’t forget to test keeping the same case.
   3. Don't forget to test punctuation!
   4. For this one, you may want to split the final function into a few smaller functions.  One concept of Testing is that you don't need to explicitly test _every_ function you write... Just the public ones.  So in this case you only need tests for the final `caesar()` function.  If it works as expected you can rest assured that your smaller helper functions are doing what they're supposed to.

5. Array Analysis.  Write a function that takes an array of numbers and returns an object with the following properties: `average`, `min`, `max`, and `length`.

   ~~~javascript
   const object = analyze([1,8,3,4,2,6]);

   object == {
     average: 4,
     min: 1,
     max: 8,
     length: 6
   };
   ~~~
</div>
