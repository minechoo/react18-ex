import { useState, useTransition } from 'react';

function App() {
	const [Count, setCount] = useState(0);
	const [Items, setItems] = useState([]);
	const [isPadding, startTansition] = useTransition();

	console.log('isPadding', isPadding);

	//아래함수에서는 정 중요하고 무거운 연산때문에 급한 연산까지 덩달아 늦게 화면에 랜더링
	const handleClick = () => {
		//urgent op ( 급하게 처리되어야 할 중요한 연산)
		setCount(Count + 1);

		startTansition(() => {
			//not urgent op ( 우선순위가 떨어자는 덜 중요한 연산)
			const arr = Array(10000)
				.fill(1)
				.map((_, idx) => Count + idx);
			setItems(arr);
		});
	};

	//아래 버튼 클릭시마다 만개의 배열 리스트가 출력되기 전까지는 버튼의 숫자값이 늦게 카운트 되는 것을 확인
	return (
		<div className='App'>
			<button onClick={handleClick} disabled={isPadding}>
				{Count}
			</button>
			<ul>
				{Items.map((num) => {
					return <li key={num}>{num}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;

/*
  useTransition
	연산의 우선순위를 주어서 좀 늦게 랜더링 해도 될 것을 지정
  기존에는 한 번 랜더링 연산이 시작되면 중간에 멈출 수 없었음
  특정 핸들러함수에 의해서 화면을 재 연산해야 되는 경우 중간에 무거운 로직이 실행되는 연산이 있으면 나모지 연산도 같이 지연이 일어남
*/
