// https://school.programmers.co.kr/learn/courses/30/lessons/120903

// solution 1
const solution = (s1, s2) =>
  s1.filter((n) => {
    for (let i of s2) {
      if (n == i) {
        return n;
      }
    }
  }).length;

// solution 2
function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x)); // includes의 활용
  return intersection.length;
}

// solution 3
function solution(s1, s2) {
  const concat = [...s1, ...s2]; // 두 배열을 합친 새로운 배열
  const setConcat = Array.from(new Set(concat)); // new Set으로 배열의 중복 제거 후 배열로 반환

  return concat.length - setConcat.length; // 새로운 배열에서 중복을 제거한 배열의 각 길이를 빼면 중복된 개수를 반환
}

// result
console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])); // 2
