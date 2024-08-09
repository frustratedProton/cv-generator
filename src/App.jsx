import { useState } from 'react';
import CVForm from './Components/CVForm';
import CVPreview from './Components/CVPreview';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
	const [cvData, setCvData] = useState(null);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-background text-text">
			<Header />
			{!cvData ? (
				<CVForm setCvData={setCvData} />
			) : (
				<CVPreview cvData={cvData} setCvData={setCvData} />
			)}
			<Footer />
		</div>
	);
}

export default App;
