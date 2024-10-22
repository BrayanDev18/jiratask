'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className='bg-neutral-100 min-h-screen'>
      <div className='mx-auto max-w-screen-2xl p-4'>
        <nav className='flex justify-between items-center'>
          {/* <Image
            src='/svg/logo.svg'
            alt='logo'
            width={150}
            height={150}
          /> */}
          <p className='font-bold text-black dark:text-black text-xl'>
            Jiratask
          </p>

          <div className='flex items-center gap-2'>
            <Button>Sign up</Button>
          </div>
        </nav>
      </div>

      <div className='flex flex-col items-center justify-center pt-4 md:pt-14'>
        {children}
      </div>
    </main>
  )
}

export default AuthLayout
