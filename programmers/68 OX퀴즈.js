// https://school.programmers.co.kr/learn/courses/30/lessons/120907

// solution 1
function solution(quiz) {
  return quiz.map((n) => {
    let [a, b, c, d, e] = n.split(" ");
    let result = b == "+" ? ~~a + ~~c : ~~a - ~~c;

    return result == e ? "O" : "X";
  });
}

// solution 2
function solution(quiz) {
  var answer = [];
  return quiz.map((t) => {
    const [calc, result] = t.split(" = ");
    const sign = calc.includes("+") ? 1 : -1; // 계산식에서 양, 음수 판단
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    return +a + +b * sign === +result ? "O" : "X";
  });
}

// solution 3
function solution(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X"; // eval()을 사용하여 문자열 계산
    });
}

// result
console.log(solution(["3 - 4 = -3", "5 + 6 = 11"])); // ["X", "O"]
