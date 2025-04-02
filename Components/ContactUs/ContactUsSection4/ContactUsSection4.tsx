import React from 'react'

export const ContactUsSection4 = () => {
  return (
    <section className="w-full mx-auto p-4 md:p-16 text-gray-800">
      {/* Get in Touch Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Get in Touch:</h2>
        <p className="mb-2">For any inquiries, please don&apos;t hesitate to contact us:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Appointments: <a href="tel:0233-2305329" className="text-primary1 hover:underline">0233-2305329</a>, <a href="tel:9156305329" className="text-primary1 hover:underline">9156305329</a>
          </li>
          <li>
            Billing & Insurance: <a href="tel:0233-2305329" className="text-primary1 hover:underline">0233-2305329</a>, <a href="tel:9156305329" className="text-primary1 hover:underline">9156305329</a> Extn: 2000
          </li>
          <li>
            Feedback & Complaints: <a href="tel:0233-2305329" className="text-primary1 hover:underline">0233-2305329</a>, <a href="tel:9156305329" className="text-primary1 hover:underline">9156305329</a> Extn: 2004
          </li>
        </ul>
      </div>

      {/* Hospital Hours Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Hospital Hours:</h2>
        <p className="mb-2">We provide 24/7 care for all emergencies. Our general and specialised services operate at the following times:</p>
        <ul className="list-disc pl-5 space-y-3">
          <li>General Hospital: 24 Hours, 7 Days a Week</li>
          
          <li className="pl-0">
            <p>Outpatient Department (OPD): 10:00 AM to 7:00 PM, Monday to Saturday (Closed on Sundays. Emergency services only.)</p>
          </li>
          
          <li>Laboratory: 24 Hours, 7 Days a Week</li>
          
          <li>Radiology: 8:00 AM to 8:00 PM, Monday to Saturday (24/7 Emergency Services Available)</li>
        </ul>
      </div>

      {/* 24/7 Emergency Services Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">24/7 Emergency Services:</h2>
        <p className="mb-2">We understand that emergencies can happen anytime. Our emergency services are available 24 hours a day, 7 days a week.</p>
        <p>
          Call us at <a href="tel:0233-2305329" className="text-primary1 font-medium hover:underline">0233-2305329</a> or <a href="tel:9156305329" className="text-primary1 font-medium hover:underline">9156305329</a> for immediate assistance.
        </p>
      </div>

      {/* Connect With Us Online Section */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Connect With Us Online:</h2>
        <p className="mb-3">Stay updated and connect with us through our social media channels:</p>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-6 h-6 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-full h-full fill-current">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </div>
            <span>Instagram: <a href="https://instagram.com/kihssangli" className="text-primary1 hover:underline">@kihssangli</a></span>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full fill-current">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
              </svg>
            </div>
            <span>Kullolli Institute of Health Services</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-full h-full fill-current">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
              </svg>
            </div>
            <span>Youtube: <a href="https://www.kullollihealth.com" className="text-primary1 hover:underline">www.kullollihealth.com</a></span>
          </div>
        </div>
      </div>
    </section>
  )
}
