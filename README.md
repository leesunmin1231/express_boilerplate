# express_boilerplate
nodejs, express 기반 서버 부분 프로젝트 boilerplate 입니다.

설계에 관한 설명은 아래 블로그 링크 참조
https://polarmin.tistory.com/52


## 폴더 구조
```
server_boilerplate
├─ .eslintrc.cjs
├─ README.md
├─ api : 프론트엔드로부터 데이터 요청 받는 로직
├─ app.js : 서버 동작 시키는 시작점
├─ config : 환경변수, 설정 파일들
├─ loaders : loading => app.js와 api 연결해주는 로직
│  └─ router.js
├─ models : database models
├─ package.json
└─ services : 비즈니스 로직(데이터 처리) => models 과 api 연결해주는 로직

```