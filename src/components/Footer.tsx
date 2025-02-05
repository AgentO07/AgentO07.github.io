import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold">SNSV</h2>
            <p className="mt-4 text-gray-300 max-w-md">
              Your trusted chartered accountancy partner, providing expert financial guidance and innovative solutions for businesses.
            </p>
            <div className="mt-8 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              {['Home', 'About', 'Services', 'Industries', 'Resources', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`} className="text-base text-gray-300 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Newsletter
            </h3>
            <p className="mt-4 text-base text-gray-300">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="mt-4">
              <div className="flex space-x-4">
                <input
                  type="email"
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-navy-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-navy-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-navy-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {currentYear} SNSV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;