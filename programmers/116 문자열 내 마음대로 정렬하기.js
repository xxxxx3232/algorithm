// https://school.programmers.co.kr/learn/courses/30/lessons/12915

// solution 1
function solution(strings, n) {
  return strings
    .map((s) => s[n])
    .sort()
    .map((s) => strings.sort().find((w, i) => (w[n] == s ? strings.splice(i, 1) : false)));
}

// solution 2
function solution(strings, n) {
  return strings.sort((s1, s2) => (s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])));
}

// solution 3
function solution(strings, n) {
  return strings.sort((a, b) => {
    const chr1 = a.charAt(n);
    const chr2 = b.charAt(n);

    if (chr1 == chr2) {
      return (a > b) - (a < b);
    } else {
      return (chr1 > chr2) - (chr1 < chr2);
    }
  });
}

// result
console.log(solution(["sun", "bed", "car"], 1));
// ["sun", "bed", "car"] 1 ["car", "bed", "sun"]
