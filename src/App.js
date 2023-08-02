import { useState } from 'react';
import { flushSync } from 'react-dom';

function App() {
	console.log('render!');
	const [Count, setCount] = useState(0);
	const [Count2, setCount2] = useState(0);
	const [Count3, setCount3] = useState(0);

	const returnPromise = () => {
		return new Promise((res) => setTimeout(res, 500));
	};

	const handleClick = () => {
		returnPromise().then(() => {
			flushSync(() => setCount(Count + 1));

			setCount2(Count2 + 2);
			setCount3(Count3 + 3);
		});
	};

	return (
		<div className='App'>
			<h1>Hello</h1>

			<button onClick={handleClick}>button</button>
			<h1 style={{ color: '#000' }}>
				{Count} - {Count2} - {Count3}
			</h1>
		</div>
	);
}

export default App;

/*
	Automatic Batching
	: 핸들러함수 안쪽에서 복수개의 state값이 변경될때 해당 변경사항을 묶어서(batching)해서 한번만 리랜더링
	: 기존 17버전에서는 promise를 반환하는 함수 안에서는 auto batching동작 불가 (18버전에서 개선됨)
  : 리액트 18에서 동일 핸들러함수 안쪽에 있더라도 flushSync를 이용해 특정 State만 auto batching에서 제외 처리 가능
*/
