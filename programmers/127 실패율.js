// https://school.programmers.co.kr/learn/courses/30/lessons/42889

// solution 1
function solution(N, stages) {
  let falseList = [];
  let result = [];

  for (let i = 1; i <= N; i++) {
    falseList.push(stages.filter((fas) => i == fas).length / stages.filter((chg) => chg >= i).length || 0);
  }

  falseList
    .slice()
    .sort((a, b) => b - a)
    .forEach((findIndex) => result.push(falseList.indexOf(findIndex) + 1) && falseList.splice(falseList.indexOf(findIndex), 1, ""));

  return result;
}

// solution 2
function solution(N, stages) {
  let result = [];

  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length; // 스테이지 도전자
    let curr = stages.filter((x) => x === i).length; // 스테이지 실패율
    result.push([i, curr / reach]); // 2차 배열로 스테이지와 실패율을 저장
  }

  result.sort((a, b) => b[1] - a[1]); // 2차 배열의 실패율을 비교 후 정렬

  return result.map((x) => x[0]); // 2차 배열의 순서대로 스테이지를 배열로 생성 후 반환
}

// result
console.log(solution(2, [1, 1, 1, 1])); // [1, 2]
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
// 4	[4,4,4,4,4]	[4,1,2,3]
