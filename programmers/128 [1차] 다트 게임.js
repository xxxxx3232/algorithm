// https://school.programmers.co.kr/learn/courses/30/lessons/17682

// solution 1
function solution(dartResult) {
  let score = dartResult.match(/10|[0-9]/g);
  let area = dartResult.match(/(S|D|T)+(#|\*)|(S|D|T)/g);
  let result = [];

  area.forEach((cur, i) => {
    let [a, sm] = [...cur];
    result.push(score[i] ** (a == "D" ? 2 : a == "T" ? 3 : 1) * (sm == "#" ? -1 : 1));
    sm == "*" && result.forEach((n, i) => (result.length == 3 ? (i > 0 ? (result[i] = n * 2) : "") : (result[i] = n * 2)));
  }, 0);

  return result.reduce((acc, cur) => acc + cur);
}

// solution 2
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}

// result
console.log(solution("1D2S3T*"));
// 1S2D*3T	37	11 * 2 + 22 * 2 + 33
// 1D2S#10S	9	12 + 21 * (-1) + 101
// 1D2S0T	3	12 + 21 + 03
// 1S*2T*3S	23	11 * 2 * 2 + 23 * 2 + 31
// 1D#2S*3S	5	12 * (-1) * 2 + 21 * 2 + 31
// 1T2D3D#	-4	13 + 22 + 32 * (-1)
// 1D2S3T*	59	12 + 21 * 2 + 33 * 2
