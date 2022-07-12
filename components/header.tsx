import { MenuIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { GithubIcon } from './github'
import useMediaQuery from '../hooks/useMediaQuery'
import a from "next/link";
import Link from "next/link";
import { XIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";

export const Header = () => {
    const matches = useMediaQuery('(min-width: 768px)')
    const [expanded, setExpanded] = useState(false)
    useEffect(() => {
        console.log('matches', matches);
        if (matches) {
            setExpanded(false)
        }
    }, [matches])

    const handleExpand = (event: any) => {
        event.preventDefault()
        setExpanded(!expanded)
    }

    return (
        <header
            className='fixed w-screen flex flex-col top-0 text-white backdrop-blur transition-colors duration-500  supports-backdrop-blur:bg-white/50 bg-slate-900/50 '>
            {!expanded && <div className='flex justify-between p-2 relative items-center max-w-3xl w-full mx-auto flex-1 border-b border-b-white/20'>
                <Link href={"/"}><h1 className={`font-medium z-50`}>Juan Tobon</h1></Link>
                <nav className='hidden md:flex items center font-medium'>
                    <Link href={"/"}><a className='flex justify-between'><span>Home</span></a></Link>
                    <Link href={"/blog"}><a className='flex justify-between'><span>Blog</span></a></Link>
                    <Link href={"/projects"}><a className='flex justify-between'><span>Projects</span></a></Link>
                    <Link href={"/contact"}><a className='flex justify-between'><span>Contact</span></a></Link>
                </nav>

                <button
                    className='p-[0.125rem] rounded md:hidden block hover:bg-blue-200 active:bg-blue-200 dark:hover:text-slate-700 dark:active:text-slate-700'
                    onClick={event => handleExpand(event)}>
                    <MenuIcon className='h-7' />
                </button>

                <a className='hidden md:flex bg-purple-600 gap-1 items-center text-white font-console px-2 py-1 rounded-md font-medium'
                    href='https://www.github.com/JEBT28'>
                    <GithubIcon />
                    <span>GitHub</span>
                </a>
            </div>
            }
            <Transition show={expanded} className={"md:hidden fixed top-0 bottom-0 right-0 left-0"}>
                <Transition.Child
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div onClick={event => handleExpand(event)}
                        className={`fixed md:hidden h-screen top-0 bottom-0 left-0 right-0 backdrop-blur transition-colors duration-500   supports-backdrop-blur:bg-white/50 bg-slate-900/50`}>
                    </div>
                </Transition.Child>
                <Transition.Child
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className={"fixed top-0 w-screen flex justify-end p-2"}>
                        <h1 className={`fixed  font-medium z-50`}>Juan Tobon</h1>
                    </div>
                </Transition.Child>
                <Transition.Child
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div
                        className={"sidebar"}>
                        <button
                            className='sidebar-close'
                            onClick={event => handleExpand(event)}>
                            <XIcon className='h-7' />
                        </button>
                        <div className='flex flex-col space-y-6 p-4'>
                            <Link href={"/"}><a className='sidebar-link'><span>Home</span></a></Link>
                            <Link href={"/blog"}><a className='sidebar-link'><span>Blog</span></a></Link>
                            <Link href={"/projects"}><a className='sidebar-link'><span>Projects</span></a></Link>
                            <Link href={"/contact"}><a className='sidebar-link'><span>Contact</span></a></Link>
                        </div>
                        <a className='flex bg-purple-600 gap-1 items-center text-white font-console px-2 py-1 rounded-md font-medium'
                            href='https://www.github.com/JEBT28'>
                            <GithubIcon />
                            <span>GitHub</span>
                        </a>
                    </div>
                </Transition.Child>
            </Transition>
        </header>
    )
}