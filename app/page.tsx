

import Blog from '@/components/Blog'
import ScrollUp from '@/components/Common/ScrollUp'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import UserMasuk from '@/components/userMasuk'
import { auth } from "@clerk/nextjs";

export default function Home() {
  const {userId} = auth();

  return (

    <>

      <UserMasuk userId={ userId } />
      <ScrollUp />
      <Hero />
      <Features />
      <Blog />
 
  
    </>

  )
}
