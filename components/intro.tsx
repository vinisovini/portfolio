"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import React from 'react';
import {motion} from "framer-motion";
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro(){

    return(
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2
                    }}
                    >
                        <Image 
                            src='https://avatars.githubusercontent.com/u/117416096?u=7c5f7802853c22bcceafb3b576dc25ba61c4e65d&v=4'
                            alt= "vini portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className='h-27 w-27 rounded-full object-cover
                            border-[0.35rem]
                            border-white shadow-xl'
                        />
                    <motion.span className='absolute bottom-0 right-0 text-4xl'
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 2
                        }}
                    >
                        🎯
                    </motion.span>

                    </motion.div>
                    
                </div>
            </div>
            <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[leading1.5] sm:text-4xl'
            initial={{ opacity:0, y: 100}}
            animate={{ opacity:1, y: 0}}

            >
                <span className="font-bold">Hello, I'm Vinicius.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.h1>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
            initial={{ opacity: 0, y:100 }}
            animate={{ opacity:1, y:0 }}
            transition={{delay: 0.1,}}
            >
                <Link href="#contact"
                className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                    Contact me here! <BsArrowRight 
                    className='opacity-70 group-hover:translate-x-2 transition'/>
                </Link>

                <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                focus:scale-110 hover:scale-105 hover:bg-gray-300 active:scale-105 transition cursor-pointer border border-black/10' 
                href= "/CV.png" download={true}>
                    Download CV <HiDownload className='opacity=60
                    group-hover:translate-y-1 transition'/>
                </a>
                
                <button></button>

                <a className='bg-white p-4 flex items-center gap-2 rounded-full
                focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-300 active:scale-105 transition cursor-pointer border
                border-black/10' href="https://www.linkedin.com/in/vinicius-melo-1b4244200" target='blank'>
                    <BsLinkedin />
                </a>

                <a className='bg-white p-4 py-3 flex items-center gap-2 text-[1.35rem] rounded-full
                focus:scale-110 hover:scale-105 hover:bg-gray-300 active:scale-105 transition cursor-pointer 
                border border-black/10' href="https://github.com/vinisovini" target='blank'>
                    <FaGithubSquare />
                </a>

            </motion.div>            

        </section>


    )

}