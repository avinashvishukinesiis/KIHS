"use client";
import React from "react";
import { useState } from "react";
import { PvSection1 } from "@/Components/PatientsAndVisitiors/PvSection1/PvSection1";
import { DsSection2 } from "@/Components/Doctors&Dept/DsSection2/DsSection2";

export default function page() {
  return (
    <main className="w-full flex flex-col">
      <PvSection1 />
      <DsSection2 />
    </main>
  );
}
