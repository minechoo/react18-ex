import Post from './Post';
import { Suspense } from 'react';
// import { getData } from './useGetData';
// import { useEffect } from 'react';

function App() {
	// useEffect(() => {
	// 	getData();
	// }, []);

	return (
		<div className='App'>
			<h1>App</h1>
			{/* Suspence로 특정컴포넌트 그룹을 묶으면 해당 그룹만 동기화 처리 */}
			<Suspense fallback={<p>Posts loading</p>}>
				<h1>Posts</h1>
				<Post />
			</Suspense>
		</div>
	);
}

export default App;

/*
기존의 CSR, SSR 방식 차이
예전 SSR 작업흐름
1. 정적인 HTML 화일을 서버로부터 가져옴
2. 추후 동적데이터가 필요할때마다 다시 서버쪽에 요청해서 전체화면을 full load (화면 깜박임)
3. jquery의 ajax라는 비동기 서버통신 기술이 생기면서 전체화면을 다시 full load 하지 않고 필요한 데이터만 실시간으로 다시 호출가능
4. 비동기 데이터를 이용해 자바스크립트로 일일이 동적 DOM를 생성하고 관리해야하는 번거로움 생김

CSR
1. 빈 HTML파일을 서버로부터 가져옴
2. 자바스크립트 파일 로드( React )
3. 리액트 컴포넌트 로드 ( Data fetching )
4. 컴포넌트 해석후 랜더링 시작
5. 최종화면에 동적 DOM 생성 ( 이전단계까지는 빈화면 랜더링 )

React18 버전에서의 SSR 작업흐름
1. 서버쪽에서 미리 static 프리랜더링된 html파일 로드
2. 미리 랜더링된 정적인 화면을 바로 생성(정적 화면 생성)
3. 자바스크립트 파일로드
4. 동적데이터를 다루는 리액트 컴포넌트 해석
5. 기존 정적인 화면에 동적으로 연동될 부분만 대체 (hydration) Suspense 활용

React18 Suspense
1. 각 페이지에 구성되어있는 컴포넌트들을 동시에 호츨하는 것이 아닌 영역별로 랜더링 시점을 동기화 처리
2. 이전 버전까지는 클라이언트 컴포넌트에서만 제한적으로 동작되는 기술이었으니 18버전부터는 SSR방식의 컴포넌트에서도 활용가능하도록 개선
3. 활용예 : 특정 컴포넌트가 랜더링 완료될때까지 다른 컴포넌트의 랜더링을 막고 이전 랜더링 컴포넌트 완료후 동기적으로 랜더링 시작
4. 활용예 : 서버로부터 무거운 데치터를 fectching 하는 컴포넌트 출력전까지 자동으로 로딩바 출력
5. Suspense를 활용학기 위한 조건 - Suspense동기화시키는 컴포넌트 내부에 promise 객체 생성 상태(pending, fullfilled, rejected)를 추적할 수 있어야 됨
*/
