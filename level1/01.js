/*직사각형 별찍기
문제 설명
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

제한 조건
n과 m은 각각 1000 이하인 자연수입니다.

예시
입력 5 3

출력
*****
*****
*****

*/

// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/12969

function solution(n, m) {
    let answer = '';

    for (let i = 0; i < m; i++) { // 세로
        for (let j = 0; j < n; j++) { // 가로
            answer += '*';
        }
        answer += "\n";
    }

    return answer;
}

console.log(solution(5, 3));