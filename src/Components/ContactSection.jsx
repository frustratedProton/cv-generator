const ContactSection = ({ formData, onChange }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-heading font-semibold text-primary">
        Contact Information
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={onChange}
        className="mt-2 p-2 border border-gray-300 rounded w-full text-base font-body text-black"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={onChange}
        className="mt-2 p-2 border border-gray-300 rounded w-full text-base font-body text-black"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={onChange}
        className="mt-2 p-2 border border-gray-300 rounded w-full text-base font-body text-black"
      />
    </div>
  );
};

export default ContactSection;