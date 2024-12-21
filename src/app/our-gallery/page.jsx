import GalleryPage from '@/modules/GalleryPage'
import React from 'react'
export const metadata = {
  title: "Gallery Project || DLT TECHNICAL SERVICES",
  description: "Company DLT Technical Services is a privately owned business founded in 2016 based on nearly 20 years of extensive experience in civil construction, project management and surface treatment application.",
  openGraph: {
    title: "Gallery Project || DLT TECHNICAL SERVICES",
    description: "Company DLT Technical Services is a privately owned business founded in 2016 based on nearly 20 years of extensive experience in civil construction, project management and surface treatment application.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/logo_clear_full.png`, 
        width: 500,
        height: 300,
      },
    ],
    url: `${process.env.NEXT_PUBLIC_URL}/our-gallery`
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery Project || DLT TECHNICAL SERVICES",
    description: "Company DLT Technical Services is a privately owned business founded in 2016 based on nearly 20 years of extensive experience in civil construction, project management and surface treatment application.",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo_clear_full.png`], 
  },
};
export default function page() {
  return (
    <main>
        <GalleryPage/>
    </main>
  )
}
