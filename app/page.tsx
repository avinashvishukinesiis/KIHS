'use client'
import dynamic from "next/dynamic"

const Section_1 = dynamic(() => import('../Components/Home/Section1/Section1').then(mod => mod.Section1), { ssr: false })
const Section_2 = dynamic(() => import('../Components/Home/Section2/Section2').then(mod => mod.Section2), { ssr: false })
const Section_3 = dynamic(() => import('../Components/Home/Section3/Section3').then(mod => mod.Section3), { ssr: false })
const Section_4 = dynamic(() => import('../Components/Home/Section4/Section4').then(mod => mod.Section4), { ssr: false })
const Section_5 = dynamic(() => import('../Components/Home/Section5/Section5').then(mod => mod.Section5), { ssr: false })
const Section_6 = dynamic(() => import('../Components/Home/Section6/Section6').then(mod => mod.Section6), { ssr: false })


export default function Home() {
  return (
    <>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
    </>
  )
}
