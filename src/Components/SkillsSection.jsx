import { useState } from 'react';

const SkillsSection = ({ formData, onChange }) => {
  const [skill, setSkill] = useState('');

  const addSkill = () => {
    if (skill) {
      const newSkills = [...formData.skills, skill];
      onChange({ ...formData, skills: newSkills });
      setSkill('');
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-heading font-semibold text-primary">Skills</h2>
      <input
        type="text"
        name="skill"
        placeholder="Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        className="mt-2 p-2 border border-gray-300 rounded w-full text-base text-black"
      />
      <button type="button" onClick={addSkill} className="mt-2 bg-primary text-background p-2 rounded ">
        Add Skill
      </button>
      <ul className="mt-2">
        {formData.skills.map((s, index) => (
          <li key={index} className="border-b py-1 text-text font-body">{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;
