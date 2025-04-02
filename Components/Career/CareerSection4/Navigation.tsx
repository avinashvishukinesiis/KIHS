"use client"

import { useState, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
// import { ChevronLeft, ChevronRight } from "lucide-react"

export const Navigation = () => {
    const [navSelected, setNavSelected] = useState<NavCategory>("Doctors")
    const [prevNavIndex, setPrevNavIndex] = useState<number>(0)
    // const [showNavArrows, setShowNavArrows] = useState<boolean>(false)
    const navRef = useRef<HTMLDivElement>(null)

    type NavCategory = "Doctors" | "Nurses" | "Management" | "Development" | "Administration"

    const categories: NavCategory[] = ["Doctors", "Nurses", "Management", "Development","Administration"]

    interface Info {
        date: string
        isNew: boolean
        info: string
        degree: string
    }
    const NewsEventComp = ({ date, isNew, info, degree }: Info) => {
        return (
            <div className="w-full py-3 p-2 md:p-3 sm:p-4 grid grid-cols-3 bg-white border-[2px] border-outlineGrey rounded-2xl">
                <div className="flex flex-col col-span-2 gap-2">
                    <div className="flex items-center gap-2"><span className="text-primary1 text-xs sm:text-sm">{date}</span>
                        {isNew ? <span className="px-2 sm:px-4 text-xs sm:text-sm bg-secondaryTint rounded-full">Join immediately</span> : ''}</div>
                    <div>
                        <p className='font-semibold text-sm sm:text-base'>
                            {info}
                        </p>
                        <p className='text-[14px] text-customGrey'>
                            {degree}
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <button className="px-3 py-1 text-xs sm:text-sm bg-bgBlue rounded-full cursor-pointer">View Opening</button>
                </div>
            </div>
        );
    };

    const nav: Record<NavCategory, Info[]> = {
        Doctors: [
            {
                date: "Doctors",
                isNew: true,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
            {
                date: "Doctors",
                isNew: false,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
            {
                date: "Doctors",
                isNew: true,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
            {
                date: "Doctors",
                isNew: false,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
        ],
        Nurses: [
            {
                date: "Doctors",
                isNew: false,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
            {
                date: "Doctors",
                isNew: true,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
            {
                date: "Doctors",
                isNew: false,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
            {
                date: "Doctors",
                isNew: true,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
        ],
        Management: [
            {
                date: "Doctors",
                isNew: true,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
            {
                date: "Doctors",
                isNew: false,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
            {
                date: "Doctors",
                isNew: true,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
            {
                date: "Doctors",
                isNew: false,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
            {
                date: "Doctors",
                isNew: true,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
        ],
        "Development": [
            {
                date: "Doctors",
                isNew: false,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
            {
                date: "Doctors",
                isNew: true,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
            {
                date: "Doctors",
                isNew: true,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
        ],
        "Administration": [
            {
                date: "Doctors",
                isNew: false,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
            {
                date: "Doctors",
                isNew: true,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
            {
                date: "Doctors",
                isNew: true,
                info: "Uro Surgeon",
                degree:"MBBS, MS/MCh",
            },
        ],
    }

    const handleNavClick = (category: NavCategory) => {
        setPrevNavIndex(categories.indexOf(navSelected))
        setNavSelected(category)
    }

    return (
        <div className="min-h-[60vh] w-full flex flex-col gap-4 sm:gap-8">
            <div className="h-max w-full pb-4 sm:pb-8 flex flex-col gap-4 sm:gap-8">
                <div className="flex flex-col gap-0.5">
                    <h3 className="font-semibold text-black text-base sm:text-[18px] md:text-2xl lg:text-3xl">We are currently seeking dedicated individuals to fill the following roles:</h3>
                </div>
                <div className="w-full relative">
                    {/* {showNavArrows && (
            <>
              <button
                onClick={() => scrollNav("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={() => scrollNav("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </>
          )} */}
                    <div
                        ref={navRef}
                        className="w-full flex gap-4 sm:gap-8 overflow-x-auto scrollbar-hide px-1"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center gap-2 cursor-pointer relative flex-shrink-0"
                                onClick={() => handleNavClick(category)}
                            >
                                <motion.div
                                    className="flex-grow flex flex-col items-center justify-center gap-2 cursor-pointer relative"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span
                                        className={`text-xs sm:text-sm md:text-[14px] whitespace-nowrap ${navSelected === category ? "text-primary1" : "text-textGrey"
                                            } select-none text-center`}
                                    >
                                        {category}
                                    </span>
                                </motion.div>

                                {navSelected === category && (
                                    <div className="absolute bottom-0 bg-primary1 h-[2px] w-full rounded"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AnimatePresence initial={false}>
                <div className="w-full flex items-center justify-center">
                    {navSelected && (
                        <motion.div
                            key={navSelected}
                            initial={{
                                opacity: 0,
                                x: prevNavIndex < categories.indexOf(navSelected) ? 100 : -100,
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: prevNavIndex < categories.indexOf(navSelected) ? -100 : 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                        >
                            {nav[navSelected].map((item, ind) => (
                                <NewsEventComp key={ind} {...item} />
                            ))}
                        </motion.div>
                    )}
                </div>
            </AnimatePresence>
        </div>
    )
}
