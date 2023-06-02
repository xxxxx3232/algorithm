// https://school.programmers.co.kr/learn/courses/30/lessons/176963

// solution 1
function solution(name, yearning, photo) {
  return photo.map((p) => p.reduce((acc, cur) => acc + (yearning[name.indexOf(cur)] || 0), 0));
}

// solution 2
function solution(name, yearning, photo) {
  return photo.map((p) => p.reduce((acc, cur) => acc + (yearning[name.indexOf(cur)] ?? 0), 0));
}

// result
console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
// ["may", "kein", "kain", "radi"]	[5, 10, 1, 3]	[["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]	[19, 15, 6]
