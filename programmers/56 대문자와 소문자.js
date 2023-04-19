// https://school.programmers.co.kr/learn/courses/30/lessons/120893

// solution 1
const solution = (my_string) =>
  my_string
    .split("")
    .map((n) => (n == n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()))
    .join("");

// solution 2
function solution(my_string) {
  return Array.from(my_string)
    .map((t) => {
      return t[t.charCodeAt() < 91 ? "toLowerCase" : "toUpperCase"](); // charCodeAt(index)는 index에 해당하는 문자의 유니코드 값을 반환한다.
    })
    .join("");
}

// result
console.log(solution("cccCCC")); // "CCCccc"
