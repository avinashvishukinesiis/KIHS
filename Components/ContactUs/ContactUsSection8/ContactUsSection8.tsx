import React, { useState } from 'react';
import CustomButton from '@/Components/CustomButton/CustomButton';

export const ContactUsSection8 = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        services: [] as string[]
      });
      
      const services = [
        'Service 1',
        'Service 2',
        'Service 3',
        'Service 1',
        'Service 2',
        'Service 3'
      ];
      
      const handleServiceToggle = (service: string) => {
        setFormData(prev => {
          if (prev.services.includes(service)) {
            return {
              ...prev,
              services: prev.services.filter(s => s !== service)
            };
          } else {
            return {
              ...prev,
              services: [...prev.services, service]
            };
          }
        });
      };
      
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
      };
  return (
    <section className="w-full mx-auto px-4 py-8 md:px-16 md:py-16 bg-white">
      <div className="mb-6">
        <h3 className="text-primary1 text-sm mb-2">Contact Us</h3>
        <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Name fields - side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
          </div>
        </div>
        
        {/* Email and Phone fields - side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>
        
        {/* Services section */}
        <div className="mb-6">
          <p className="text-gray-800 font-medium mb-3">Services you are interested in</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {services.map((service, index) => (
              <button
                key={`${service}-${index}`}
                type="button"
                className={`px-4 py-3 rounded-full border text-left transition-colors ${
                  formData.services.includes(service) 
                    ? 'border-blue-500 bg-blue-50 text-blue-600' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => handleServiceToggle(service)}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
        
        {/* Message field */}
        <div className="mb-6">
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-3 rounded-3xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          ></textarea>
        </div>
        
        {/* Submit button */}
        <div>
          <CustomButton label='Submit' primary={true} onClick={()=>'submit'} btntype='submit' />
        </div>
      </form>
    </section>
  )
}
