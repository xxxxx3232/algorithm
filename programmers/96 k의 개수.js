// https://school.programmers.co.kr/learn/courses/30/lessons/120887

// solution 1
const solution = (i, j, k) => {
  let answer = new Array(j - i + 1)
    .fill(0)
    .map((_, index) => i + index)
    .reduce((acc, cur) => acc + cur, "")
    .match(new RegExp(k, "g"))?.length;

  return answer == undefined ? 0 : answer;
};

// solution 2
function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1; // split(k)로 나눈 배열의 길이는 k의 포함 갯수보다 1개 많다.
}

// solution 3
function solution(i, j, k) {
  return (
    Array(j - i + 1)
      .fill(i)
      .map((v, i) => v + i)
      .join("")
      .split(k).length - 1 // split(k)로 나눈 배열의 길이는 k의 포함 갯수보다 1개 많다.
  );
}

// result
console.log(solution(1, 13, 1)); // 6
// 1	13	1	6
// 10	50	5	5
// 3	10	2	0
