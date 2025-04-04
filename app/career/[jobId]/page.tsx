import ApplicationForm from '@/Components/Career/ApplicationForm';
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
export default function JobProfile() {
    const contentItem = [
        {
            expectation: "Experience with AWS Control Tower is essential",
            
        },
        {
            expectation: "Extensive experience provisioning cloud infrastructure, such as AWS or GCP",
           
        },
        {
            expectation: "Extensive experience with DevOps technologies from CI/CD tools like Jenkins, to Infrastructure as Code tools like Terraform",
           
        },
        {
            expectation: "A background in Solution Architecture is beneficial",
            
        },
    ];
    return (
        <main className='w-full min-h-[70vh] flex flex-col gap-24'>
            <section className='w-full h-full px-4 md:py-20 md:px-24 lg:px-32 gap-12'>
                <div>
                    <p className="text-sm text-blue-500 mb-1">Careers at Kullolli Institute of Health Services (KIHS)</p>
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Medical Officer</h2>
                    <div className='flex gap-4 items-center my-2'>
                        <span className='flex gap-2 items-center'><FaLocationDot color='#FBD115' />Sangli, Maharashtra</span>
                        <span className='flex gap-2 items-center'><MdWork color='#FBD115' />Full-Time</span>
                    </div>
                    <p className="text-customGrey text-[14px] mb-6">DevOps is the combination of cultural philosophies, practices, and tools that increases an organization&apos;s ability to deliver applications and services at high velocit</p>

                </div>
            </section>
            <section className='md:px-32 w-full'>
                <div className='w-full min-h-[100px] bg-bgBlue rounded-2xl flex flex-col-reverse gap-8 md:flex-row items-center justify-center px-4 py-8 md:p-0 md:pl-16'>
                    <div className='flex flex-col gap-4'>
                        <div className='pr-28 flex flex-col gap-3'>
                            <h2 className='font-semibold text-4xl'>What you will do..</h2>
                            <ul className='list-disc ml-12 text-[14px] text-[#1E1E1E]'>
                                <li>Expert in Cloud (ideally AWS) Infrastructure, especially surrounding VPC&apos;s/Subnets, Security Groups, WAFs, EC2, IAM, Route53, and Serverless tools and lambdas</li>
                                <li>Advanced in security concepts like AuthN/AuthZ, trust boundaries, the least-privilege principle, the OWASP Top Ten, and Infrastructure-as-code tools (like Terraform, CDK, or Pulumi)</li>
                                <li>Hands-on experience with Docker, Docker Compose, and setting up CI/CD pipelines.</li>
                                <li>Familiar with Kubernetes, Step Functions, and SNS/SQS</li>
                                <li>Knowledgeable in DevOps best practices and Developer Experience (DX) topics</li>
                                <li>Communicative, approachable, self-driven, and collaborative</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src="/girl_with_laptop.png" className='w-full md:w-[30vw]' alt="Two hands holding heart with the plus icon inside" />
                    </div>
                </div>
            </section>
            <section className='w-full flex flex-col gap-8 px-4 md:px-24 lg:px-32'>
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">We expect you to have...</h2>
                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {contentItem.map(({ expectation }, index) => {
                            return (
                                <button key={index} className="flex items-center justify-between px-4 py-2 bg-white border-[2px] border-ligthGrey rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200">
                                    <span className="flex items-center gap-8 pr-16">
                                        <img src="/handWithPlus.png" alt="hand with plus icon" className="w-12 h-12" />
                                        <div className='flex flex-col items-start gap-1'>
                                            <span className='text-[16px] font-semibold'>{expectation}</span>
                                        </div>
                                    </span>
                                </button>
                            )

                        })}
                    </div>
                </div>
            </section>
            <section className='bg-secondaryTint py-16'>
                <ApplicationForm/>
            </section>
        </main>
    )
}
