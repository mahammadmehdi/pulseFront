import React from 'react'

import Welcome from '../../components/Welcome'
import OurMenu from '../../components/OurMenu'
import { Helmet } from 'react-helmet-async'
import Testimonials from '../../components/Testimonials'
import OurServices from '../../components/OurServices'
import ContactUs from '../../components/ContactUs'

function Home() {
  return (
    <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Welcome></Welcome> 
        <Testimonials></Testimonials>   
        <OurServices></OurServices> 
        <OurMenu></OurMenu>
        <ContactUs></ContactUs>
    </div>
  )
}

export default Home