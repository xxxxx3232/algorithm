// https://school.programmers.co.kr/learn/courses/30/lessons/120850

// solution 1
const solution = (my_string) =>
  my_string
    .replace(/[a-z]/g, "")
    .split("")
    .map((n) => ~~n)
    .sort((a, b) => a - b);

// solution 2
function solution(my_string) {
  return my_string
    .match(/\d/g) // 정규식으로 전역 검색 후 배열로 반환
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}

// result
console.log(solution("hi12392")); // [1, 2, 2, 3, 9]
