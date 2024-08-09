import { useState } from 'react';
import ContactSection from './ContactSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';

const CVForm = ({ setCvData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: [],
    education: [],
    skills: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCvData(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-secondary p-4 rounded shadow-md"
    >
      <ContactSection formData={formData} onChange={handleInputChange} />
      <ExperienceSection formData={formData} onChange={setFormData} />
      <EducationSection formData={formData} onChange={setFormData} />
      <SkillsSection formData={formData} onChange={setFormData} />
      <button
        type="submit"
        className="w-full mt-4 bg-accent text-text p-2 rounded text-xl font-bold"
      >
        Generate CV
      </button>
    </form>
  );
};

export default CVForm;
