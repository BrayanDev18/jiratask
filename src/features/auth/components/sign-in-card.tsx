'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { z } from 'zod'
import { loginFormSchema } from '../../../lib/formSchemas'
import { useLogin } from '../api/useLogin'

export const SignInCard = () => {
  const { mutate } = useLogin()
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = (values: z.infer<typeof loginFormSchema>) => {
    mutate({ json: values })
  }

  return (
    <div className='max-w-md w-full mx-auto space-y-4 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
      <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
        Welcome Back!
      </h2>

      <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
        Login to Jiratask you can because we don&apos;t have a login flow yet
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            name='email'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <LabelInputContainer className='mb-4'>
                    <Input
                      id='email'
                      placeholder='projectmayhem@fc.com'
                      type='email'
                      {...field}
                    />
                  </LabelInputContainer>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name='password'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <LabelInputContainer className='mb-4'>
                    <Input
                      id='password'
                      placeholder='••••••••'
                      type='password'
                      {...field}
                    />
                  </LabelInputContainer>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
            type='submit'
          >
            Sign in &rarr;
            <BottomGradient />
          </Button>

          <div className='flex items-center'>
            <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />
            <p>Or</p>
            <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />
          </div>

          <div className='flex flex-col space-y-4'>
            <button
              className=' relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
              type='submit'
            >
              <FaGithub />
              <span className='text-neutral-700 dark:text-neutral-300 text-sm font-bold'>
                Login with GitHub
              </span>
              <BottomGradient />
            </button>

            <button
              className=' relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
              type='submit'
            >
              <FcGoogle size={20} />
              <span className='text-neutral-700 dark:text-neutral-300 text-sm font-bold'>
                Login with Google
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </Form>

      <div className='flex items-center justify-center'>
        <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
          Don&apos;t have an account?{' '}
          <Link
            href='/sign-up'
            className='text-blue-500 font-bold'
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  )
}
