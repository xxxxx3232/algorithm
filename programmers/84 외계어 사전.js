// https://school.programmers.co.kr/learn/courses/30/lessons/120869

// solution 1

const solution = (spell, dic) => {
  return dic.some((n) => {
    return spell
      .map((j) => {
        return n.match(new RegExp(j, "g"));
      })
      .join("") == spell.join("")
      ? true
      : false;
  })
    ? 1
    : 2;
};

// solution 2
function solution(p, d) {
  return d.some((s) => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}

// solution 3
function solution(spell, dic) {
  return dic.filter((v) => spell.every((c) => v.includes(c))).length ? 1 : 2;
}

// result
console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo", "ospd"])); // 2
