import React from "react";

function DepaofObGy() {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-16  justify-around w-full mt-16 gap-12 pb-24">
      <div className="relative flex items-center justify-center">
        <img
          src="/support_doc.png"
          className="rounded-2xl"
          alt="KIHS building"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            1.Department of Surgery
          </h2>
          <p className="text-customGrey text-[14px]">Paediatric Surgeries</p>
          <p className="text-customGrey text-[14px] font-semibold mb-6">
            Gastro Intestinal Surgeries
          </p>
          <div />
          <p className="text-customGrey text-[14px]">
            Advanced Laparoscopic Surgeries
          </p>
          <p className="text-customGrey text-[14px] mb-6">
            Major & Super major Surgeries
          </p>
          <p className="text-customGrey text-[14px] font-semibold">
            Hernia Appendix,Gallbaladder Stone, Piles, Fissure, Breast Surgeries
          </p>
        </div>
      </div>
    </div>
  );
}

export default DepaofObGy;
