"use client";

import Image from "next/image";

const services = [
  {
    title: "Professionalism",
    description: `Our staff maintains high professional standards through
    proper appearance
    visible ID badges
    empathetic patient care
    clear service expectations
    complaint ownership
    competency development, and
    workplace cleanliness.`,
    imageUrl: "/profesnal.png",
  },
  {
    title: "Communication",
    description: `We answer phones promptly and politely
    ask permission before holding calls
    provide education numbers when transferring
    follow up on callers
    respond to messages timely.`,
    imageUrl: "/Communication.png",
  },
  {
    title: "General Communication",
    description: `We acknowledge patients with smiles and eye contact
    introduce ourselves formally
    seek permission
    use understandable language
    listen attentively
    build trust
    apologize sincerely
    thank patients
    speak quietly and
    explain procedures clearly.`,
    imageUrl: "/General Communication.png",
  },
  {
    title: "Customer Service",
    description: `We respond quickly to requests
    answer call lights promptly
    address patients by preferred nomes
    check on patients hourly
    provide timely updates
    assist coworkers
    arrive punctually
    explain medicarions
    monitor pain levels, and
    prepare patients for discharge.`,
    imageUrl: "/Customer Service.png",
  },
  {
    title: "Compassionate Care",
    description: `We protect patient information privacy
    demonstrate empathy to emotional and spiritual needs, and
    include patients in discussions about their treatment plans`,
    imageUrl: "/Compassionate Care.png",
  },

  {
    title: "Common Courtesy",
    description: `we greet other with smiles
    meet everyone respectfully
    prioritise accessibility
    escart visitors
    comfirm needs are met, and
    respond promptly to customers.`,
    imageUrl: "/Common Courtesy.png",
  },

  {
    title: "Patient Privacy",
    description: `We knock before entering rooms
    close doors for privacy
    inform patients of privacy measures
    ask visitors to step out when necessary
    properly cover patients during transpart,and
    avoid discussing patient matters in public areas`,
    imageUrl: "/Patient Privacy.png",
  },

  {
    title: "Teamwork",
    description: `we work collaboratively
    encourage participation from all team members
    offer help to coworkers
    solve problems together
    provide constructive feedback appropriately, and
    adapt to continuous improvement.`,
    imageUrl: "/Communication.png",
  },

  {
    title: "Respect",
    description: `We value individual uniaueness
    respect patients' knowledge of their conditions
    protect privacy
    show cultural awareness,
    maintain qulet in patient areas, and
    engage patients directly in conversations.`,
    imageUrl: "/Respect.png",
  },
  {
    title: "Quality Standards and Management Facilities",
    description: `We provide high-quality care through advanced
    24-hour emergency services
    fully equipped ICU beds
    dedicated isolation rooms
    electronic medical records
    and sophisticated modular operating theatres.`,
    imageUrl: "/Quality Standards.png",
  },
  {
    title: "Quality Team",
    description: `Our multi-specialty services are organized efforts from
  various healthcare professionals with zero tolerance for errors
  using key indicators, rapid response teams, minimal waiting 
  times,clinical audits, and coordinated patient care.`,
    imageUrl: "/Quality Team.png",
  },
];

export default function ServiceStandards() {
  return (
    <div className="px-9 md:px-20 py-10 max-w-7xl mx-auto">
      <div className="mb-10">
        <p className="text-sm text-blue-600 font-semibold">Service Standards</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-1">
          Quick Glance at Our Service Standards
        </h2>
      </div>

      <div className="space-y-20 py-10 ">
        {services.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`w-full h-80 md:h-96 relative rounded-xl overflow-hidden shadow ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover rounded-xl w-8xl"
              />
            </div>

            <div
              className={`md:px-6 ml-10 ${index % 2 === 1 ? "md:order-1" : ""}`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
