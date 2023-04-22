// https://school.programmers.co.kr/learn/courses/30/lessons/120905

// solution 1
function solution(n, numlist) {
  return numlist.filter((num) => num % n == 0);
}

// result
console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])); // [6, 9, 12]
