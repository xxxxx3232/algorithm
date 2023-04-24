// https://school.programmers.co.kr/learn/courses/30/lessons/120862

// solution 1
function solution(numbers) {
  let [a, b] = numbers.sort((a, b) => b - a);
  let [c, d] = numbers.sort((a, b) => b - a).reverse();
  return Math.max(a * b, c * d);
}

// solution 2
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2]); // Math.max()를 활용하여 음수의 곱과 양수의 곱 중에 큰 수를 반환한다. 여기서, numbers의 배열 마지막을 탐색하기 위해 numbers.length - 1을 인덱스로 활용하였다.
}

// result
console.log(solution([1, 2, -3, 4, -5])); // 15
