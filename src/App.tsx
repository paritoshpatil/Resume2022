import "./App.css";
import { motion, useAnimation } from "framer-motion";

import profileImg from "./img/Pari.jpeg";
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Extra from "./Extra";
import Footer from "./Footer";
import { useEffect, useRef } from "react";

function App() {
  const controls = useAnimation();
  const constraintsRef = useRef(null);

  useEffect(() => {
    document.title = 'Pari'
  }, [])


  return (
    <div className="overflow-x-hidden">
      <motion.div className="flex flex-col justify-center items-center w-screen h-screen" ref={constraintsRef}>
        <div className="relative">
          <h1 className="text-8xl font-inter font-bold">
            Hi, I'm
            <span
              className="text-red-500"
            >
              &nbsp;Pari.
            </span>
          </h1>

          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            whileHover={{ scale: 1.05 }}
            transition={{ ease: "easeOut", duration: 0.25 }}
            className="absolute left-32 bottom-28"
          >
            <img
              src={profileImg}
              width={250}
              className="rounded-full shadow-lg profile-image"
            ></img>
          </motion.div>
        </div>
        <ul className="list-inside list-none mt-8 font-inter text-center leading-relaxed text-gray-700">
          <li>Associate Software Engineer at Veritas LLC 👨‍🔬</li>
          <li>Bachelor in Computer Science from VIT, Pune 🎓</li>
          <li>Front-end developer with 2 years of experience 💪</li>
        </ul>

        <div className="mt-16 flex flex-row items-center justify-center space-x-6">
          <a href={require("./jsons/Paritosh Patil Resume 2022.pdf")} download="Resume" target="_blank">
            <motion.button className="font-inter  px-4 py-2 border-2 border-red-500 text-red-500 rounded-full flex flex-row justify-center items-center font-semibold hover:shadow-lg text-lg"
              whileHover={{ backgroundColor: "#ef4444", color: "white" }}
              whileTap={{ scale: 0.95 }}
              transition={{ ease: "easeOut", duration: 0.25 }}>
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </motion.button>
          </a>

          <a href={"mailto: paritoshpatil54321@gmail.com"} target="_blank">
            <motion.button className="font-inter  px-4 py-2 border-2 border-red-500 text-red-500 rounded-full flex flex-row justify-center items-center font-semibold hover:shadow-lg text-lg"
              whileHover={{ backgroundColor: "#ef4444", color: "white" }}
              whileTap={{ scale: 0.95 }}
              transition={{ ease: "easeOut", duration: 0.25 }}>
              E-Mail
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </motion.button>
          </a>

        </div>

        <div className="absolute bottom-8 flex flex-row justify-center items-center">
          <p className="text-gray-400 font-light mr-1">scroll to see more</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 13l-5 5m0 0l-5-5m5 5V6"
            />
          </svg>
        </div>
      </motion.div>
      <Experience />
      <br />
      <Skills />
      <br />
      <Projects />
      <br />
      <Extra />
      <br />
      <Footer />
    </div>
  );
}

export default App;
