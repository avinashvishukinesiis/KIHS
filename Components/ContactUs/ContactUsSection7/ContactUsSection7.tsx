import Image from 'next/image'
import React from 'react'
import { Mail, Phone } from 'lucide-react';

export const ContactUsSection7 = () => {
    return (
        <section className="w-full px-4 md:px-16 py-12">
            <div className="mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Image Container */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="rounded-md overflow-hidden w-full max-w-sm aspect-square flex items-center justify-center">
                            <Image
                                src="/vintage_telephone.png"
                                alt="Vintage telephone handset"
                                width={300}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us:</h2>
                        <p className="text-gray-700 mb-6">
                            For any job-related inquiries, please contact our HR department:
                        </p>

                        <div className="space-y-4">
                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <Mail className="text-primary1 flex-shrink-0" size={20} />
                                <a href="mailto:hr@kullollihealth.com" className="text-primary1 hover:underline">
                                    hr@kullollihealth.com
                                </a>
                            </div>

                            {/* Phone Numbers */}
                            <div className="flex items-start gap-3">
                                <Phone className="text-primary1 flex-shrink-0 mt-1" size={20} />
                                <div className='flex flex-col'>
                                    <div className='flex'>
                                        <a href="tel:0233-2305329" className="text-black hover:underline block">
                                            0233-2305329
                                        </a>
                                        {","}
                                        <a href="tel:9156305329" className="text-black hover:underline block">
                                            9156305329
                                        </a>
                                    </div>

                                    <p className="text-gray-700">Extn: 2004</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="text-lg font-medium text-gray-800">
                                Join our team and make a difference in the lives of our patients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
