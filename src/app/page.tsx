"use client"

import Image from 'next/image'
import AuthModal from './Modals/AuthModal'
import Navbar from '@/components/Navbar'
import ResetPassword from './Modals/ResetPassword'

export default function Home() {
  return (
    <main>
      <div className='bg-gradient-to-b from-red-200 to-blck h-screen relative'>
            <div className='max-w-8xl mx-auto'>
                <Navbar/>
                <AuthModal/>
                {/* <ResetPassword/> */}
            </div>
        </div>
    </main>
  )
}
