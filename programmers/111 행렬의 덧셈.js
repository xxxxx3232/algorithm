// https://school.programmers.co.kr/learn/courses/30/lessons/12950

// solution 1
function solution(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    result[i] = arr1[0].map((_, index) => arr1[i][index] + arr2[i][index]);
  }

  return result;
}

// solution 2
function sumMatrix(A, B) {
  return A.map((arr1, idx1) => arr1.map((val, idx2) => val + B[idx1][idx2])); // solution 1과 for()와 map()의 차이뿐이다.
}

// result
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
