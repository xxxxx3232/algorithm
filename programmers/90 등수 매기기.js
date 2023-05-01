// https://school.programmers.co.kr/learn/courses/30/lessons/120882

// solution 1
function solution(score) {
  // 2차배열에서 각 배열의 평균을 구하여 배열로 반환한다.
  let myArray = score.map((n) => {
    return n.reduce((acc, cur) => {
      return (acc + cur) / 2;
    });
  });

  // 중복되는 순위 만큼 순위를 건너뛰기 위해 카운팅한다.
  let cnt = 0;

  // 배열을 복사하고 내림차순으로 정렬하여 기존 배열에 순위를 매긴다.
  [...myArray]
    .sort((a, b) => b - a)
    .forEach((j, i, array) => {
      if (i >= 1 && array[i - 1] == j) {
        // [1, 2, 1]의 반례로 매길 순위와 같은 숫자가 평균배열로 나타날 때를 방지하여 2차 배열의 최대 길이가 10임을 이용하여 -10만큼을 순위로 먼저 매기고 리턴할 때, 10을 다시 더해준다.
        myArray[myArray.indexOf(j)] = i - cnt - 10;
        cnt++;
      } else {
        myArray[myArray.indexOf(j)] = i - 9;
        cnt = 0;
      }
    });

  return myArray.map((n) => n + 10);
}

// solution 2
function solution(score) {
  return score.map((el) => {
    // 배열의 평균을 한번씩 비교하고 큰 평균을 배열로 반환하여 그 갯수만큼 순위를 매긴다.
    // 자신보다 큰 평균의 갯수를 찾고 그만큼 더하여 순위를 표시한다.
    return score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1; // 연산이 많다는 단점이 있다.
  });
}

// solution 3
function solution(score) {
  // 평균
  let avg = score.map((v) => (v[0] + v[1]) / 2);
  // 내림차순
  let sorted = avg.slice().sort((a, b) => b - a);
  // 평균에서 내림차순한 배열의 인덱스를 배열로 반환
  return avg.map((v) => sorted.indexOf(v) + 1);
}

// result
console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
); //	[1, 2, 4, 3]
