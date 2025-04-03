
// import Image from 'next/image'
import React from 'react'
import { PiSirenThin } from "react-icons/pi";

export const ContactUsSection2 = () => {
    return (
        <section className="bg-blue-50 min-h-screen p-4 md:p-8 md:py-16">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <p className="text-gray-800 mb-4">
                        Our dedicated team is here to address all your health concerns. We&apos;re just a click or call away.
                    </p>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Reach us through the following channels:
                    </h1>
                </div>

                {/* Emergency Contacts */}
                <div className="mb-8">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                        In Case of Emergency:
                    </h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="bg-primary1 text-white rounded-lg p-4 flex items-center flex-1">
                            <div className="mr-3">
                                <PiSirenThin size={40} />
                            </div>
                            <div>
                                <div className="font-semibold">Ambulance Service Number</div>
                                <div className="text-lg">9156305329</div>
                            </div>
                        </div>
                        <div className="bg-primary1 text-white rounded-lg p-4 flex items-center flex-1">
                            <div className="mr-3">
                                <PiSirenThin size={40} />
                            </div>
                            <div>
                                <div className="font-semibold">Emergency Contact</div>
                                <div className="text-lg">0233-2305329</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location and Map */}
                <div className="flex flex-col md:flex-row gap-6 pt-16">
                    {/* Location Details */}
                    <div className="flex-1">
                        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                            Our Location:
                        </h2>

                        <div className="mb-6">
                            <p className="text-gray-700 mb-2">
                                &apos;C&apos; Road, Raghunandan Colony, Vishrambag, Sangli – 416415.
                            </p>
                            <p className="font-semibold mb-2">Landmarks to help you find us:</p>
                            <ul className="list-disc pl-5 text-gray-700">
                                <li>5 minutes walking from Vishrambag Chowk</li>
                                <li>2 minutes from SP Office Sangli</li>
                                <li>Adjacent to Kullolli Hospital</li>
                            </ul>
                        </div>

                        {/* Mobile only - Institute description */}
                        <div className="md:hidden mt-6">
                            <h3 className="font-semibold text-lg mb-2">Welcome to the Kullolli Institute of Health Services</h3>
                            <p className="text-gray-700 text-sm">
                                A cornerstone of quality and affordable healthcare in Sangli. After serving 17 years as a Class I Government Medical Superintendent, Dr. Kullolli took voluntary retirement in 1996 to dedicate himself fully to his vision of accessible healthcare for all.
                            </p>
                            <p className="text-gray-700 text-sm mt-2">
                                What started as a small initiative has grown step by step into a state-of-the-art healthcare institution. Today, we proudly carry a trusted name in the region, delivering advanced medical care with compassion and integrity.
                            </p>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="flex-1 relative min-h-64">
                        <div className="rounded-lg overflow-hidden h-64 md:h-full w-full relative">
                            <div className="absolute inset-0 bg-gray-200">
                                {/* This would be replaced with an actual map component */}
                                <iframe
                                    width="100%"
                                    height="256"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    src="https://maps.google.com/maps?width=100%25&amp;height=256&amp;hl=en&amp;q=1%20Grafton%20Street,%20'C'%20Road,%20Raghunandan%20Colony,%20Vishrambag,%20Sangli%20%E2%80%93%20416415.Dublin,%20Ireland+(My%20BusinKULLOLLI%20HOSPITALess%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
