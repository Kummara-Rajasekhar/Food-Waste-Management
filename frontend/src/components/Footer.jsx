import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-50 via-green-100 to-white rounded-t-3xl shadow-inner px-6 sm:px-12 py-16 mt-32">
      <div className="grid md:grid-cols-[3fr_1fr_1fr] gap-12 text-sm text-gray-700 animate-fade-in">

        {/* About Section */}
        <div className="transform transition-transform hover:scale-105 duration-500">
          <p className="text-base leading-relaxed text-gray-700 md:w-4/5">
            <span className="text-green-700 font-semibold">ZeroWaste</span> is dedicated to reducing food waste by connecting donors with communities in need. We empower people to donate surplus food and help the environment by reducing emissions.
          </p>
        </div>

        {/* Company Links */}
        <div className="transition duration-300 hover:opacity-90">
          <p className="text-lg font-bold text-green-800 mb-4">Company</p>
          <ul className="space-y-2">
            {['Home', 'About Us', 'Contact Us', 'Privacy Policy'].map((item, index) => (
              <li
                key={index}
                className="hover:text-green-600 hover:translate-x-1 transition-transform"
              >
                <a href={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="transition duration-300 hover:opacity-90">
          <p className="text-lg font-bold text-green-800 mb-4">Get in Touch</p>
          <ul className="space-y-2">
            <li className="hover:text-green-600 hover:scale-105 transition-transform">
              <a href="tel:+1234567890">+1-234-567-890</a>
            </li>
            <li className="hover:text-green-600 hover:scale-105 transition-transform">
              <a href="mailto:info@zerowaste.com">info@zerowaste.com</a>
            </li>
            <li className="hover:text-green-600 hover:scale-105 transition-transform">
              <a href="https://facebook.com/ZeroWaste" target="_blank" rel="noreferrer">Facebook</a>
            </li>
            <li className="hover:text-green-600 hover:scale-105 transition-transform">
              <a href="https://twitter.com/ZeroWaste" target="_blank" rel="noreferrer">Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center">
        <hr className="border-t border-green-200 mb-4" />
        <p className="text-xs text-gray-500 tracking-wide">
          © {new Date().getFullYear()} <span className="text-green-700 font-semibold">ZeroWaste</span> – All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
