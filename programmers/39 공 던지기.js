// https://school.programmers.co.kr/learn/courses/30/lessons/120843

// solution 1
const solution = (numbers, k) => numbers[(k * 2 - 1) % numbers.length != 0 ? ((k * 2 - 1) % numbers.length) - 1 : numbers.length - 1]; // 계산식 때문에 생긴 오차로 인해, 케이스가 하나 더 추가된 경우

// solution 2
function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length]; // 맞는 계산식F
}

// result
console.log(solution([1, 2, 3], 2)); // 3
