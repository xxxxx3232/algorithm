// https://school.programmers.co.kr/learn/courses/30/lessons/147355

// solution 1
function solution(t, p) {
  let result = 0;
  let re = t.match(RegExp(`(?=[0-9]{${p.length}})`, "g")).length;

  for (let i = 0; i < re; i++) {
    +t.slice(i, i + p.length) <= +p ? result++ : null;
  }

  return result;
}

// result
console.log(solution("500220839878", "7"));
// "3141592"	"271"	2
