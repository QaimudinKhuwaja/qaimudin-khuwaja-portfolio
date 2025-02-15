// import { useState } from 'react';

// export default function ResumeForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     title: '',
//     summary: '',
//     experience: [
//       { company: '', role: '', duration: '', responsibilities: '' },
//     ],
//     education: [{ institution: '', degree: '', duration: '' }],
//     skills: '',
//     contact: { email: '', phone: '', linkedin: '' },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleExperienceChange = (index, e) => {
//     const { name, value } = e.target;
//     const newExperience = [...formData.experience];
//     newExperience[index][name] = value;
//     setFormData({ ...formData, experience: newExperience });
//   };

//   const handleEducationChange = (index, e) => {
//     const { name, value } = e.target;
//     const newEducation = [...formData.education];
//     newEducation[index][name] = value;
//     setFormData({ ...formData, education: newEducation });
//   };

//   const addExperience = () => {
//     setFormData({
//       ...formData,
//       experience: [...formData.experience, { company: '', role: '', duration: '', responsibilities: '' }],
//     });
//   };

//   const addEducation = () => {
//     setFormData({
//       ...formData,
//       education: [...formData.education, { institution: '', degree: '', duration: '' }],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-4 md:p-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
//         <h1 className="text-2xl md:text-3xl font-bold mb-6">Resume Form</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2">Summary</label>
//             <textarea
//               name="summary"
//               value={formData.summary}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2">Experience</label>
//             {formData.experience.map((exp, index) => (
//               <div key={index} className="mb-4">
//                 <input
//                   type="text"
//                   name="company"
//                   placeholder="Company"
//                   value={exp.company}
//                   onChange={(e) => handleExperienceChange(index, e)}
//                   className="w-full p-2 mb-2 border border-gray-300 rounded"
//                 />
//                 <input
//                   type="text"
//                   name="role"
//                   placeholder="Role"
//                   value={exp.role}
//                   onChange={(e) => handleExperienceChange(index, e)}
//                   className="w-full p-2 mb-2 border border-gray-300 rounded"
//                 />
//                 <input
//                   type="text"
//                   name="duration"
//                   placeholder="Duration"
//                   value={exp.duration}
//                   onChange={(e) => handleExperienceChange(index, e)}
//                   className="w-full p-2 mb-2 border border-gray-300 rounded"
//                 />
//                 <textarea
//                   name="responsibilities"
//                   placeholder="Responsibilities"
//                   value={exp.responsibilities}
//                   onChange={(e) => handleExperienceChange(index, e)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={addExperience}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Add Experience
//             </button>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2">Education</label>
//             {formData.education.map((edu, index) => (
//               <div key={index} className="mb-4">
//                 <input
//                   type="text"
//                   name="institution"
//                   placeholder="Institution"
//                   value={edu.institution}
//                   onChange={(e) => handleEducationChange(index, e)}
//                   className="w-full p-2 mb-2 border border-gray-300 rounded"
//                 />
//                 <input
//                   type="text"
//                   name="degree"
//                   placeholder="Degree"
//                   value={edu.degree}
//                   onChange={(e) => handleEducationChange(index, e)}
//                   className="w-full p-2 mb-2 border border-gray-300 rounded"
//                 />
//                 <input
//                   type="text"
//                   name="duration"
//                   placeholder="Duration"
//                   value={edu.duration}
//                   onChange={(e) => handleEducationChange(index, e)}
//                   className="w-full p-2 mb-2 border border-gray-300 rounded"
//                 />
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={addEducation}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Add Education
//             </button>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2">Skills</label>
//             <textarea
//               name="skills"
//               value={formData.skills}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2">Contact</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={formData.contact.email}
//               onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, email: e.target.value } })}
//               className="w-full p-2 mb-2 border border-gray-300 rounded"
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone"
//               value={formData.contact.phone}
//               onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, phone: e.target.value } })}
//               className="w-full p-2 mb-2 border border-gray-300 rounded"
//             />
//             <input
//               type="text"
//               name="linkedin"
//               placeholder="LinkedIn"
//               value={formData.contact.linkedin}
//               onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, linkedin: e.target.value } })}
//               className="w-full p-2 mb-2 border border-gray-300 rounded"
//             />
//           </div>
//           <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResumeForm() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    summary: '',
    experience: [
      { company: '', role: '', duration: '', responsibilities: '' },
    ],
    education: [{ institution: '', degree: '', duration: '' }],
    skills: '',
    contact: { email: '', phone: '', linkedin: '' },
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newExperience = [...formData.experience];
    newExperience[index][name as keyof typeof newExperience[0]] = value;
    setFormData({ ...formData, experience: newExperience });
  };

  const handleEducationChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    newEducation[index][name as keyof typeof newEducation[0]] = value;
    setFormData({ ...formData, education: newEducation });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [...formData.experience, { company: '', role: '', duration: '', responsibilities: '' }],
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { institution: '', degree: '', duration: '' }],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('resumeData', JSON.stringify(formData));
    router.push('/resume');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Resume Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Summary</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Experience</label>
            {formData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Role"
                  value={exp.role}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="duration"
                  placeholder="Duration"
                  value={exp.duration}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <textarea
                  name="responsibilities"
                  placeholder="Responsibilities"
                  value={exp.responsibilities}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addExperience}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Experience
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Education</label>
            {formData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  name="institution"
                  placeholder="Institution"
                  value={edu.institution}
                  onChange={(e) => handleEducationChange(index, e)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="degree"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, e)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="duration"
                  placeholder="Duration"
                  value={edu.duration}
                  onChange={(e) => handleEducationChange(index, e)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addEducation}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Education
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Skills</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Contact</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.contact.email}
              onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, email: e.target.value } })}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.contact.phone}
              onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, phone: e.target.value } })}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn"
              value={formData.contact.linkedin}
              onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, linkedin: e.target.value } })}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}