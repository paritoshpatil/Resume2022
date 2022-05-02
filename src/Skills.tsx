import React from 'react'
import sjson from "./jsons/Skills.json"

export default function Skills() {
    return (
        <div className="w-screen p-32 text-right">
            <h1 className="text-5xl font-inter font-bold">Skills</h1>
            <br />
            <br />
            {
                sjson.map(element => {
                    return <div className='flex flex-row items-center justify-end mb-1'>
                        <span className='font-inter font-semibold text-lg'>{element.title} </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                        <span className='font-inter font-light text-lg'>{element.value}</span>
                    </div>
                })
            }
        </div>
    )
}
