import {BsFillFileEarmarkMusicFill, BsFillBootstrapFill} from "react-icons/bs"
import { AiFillGift } from "react-icons/ai"
import {SiJavascript, SiCss3, SiReact, SiMongodb, SiHtml5, SiExpress, SiDjango, SiPostgresql, SiMaterialui, SiPython} from "react-icons/si"
import { motion } from "framer-motion"
import WshlstVid from '../img/wshlstdemo.mov'

const Wshlst = (props) => {

    return (
        <>
        <div className='project-container'>
            {/* <img src={SoundcacheGif} id="soundcache-gif"/> */}
            <motion.div className='vid-container'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}>
                <video src={WshlstVid} autoplay="true" loop="true" muted id='soundcache-vid'/>
            </motion.div>
            <div className='project-details'>
                    <div className="project-logo-box">
                        <AiFillGift className="project-icon" size={'3em'}/>
                        <h1 className='project-title'>WSHLST</h1>
                    </div>
                    <div className='project-details-description'>
                        <p> WSHLST is an application which allows users to add, share, and discover gift ideas. My biggest contribution to this collaborative project was the design and implementation of a relational database model built in django for user accounts to follow and unfollow other users.</p>
                    </div>
                        <div className="project-stack-box">
                            <SiHtml5 className="stack-icon" size={'2em'}/>
                            <SiCss3 className="stack-icon" size={'2em'}/>
                            <SiReact className="stack-icon" size={'2em'}/>
                            <SiDjango className="stack-icon" size={'2em'}/>
                            <SiPostgresql className="stack-icon" size={'2em'}/>
                        </div>
                    <div className='project-details-buttons'>
                        <a href="https://thewshlst.herokuapp.com/" target="_blank"><button className="btn btn-outline-dark">Link</button></a>
                        <a href="https://github.com/loganbeckham?tab=repositories" target="_blank"><button className="btn btn-outline-dark">Github</button></a>
                        <button className="btn btn-outline-dark" onClick={() => props.updateProjectState('')}>Back</button>
                    </div>

                    
            </div>

        </div>
        </>
    )
}

export default Wshlst