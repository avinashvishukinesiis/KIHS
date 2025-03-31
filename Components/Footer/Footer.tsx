'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { motion } from 'framer-motion'

export const Footer = () => {
    const pathname = usePathname()

    interface LinkProps {
        label: string
        url: string

    }
    interface SocialLinkProps {
        label: string
        url: string
        link: string
    }

    const companyLink: LinkProps[] = [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "Services",
            url: "/services"
        },
        {
            label: "About Us",
            url: "/about"
        },
        {
            label: "Why Choose Us",
            url: "/why-choose-us"
        },
        {
            label: "Testimonials",
            url: "/testimonials"
        },
        {
            label: "Contact Us",
            url: "/contact"
        },
    ]

    const pagesLink: LinkProps[] = [
        {
            label: "404",
            url: "/404"
        },
        {
            label: "Licensing",
            url: "/licensing"
        },
        {
            label: "Instructions",
            url: "/instructions"
        },
        {
            label: "Style Guide",
            url: "/style-guide"
        },
        {
            label: "Changelog",
            url: "/changelog"
        },
        {
            label: "More Templates!",
            url: "/templates"
        }
    ];

    const socialLinkIcon: SocialLinkProps[] = [
        {
            label: "Facebook",
            url: "/facebook.png",
            link: "https://facebook.com"
        },
        {
            label: "Twitter",
            url: "/twitter.png",
            link: "https://facebook.com"
        },
        {
            label: "Youtube",
            url: "/youtube.png",
            link: "https://facebook.com"
        },
        {
            label: "Pintrest",
            url: "/Pintrest.png",
            link: "https://facebook.com"
        },
        {
            label: "LinkedIn",
            url: "/linkedin.png",
            link: "https://facebook.com"
        },
        {
            label: "TikTok",
            url: "/tik.png",
            link: "https://facebook.com"
        },
        {
            label: "Instagram",
            url: "/insta.png",
            link: "https://facebook.com"
        }
    ]

    return (
        <footer className='w-full h-max py-5 px-8 md:px-24 flex flex-col gap-8'>
            <div className='hidden md:block'>
                <Link href="/" className="font-bold text-xl">
                    <Image src="/logo.png" alt="KIHS Logo" width={90} height={50} />
                </Link>
            </div>
            <div className="grid grid-cols-2 justify-center items-start grid-rows-3 md:grid-rows-2 lg:grid-rows-1 md:grid-cols-3 lg:grid-cols-4 gap-4" >
                <div>
                    <h3 className="text-[16px] font-semibold mb-2">Company</h3>
                    <ul className="space-y-2">
                        {companyLink.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link href={item.url} className={`hover:underline ${pathname === item.url ? "text-primary1" : "text-black"}`}>
                                        <motion.span
                                            className="relative text-[14px] inline-block"
                                            initial="rest"
                                            whileHover="hover"
                                        >
                                            {item.label}

                                            {/* Animated Underline */}
                                            <motion.div
                                                className="absolute bottom-0 left-0 h-[1px] bg-primary1 rounded-full"
                                                variants={{
                                                    rest: {
                                                        width: 0,
                                                        transition: {
                                                            duration: 0.3,
                                                            ease: "easeOut"
                                                        }
                                                    },
                                                    hover: {
                                                        width: '100%',
                                                        transition: {
                                                            duration: 0.3,
                                                            ease: "easeOut"
                                                        }
                                                    }
                                                }}
                                            />
                                        </motion.span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h3 className="text-[16px] font-semibold mb-2">Pages</h3>
                    <ul className="space-y-2">
                        {pagesLink.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link href={item.url} className={`hover:underline ${pathname === item.url ? "text-primary1" : "text-black"}`}>
                                        <motion.span
                                            className="relative text-[14px] inline-block"
                                            initial="rest"
                                            whileHover="hover"
                                        >
                                            {item.label}

                                            {/* Animated Underline */}
                                            <motion.div
                                                className="absolute bottom-0 left-0 h-[1px] bg-primary1 rounded-full"
                                                variants={{
                                                    rest: {
                                                        width: 0,
                                                        transition: {
                                                            duration: 0.3,
                                                            ease: "easeOut"
                                                        }
                                                    },
                                                    hover: {
                                                        width: '100%',
                                                        transition: {
                                                            duration: 0.3,
                                                            ease: "easeOut"
                                                        }
                                                    }
                                                }}
                                            />
                                        </motion.span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='grid grid-cols-2 md:grid-rows-2 md:grid-cols-1 col-span-2 md:col-span-1'>
                    <div className="md:order-3">
                        <h3 className="text-[16px] font-semibold mb-2">Address</h3>
                        <address className="not-italic text-[14px] text-gray-700 space-y-1">
                            <p>123 Dental Avenue</p>
                            <p>City ville, State 12345</p>
                            <p>United States</p>
                            <Link href="https://maps.google.com" target='_blank' className="underline block mt-2">
                                View on Maps
                            </Link>
                        </address>
                    </div>

                    {/* Inquiries - Desktop layout in 3rd column (below Address), Mobile layout after Address */}
                    <div className="md:order-3 md:-mt-4">
                        <h3 className="text-[16px] font-semibold mb-2 md:mt-8">Inquiries</h3>
                        <div className="text-gray-700 space-y-1 text-[14px]">
                            <p className="font-medium">(123) 456-7890</p>
                            <p>info@57dentcare.com</p>
                        </div>
                    </div>
                </div>
                <div className="md:order-4 col-span-2 md:col-span-1 self-start">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex flex-wrap items-center gap-4">
                        {socialLinkIcon.map((item, index) => {
                            return (
                                <motion.a whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 200 }} key={index} href={item.link} target='_blank' aria-label="Facebook" className="text-gray-700 hover:text-blue-600">
                                    <img src={item.url} alt={item.label} />
                                </motion.a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}
