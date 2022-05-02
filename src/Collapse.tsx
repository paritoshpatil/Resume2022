import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

export default function Collapse(
    props: {
        title: string;
        designation: string;
        date: string;
        content: string[];
        link: string;
        linktext: string;
    }) {
    const controls = useAnimation();
    const dateControl = useAnimation();
    const arrowControl = useAnimation();
    const [expanded, toggleExpanded] = useState(false);

    function expandItem() {
        if (expanded) {
            // Collapse
            controls.start({
                height: 0,
                opacity: 0,
                marginBottom: "0.5rem",
                marginTop: "0.5rem",
                transition: { ease: "easeOut", duration: 0.25 }
            })

            dateControl.start({
                opacity: 0,
                transition: { ease: "easeOut", duration: 0.25 }
            })

            arrowControl.start({
                rotate: 0,
            })
        }
        else {
            // Expand\
            controls.start({
                height: "auto",
                opacity: 1,
                marginBottom: "1rem",
                marginTop: "1rem",
                transition: { ease: "easeOut", duration: 0.25 }
            })

            dateControl.start({
                opacity: 1,
                transition: { ease: "easeOut", duration: 0.25 }
            })

            arrowControl.start({
                rotate: 180,
            })
        }

        toggleExpanded(!expanded)
    }

    function openLink() {
        window.open(props.link, "_blank")
    }

    return (
        <div className={`experience-container w-2/3 border-2 px-3 pt-4 mb-6 rounded-lg overflow-hidden 
        hover:border-solid hover:border-gray-800 hover:cursor-pointer hover:shadow-md  
        ${expanded ? " border-solid border-gray-800 shadow-md" : " border-dashed border-gray-300"} `}
            onClick={() => expandItem()}>
            <div className="flex flex-row items-center justify-between">
                <div className='flex flex-row items-center'>
                    <h4 className="font-inter font-semibold text-xl">
                        {props.title}
                    </h4>
                    <p className='font-inter font-regular text-lg ml-2 text-gray-600'>{props.designation}</p>

                </div>

                <div className="flex flex-row items-center">
                    <motion.div animate={dateControl} initial={{ opacity: 0 }}>
                        <p className="font-inter font-light text-md text-gray-600 italic">
                            {props.date}
                        </p>
                    </motion.div>

                    <motion.div className='mx-4' animate={arrowControl} initial={{ rotate: 0 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${expanded ? " text-gray-800" : " text-gray-400"}`} viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </motion.div>
                </div>

            </div>

            <motion.div className='my-2 font-inter font-light' animate={controls} initial={{ height: 0, opacity: 0, marginTop: '0.5rem', marginBottom: '0.5rrem' }}>
                <ul className='list-disc list-inside'>
                    {props.content.map(element => {
                        return <li>{element}</li>
                    })}
                </ul>
                <br />
                {props.link && props.link != "null" && <button className='flex flex-row items-center px-4 py-1 
                border-2 border-red-500 text-red-500
                hover:text-white hover:bg-red-500 rounded-full'
                    onClick={openLink}> {props.linktext}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                </button>}

            </motion.div>
        </div >
    )
}


