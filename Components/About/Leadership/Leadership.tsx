import { DoctorProfile } from '@/Components/DoctorProfile/DoctorProfile'
import React from 'react'
import { Facebook, Twitter, Linkedin } from "lucide-react";

type SocialLink = {
  icon: "facebook" | "twitter" | "linkedin";
  url: string;
};

const iconComponents = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
};

export const Leadership = () => {
  const doctors: {
    name: string;
    title: string;
    description: string;
    subTitle: string;
    imageSrc: string;
    socialLinks: SocialLink[];
  }[] = [
      {
        name: "Dr. S A Kullolli",
        title: "Founder, Chief Medical Director, and Head of Surgery",
        description: `Dr. SA Kullolli, the founder and Chief Medical Director of Kullolli Institute of Health Services, is a well-known surgeon in Western Maharashtra and North Karnataka. He worked in government hospitals from 1968 to 1996, eventually becoming the head doctor at Tasgaon District Hospital. After retiring from the government, he started his own clinic in 1996. Dr. Kullolli is passionate about helping people and has grown his practice from a small clinic to a large, 150-bed hospital. Dr. Kullolli's dedication to healthcare has earned him recognition and awards from various NGOs, including "Mannina Maga" from the Vimochana Devadasi Nirmulan Society and the "Excellence Award in Health Sector" from the Sakal Group. At 82 years old, Dr. Kullolli still actively cares for patients at his hospital.`,
        imageSrc: "/doctorImg.png",
        subTitle: "A visionary who transformed rural healthcare in Sangli.",
        socialLinks: [
          { icon: "facebook", url: "https://facebook.com" },
          { icon: "twitter", url: "https://twitter.com" },
          { icon: "linkedin", url: "https://linkedin.com" }
        ],
      },
      {
        name: "Dr. S A Kullolli",
        title: "Founder, Chief Medical Director, and Head of Surgery",
        description: `Dr. SA Kullolli, the founder and Chief Medical Director of Kullolli Institute of Health Services, is a well-known surgeon in Western Maharashtra and North Karnataka. He worked in government hospitals from 1968 to 1996, eventually becoming the head doctor at Tasgaon District Hospital. After retiring from the government, he started his own clinic in 1996. Dr. Kullolli is passionate about helping people and has grown his practice from a small clinic to a large, 150-bed hospital. Dr. Kullolli's dedication to healthcare has earned him recognition and awards from various NGOs, including "Mannina Maga" from the Vimochana Devadasi Nirmulan Society and the "Excellence Award in Health Sector" from the Sakal Group. At 82 years old, Dr. Kullolli still actively cares for patients at his hospital.`,
        imageSrc: "/doctorImg.png",
        subTitle: "A visionary who transformed rural healthcare in Sangli.",
        socialLinks: [
          { icon: "facebook", url: "https://facebook.com" },
          { icon: "twitter", url: "https://twitter.com" },
          { icon: "linkedin", url: "https://linkedin.com" }
        ],
      },
      {
        name: "Dr. S A Kullolli",
        title: "Founder, Chief Medical Director, and Head of Surgery",
        description: `Dr. SA Kullolli, the founder and Chief Medical Director of Kullolli Institute of Health Services, is a well-known surgeon in Western Maharashtra and North Karnataka. He worked in government hospitals from 1968 to 1996, eventually becoming the head doctor at Tasgaon District Hospital. After retiring from the government, he started his own clinic in 1996. Dr. Kullolli is passionate about helping people and has grown his practice from a small clinic to a large, 150-bed hospital. Dr. Kullolli's dedication to healthcare has earned him recognition and awards from various NGOs, including "Mannina Maga" from the Vimochana Devadasi Nirmulan Society and the "Excellence Award in Health Sector" from the Sakal Group. At 82 years old, Dr. Kullolli still actively cares for patients at his hospital.`,
        imageSrc: "/doctorImg.png",
        subTitle: "A visionary who transformed rural healthcare in Sangli.",
        socialLinks: [
          { icon: "facebook", url: "https://facebook.com" },
          { icon: "twitter", url: "https://twitter.com" },
          { icon: "linkedin", url: "https://linkedin.com" }
        ],
      },
      {
        name: "Dr. S A Kullolli",
        title: "Founder, Chief Medical Director, and Head of Surgery",
        description: `Dr. SA Kullolli, the founder and Chief Medical Director of Kullolli Institute of Health Services, is a well-known surgeon in Western Maharashtra and North Karnataka. He worked in government hospitals from 1968 to 1996, eventually becoming the head doctor at Tasgaon District Hospital. After retiring from the government, he started his own clinic in 1996. Dr. Kullolli is passionate about helping people and has grown his practice from a small clinic to a large, 150-bed hospital. Dr. Kullolli's dedication to healthcare has earned him recognition and awards from various NGOs, including "Mannina Maga" from the Vimochana Devadasi Nirmulan Society and the "Excellence Award in Health Sector" from the Sakal Group. At 82 years old, Dr. Kullolli still actively cares for patients at his hospital.`,
        imageSrc: "/doctorImg.png",
        subTitle: "A visionary who transformed rural healthcare in Sangli.",
        socialLinks: [
          { icon: "facebook", url: "https://facebook.com" },
          { icon: "twitter", url: "https://twitter.com" },
          { icon: "linkedin", url: "https://linkedin.com" }
        ],
      },

    ];
  return (
    <>
      <section className='w-full flex flex-col gap-8 md:px-24 lg:px-32'>
        <div className="w-full">
          <p className="text-sm text-blue-500 mb-1">Leadership & Values</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Meet Our Founders</h2>
        </div>
        <div className='w-full'>
          {doctors.map((doctor, index) => (
            <DoctorProfile key={index} {...doctor} />
          ))}
        </div>
      </section>
      <section className='w-full flex flex-col gap-8 md:px-24 lg:px-32'>
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Key Administrators</h2>
        </div>
        <div className='flex justify-between gap-5'>

          {
            doctors.map((doctor, index) => {
              return (
                <div key={index} className='flex flex-col gap-2'>
                  <img src={doctor.imageSrc} className='w-[250px]' alt="doctor image" />
                  <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-[18px]'>{doctor.name}</p>
                    <p className='font-medium text-[16px]'>{doctor.title}</p>
                    <p className='text-[14px] text-customGrey'>{doctor.subTitle}</p>
                    <div className="mt-4 flex space-x-4">
                      {doctor.socialLinks.map((link, index) => {
                        const IconComponent = iconComponents[link.icon];
                        return (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 transition"
                          >
                            <IconComponent className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </section>
      <section className='w-full flex flex-col gap-8 md:px-24 lg:px-32 pb-24'>
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Core Values</h2>
        </div>
        <div className='grid grid-cols-3 grid-rows-1 gap-4'>
          <button className="flex items-center justify-between px-4 py-4 bg-white border-[2px] border-ligthGrey rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <span className="flex flex-col items-start gap-2 pr-16">
              <img src="/handWithPlus.png" alt="hand with plus icon" className="w-8 h-8" />
              <span className="text-[16px] md:text-[18px] text-black font-semibold text-left">Commitment to Quality:</span>
              <span className="text-[14px] md:text-[16px] text-customGrey text-left">Ensuring the best outcomes for patients</span>
            </span>
          </button>
          <button className="flex items-center justify-between px-4 py-4 bg-white border-[2px] border-ligthGrey rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <span className="flex flex-col items-start gap-2 pr-16">
              <img src="/handWithPlus.png" alt="hand with plus icon" className="w-8 h-8" />
              <span className="text-[16px] md:text-[18px] text-black font-semibold text-left">Focus on Patient Safety:</span>
              <span className="text-[14px] md:text-[16px] text-customGrey text-left">Prioritising hygiene, safety, and comfort.</span>
            </span>
          </button>
          <button className="flex items-center justify-between px-4 py-4 bg-white border-[2px] border-ligthGrey rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <span className="flex flex-col items-start gap-2 pr-16">
              <img src="/handWithPlus.png" alt="hand with plus icon" className="w-8 h-8" />
              <span className="text-[16px] md:text-[18px] text-black font-semibold text-left">Continuous Innovation:</span>
              <span className="text-[14px] md:text-[16px] text-customGrey text-left">Adopting new technologies and practices to improve healthcare delivery.</span>
            </span>
          </button>
        </div>
      </section>
    </>
  )
}
