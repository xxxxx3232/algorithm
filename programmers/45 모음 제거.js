// https://school.programmers.co.kr/learn/courses/30/lessons/120849

// solution 1
const solution = (my_string) => my_string.replace(/[aeiou]/g, "");

// solution 2
function solution(my_string) {
  return Array.from(my_string)
    .filter((t) => !["a", "e", "i", "o", "u"].includes(t))
    .join("");
}

// result
console.log(solution("bus")); // "bs"
