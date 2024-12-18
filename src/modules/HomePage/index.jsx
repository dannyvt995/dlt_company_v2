import AdvantageSection from '@/components/AdvantageSection'
import FaqSection from '@/components/FagSection'
import FeedBackSection from '@/components/FeedBackSection'
import IntroAboutusSection from '@/components/IntroAboutusSection'
import IntroContactSection from '@/components/IntroContactSection'
import TabService from '@/components/TabService'
import React from 'react'

export default function HomePage() {
  return (
    <>
   
    <IntroAboutusSection/>
    <TabService/>
    <FeedBackSection/>
    <FaqSection/>
  
    <IntroContactSection/>
    </>
  )
}
