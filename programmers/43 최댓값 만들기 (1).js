// https://school.programmers.co.kr/learn/courses/30/lessons/120847

// solution 1
const solution = (numbers) =>
  numbers
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, cur) => {
      return acc * cur;
    }, 1);

// solution 2
function solution(numbers) {
  let [a, b] = numbers.sort((a, b) => b - a);
  return a * b;
}

// result
console.log(solution([0, 31, 24, 10, 1, 9])); // 744
