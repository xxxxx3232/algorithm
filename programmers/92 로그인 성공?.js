// https://school.programmers.co.kr/learn/courses/30/lessons/120883

// solution 1
function solution(id_pw, db) {
  var answer = "";

  db.some((b) => {
    if (b[0] == id_pw[0]) {
      if (b[1] == id_pw[1]) {
        answer = "login";
        return true;
      } else answer = "wrong pw";
    } else if (answer != "wrong pw") answer = "fail";
  });

  return answer;
}

// solution 2
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db); // Map 객체는 Key와 Value를 저장한다.

  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail"; // map.has() 값이 있는지 확인한다. map.get() 해당 Key의 Value를 가져온다.
}

// solution 3
function solution(id_pw, db) {
  const [userId, userPw] = id_pw;

  for (const [dbId, dbPw] of db) {
    if (userId === dbId && userPw === dbPw) return "login";
    else if (userId === dbId && userPw !== dbPw) return "wrong pw";
  }

  return "fail";
}

// result
console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
); // "login"
