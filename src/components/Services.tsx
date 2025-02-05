import React from 'react';
import { Briefcase, LineChart, Calculator, FileText, PieChart, Building } from 'lucide-react';

const services = [
  {
    icon: <Calculator className="w-8 h-8 text-navy-600" />,
    title: 'Tax Planning & Compliance',
    description: 'Strategic tax planning and compliance services to optimize your financial position.'
  },
  {
    icon: <FileText className="w-8 h-8 text-navy-600" />,
    title: 'Audit & Assurance',
    description: 'Comprehensive audit services ensuring accuracy and compliance with regulations.'
  },
  {
    icon: <LineChart className="w-8 h-8 text-navy-600" />,
    title: 'Financial Advisory',
    description: 'Expert financial guidance to help your business make informed decisions.'
  },
  {
    icon: <Briefcase className="w-8 h-8 text-navy-600" />,
    title: 'Business Consulting',
    description: 'Strategic business consulting to drive growth and optimize operations.'
  },
  {
    icon: <PieChart className="w-8 h-8 text-navy-600" />,
    title: 'Corporate Finance',
    description: 'Comprehensive corporate finance solutions for business success.'
  },
  {
    icon: <Building className="w-8 h-8 text-navy-600" />,
    title: 'Risk Management',
    description: 'Effective risk management strategies to protect your business interests.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive financial solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-navy-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-navy-50 text-navy-700 ring-4 ring-white">
                  {service.icon}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;