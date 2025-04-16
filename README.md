# JS-Array-Test
✅ A collection of beginner-friendly JavaScript exercises focused on arrays, objects, maps, and string manipulation – Day 1.

"JS code challenges focusing on real-world problems using arrays, objects, and other data structures with methods like .map(), .reduce(), and Map." "This set of problems covers practical tasks such as summing elements, sorting objects, merging objects, and analyzing word frequencies in a string."

Problem 1:

Task: Calculate the sum of elements in each inner array and return the array with the largest sum.

Example:
Input: [[1, 2, 3], [4, 5], [10, 20]]
Output: [30]
Use: .map() and .reduce()

Problem 2:

Task: Find the sum of elements at even indexes in a given array.

Example:
Input: [5, 10, 15, 20, 25, 30]
Output: 45
Use: .reduce() or .filter()

Problem 3:

Task: Sort an object by its keys in alphabetical order.

Example:
Input: { name: "Ali", age: 25, job: "Developer", city: "Tashkent" }
Output: ["age", "city", "job", "name"]
Use: Object.keys() and .sort()

Problem 4:

Task: Merge two objects, and if they share a key, take the value from the second object.

Example:
Input: { a: 1, b: 2, c: 3 } and { b: 4, d: 5 }
Output: { a: 1, b: 4, c: 3, d: 5 }
Use: ...spread

Problem 5:

Task: Count how many times each element appears in a given array and return a Map.

Example:
Input: ["apple", "banana", "apple", "orange", "banana", "apple"]
Output: {"apple": 3, "banana": 2, "orange": 1}
Use: Map and .forEach()

Problem 6:

Task: Find all keys in a given Map whose values are greater than 5.

Example:
Input: new Map([["a", 3], ["b", 7], ["c", 1], ["d", 10]])
Output: ["b", "d"]
Use: for...of or .forEach()

Problem 7:

Task: Find the largest element in a given Set.

Example:
Input: new Set([12, 45, 7, 22, 5, 89])
Output: 89
Use: ...spread and Math.max()

Problem 8 — Frequency of Words (String):

Task: Calculate the frequency of each word in a given string and return a Map.

Example:
Input: "hello world hello everyone in this world"
Output: {"hello": 2, "world": 2, "everyone": 1, "in": 1, "this": 1}
Use: .split() and Map













