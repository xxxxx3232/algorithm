// https://school.programmers.co.kr/learn/courses/30/lessons/120583

// solution 1
const solution = (array, n) => (array.includes(n) ? array.filter((num) => num == n).length : 0);

// solution 2
function solution(array, n) {
  return array.filter((v) => v === n).length;
}

// result
console.log(solution([1, 1, 2, 3, 44, 445], 1)); // 2
