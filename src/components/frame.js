import { useRef } from "react"
import { motion, useScroll } from "framer-motion"

import shootingStar from "../img/icons/Asset 1 copy.svg"
import dotStar from "../img/icons/Asset 2 copy.svg"
import puffyStar from "../img/icons/Asset 9 copy.svg"

import myPhoto from "../img/bio_photo.JPG"




const Frame = (props) => {

    const one = useRef(null)
    const two = useRef(null)
    const three = useRef(null)

    return (
        <div ref={props.frameRef} id='frame'>

            <motion.div className="progress-bar" style={{ scaleX: props.scrollY }}/>

            <div class="scroll-area" id="one" ref={one}>
                <div id='one-left-side'>
                </div>
                <div id='one-right-side'>
                    <motion.div className="title-box" whileHover={{opacity: .4, transition: {duration: .7}}} onClick={() => two.current.scrollIntoView({behavior: "smooth"})}>
                        <img src={shootingStar} id="shooting-star"/>
                        <h1>About</h1>
                    </motion.div>
                    <motion.div className="title-box" whileHover={{opacity: .4, transition: {duration: .7}}} onClick={() => three.current.scrollIntoView({behavior: "smooth"})}>
                        <img src={dotStar} id="dot-star"/>
                        <h1>Projects</h1>
                    </motion.div>
                    <motion.div className="title-box" whileHover={{opacity: .4, transition: {duration: .7}}}>
                        <img src={puffyStar} id="puffy-star"/>
                        <h1>Contact</h1>
                    </motion.div>
                </div>
            </div>

            <div class="scroll-area" id="two" ref={two}>
                <div id="bio">
                    <div>
                        <motion.h1
                        initial={{opacity: 0}} 
                        whileInView={{opacity: 1}} transition={{delay: 1, duration: 1}}>
                            Welcome to my site!
                        </motion.h1>
                    </div>
                    <div>
                        <motion.p
                        initial={{opacity: 0}} 
                        whileInView={{opacity: 1}} transition={{delay: 1, duration: 1}}>>>
                            I am a full stack developer based in Austin, Texas. With a background in film production, I thrive in a collaborative environment and enjoy problem solving on the fly. I am passionate about creating unique digital experiences where the flow of logic and design is as intuitive as it is engaging. I aspire to use my technical knowledge to build programs that improve our interactions with art, ourselves, and with each other. 
                        </motion.p>
                    </div>
                    <div id="btn-div">
                        <motion.button className="btn btn-outline-dark">
                            Resume
                        </motion.button>
                    </div>
                </div>
                <div id="image-container">
                    <img src={myPhoto} />
                </div>
            </div>

            <div class="scroll-area" id="three" ref={three}>
                <h1>hi</h1>
            </div>

        </div>
    )
}

export default Frame