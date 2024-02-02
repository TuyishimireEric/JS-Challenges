# JS-Challenges

A. Basic

1. Prime numbers

Write a Javascript function that takes an array of numbers and returns a new array of prime numbers filtered from the old array.

Note: if looping is needed, use only primitive for/while/do-while loop ( forearch, map, etc are not allowed).

2. Palindrome

Write a function that takes a string and returns true/false based on whether it is a palindrome or not (you can use a dictionary to know what a palyndrom is).

3. Array reversing

Write a Javascript function that takes an array of numbers and return a reversed version

4. Inplace Array reversing

Write a Javascript function that takes an array of numbers and return a reversed version. Note: here you are not allowed to use an intermediary array. You need to use the same array passed in the parameter and just reverse its content. Do not use inbuilt functions like reverse(). Just use loops and conditions.

5. Array & Object

1. Write a function that takes a formatted array as a parameter. The array is made of a string of people’s identities in a predefined format,

“first-name second-name, age, gender” . Ex “Patrick wyne, 30, male”

[“Patrick wyne, 30, male”, “lil wyne, 32, male”,“Eric mimi, 21, female”,“Dodos deck, 21,male”,“Alian Dwine, 22, male”,“Patrick wyne, 33, male”,“Patrick wyne, 10,trans”,“Patrick wyne, 40,male”]

From the array, the function returns a nested object of two arrays: one for all females and another for all males.. Each object in the array is object with key, first-name and the corresponding child object (value) is the rest of the info, second name and age

{

females: [Eric: {second-name:mimi, age:21}],

males: [ Patrick: {second-name:wyne, age:30},lil: {second-name:wyne, age:30},Dodos:{second-name: deck, age:21}

}