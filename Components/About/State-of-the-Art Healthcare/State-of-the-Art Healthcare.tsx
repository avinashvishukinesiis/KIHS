import React from 'react'

export const StateOfTheArtHealthcare = () => {

  return (
    <>
      <section className='flex flex-row-reverse justify-around w-full md:px-24 lg:px-32 gap-12 mt-16'>
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
