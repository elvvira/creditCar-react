import { useState } from 'react';
import Form from './components/form/Form';
import Card from './components/card/Card';

import Header from './components/header/Header';

const App = () => {
	const [info, setInfo] = useState({
		name: 'JANE APPLESEED',
		month: 'MM',
		year: 'YY',
		cvc: '000',
		number: '0000 0000 0000 0000 0000'
	});

	return (
		<>
			<Header />
			<Card info={info} setInfo={setInfo} />
			<Form info={info} setInfo={setInfo} />
		</>
	);
};

export default App;
