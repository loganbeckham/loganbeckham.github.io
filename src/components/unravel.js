import {BsFillFileEarmarkMusicFill, BsFillBootstrapFill} from "react-icons/bs"
import {SiJavascript, SiCss3, SiReact, SiMongodb, SiHtml5, SiExpress, SiDjango, SiPostgresql, SiMaterialui, SiPython} from "react-icons/si"
import { CiWavePulse1 } from "react-icons/ci"
import { motion } from "framer-motion"
import unravelVid from '../img/unravel_example.mov'

const Unravel = (props) => {

    return (
        <>
        <div className='project-container'>
            {/* <img src={SoundcacheGif} id="soundcache-gif"/> */}
            <motion.div className='vid-container'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}>
                <video src={unravelVid} autoplay="true" loop="true" muted className='product-vid'/>
            </motion.div>
            <div className='project-details'>
                    <div className="project-logo-box" id="unravel-logo-box">
                        <CiWavePulse1 className="project-icon" size={'2.5em'}/>
                        <h1 className='project-title'>unravel</h1>
                    </div>
                    <div className='project-details-description'>
                        <p> unravel is a generative system which utilizes algorithms and randomization to propagate spontaneous soundscapes and melodies. The graphics were built in p5.js and utilize the KNN algorithm to sweep gradients across the screen in synchronization with the evolving music. This project will soon feature more options for user input and customization.</p>
                    </div>
                        <div className="project-stack-box">
                            <SiHtml5 className="stack-icon" size={'2em'}/>
                            <SiCss3 className="stack-icon" size={'2em'}/>
                            <SiReact className="stack-icon" size={'2em'}/>
                            <SiExpress className="stack-icon" size={'2em'}/>
                            <SiMongodb className="stack-icon" size={'2em'}/>
                        </div>
                    <div className='project-details-buttons'>
                        <a href="https://unravel.herokuapp.com/" target="_blank"><button className="btn btn-outline-dark">Link</button></a>
                        <a href="https://github.com/loganbeckham/unravel" target="_blank"><button className="btn btn-outline-dark">Github</button></a>
                        <button className="btn btn-outline-dark" onClick={() => props.updateProjectState('')}>Back</button>                   
                    </div>

                    
            </div>

        </div>
        </>
    )
}

export default Unravel