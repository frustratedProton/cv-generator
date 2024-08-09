import { useState } from "react";

const ExperienceSection = ({ formData, onChange }) => {
	const [experience, setExperience] = useState({
		title: '',
		company: '',
		years: '',
	});

	const addExperience = () => {
		if (experience.title && experience.company && experience.years) {
			const newExperience = [...formData.experience, experience];
			onChange({ ...formData, experience: newExperience });
			setExperience({ title: '', company: '', years: '' });
		}
	};

	return (
		<div className="mb-4">
			<h2 className="text-xl font-heading font-semibold text-primary">
				Experience
			</h2>
			<input
				type="text"
				name="title"
				placeholder="Job Title"
				value={experience.title}
				onChange={(e) =>
					setExperience({ ...experience, title: e.target.value })
				}
				className="mt-2 p-2 border border-gray-300 rounded w-full text-base font-body text-black"
			/>
			<input
				type="text"
				name="company"
				placeholder="Company"
				value={experience.company}
				onChange={(e) =>
					setExperience({ ...experience, company: e.target.value })
				}
				className="mt-2 p-2 border border-gray-300 rounded w-full text-base font-body text-black"
			/>
			<input
				type="text"
				name="years"
				placeholder="Years"
				value={experience.years}
				onChange={(e) =>
					setExperience({ ...experience, years: e.target.value })
				}
				className="mt-2 p-2 border border-gray-300 rounded w-full text-base font-body text-black"
			/>
			<button
				type="button"
				onClick={addExperience}
				className="mt-2 bg-primary text-background p-2 rounded"
			>
				Add Experience
			</button>
			<ul className="mt-2">
				{formData.experience.map((exp, index) => (
					<li
						key={index}
						className="border-b py-1 text-text font-body"
					>{`${exp.title} at ${exp.company} (${exp.years})`}</li>
				))}
			</ul>
		</div>
	);
};

export default ExperienceSection;
