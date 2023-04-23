// https://school.programmers.co.kr/learn/courses/30/lessons/120585

// solution 1
const solution = (array, height) => array.filter((n) => n > height).length;

// result
console.log(solution([149, 180, 192, 170], 167)); // 3
