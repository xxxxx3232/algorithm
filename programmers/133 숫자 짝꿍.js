// https://school.programmers.co.kr/learn/courses/30/lessons/131128

// solution 1
function solution(X, Y) {
  let x = X.split("");
  let y = Y.split("");
  let answer = "";
  let obj = {};

  x = x.sort((a, b) => b - a);

  y.forEach((n) => {
    if (obj[n] == undefined) {
      obj[n] = 1;
    } else {
      obj[n]++;
    }
  });

  x.forEach((n) => {
    if (obj[n] !== undefined && obj[n] !== 0) {
      obj[n]--;
      answer = answer.concat(n);
    }
  });

  if (answer.length == 0) return "-1";
  else if (answer[0] == "0") return "0";
  else return answer;
}

// result
console.log(solution("5525", "1255"));
// "100"	"2345"	"-1"
// "5525"	"1255"	"552"
// "100"	"203045"	"0"
