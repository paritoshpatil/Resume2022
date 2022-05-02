import React from 'react'
import Collapse from './Collapse'
import pjson from "./jsons/Projects.json"

export default function Projects() {
    return (
        <div className="w-screen p-32">
            <h1 className="text-5xl font-inter font-bold">Projects</h1>
            <br />
            <br />
            {
                pjson.map(element => {
                    let contentArray = element.content.split('•')
                    contentArray.shift()

                    return <Collapse title={element.title}
                        designation={''}
                        date={''}
                        content={contentArray}
                        link={element.link}
                        linktext={element.linktext} />
                })
            }
        </div>
    )
}
