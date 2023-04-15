// https://school.programmers.co.kr/learn/courses/30/lessons/120844

// solution 1
function solution(numbers, direction) {
  direction == "right" ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
  return numbers;
}

// solution 2
function solution(numbers, direction) {
  return direction === "right" ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)] : [...numbers.slice(1), numbers[0]];
}

// result
console.log(solution([1, 2, 3], "left")); // [ 2, 3, 1 ]
