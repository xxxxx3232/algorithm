// https://school.programmers.co.kr/learn/courses/30/lessons/120888

// solution 1
const solution = (my_string) => [...new Set(my_string)].join("");

// solution 2
var solution = (s) => [...s].filter((c, i) => s.indexOf(c) == i).join("");

// result
console.log(solution("people")); // "peol"
