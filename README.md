# **Week 3**

"특정 깃헙 레파지토리([ex: React](https://github.com/facebook/react/issues))의 이슈 목록과 상세 내용을 조회하는 웹 사이트 구축"하고 동료학습을 통해서 Best Pratice 도출.

<br>

## **프로젝트 개요**

### **6팀의 3주차 Best Practice 도출방안**

- 1차 개인 구현 후 PR ( 07/11 ~ 07/13 )
- 팀원들의 과제의 코드를 서로에게 설명하고 살펴보며 함께 토론 ( 07/13 )
- Base Practice 도출 (리팩토링에 작업에 기반이 될 코드)
- 토론 결과 기반으로 리팩토링 분업
- Best Practice 완성 및 제출

<br>

### **참여 인원**

| 팀원   | 참여                                |
| ------ | ----------------------------------- |
| 김동규 | 1차구현, 리팩토링                   |
| 문일윤 | 1차구현, 리팩토링 미참여 (면접이슈) |
| 오요섭 | 미참여(사정상)                      |
| 오현재 | 1차구현, 리팩토링                   |
| 조규성 | 1차구현, 리팩토링                   |
| 조윤희 | 1차구현, 리팩토링                   |

<br>

### **데모페이지**

[데모링크]()

<br>

### **사용 라이브러리**

- React
- React Router Dom
- Styled Components
- React Markdown
- Axios
- Vite
- Eslint
- Prettier

<br>

### **함께 토론한 이슈들**

- context로 관리할 데이터
  - 렌더링 이슈 최소화와 관심사 분리를 위해 issues와 issue의 data, set 함수를 서로 다른 context로 사용하고, 각각 페이지 컴포넌트를 감싸며, 이밖의 로직들은 커스텀 훅으로 사용.
- Wanted 광고 삽입 로직
  - 응답 받은 데이터를 가공하기 보단 배열을 순회할때 conditional 하게 광고를 추가함.
- 무한스크롤 구현시 사용성 증대를 위한 `refetch` 버튼
  - 스크롤 이벤트로 발생한 데이터 fetching이 실패할 경우 error 페이지로 이동하는 것이 유저플로우에 좋지 않다고 느껴 refetch 버튼을 생성하였음.
- Http 응답을 상태로 관리하는 커스텀 훅
  - loading, HTTP error 객체 내 status, message 프로퍼티 를 추출해 관리
- Header에 들어갈 Organization Name / Repository Name을 어떻게 받아올지
  - url을 받아와서 재가공 후 그려줄 수 있지만, url과 함께 관리하기 위해 상수로 함께 참조.
