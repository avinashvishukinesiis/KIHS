import React from "react";
import DepaofSurgery from "./DepaofSurgery/DepaofSurgery";
import DepaofObGy from "./DepaofOb&Gy/DepaofObGy";
import DepaofUrEndo from "./DepaofUr&Endo/DepaofUrEndo";
import DepaofNeo from "./DepaofNeo/DepaofNeo";
import DepaofMedi from "./DepaofMedi/DepaofMedi";
import DepaofMedici from "./DepaofMedici/DepaofMedici";
import DepaofEnt from "./DepaofEnt/DepaofEnt";
import DepaofNep from "./DepaofNep/DepaofNep";
import DepaofRadiology from "./DepaofRadiology/DepaofRadiology";
import DepofClinical from "./DepofClinical/DepofClinical";

export const DoctorsDetails = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-6">
      <a href="#" className="text-sm text-blue-500 hover:underline">
        Departments and Facilities Available{" "}
      </a>
      <div className="text-2xl sm:text-3xl font-bold mb-4">
        Departments and Facilities Available{" "}
      </div>
      <div className="text-2xl sm:text-3xl font-bold mb-4">at KIHS </div>
      <DepaofObGy />
      <DepaofSurgery />
      <DepaofUrEndo />
      <DepaofNeo />
      <DepaofMedi />
      <DepaofMedici />
      <DepaofEnt />
      <DepaofNep />
      <DepaofRadiology />
      <DepofClinical />
    </div>
  );
};
