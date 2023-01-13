import {BsFillFileEarmarkMusicFill, BsFillBootstrapFill} from "react-icons/bs"
import {SiJavascript, SiCss3, SiReact, SiMongodb, SiHtml5, SiExpress, SiDjango, SiPostgresql, SiMaterialui, SiPython} from "react-icons/si"
import { motion } from "framer-motion"
import SoundcacheVid from '../img/soundcachedemo.mov'

const Soundcache = (props) => {

    return (
        <>
        <div className='project-container'>
            {/* <img src={SoundcacheGif} id="soundcache-gif"/> */}
            <motion.div className='vid-container'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}>
                <video src={SoundcacheVid} autoplay="true" loop="true" muted id='soundcache-vid'/>
            </motion.div>
            <div className='project-details'>
                    <div className="project-logo-box">
                        <BsFillFileEarmarkMusicFill className="project-icon" size={'2.5em'}/>
                        <h1 className='project-title'>SoundCache</h1>
                    </div>
                    <div className='project-details-description'>
                        <p> Soundcache is a web application for discovering royalty free audio samples and sound effects from across the web. With fully functional authentication, users are able to save, organize, and edit audio samples into personalized collections. Service uses Json Web Tokens to create user sessions and utilizes bcrypt for user security. </p>
                    </div>
                        <div className="project-stack-box">
                            <SiHtml5 className="stack-icon" size={'2em'}/>
                            <SiCss3 className="stack-icon" size={'2em'}/>
                            <SiReact className="stack-icon" size={'2em'}/>
                            <SiExpress className="stack-icon" size={'2em'}/>
                            <SiMongodb className="stack-icon" size={'2em'}/>
                        </div>
                    <div className='project-details-buttons'>
                        <a href="https://soundcache.herokuapp.com/" target="_blank"><button className="btn btn-outline-dark">Link</button></a>
                        <a href="https://github.com/loganbeckham?tab=repositories" target="_blank"><button className="btn btn-outline-dark">Github</button></a>
                        <button className="btn btn-outline-dark" onClick={() => props.updateProjectState('')}>Back</button>
                    </div>

                    
            </div>

        </div>
        </>
    )
}

export default Soundcache