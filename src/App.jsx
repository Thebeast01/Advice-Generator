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
					<span className='divider'></span>
				</div>
				<button className='dice' onClick={getAdvice}>
					<span className='image-dice'></span>
				</button>
			</div>
			<Footer />
		</>
	);
}

export default App;
