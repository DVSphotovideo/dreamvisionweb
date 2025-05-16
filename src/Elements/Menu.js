'use client'
import Logo from '../assets/Logo.png'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  CameraIcon,
  VideoCameraIcon,
  MicrophoneIconIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  FilmIcon,
  XMarkIcon,
  MicrophoneIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Fotografii', description: 'O imagine valorează cât o mie de cuvinte', href: 'Servicii/Fotografii', icon: CameraIcon },
  { name: 'Video', description: 'Captează cele mai prețioase momente', href: 'Servicii/Video', icon: VideoCameraIcon },
  { name: 'Film', description: 'Un film scurt. Un impact lung.', href: 'Servicii/Film', icon: FilmIcon },
  { name: 'Înregistrări Audio', description: '', href: 'Servicii/Audio', icon: MicrophoneIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-navbar shadow-md">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 ">
        <div className="flex lg:flex-1">
          <a href="/acasa" className="-m-1.5 h-full">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={Logo}
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-navbar-text-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-navbar-text-100 hover:text-navbar-text">
              Servicii
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-navbar-text-300" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="bg-navbar-100 backdrop-blur-3xl absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-navbar-300"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-navbar-300 group-hover:bg-navbar-400">
                      <item.icon aria-hidden="true" className="size-6 text-navbar-text-100 group-hover:text-navbar-text" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-navbar-text-100 group-hover:text-navbar-text">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-navbar-text-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-navbar-300">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-navbar-text-200 hover:bg-navbar-400 hover:text-navbar-text-100"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-navbar-text-100" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="portofoliu" className="text-sm/6 font-semibold text-navbar-text-100 hover:text-navbar-text-200">
            Portofoliu
          </a>
          <a href="despre" className="text-sm/6 font-semibold text-navbar-text-100 hover:text-navbar-text-200">
            Despre Noi
          </a>
          <a href="contact" className="text-sm/6 font-semibold text-navbar-text-100 hover:text-navbar-text-200">
            Contact
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/*
          <a href="#" className="text-sm/6 font-semibold text-navbar-text-100 hover:text-navbar-text-200">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
          */}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-navbar-100 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={Logo}
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-navbar-text-100"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-navbar-text-100">
                    Servicii
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products/*, ...callsToAction*/].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-navbar-text-200 hover:bg-navbar-200"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/portofoliu"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-navbar-text-100 hover:bg-navbar-200"
                >
                  Portofoliu
                </a>
                <a
                  href="/despre"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-navbar-text-100 hover:bg-navbar-200"
                >
                  Despre Noi
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-navbar-text-100 hover:bg-navbar-200"
                >
                  Contact
                </a>
              </div>
              {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-navbar-text-100 hover:bg-navbar-200"
                >
                  Log in
                </a>
              </div> */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
