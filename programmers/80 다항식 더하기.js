// https://school.programmers.co.kr/learn/courses/30/lessons/120863

// solution 1
function solution(polynomial) {
  let x = 0;
  let num = 0;

  polynomial.split(" + ").forEach((n) => {
    if (n.includes("x")) {
      x += n == "x" ? 1 : +n.replace("x", "");
    } else {
      num += +n;
    }
  });

  return num == 0 ? (x == 1 ? "x" : `${x}x`) : x == 0 ? `${num}` : x == 1 ? `x + ${num}` : `${x}x + ${num}`;
}

// solution 2
function solution(polynomial) {
  const arr = polynomial.split(" + ");
  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1")
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  const num = arr.filter((n) => !isNaN(n)).reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}

// solution 3
function solution(p) {
  var [x, c] = p.split("+").reduce(
    ([a, b], s) => {
      if (s.includes("x")) {
        return [a + Number(s.trim().replace("x", "") || 1), b];
      }
      return [a, b + Number(s)];
    },
    [0, 0]
  );

  if (!x && !c) return "0";
  if (!x) return c.toString();
  x = `${x == 1 ? "" : x}x`;
  if (!c) return x;

  return `${x} + ${c}`;
}

// result
console.log(solution("3x + 7 + x")); // "4x + 7"
