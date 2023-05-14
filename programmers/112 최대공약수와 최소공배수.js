// https://school.programmers.co.kr/learn/courses/30/lessons/12940

// solution 1
function solution(n, m) {
  const gcd = (a, b) => {
    while (b != 0) {
      let gcd = a % b;
      a = b;
      b = gcd;
    }
    return a;
  };

  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  return [gcd(n, m), lcm(n, m)];
}

// solution 2
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}

// result
console.log(solution(3, 12));
// 3	12	[3, 12]
