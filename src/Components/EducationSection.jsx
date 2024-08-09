import { useState } from "react";

const EducationSection = ({ formData, onChange }) => {
  const [education, setEducation] = useState({ degree: '', school: '', year: '' });

  const addEducation = () => {
    if (education.degree && education.school && education.year) {
      const newEducation = [...formData.education, education];
      onChange({ ...formData, education: newEducation });
      setEducation({ degree: '', school: '', year: '' });
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-heading font-semibold text-primary">Education</h2>
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={education.degree}
        onChange={(e) => setEducation({ ...education, degree: e.target.value })}
        className="mt-2 p-2 border border-gray-300 rounded w-full text-base  text-black"
      />
      <input
        type="text"
        name="school"
        placeholder="School"
        value={education.school}
        onChange={(e) => setEducation({ ...education, school: e.target.value })}
        className="mt-2 p-2 border border-gray-300 rounded w-full text-base  text-black"
      />
      <input
        type="text"
        name="year"
        placeholder="Year"
        value={education.year}
        onChange={(e) => setEducation({ ...education, year: e.target.value })}
        className="mt-2 p-2 border border-gray-300 rounded w-full text-base text-black"
      />
      <button type="button" onClick={addEducation} className="mt-2  bg-primary text-background p-2 rounded">
        Add Education
      </button>
      <ul className="mt-2">
        {formData.education.map((edu, index) => (
          <li key={index} className="border-b py-1 text-text font-body">{`${edu.degree} from ${edu.school} (${edu.year})`}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationSection;