import { useEffect, useState } from 'react';
import './App.css';
import Footer from './component/Footer/footer';
import axios from 'axios';
function App() {
	const [advice, setAdvice] = useState('');

	const getAdvice = async () => {
		const response = await axios.get('https://api.adviceslip.com/advice');
		const advice = await response.data.slip;
		console.log(advice);
		setAdvice(advice);
	};

	useEffect(() => {
		getAdvice();
	}, []);

	return (
		<>
			<div className='container'>
			<div className='main'>
			<p>Advice #{advice.id}</p>
				<h1 className='Quotes'>"{advice.advice}"</h1>
				<img className='divider mt-7' src="./images/pattern-divider-desktop.svg"/>
			</div>
				<button className="dice" onClick={getAdvice}>
				<img src="./images/icon-dice.svg"  />
				</button>
			</div>
			<Footer />
		</>
	);
}

export default App;
