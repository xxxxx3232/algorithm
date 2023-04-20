// https://school.programmers.co.kr/learn/courses/30/lessons/120899

// solution 1
const solution = (array) => [Math.max(...array), array.indexOf(Math.max(...array))];

// result
console.log(solution([1, 8, 3])); // [8, 1]
