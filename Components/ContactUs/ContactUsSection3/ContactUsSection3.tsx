import React from 'react'

export const ContactUsSection3 = () => {
    const doctor_img=['/doctor_ot.png','/doctor_tele.png','/doct_img.png','/Doctor_portfolio.png']
  return (
    <section className='min-h-32 grid grid-cols-2 md:grid-cols-4 p-2 gap-2 md:p-16 md:gap-4'>
        {
            doctor_img.map((url,index)=>{
                return(
                    <img key={index} src={url}  />
                )
            })
        }
    </section>
  )
}
