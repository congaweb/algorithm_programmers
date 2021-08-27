/*

정수 제곱근 판별
문제 설명
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

제한 사항
n은 1이상, 50000000000000 이하인 양의 정수입니다.
입출력 예
n	return
121	144
3	-1
입출력 예 설명
입출력 예#1
121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

입출력 예#2
3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

*/

// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/12934

// 이분탐색으로 제곱근 구해서 풀이해보기
function solution(n) {
    let answer = 0;
    let lt = 1;
    let rt = n;

    while (lt <= rt) {
        let mid = Math.floor((lt + rt)/ 2) ;
        if(mid**2 === n) return answer = (mid + 1)**2;
        else{
            if(mid**2 > n) rt = mid - 1;
            else lt = mid + 1;
        }
    }

    return -1;
}

console.log(solution(121)); // 144
console.log(solution(3)); // -1
console.log(solution(16)); // 25
console.log(solution(90000)); // 90601