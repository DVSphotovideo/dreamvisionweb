'use client'
import React from 'react';
import Menu from '../Elements/Menu.js';



import { useState } from 'react'


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <div className='bg-[url("/src/assets/image.jpg")] bg-cover bg-center bg-repeat- w-screen h-screen'>
      <Menu/>
      <div className="bg-transparent">
        <div className="relative isolate px-6 pt-2 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-44">
            {/*<div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>*/}
            <div className="text-center">
              <h1 className="text-5xl font-semibold  text-shadow-lg tracking-tight text-balance text-text sm:text-7xl">
                Soluții pentru toate nevoile tale
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-text-200 sm:text-xl/8">
                Oferim servicii foto, video, audio de înaltă calitate la un preț accesibil.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/servicii"
                  className="rounded-md bg-accent-600 px-3.5 py-2.5 text-sm font-semibold text-text-100 shadow-xs hover:bg-accent-500 hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Află mai multe
                </a>
                <a href="/contact" className="text-sm/6 font-semibold text-text-200 hover:text-text">
                  Contact <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

