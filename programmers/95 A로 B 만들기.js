// https://school.programmers.co.kr/learn/courses/30/lessons/120886

// solution 1
const solution = (before, after) =>
  after
    .split("")
    .filter((n) => {
      if (before.includes(n)) {
        before = before.replace(new RegExp(`${n}`), "");
        return n;
      }
    })
    .join("") == after
    ? 1
    : 0;

// solution 2
function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("") ? 1 : 0; // before와 after을 sort()로 정렬하고 비교한다.
}

// result
console.log(solution("allpe", "apple")); // 0
// "olleh"	"hello"	1
// "allpe"	"apple"	0
