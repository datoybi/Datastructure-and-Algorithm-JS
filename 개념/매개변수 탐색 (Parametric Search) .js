/*
이분탐색 응용 (업다운 게임)
매개변수 탐색 (Parametric Search)

이분탐색 ?
정렬이 보장되는 배열에서 기준 X를 가지고 범위를 "이분"하면서 탐색하는 방법(O(logN))

매개변수 탐색? 
배열이 0과 1만 존재하며 오름차순인거 보장되지만, 전체 배열은 모른다.
특정 인덱스 값을 O(T)에 계산 가능할 때, 여기서 0과 1의 경계를 찾아야 한다면?

1~1000까지 전부 생각한 숫자가 1이상이야? 2이상이야? 3이상이야? ...
마지막 yes 인 대답이 정답 -> 시간복잡도 O(T*1000)

L=1, R=1000,에서 이분 탐색
500 YES -> 
정답이 가능한 구간 [L,R]을 좁혀나간다. O(T * log1000) = O(T* 10)

<핵심>
1. 정답을 "매개변수(Parameter)"로 만들고 yes/no 문제(결정 문제)로 바꿔보기
2. 모든 값에 대해서 yes/no를 채웠다고 생각했을 때, 정렬된 상태인가?
3. yes/no 결정하는 문제를 풀기

문제를 거꾸로 푸는 것이기 때문에 통찰력을 요구합니다.

자주 하는 실수 
1위. 매개 변수에 대한 결정이 Noooo Yessss 꼴이 아닌데 이분 탐색을 하는 경우
2위. L, R, M, Result 변수의 정의를 헷갈려서 부등호 등을 잘못 쓰는 경우
3위. L, R 범위를 잘못 설정하거나 Result의 초기값을 잘못 설정하는 경우

꿀팁
키워드 
~의 최댓값을 구하시오
~의 최솟값을 구하시오
-> Parametric Search 접근을 시도해볼 가치가 있다!

많은 연습 필수!!

*/

const determination = (h) => {
  // H 높이로 나무들을 잘랐을 때, M만큼을 얻을 수 있으면 true, 없으면 false를 return 하는 함수
};

const main = () => {
  const L = 0;
  const R = 2000000000;
  const ans = 0;
  // [L...R] 범위 안에 정답이 존재한다.
  // 이분 탐색과 determination 문제를 이용해서 answer를 빠르게 구하자!
};
