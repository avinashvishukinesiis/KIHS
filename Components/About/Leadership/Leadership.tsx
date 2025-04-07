import { DoctorProfile } from '@/Components/DoctorProfile/DoctorProfile'
import React, { useEffect } from 'react'
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

    useEffect(() => {
      // Get the carousel and navigation buttons
      const carousel = document.getElementById("doctors-carousel")
      const scrollLeftBtn = document.getElementById("scroll-left")
      const scrollRightBtn = document.getElementById("scroll-right")
  
      if (carousel && scrollLeftBtn && scrollRightBtn) {
        // Scroll left button click handler
        scrollLeftBtn?.addEventListener("click", () => {
          carousel.scrollBy({ left: -300, behavior: "smooth" })
        })
  
        // Scroll right button click handler
        scrollRightBtn?.addEventListener("click", () => {
          carousel.scrollBy({ left: 300, behavior: "smooth" })
        })
  
        // Clean up event listeners
        return () => {
          scrollLeftBtn?.removeEventListener("click", () => {})
          scrollRightBtn?.removeEventListener("click", () => {})
        }
      }
    }, [])
  return (
    <>
      <section className='w-full flex flex-col gap-8 px-4 md:px-24 lg:px-32'>
        <div className="w-full">
          <p className="text-sm text-blue-500 mb-1">Leadership & Values</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Meet Our Founders</h2>
        </div>
        <div className='w-full flex flex-col gap-8'>
          {doctors.map((doctor, index) => (
            <DoctorProfile key={index} {...doctor} />
          ))}
        </div>
      </section>
      <section className="w-full flex flex-col gap-8 px-4 md:px-24 lg:px-32 my-12">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Key Administrators</h2>
          <div className="hidden md:flex items-center gap-2">
            <button
              id="scroll-left"
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 19L8 12L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              id="scroll-right"
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 5L16 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable container with custom scrollbar */}
        <div className="relative w-[70vw] md:w-[80vw]">
          <div
            id="doctors-carousel"
            className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
            style={{
              scrollbarWidth: "thin",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarColor: "rgb(209 213 219) transparent",
            }}
          >
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="flex-none w-[280px] snap-start rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white"
              >
                <div className="aspect-[4/3] bg-blue-50 overflow-hidden">
                  <img
                    src={doctor.imageSrc || "/placeholder.svg"}
                    alt={`${doctor.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="font-semibold text-lg">{doctor.name}</h3>
                  <p className="text-sm text-gray-700 font-medium">{doctor.title}</p>
                  <p className="text-sm text-gray-500">{doctor.subTitle}</p>
                  <div className="mt-3 flex space-x-3">
                    {doctor.socialLinks.map((link, idx) => {
                      const IconComponent = iconComponents[link.icon]
                      return (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                          aria-label={`${link.icon} profile`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile scroll indicator */}
          <div className="flex justify-center mt-4 md:hidden">
            <div className="flex gap-1">
              {doctors.slice(0, Math.min(doctors.length, 5)).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full ${idx === 0 ? "w-6 bg-blue-500" : "w-1.5 bg-gray-300"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col gap-8 px-4 md:px-24 lg:px-32 pb-24'>
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Core Values</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-4'>
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
