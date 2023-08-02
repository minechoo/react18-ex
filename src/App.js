import { useState } from 'react';

function App() {
	console.log('render!');
	const [Count, setCount] = useState(0);
	const [Count2, setCount2] = useState(0);

	const returnPromise = () => {
		return new Promise((res) => setTimeout(res, 500));
	};

	const handleClick = () => {
		returnPromise().then(() => {
			setCount(Count + 1);
			setCount2(Count2 + 1);
		});
	};

	return (
		<div className='App'>
			<h1>Hello</h1>
			<div style={{ position: 'fixed', zIndex: 10 }}>
				<button onClick={handleClick}>button</button>
				<h1 style={{ color: '#000' }}>
					{Count} - {Count2}
				</h1>
			</div>
		</div>
	);
}

export default App;

/*
	Automatic Batching
	: 핸들러함수 안쪽에서 복수개의 state값이 변경될때 해당 변경사항을 묶어서(batching)해서 한번만 리랜더링
	: 기존 17버전에서는 promise를 반환하는 함수 안에서는 auto batching동작 불가 (18버전에서 개선됨)
*/
