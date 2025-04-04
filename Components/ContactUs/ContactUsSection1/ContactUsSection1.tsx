import React from 'react'


export const ContactUsSection1 = () => {
    const data = [
        {
          label:"care@kullollihealth.com",
          icon: "/message_vector.png",
        },
        {
          label:"kihssangli@gmail.com",
          icon: "/message_vector.png",
        },
      ]
    return (
        <section className='w-full h-max md:h-[70vh] bg-white pb-6 flex items-center relative box-border'>
            <div className='hidden md:block w-max h-max'>
                <img className='h-[70vh]' src="/contactus-building.png" alt="Picture of the building" />
            </div>
            <div className='w-full px-4 pt-8 md:p-0 md:w-fit flex flex-col gap-8 md:pl-12'>
                <img className='w-full block md:hidden' src="/hero_building_mobile.png" alt="Picture of the building" />
                <div className='flex flex-col gap-2'>
                    <h3 className='text-2xl md:text-3xl lg:text-5xl text-black font-semibold'>Kullolli Institute of <br className='hidden md:block' /> Health Services</h3>
                    <div>
                    <p className='text-customGrey md:hidden text-[12px] md:text-[16px]'>Setting new benchmarks in Western Maharashtra with the highest number of endo-urology and laparoscopic surgeries!!</p>
                </div>
                </div>
                <div className='flex flex-col pr-20 gap-4'>
                {
              data.map((item,index)=>{
                return(
                    <button key={index}
                    className="flex items-center justify-between px-4 py-4 bg-outlineGrey border-[2px] border-ligthGrey rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200">
                    <span className="flex items-center gap-3">
                      <img src={item.icon} alt={`${item.label.toLowerCase()} icon`} />
                      <span className="text-[14px] md:text-[16px]">{item.label}</span>
                    </span>
                  </button>
                )
              })
            }
                </div>
            </div>

        </section>
    )
}