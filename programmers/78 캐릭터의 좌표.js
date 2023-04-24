// https://school.programmers.co.kr/learn/courses/30/lessons/120861?language=javascript

// solution 1
function solution(keyinput, board) {
  let x = 0,
    y = 0,
    move = {
      left: -1,
      right: 1,
      up: 1,
      down: -1,
    };

  let [xB, yB] = board.map((n) => (n == 1 ? 0 : (n - 1) / 2));

  keyinput.map((n) => {
    if (n == "right" || n == "left") {
      return Math.abs(x) == xB ? (x == -xB ? (n == "right" ? (x += move[n]) : 0) : n == "left" ? (x += move[n]) : 0) : (x += move[n]);
    } else {
      return Math.abs(y) == yB ? (y == -yB ? (n == "up" ? (y += move[n]) : 0) : n == "down" ? (y += move[n]) : 0) : (y += move[n]);
    }
  });

  return [x, y];
}

// solution 2
function solution(keyinput, board) {
  let res = [0, 0];

  for (let p of keyinput) {
    switch (
      p // switch문을 활용
    ) {
      case "left":
        if (-res[0] < board[0] / 2 - 1) res[0]--; // 조건을 단순화하고 break를 활용
        break;
      case "right":
        if (res[0] < board[0] / 2 - 1) res[0]++;
        break;
      case "up":
        if (res[1] < board[1] / 2 - 1) res[1]++;
        break;
      case "down":
        if (-res[1] < board[1] / 2 - 1) res[1]--;
        break;
    }
  }

  return res;
}

// solution 3
function solution(keyinput, board) {
  let key = { right: [1, 0], up: [0, 1], down: [0, -1], left: [-1, 0] }; // json과 배열을 활용

  let rslt = keyinput
    .map((v) => key[v])
    .reduce(
      (a, b) => {
        if (Math.abs(a[0] + b[0]) > board[0] / 2 || Math.abs(a[1] + b[1]) > board[1] / 2) return [a[0], a[1]]; // 배열을 활용하여 조건 명시

        return [a[0] + b[0], a[1] + b[1]]; // reduce를 활용하여 결과 도출
      },
      [0, 0]
    );

  return rslt;
}

// result
console.log(solution(["right", "right", "right", "right", "right", "right", "left", "left", "left"], [9, 9])); // [1, 0]
