import OurServices from '@/modules/OurServices'
import React from 'react'

export const metadata  = {
  title: "Our Services || DLT TECHNICAL SERVICES",
  description: "Civil & Construction - Skid-resistant and Colour Surface Treatment - Permeable paving",
  openGraph: {
    title: "Our Services || DLT TECHNICAL SERVICES",
    description: "Civil & Construction - Skid-resistant and Colour Surface Treatment - Permeable paving",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/logo_clear_full.png`, 
        width: 500,
        height: 300,
      },
    ],
    url: `${process.env.NEXT_PUBLIC_URL}/our-service`, 
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services || DLT TECHNICAL SERVICES",
    description: "Civil & Construction - Skid-resistant and Colour Surface Treatment - Permeable paving",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo_clear_full.png`], 
  },
};

export default function page() {
  return (
    <main>
        <OurServices/>
    </main>
  )
}
