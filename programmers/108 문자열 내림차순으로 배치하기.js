// https://school.programmers.co.kr/learn/courses/30/lessons/12917

// solution 1
function solution(s) {
  return s.split("").sort().reverse().join("");
}

// result
console.log(solution("Zbcdefg"));
// "Zbcdefg"	"gfedcbZ"
