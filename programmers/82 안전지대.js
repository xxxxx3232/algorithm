// https://school.programmers.co.kr/learn/courses/30/lessons/120866

// solution 1
const solution = (board) => {
  let mineArray = JSON.parse(JSON.stringify(board)); // 지뢰 배열
  let mine = "X"; // 지뢰 표시
  let lastArray = board.length - 1; // 마지막 배열
  let lastElement = lastArray; // 마지막 원소

  // board가 1 * 1 경우
  if (lastArray == 0) {
    return mineArray[0].includes(0) ? 1 : 0;
  }

  board.forEach((array, arrayI) => {
    array.forEach((element, index) => {
      // 지뢰가 있는 경우
      if (element == 1) {
        // 모퉁이 지뢰 (4칸)
        // 첫번째 배열의 첫 원소
        if (arrayI == 0 && index == 0) {
          mineArray[0].splice(0, 2, mine, mine);
          mineArray[1].splice(0, 2, mine, mine);
        }
        // 첫번째 배열의 마지막 원소
        if (arrayI == 0 && index == lastElement) {
          mineArray[0].splice(lastElement - 1, 2, mine, mine);
          mineArray[1].splice(lastElement - 1, 2, mine, mine);
        }
        // 마지막 배열의 첫 원소
        if (arrayI == lastArray && index == 0) {
          mineArray[lastArray].splice(0, 2, mine, mine);
          mineArray[lastArray - 1].splice(0, 2, mine, mine);
        }
        // 마지막 배열의 마지막 원소
        if (arrayI == lastArray && index == lastElement) {
          mineArray[lastArray].splice(lastElement - 1, 2, mine, mine);
          mineArray[lastArray - 1].splice(lastElement - 1, 2, mine, mine);
        }

        // 중앙 지뢰 (9칸)
        // 중앙 원소
        if (arrayI != 0 && arrayI != lastArray && index != 0 && index != lastElement) {
          mineArray[arrayI].splice(index - 1, 3, mine, mine, mine);
          mineArray[arrayI - 1].splice(index - 1, 3, mine, mine, mine);
          mineArray[arrayI + 1].splice(index - 1, 3, mine, mine, mine);
        }

        // 면의 끝 지뢰 (6칸)
        // 윗면 끝 원소
        if (arrayI == 0 && index != 0 && index != lastElement) {
          mineArray[0].splice(index - 1, 3, mine, mine, mine);
          mineArray[1].splice(index - 1, 3, mine, mine, mine);
        }
        // 아랫면 끝 원소
        if (arrayI == lastArray && index != 0 && index != lastElement) {
          mineArray[lastArray].splice(index - 1, 3, mine, mine, mine);
          mineArray[lastArray - 1].splice(index - 1, 3, mine, mine, mine);
        }
        // 왼쪽면 끝 원소
        if (arrayI != 0 && arrayI != lastArray && index == 0) {
          mineArray[arrayI].splice(0, 2, mine, mine);
          mineArray[arrayI - 1].splice(0, 2, mine, mine);
          mineArray[arrayI + 1].splice(0, 2, mine, mine);
        }
        // 오른쪽면 끝 원소
        if (arrayI != 0 && arrayI != lastArray && index == lastElement) {
          mineArray[arrayI].splice(lastElement - 1, 2, mine, mine);
          mineArray[arrayI - 1].splice(lastElement - 1, 2, mine, mine);
          mineArray[arrayI + 1].splice(lastElement - 1, 2, mine, mine);
        }
      }
    });
  });

  return mineArray.join().match(/0/g)?.length ? mineArray.join().match(/0/g)?.length : 0;
};

// solution 2
function solution(board) {
  let outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let safezone = 0;

  // 지뢰를 중심으로 주변을 탐색하는 것이 아닌, 주변에 지뢰가 있는지 탐색
  board.forEach((row, y, self) =>
    row.forEach((it, x) => {
      if (it === 1) return false;
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x]) ? false : safezone++;
    })
  );

  return safezone;
}
// 이 솔루션은 지뢰찾기 게임에서 각 칸 주변에 지뢰가 있는지 탐색하여 안전한 영역의 크기를 계산하는 함수입니다.
// 이 함수의 기본적인 아이디어는 각 칸을 중심으로 8개의 방향(상, 하, 좌, 우, 대각선)으로 지뢰가 있는지 여부를 판단하는 것입니다. 그러나 이 솔루션에서는 이 방법을 약간 변형하여, 각 칸 주변에 지뢰가 있는지를 검사하고, 그렇지 않은 칸들의 개수를 카운팅합니다.
// 구체적으로, 이 함수는 2차원 배열 board를 입력으로 받습니다. outside라는 이름의 배열을 선언하여, 각 칸 주변에 존재하는 8개의 방향을 정의합니다. safezone 변수를 초기화하여 안전한 영역의 크기를 저장할 곳으로 사용합니다.
// 다음으로, board 배열의 각 행과 열에 대해 forEach 함수를 호출합니다. forEach 함수는 콜백 함수를 인자로 받으며, 이 콜백 함수는 각 배열 요소와 해당 요소의 인덱스를 인자로 받습니다.
// 이 콜백 함수는 먼저, 현재 칸이 지뢰인 경우(it === 1)에는 바로 리턴합니다. 그렇지 않은 경우, outside 배열의 각 방향에 대해 some 함수를 호출합니다. some 함수는 각 배열 요소에 대해 콜백 함수를 호출하며, 콜백 함수가 한 번이라도 true를 반환하면 some 함수는 즉시 실행을 멈추고 true를 반환합니다.
// 여기서 콜백 함수는 각 방향에 대해 현재 칸의 좌표를 기준으로 해당 방향에 인접한 칸에 지뢰가 있는지를 검사합니다. self[oy + y]?.[ox + x] 구문을 사용하여, 현재 칸 주변에 인접한 칸이 배열의 범위를 벗어나는 경우(undefined)에는 이를 무시하고 넘어갑니다.
// 만약 모든 방향에 대해 콜백 함수가 false를 반환한다면, 즉 현재 칸 주변에 지뢰가 하나도 없다면 safezone 변수를 1 증가시킵니다.
// 마지막으로, safezone 변수를 반환하여 안전한 영역의 크기를 반환합니다.

// solution 3
function solution(b) {
  const directions = [
    [0, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, 0],
    [1, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  let bombSet = new Set();

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b[i].length; j++) {
      if (b[i][j] == 1) {
        directions.forEach((el) => {
          let [nextX, nextY] = el;
          [nextX, nextY] = [i + nextX, j + nextY];
          if (nextX >= 0 && nextX < b.length && nextY >= 0 && nextY < b[i].length) {
            bombSet.add(nextX + " " + nextY);
          }
        });
      }
    }
  }
  return b.length * b[0].length - bombSet.size;
}

// solution 4
var a = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, -1],
    [0, 1],
  ],
  n,
  x,
  y,
  solution = (b) => {
    return (
      (n = b.length),
      b.flat().reduce((t, v, i) => {
        return (x = Math.floor(i / n)), (y = i % n), t + (v == 0 && !a.some(([p, q]) => b[x + p] && b[x + p][y + q]));
      }, 0)
    );
  };

console.log(solution([[1]])); // 14안전지대 11지뢰
