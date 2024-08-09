import DownloadButton from "./DownloadButton";

const CVPreview = ({ cvData, setCvData }) => {
	const handleEdit = () => {
		setCvData(null);
	};

	return (
		<div className="bg-white p-4 rounded shadow-md">

			<h3 className="text-3xl font-heading font-semibold text-black">
				{cvData.name}
			</h3>
			<p className="text-xl font-body text-black">Email: {cvData.email}</p>
			<p className="text-xl font-body text-black">Phone: {cvData.phone}</p>

			<h4 className="text-2xl font-heading font-semibold mt-4 text-black">
				Experience
			</h4>
			<ul>
				{cvData.experience.map((exp, index) => (
					<li
						key={index}
						className="border-b py-1 text-black font-body"
					>{`${exp.title} at ${exp.company} (${exp.years})`}</li>
				))}
			</ul>

			<h4 className="text-2xl font-heading font-semibold mt-4 text-black">
				Education
			</h4>
			<ul>
				{cvData.education.map((edu, index) => (
					<li
						key={index}
						className="border-b py-1 text-black font-body"
					>{`${edu.degree} from ${edu.school} (${edu.year})`}</li>
				))}
			</ul>

			<h4 className="text-2xl font-heading font-semibold mt-4 text-black">
				Skills
			</h4>
			<ul>
				{cvData.skills.map((skill, index) => (
					<li key={index} className="border-b py-1 text-black font-body">
						{skill}
					</li>
				))}
			</ul>

			<div className="mt-4">
				<button
					onClick={handleEdit}
					className="mr-2 bg-yellow-500 text-white p-2 rounded"
				>
					Edit
				</button>
				<DownloadButton cvData={cvData} />
			</div>
		</div>
	);
};

export default CVPreview;
