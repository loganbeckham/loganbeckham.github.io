import { useRef, useState } from "react"
import { motion, useScroll } from "framer-motion"

import shootingStar from "../img/icons/Asset 1 copy.svg"
import dotStar from "../img/icons/Asset 2 copy.svg"
import puffyStar from "../img/icons/Asset 9 copy.svg"

import {BsFillFileEarmarkMusicFill, BsFillBootstrapFill} from "react-icons/bs"
import {SiJavascript, SiCss3, SiReact, SiMongodb, SiHtml5, SiExpress, SiDjango, SiPostgresql, SiMaterialui, SiPython} from "react-icons/si"

import myPhoto from "../img/bio_photo.JPG"




const Frame = (props) => {

    const one = useRef(null)
    const two = useRef(null)
    const three = useRef(null)

    const [projectShow, setProjectShow] = useState(null)

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
                        <motion.button className="btn btn-outline-dark"
                        initial={{opacity: 0}} 
                        whileInView={{opacity: 1}} transition={{delay: 1, duration: 1}}>
                            Resumé
                        </motion.button>
                    </div>
                    <div id="language-stack">
                        <div id="mi-languages">
                            <h5>My Skillset:</h5>
                        </div>
                        <div id="mi-stack">
                            <div id="stack-marquee">
                                <span>
                                    <SiHtml5 className="stack-icon" size={'1.7em'}/>
                                    <SiCss3 className="stack-icon" size={'1.7em'}/>
                                    <SiJavascript className="stack-icon" size={'1.7em'}/>
                                    <SiReact className="stack-icon" size={'1.7em'}/>
                                    <SiExpress className="stack-icon" size={'1.7em'}/>
                                    <SiDjango className="stack-icon" size={'1.7em'}/>
                                    <SiPostgresql className="stack-icon" size={'1.7em'}/>
                                    <SiMongodb className="stack-icon" size={'1.7em'}/>
                                    <BsFillBootstrapFill className="stack-icon" size={'1.7em'}/>
                                    <SiMaterialui className="stack-icon" size={'1.7em'}/>
                                    <SiPython className="stack-icon" size={'1.7em'}/>
                                </span>
                                <span>
                                    <SiHtml5 className="stack-icon" size={'1.7em'}/>
                                    <SiCss3 className="stack-icon" size={'1.7em'}/>
                                    <SiJavascript className="stack-icon" size={'1.7em'}/>
                                    <SiReact className="stack-icon" size={'1.7em'}/>
                                    <SiExpress className="stack-icon" size={'1.7em'}/>
                                    <SiDjango className="stack-icon" size={'1.7em'}/>
                                    <SiPostgresql className="stack-icon" size={'1.7em'}/>
                                    <SiMongodb className="stack-icon" size={'1.7em'}/>
                                    <BsFillBootstrapFill className="stack-icon" size={'1.7em'}/>
                                    <SiMaterialui className="stack-icon" size={'1.7em'}/>
                                    <SiPython className="stack-icon" size={'1.7em'}/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="image-container">
                    <img src={myPhoto} />
                </div>
                {/* <div id="my-languages">
                    <h5>My Skillset:</h5>
                </div>
                <div id="my-stack">
                    <SiHtml5 className="stack-icon" size={'2em'}/>
                    <SiCss3 className="stack-icon" size={'2em'}/>
                    <SiJavascript className="stack-icon" size={'2em'}/>
                    <SiReact className="stack-icon" size={'2em'}/>
                    <SiExpress className="stack-icon" size={'2em'}/>
                    <SiDjango className="stack-icon" size={'2em'}/>
                    <SiPostgresql className="stack-icon" size={'2em'}/>
                    <SiMongodb className="stack-icon" size={'2em'}/>
                    <BsFillBootstrapFill className="stack-icon" size={'2em'}/>
                    <SiMaterialui className="stack-icon" size={'2em'}/>
                    <SiPython className="stack-icon" size={'2em'}/>
                </div> */}
            </div>

            <div class="scroll-area" id="three" ref={three}>
                <div className="card-container">
                    <div className="card-template">
                        <div className="product-box"> 
                            <div className="logo-box">
                                <BsFillFileEarmarkMusicFill id="soundcache-icon" size={'3em'}/>
                            </div>
                            <h1>SoundCache</h1>
                        </div>
                        <div className="stack-box">
                            <SiHtml5 className="stack-icon" size={'2em'}/>
                            <SiCss3 className="stack-icon" size={'2em'}/>
                            <SiReact className="stack-icon" size={'2em'}/>
                            <SiExpress className="stack-icon" size={'2em'}/>
                            <SiMongodb className="stack-icon" size={'2em'}/>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-template">
                        <div className="product-box">
                            <div className="logo-box">
                            </div>
                            <h1>Traktion</h1>
                        </div>
                        <div className="stack-box">
                            <SiHtml5 className="stack-icon" size={'2em'}/>
                            <SiCss3 className="stack-icon" size={'2em'}/>
                            <SiReact className="stack-icon" size={'2em'}/>
                            <SiExpress className="stack-icon" size={'2em'}/>
                            <SiMongodb className="stack-icon" size={'2em'}/>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-template">
                        <div className="product-box">
                            <div className="logo-box">
                            </div>
                            <h1>WSHLST</h1>
                        </div>
                        <div className="stack-box">
                            <SiHtml5 className="stack-icon" size={'2em'}/>
                            <SiCss3 className="stack-icon" size={'2em'}/>
                            <SiReact className="stack-icon" size={'2em'}/>
                            <SiDjango className="stack-icon" size={'2em'}/>
                            <SiPostgresql className="stack-icon" size={'2em'}/>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-template">
                        <div className="product-box">
                            <div className="logo-box">
                            </div>
                            <h1>Instrum</h1>
                        </div>
                        <div className="stack-box">
                            <SiHtml5 className="stack-icon" size={'2em'}/>
                            <SiCss3 className="stack-icon" size={'2em'}/>
                            <SiReact className="stack-icon" size={'2em'}/>
                            <SiExpress className="stack-icon" size={'2em'}/>
                            <SiMongodb className="stack-icon" size={'2em'}/>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Frame