// https://school.programmers.co.kr/learn/courses/30/lessons/120895

// solution 1
const solution = (my_string, num1, num2) => [...my_string].map((n, i) => (i == num1 ? my_string[num2] : i == num2 ? my_string[num1] : n)).join("");

// solution 2
function solution(my_string, num1, num2) {
  my_string = my_string.split(""); // [...my_string]과 결과가 같다.

  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]]; // 구조분해를 활용하여 값 할당F

  return my_string.join("");
}

// result
console.log(solution("hello", 1, 2)); // "hlelo"
