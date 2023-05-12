// https://school.programmers.co.kr/learn/courses/30/lessons/12916

// solution 1
function solution(s) {
  return s.match(/[pP]/g)?.length == s.match(/y|Y/g)?.length; // 같으면 true, 다르면 false이다. 정규식에서 "[]"와 "|"가 동일하게 동작했다.
}

// solution 2
function solution(s) {
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

// result
console.log(solution("pPoooyY"));
// "pPoooyY"	true
