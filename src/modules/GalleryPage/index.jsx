import GallerySection from '@/components/GallerySection'
import FormContact from '@/components/FormContact'
import React from 'react'
import BackgroundGrid from '@/components/BackgroundGrid'

export default function GalleryPage() {
  return (
    <section className='galleryPage'>
      <GallerySection/>
      
      <FormContact/>
    </section>
  )
}
