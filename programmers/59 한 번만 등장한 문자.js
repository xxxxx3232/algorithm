// https://school.programmers.co.kr/learn/courses/30/lessons/120896

// solution 1
function solution(s) {
  var answer = "";
  let cntStr = {};

  for (let i of s) {
    cntStr[i] = cntStr[i] + 1 || 1;
  }

  for (let j in cntStr) {
    answer += cntStr[j] == 1 ? j : "";
  }

  return [...answer].sort().join("");
}

// solution 2
function solution(s) {
  let res = [];

  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c); // indexOf와 lastIndexOf를 사용하여 같은 인덱스 결과가 나타나면 한번 밖에 검색하지 못 한다는 것을 이용

  return res.sort().join("");
}

// solution 3
var solution = (s) =>
  [...s]
    .filter((c) => s.match(new RegExp(c, "g")).length == 1) // new RegExp()를 사용하면 정규식을 사용할 수 있다.
    .sort()
    .join("");

// result
console.log(solution("abcabcadc")); // "d"
