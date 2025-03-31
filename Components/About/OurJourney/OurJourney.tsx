'use client'
import React from 'react'



export const OurJourney = () => {

  const contentItem = ["Inspire every individual to set new standards in patient healthcare.", "Continuously train our staff to ensure the highest level of competency and professionalism.", "Keep our team updated with the latest trends in healthcare for advanced treatment options.", "Provide the most advanced medical care at an affordable cost.", "Respect patient privacy, dignity, and individuality at all times.", "Focus on improving patients' quality of life through education and empowerment.", "Encourage patients to be active partners in their own healthcare journey.", "Maintain transparency, professionalism, and honesty in all our communications."]

  return (
    <>
      <section className='flex justify-around w-full mt-16 md:px-24 lg:px-32 gap-12'>
        <div className='relative'>
          <img src="/nabh.png" className='w-[100px] h-[100px] -top-[50px] left-10 absolute' alt="NABH Logo" />
          <img src='/about_hero.png' className='w-[100%] h-[500px] rounded-2xl' alt='KIHS building' />
          <div className='absolute bottom-0 w-[100%] min-h-[100px] rounded-lg bg-white shadow-2xl flex justify-around items-center'>
            <div className='flex flex-col'>
              <h2 className='text-primary1 text-2xl font-semibold'>20K</h2>
              <p className='text-[14px] text-customGrey'>Happy <br /> customers</p>
            </div>
            <div className='flex flex-col'>
              <h2 className='text-primary1 text-2xl font-semibold'>50+</h2>
              <p className='text-[14px] text-customGrey'>Doctors on<br /> call</p>
            </div>
            <div className='flex flex-col'>
              <h2 className='text-primary1 text-2xl font-semibold'>20K</h2>
              <p className='text-[14px] text-customGrey'>Super <br /> Specialities</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
          <div>
            <p className="text-sm text-blue-500 mb-1">About Us</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Welcome to KIHS</h2>
            <div />
            <p className="text-customGrey text-[14px] mb-6">The Kullolli Institute of Health Services (KIHS) is a trusted name in affordable and quality healthcare in Sangli. Since its establishment, we have been committed to bridging the healthcare gap for rural and underserved communities, ensuring that no patient is left behind</p>

          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">History & Evolution</h2>
            <div />
            <p className="text-customGrey text-[14px] mb-6">KIHS was founded in 1991 by Dr. S.A. Kullolli, an accomplished MS General Surgeon and a Class I Government officer, who recognised the challenges faced by rural patients in accessing quality healthcare. He left his government position to begin serving the community from a modest one-room clinic in Vishrambag, Sangli. Over the years, this initiative has grown into a multi-specialty healthcare institution with state-of-the-art facilities, making it a landmark in Sangli&apos;s healthcare landscape.</p>

          </div>
        </div>
      </section>
      <section className='w-full min-h-[200px] flex justify-around gap-20 items-center bg-secondaryTint md:px-24 lg:px-32 gap-12'>
        <div className='flex flex-col'>
          <p className="text-sm text-blue-500 mb-1">Our Vision</p>
          <h2 className='text-[40px] font-semibold leading-11'><span className='text-nowrap'>Affordable Quality</span> <br /><span className='text-primary1'>Health for All</span></h2>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col items-center md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8'>
          <p className="text-customGrey text-[14px] mt-6 md:pr-20">This motto drives our mission to deliver high-quality, affordable medical care to everyone, regardless of their socioeconomic background.</p>
        </div>
      </section>
      <section className='w-full flex flex-col gap-8 md:px-24 lg:px-32'>
        <div>
          <p className="text-sm text-blue-500 mb-1">Our Mission</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">To create a future where everyone can access advanced healthcare without financial or geographical barriers.</h2>
        </div>
        <div>
          <h3 className='text-[14px] font-bold'>Mission Statements</h3>
          <div className='grid grid-cols-2 gap-4'>
            {contentItem.map((item, index) => {
              return (
                <button key={index} className="flex items-center justify-between px-4 py-4 bg-white border-[2px] border-ligthGrey rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200">
                  <span className="flex items-center gap-8 pr-16">
                    <img src="/handWithPlus.png" alt="hand with plus icon" className="w-8 h-8" />
                    <span className="text-[14px] md:text-[16px] text-customGrey text-left">{item}</span>
                  </span>
                </button>
              )

            })}
          </div>
        </div>
      </section>
      <section className='px-32 w-full'>
        <div className='w-full min-h-[100px] bg-secondaryTint rounded-2xl flex items-center justify-center py-4 px-16'>
          <div className='pr-28 flex flex-col gap-3'>
            <h2 className='font-semibold text-2xl'>Commitment to Excellence</h2>
            <p className='text-customGrey text-[14px]'>
              At KIHS, excellence isn’t just a goal—it’s a promise. KIHS, built on 34 years of healthcare experience, is committed to excellence in patient care. Our logo embodies this commitment, uniquely blending medication and meditation with science and spirituality for holistic well-being. We strive to provide affordable, safe, and leading-edge healthcare, developing skilled professionals dedicated to continuous improvement.
            </p>
          </div>
          <div>
            <img src="/healthcare.png" className='w-[600px]' alt="Two hands holding heart with the plus icon inside" />
          </div>
        </div>
      </section>
      <section className='flex flex-row-reverse justify-around w-full md:px-24 lg:px-32 gap-12'>
        <div className='relative'>

          <img src='/about_hero.png' className='w-[100%] h-[500px] rounded-2xl' alt='KIHS building' />

        </div>
        <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
          <div>
            <p className="text-sm text-blue-500 mb-1">State-of-the-Art Healthcare</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Facilities & Specialised Units</h2>
            <div />
            <div className='flex flex-col gap-4'>
              <span className='flex gap-2'><img src="/handWithPlus.png" className='w-6 h-6' alt="hand plus" /> <p className='text-[14px] text-customGrey'>Modular operation theatres for advanced surgeries, including laparoscopic, gynaecological, and urological procedures.</p></span>
              <span className='flex gap-2'><img src="/handWithPlus.png" className='w-6 h-6' alt="hand plus" /> <p className='text-[14px] text-customGrey'>Cutting-edge ophthalmology equipment for precision diagnostics and treatment.</p></span>
              <span className='flex gap-2'>
                <img src="/handWithPlus.png" className='w-6 h-6' alt="hand plus" />
                <div className='text-[14px] text-customGrey'>
                    <p>Specialised units for: </p>
                     <ul className='pl-8 list-disc'>
                       <li>Laparoscopic surgeries</li>
                       <li>Laparoscopic surgeries</li>
                       <li>Laparoscopic surgeries</li>
                       <li>Laparoscopic surgeries</li>
                       <li>Laparoscopic surgeries</li>
                     </ul>
                </div>
              </span>
            </div>

          </div>
        </div>
      </section>
      <section className='flex justify-around w-full md:px-24 lg:px-32 gap-12 pb-24'>
        <div className='relative'>

          <img src='/about_hero.png' className='w-[100%] h-[500px] rounded-2xl' alt='KIHS building' />

        </div>
        <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Patient-Centric Care Features</h2>
            <div />
            <div className='flex flex-col gap-4'>
              <span className='flex gap-2'><img src="/handWithPlus.png" className='w-6 h-6' alt="hand plus" /> <p className='text-[14px] text-customGrey'>Customised treatment plans to suit individual patient needs.</p></span>
              <span className='flex gap-2'>
                <img src="/handWithPlus.png" className='w-6 h-6' alt="hand plus" />
                <div className='text-[14px] text-customGrey'>
                    <p>Safety-focused infrastructure, including:  </p>
                     <ul className='pl-8 list-disc'>
                       <li>Ramps, sidebars, wheelchair-friendly designs.</li>
                       <li>Handicapped-accessible toilets and modern bed lifts.</li>
                     </ul>
                </div>
              </span>
              <span className='flex gap-2'>
                <img src="/handWithPlus.png" className='w-6 h-6' alt="hand plus" />
                <div className='text-[14px] text-customGrey'>
                    <p>Environmentally sustainable practices:</p>
                     <ul className='pl-8 list-disc'>
                       <li>Over 500 plants to improve air quality and reduce pollution.</li>
                       <li>Centralised AHU (Air Handling Unit) for clean air circulation.</li>
                     </ul>
                </div>
              </span>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
