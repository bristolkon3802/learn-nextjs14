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

### data fetch - nomad-movies.nomadcoders.workers.dev

- /: 홈
- /movies: 인기 영화 나열
- /movies/:id: 영화를 구입하세요.
- /movies/:id/credits: 다음으로 영화 크레딧을 받으세요
- /movies/:id/videos: 다음으로 영화 동영상을 받아보세요.
- /movies/:id/providers: 다음으로 영화 공급자를 구하세요.
- /movies/:id/similar: 다음에서 영화와 비슷한 영화를 찾아보세요.

  ```
  const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
  async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(URL);
    const json = await response.json();
  return json;
  }
  export default async function HomePage() {
    const movies = await getMovies();
    return <div>{JSON.stringify(movies)}</div>;
  }
  ```

### 오류

- Extra attributes from the server: cz-shortcut-listen
  크롬 확장프로그램 비활성화
