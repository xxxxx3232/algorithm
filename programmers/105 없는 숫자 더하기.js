// https://school.programmers.co.kr/learn/courses/30/lessons/86051

// solution 1
function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}

// result
console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
// [1,2,3,4,6,7,8,0]	14
