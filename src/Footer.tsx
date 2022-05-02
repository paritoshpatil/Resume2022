import React from 'react'
// brand svg
import { ReactComponent as InstaLogo } from "./img/instagram-brands.svg"
import { ReactComponent as LinkedinLogo } from "./img/linkedin-brands.svg"
import { ReactComponent as GithubLogo } from "./img/github-brands.svg"
import { ReactComponent as EmailLogo } from "./img/envelope-solid.svg"

export default function Footer() {

    return (
        <div className='w-screen bg-gray-800 px-72 py-10 text-center text-white font-inter'>
            <script src="https://kit.fontawesome.com/05b32263b7.js" crossOrigin="anonymous"></script>
            <div>
                <p>Find Me On</p>
                <div className="flex flex-row justify-center items-center space-x-7 mt-4 mb-12">
                    <a href="https://www.instagram.com/leadheartx/" target="_blank"><InstaLogo width={24} height={24} fill="currentColor" className='hover:text-pink-500' /></a>
                    <a href="https://www.linkedin.com/in/paritosh-patil-a61202180/" target="_blank"><LinkedinLogo width={24} height={24} fill="currentColor" className='hover:text-blue-500' /> </a>
                    <a href="https://github.com/paritoshpatil" target="_blank"><GithubLogo width={24} height={24} fill="currentColor" className='hover:text-green-500' /> </a>
                    <a href="mailto: paritoshpatil54321@gmail.com" target="_blank"><EmailLogo width={24} height={24} fill="currentColor" className='hover:text-red-500' /></a>
                </div>

            </div>
            <div>
                <span>Created with ❤️ using React, Tailwind, Framer Motion</span>
                <br />
                <span className='font-inter font-light text-sm text-gray-500'>P.S. The image on the top can be moved around!</span>
            </div>
        </div>
    )
}
