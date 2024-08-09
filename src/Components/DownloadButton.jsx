import { jsPDF } from 'jspdf';

const DownloadButton = ({ cvData }) => {
	const handleDownload = () => {
		const doc = new jsPDF();

		// Set font size and style
		doc.setFontSize(22);
		doc.text('CV Preview', 20, 20);
		doc.setFontSize(16);
		doc.text(`Name: ${cvData.name}`, 20, 40);
		doc.text(`Email: ${cvData.email}`, 20, 50);
		doc.text(`Phone: ${cvData.phone}`, 20, 60);

		doc.setFontSize(18);
		doc.text('Experience', 20, 80);
		cvData.experience.forEach((exp, index) => {
			doc.setFontSize(14);
			doc.text(
				`${exp.title} at ${exp.company} (${exp.years})`,
				20,
				90 + index * 10
			);
		});

		doc.setFontSize(18);
		doc.text('Education', 20, 120 + cvData.experience.length * 10);
		cvData.education.forEach((edu, index) => {
			doc.setFontSize(14);
			doc.text(
				`${edu.degree} from ${edu.school} (${edu.year})`,
				20,
				130 + cvData.experience.length * 10 + index * 10
			);
		});

		doc.setFontSize(18);
		doc.text(
			'Skills',
			20,
			150 + cvData.experience.length * 10 + cvData.education.length * 10
		);
		cvData.skills.forEach((skill, index) => {
			doc.setFontSize(14);
			doc.text(
				skill,
				20,
				160 +
					cvData.experience.length * 10 +
					cvData.education.length * 10 +
					index * 10
			);
		});

		doc.save('cv-preview.pdf');
	};

	return (
		<button
			onClick={handleDownload}
			className="mt-2 bg-blue-500 text-white p-2 rounded"
		>
			Download CV
		</button>
	);
};

export default DownloadButton;
