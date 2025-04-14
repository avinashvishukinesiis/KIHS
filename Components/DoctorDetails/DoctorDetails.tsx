import React from "react";
import { Mail } from "lucide-react";

function DoctorDetails() {
  const doctors = [
    {
      name: "Dr. Shivgonda A. Kullolli",
      title: "Founder, Chief Medical Director, and Head of Surgery",
      imageSrc: "/doctorImg.png",
      phone: "0233–2305329, 9156305329",
      subTitle: "Timing Monday to Friday.",
    },
  ];

  return (
    <div>
      <section className="w-full flex flex-col gap-8 px-4 md:px-24 lg:px-32">
        <div className="w-full">
          <p className="text-xl text-blue-500 mb-1">Doctors Details</p>
        </div>

        <div className="w-full flex flex-col gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-30 items-center"
            >
              <img
                src={doctor.imageSrc}
                alt={doctor.name}
                className="w-full md:w-80 md:h-80 object-cover rounded-lg"
              />
              <div className="flex-1 flex flex-col justify-center ">
                <h2 className="text-2xl font-bold">{doctor.name}</h2>
                <p className="text-xl font-bold mt-5">{doctor.title}</p>
                <a
                  href="#"
                  className="text-sm text-blue-600 font-medium underline mb-2 py-3"
                >
                  OPD Timing
                </a>

                <div className="flex items-center gap-2 bg-gray-100 text-sm px-3 py-2 rounded-md w-fit mb-2">
                  <Mail className="h-4 w-4 text-gray-600" />
                  <span>{doctor.phone}</span>
                </div>
                {doctor.subTitle && (
                  <p className="mt-2 italic text-sm text-gray-600">
                    {doctor.subTitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="w-full flex flex-col gap-8 px-6S md:px-24 lg:px-32">
        <div className="mt-12 w-full bg-yellow-100 p-8 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Educational Tab</h3>
          <p className="text-sm text-gray-800">
            We answer phones promptly and politely, ask permission before
            holding calls, provide extension numbers when transferring, follow
            up with callers, respond to messages timely
          </p>
        </div>

        <div className="mt-6 w-full p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Training</h3>
          <p className="text-sm text-gray-700">
            We answer phones promptly and politely, ask permission before
            holding calls, provide extension numbers when transferring, follow
            up with callers, respond to messages timely
          </p>
        </div>

        <div className="mt-6 w-full bg-blue-100 p-8 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Statistics</h3>
          <div className="text-sm text-gray-800 space-y-1">
            <p>Years of Experience</p>
            <p>Number of Patients Treated</p>
            <p>Publications</p>
            <p>Links to PDF</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
