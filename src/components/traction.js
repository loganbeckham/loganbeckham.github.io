import {BsFillFileEarmarkMusicFill, BsFillBootstrapFill} from "react-icons/bs"
import { AiFillGift } from "react-icons/ai"
import { BiMapPin } from "react-icons/bi"
import {SiJavascript, SiCss3, SiReact, SiMongodb, SiHtml5, SiExpress, SiDjango, SiPostgresql, SiMaterialui, SiPython} from "react-icons/si"
import { motion } from "framer-motion"
import TractionVid from "../img/tractiondemo.mov"

const Traction = (props) => {

    return (
        <>
        <div className='project-container'>
            {/* <img src={SoundcacheGif} id="soundcache-gif"/> */}
            <motion.div className='vid-container'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}>
                <video src={TractionVid} autoplay="true" loop="true" muted className='product-vid'/>
            </motion.div>
            <div className='project-details'>
                    <div className="project-logo-box" id="traction-logo-box">
                        <BiMapPin className="project-icon" size={'3em'}/>
                        <h1 className='project-title'>Traction</h1>
                    </div>
                    <div className='project-details-description'>
                        <p> Traction is an app designed to help users find those sweet local spots when travelling. For this collaborative project, I developed a dynamic search feature for filtering through user submitted posts. Additionally, I contributed to the backend development and designed the responsive layout for the application.</p>
                    </div>
                        <div className="project-stack-box">
                            <SiHtml5 className="stack-icon" size={'2em'}/>
                            <SiCss3 className="stack-icon" size={'2em'}/>
                            <SiReact className="stack-icon" size={'2em'}/>
                            <SiExpress className="stack-icon" size={'2em'}/>
                            <SiMongodb className="stack-icon" size={'2em'}/>
                        </div>
                    <div className='project-details-buttons'>
                        <a href="https://traction.herokuapp.com/" target="_blank"><button className="btn btn-outline-dark">Link</button></a>
                        <a href="https://github.com/loganbeckham?tab=repositories" target="_blank"><button className="btn btn-outline-dark">Github</button></a>
                        <button className="btn btn-outline-dark" onClick={() => props.updateProjectState('')}>Back</button>
                    </div>

                    
            </div>

        </div>
        </>
    )
}

export default Traction