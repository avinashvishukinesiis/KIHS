import ServiceButton from '@/Components/ServiceButton/ServiceButton'
import React from 'react'




export const Section2 = () => {

  const data = [
    {
      label:"Medical Services",
      icon: "/handWithPlus.png",
    },
    {
      label:"Patient Facilities",
      icon: "/patientVector.png",
    },
    {
      label:"Book Appointment",
      icon: "/calendar.png",
    },
    {
      label:"OPD Details",
      icon: "/OpdVector.png",
    },
    {
      label:"Insurance & Billing",
      icon: "/billCard.png",
    },
    {
      label:"Doctors & Departments",
      icon: "/health-check.png",
    },
  ]

  return (
    <section className='py-8 px-4 md:py-16 md:px-36 w-full h-max'>
      <div className='px-4 py-12 md:p-12 w-full h-max rounded-2xl shadow-2xl flex flex-col gap-8'>
        <div>
          <h3 className='text-primary2 font-normal'>Key Services</h3>
          <p className='font-semibold text-black text-[12px] md:text-[16px]'>Setting new benchmarks in Western Maharashtra! Leading the way with the highest number of endo-urology and laparoscopic surgeries.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              data.map((item,index)=>{
                return(
                  <ServiceButton key={index} label={item.label} icon={item.icon} />
                )
              })
            }
        </div>
      </div>

    </section>
  )
}

