// https://school.programmers.co.kr/learn/courses/30/lessons/142086

// solution 1
function solution(s) {
  return [...s].map((string, i) => {
    let word = s.slice(0, i).lastIndexOf(string);
    return word === -1 ? -1 : i - word;
  });
}

// solution 2
function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}

// result
console.log(solution("banana"));
// "banana"	[-1, -1, -1, 2, 2, 2]
