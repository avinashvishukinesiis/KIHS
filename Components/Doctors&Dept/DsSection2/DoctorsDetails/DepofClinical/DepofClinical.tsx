import React from "react";

function DepofClinical() {
  return (
    <div className="flex flex-col md:flex-row-reverse px-4 md:px-16  justify-around w-full mt-16 gap-12 pb-24">
      <div className="relative">
        <img
          src="/doctor_group.png"
          className="rounded-2xl"
          alt="KIHS building"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            10.Department of Clinical
          </h2>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Pathology (Shailaja Diagnostics)
          </h2>
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
            <li>Pathology</li>
            <li>Biochemistry</li>
            <li>Serology</li>
            <li>Hormone Assay</li>
            <li>Microbiology</li>
            <li>Histopathology</li>
            <li>Haematology</li>
            <li>Coagulation Studies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DepofClinical;
