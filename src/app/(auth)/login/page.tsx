'use client'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Component } from 'react'

function Login({ pageProps }: { pageProps: any }) {
  return (
    <ClerkProvider>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      {/* <Component {...pageProps} /> */}
    </ClerkProvider>
  )
}

export default Login
