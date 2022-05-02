
import Collapse from './Collapse';
import ejson from "./jsons/Experience.json"


export default function Experience() {

    return (
        <div className="w-screen p-32">
            <h1 className="text-5xl font-inter font-bold">Experience</h1>
            <br />
            <br />
            {
                ejson.map((element) => {
                    let contentArray = element.content.split('•')
                    contentArray.shift()

                    return <Collapse title={element.title}
                        designation={element.designation}
                        date={element.duration}
                        content={contentArray}
                        link={''}
                        linktext={''} />
                })
            }

        </div>
    )
}
