// https://school.programmers.co.kr/learn/courses/30/lessons/133499

// solution 1
function solution(babbling) {
  return babbling.filter((s) => {
    if (s.match(/^(aya|ye|woo|ma)+$/)) return s.match(/^(?!.*((aya|ye|woo|ma)\2)).*$/) ? s : false;
  })?.length;
}

// solution 2
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/; // \1은 정규식에서 역참조입니다.
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  // 이 코드에서는, aya, ye, woo, ma가 연속으로 나열되어 있는지 확인하는 정규식이 됩니다.
  return babbling.reduce((ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans), 0);
}

// solution 3
function solution(babbling) {
  const babblables = ["aya", "ye", "woo", "ma"];

  return babbling.reduce((possible, babbl, index) => {
    for (let i = 0; i < babblables.length; i += 1) {
      if (babbl.includes(babblables[i].repeat(2))) return possible;
    }

    for (let i = 0; i < babblables.length; i += 1) {
      babbl = babbl.split(babblables[i]).join(" ").trim();
    }

    if (babbl) return possible;

    return (possible += 1);
  }, 0);
}

// result
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
// ["aya", "yee", "u", "maa"]	1
// ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	2
