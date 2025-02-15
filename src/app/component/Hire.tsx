"use client"
import Link from 'next/link';
import { AiFillWechat } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaICursor, FaFilter } from 'react-icons/fa';
import { Fa2 } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg- py-8 ">
      <div className="max-w-6xl mx-auto flex justify-center space-x-6">
        {/* GitHub */}
        <Link
          href="https://github.com/QaimudinKhuwaja/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-12 h-12 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
        >
          <FaGithub size={24} />
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/qaimudin-khuwaja-7127252b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-12 h-12 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
        >
          <FaLinkedin size={24} />
        </Link>

        {/* Email */}
        <Link
          href="mailto:farazahmedkhuwaja171@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-12 h-12 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
        >
          <FaEnvelope size={24} />
        </Link>

         {/* GitHub */}
         <Link
          href="https://www.facebook.com/qaimudinkhuwaja"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-12 h-12 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
        >
          <FaFacebook size={24} />
        </Link>
           

      </div>

     
    </div>
  );
};

export default Footer;