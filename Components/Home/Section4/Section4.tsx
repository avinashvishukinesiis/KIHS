import React from 'react'
import { ContentSection } from '../ContentSection/ContentSection'

export const Section4 = () => {
  return (
    <section>

        <ContentSection 
            subtitle="About Us"
            title="About KIHS"
            description="Welcome to the Kulloli Institute of Health Services, a cornerstone of quality and affordable healthcare in Sangli. After serving 27 years as a Class I Government Medical Superintendent, Dr. Kulloli took voluntary retirement in 1996 to dedicate himself fully to his vision of accessible healthcare for all. 
            
            What started as a small clinic has grown into a fully-fledged state-of-the-art healthcare institution. Today, we proudly stand as a trusted name in the region, delivering advanced medical care with compassion and integrity."
            imageSrc="/doctor_lady.png"
            imageAlt="Healthcare professional with stethoscope"
            imagePosition="left"
            buttons={[
              {
                label: "Learn More",
                primary: false,
                onClick: () => { alert('Button clicked') },
              },
              {
                label: "Emergency contacts",
                primary: true,
                onClick: () => { alert('Button clicked') },
              },
            ]}
        />
        
    </section>
  )
}
