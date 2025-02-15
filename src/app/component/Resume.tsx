// import Image from "next/image";
// import profilePic from '../assets/myimg.jpeg'

// export default function Resume() {
//   return (
  
//     <div className="bg-gray-100 min-h-screen p-4 md:p-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="bg-gray-800 text-white text-center p-6">
//           <Image
//             src={profilePic}
//             alt="Profile Picture"
//             className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full"
//           />
//           <h1 className="text-2xl md:text-3xl font-bold mt-4">Your Name</h1>
//           <p className="text-lg md:text-xl">Frontend Web Developer</p>
//         </div>
//         <div className="p-4 md:p-6">
//           <section className="mb-4 md:mb-6">
//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Summary</h2>
//             <p className="text-gray-700">
//               Experienced Frontend Developer with a demonstrated history of working in the information technology and services industry. Skilled in JavaScript, React, and modern web development technologies.
//             </p>
//           </section>
//           <section className="mb-4 md:mb-6">
//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Experience</h2>
//             <div className="mb-4">
//               <h3 className="text-lg md:text-xl font-semibold text-gray-800">Company Name</h3>
//               <p className="text-gray-600">Frontend Developer | Jan 2020 - Present</p>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Developed and maintained web applications using React and Next.js.</li>
//                 <li>Collaborated with designers and backend developers to create seamless user experiences.</li>
//                 <li>Implemented responsive design to ensure compatibility across various devices.</li>
//               </ul>
//             </div>
//             <div className="mb-4">
//               <h3 className="text-lg md:text-xl font-semibold text-gray-800">Another Company</h3>
//               <p className="text-gray-600">Junior Frontend Developer | Jun 2018 - Dec 2019</p>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Assisted in the development of web applications using HTML, CSS, and JavaScript.</li>
//                 <li>Worked closely with senior developers to learn best practices and improve coding skills.</li>
//                 <li>Participated in code reviews and contributed to team meetings.</li>
//               </ul>
//             </div>
//           </section>
//           <section className="mb-4 md:mb-6">
//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Education</h2>
//             <div className="mb-4">
//               <h3 className="text-lg md:text-xl font-semibold text-gray-800">University Name</h3>
//               <p className="text-gray-600">Bachelor of Science in Computer Science | 2014 - 2018</p>
//             </div>
//           </section>
//           <section className="mb-4 md:mb-6">
//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Skills</h2>
//             <ul className="list-disc list-inside text-gray-700">
//               <li>JavaScript</li>
//               <li>React</li>
//               <li>Next.js</li>
//               <li>HTML & CSS</li>
//               <li>Responsive Design</li>
//               <li>Git & GitHub</li>
//             </ul>
//           </section>
//           <section>
//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Contact</h2>
//             <p className="text-gray-700">Email: your.email@example.com</p>
//             <p className="text-gray-700">Phone: (123) 456-7890</p>
//             <p className="text-gray-700">LinkedIn: linkedin.com/in/yourprofile</p>
//           </section>
//         </div>
//       </div>
//     </div>
 
//   )
// }















// "use client"
// import { useEffect, useState } from 'react';
// import Image from "next/image";
// import profilePic from '../assets/myimg.jpeg';

// interface ResumeData {
//   name: string;
//   title: string;
//   summary: string;
//   experience: { company: string; role: string; duration: string; responsibilities: string }[];
//   education: { institution: string; degree: string; duration: string }[];
//   skills: string;
//   contact: { email: string; phone: string; linkedin: string };
// }

// export default function Resume() {
//   const [resumeData, setResumeData] = useState<ResumeData | null>(null);

//   useEffect(() => {
//     const data = localStorage.getItem('resumeData');
//     if (data) {
//       setResumeData(JSON.parse(data));
//     }
//   }, []);

//   if (!resumeData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen p-4 md:p-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="bg-gray-800 text-white text-center p-6">
//           <Image
//             src={profilePic}
//             alt="Profile Picture"
//             className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full"
//           />
//           <h1 className="text-2xl md:text-3xl font-bold mt-4">{resumeData.name}</h1>
//           <p className="text-lg md:text-xl">{resumeData.title}</p>
//         </div>
//         <div className="p-4 md:p-6">
//           <section className="mb-4 md:mb-6">
//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Summary</h2>
//             <p className="text-gray-700">{resumeData.summary}</p>
//           </section>
//           <section className="mb-4 md:mb-6">
//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Experience</h2>
//             {resumeData.experience.map((exp, index) => (
//               <div key={index} className="mb-4">
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-800">{exp.company}</h3>
//                 <p className="text-gray-600">{exp.role} | {exp.duration}</p>
//                 <p className="text-gray-700">{exp.responsibilities}</p>
//               </div>
//             ))}
//           </section>
//           <section className="mb-4 md:mb-6">
//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Education</h2>
//             {resumeData.education.map((edu, index) => (
//               <div key={index} className="mb-4">
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-800">{edu.institution}</h3>
//                 <p className="text-gray-600">{edu.degree} | {edu.duration}</p>
//               </div>
//             ))}
//           </section>
//           <section className="mb-4 md:mb-6">
//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Skills</h2>
//             <p className="text-gray-700">{resumeData.skills}</p>
//           </section>
//           <section>
//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Contact</h2>
//             <p className="text-gray-700">Email: {resumeData.contact.email}</p>
//             <p className="text-gray-700">Phone: {resumeData.contact.phone}</p>
//             <p className="text-gray-700">LinkedIn: {resumeData.contact.linkedin}</p>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }











"use client"
import { useEffect, useState } from 'react';
import Image from "next/image";
import profilePic from '../assets/myimg.jpeg';
import jsPDF from 'jspdf';

interface ResumeData {
  name: string;
  title: string;
  summary: string;
  experience: { company: string; role: string; duration: string; responsibilities: string }[];
  education: { institution: string; degree: string; duration: string }[];
  skills: string;
  contact: { email: string; phone: string; linkedin: string };
}

export default function Resume() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('resumeData');
    if (data) {
      setResumeData(JSON.parse(data));
    }
  }, []);

  const generatePDF = () => {
    if (!resumeData) return;

    const doc = new jsPDF();
    doc.text(`Name: ${resumeData.name}`, 10, 10);
    doc.text(`Title: ${resumeData.title}`, 10, 20);
    doc.text(`Summary: ${resumeData.summary}`, 10, 30);

    doc.text('Experience:', 10, 40);
    resumeData.experience.forEach((exp, index) => {
      doc.text(`Company: ${exp.company}`, 10, 50 + index * 30);
      doc.text(`Role: ${exp.role}`, 10, 60 + index * 30);
      doc.text(`Duration: ${exp.duration}`, 10, 70 + index * 30);
      doc.text(`Responsibilities: ${exp.responsibilities}`, 10, 80 + index * 30);
    });

    doc.text('Education:', 10, 100 + resumeData.experience.length * 30);
    resumeData.education.forEach((edu, index) => {
      doc.text(`Institution: ${edu.institution}`, 10, 110 + resumeData.experience.length * 30 + index * 30);
      doc.text(`Degree: ${edu.degree}`, 10, 120 + resumeData.experience.length * 30 + index * 30);
      doc.text(`Duration: ${edu.duration}`, 10, 130 + resumeData.experience.length * 30 + index * 30);
    });

    doc.text(`Skills: ${resumeData.skills}`, 10, 150 + resumeData.experience.length * 30 + resumeData.education.length * 30);

    doc.text('Contact:', 10, 160 + resumeData.experience.length * 30 + resumeData.education.length * 30);
    doc.text(`Email: ${resumeData.contact.email}`, 10, 170 + resumeData.experience.length * 30 + resumeData.education.length * 30);
    doc.text(`Phone: ${resumeData.contact.phone}`, 10, 180 + resumeData.experience.length * 30 + resumeData.education.length * 30);
    doc.text(`LinkedIn: ${resumeData.contact.linkedin}`, 10, 190 + resumeData.experience.length * 30 + resumeData.education.length * 30);

    doc.save('resume.pdf');
  };

  if (!resumeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-800 text-white text-center p-6">
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full"
          />
          <h1 className="text-2xl md:text-3xl font-bold mt-4">{resumeData.name}</h1>
          <p className="text-lg md:text-xl">{resumeData.title}</p>
        </div>
        <div className="p-4 md:p-6">
          <section className="mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Summary</h2>
            <p className="text-gray-700">{resumeData.summary}</p>
          </section>
          <section className="mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Experience</h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{exp.company}</h3>
                <p className="text-gray-600">{exp.role} | {exp.duration}</p>
                <p className="text-gray-700">{exp.responsibilities}</p>
              </div>
            ))}
          </section>
          <section className="mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Education</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{edu.institution}</h3>
                <p className="text-gray-600">{edu.degree} | {edu.duration}</p>
              </div>
            ))}
          </section>
          <section className="mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Skills</h2>
            <p className="text-gray-700">{resumeData.skills}</p>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Contact</h2>
            <p className="text-gray-700">Email: {resumeData.contact.email}</p>
            <p className="text-gray-700">Phone: {resumeData.contact.phone}</p>
            <p className="text-gray-700">LinkedIn: {resumeData.contact.linkedin}</p>
          </section>
          <button
            onClick={generatePDF}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}