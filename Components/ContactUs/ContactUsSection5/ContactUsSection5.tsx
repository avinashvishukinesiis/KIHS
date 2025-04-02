import React from "react";

const adminContacts = [
  { department: "Chief Administrative Officer", name: "Dr. Mahadev Mali", email: "admin@kulollihealth.com" },
  { department: "Quality Manager", name: "Dr. Simran Bagwan", email: "qualitycell@kulollihealth.com" },
  { department: "Ophthalmology Administrator", name: "Mr. Pramod Vanjari", email: "-" },
  { department: "Human Resource Manager", name: "Mr. Sachin Parit", email: "hr@kulollihealth.com" },
  { department: "Account Department", name: "Mrs. Mahananda Kalyani", email: "accounts@kulollihealth.com" },
  { department: "IT Head", name: "Mr. Suhas Kumbhar", email: "it@kulollihealth.com" },
  { department: "Diagnostic Department", name: "Mrs. Padmavati Saijanshettar", email: "lab@kulollihealth.com" },
  { department: "Clinical Record Department", name: "Mrs. Pradnya Chouknis", email: "care@kulollihealth.com" },
  { department: "Cashless Department", name: "Miss. Revati Suryavanshi", email: "cashless@kulollihealth.com" },
  { department: "Facility & Safety Maintenance", name: "Er. Tejas Awati", email: "-" },
  { department: "Nursing Superintendent", name: "Mrs. Namita Patwardhan", email: "-" },
  { department: "Procurement Head", name: "Ms. Rupali Yadav", email: "-" }
];

export const ContactUsSection5 = () => {
  return (
    <section className="overflow-x-auto p-4 md:p-16">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-primary1 text-white text-left rounded-t-lg">
            <th className="py-3 px-4 first:rounded-tl-lg last:rounded-tr-lg">Department</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Email</th>
          </tr>
        </thead>
        <tbody>
          {adminContacts.map((contact, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-4">{contact.department}</td>
              <td className="py-3 px-4">{contact.name}</td>
              <td className="py-3 px-4 text-blue-500">
                {contact.email !== "-" ? (
                  <a href={`mailto:${contact.email}`} className="underline">
                    {contact.email}
                  </a>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

