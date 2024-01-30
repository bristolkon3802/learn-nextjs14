# naxtJS

### 환경구성

- npm init -y
- npm i react@latest next@latest react-dom@latest

### 환경실행

- npm run dev

### 설명

- 직접적인 page.tsx 파일이 없는 폴더는 실제 페이지 없이 그저 경로의 일부분임
- layout은 page를 레이아웃 함.
- metadata는 서버(client) 컴포넌트에서만 보낼수 있음. metadata는 병합되어 출력.
- route 그룹화 (home), (movies) 일부 레이아웃을 선택하거나 선택 해제하여 복잡한 일을 할 수 있음.
- 동적(dynamic)페이지 (movies)/movies/[id]/page.tsx

### 오류

- Extra attributes from the server: cz-shortcut-listen
  크롬 확장프로그램 비활성화
