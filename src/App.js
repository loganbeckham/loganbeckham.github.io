import React, {useState, useEffect, useRef} from 'react';
import { motion, useScroll, motionValue, delay, useAnimationControls } from "framer-motion"
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import diamond from "./img/icons/Asset 8 copy.svg"


import Navbar from './components/navbar';
import Frame from './components/frame';



function App() {

    const frameRef = useRef(null)
    const [scrollPos, setScrollPos] = useState()
    const [pageState, setPageState] = useState(0)

    const animation = useAnimationControls()

    async function nameheader() {
        await animation.start({y: 700})
    }

    const { scrollY } = useScroll({
        container: frameRef
    })

    scrollY.onChange(y => {
        setScrollPos(y)
        if (scrollPos > 300 && pageState === 0) {
            setPageState(1)
        } else if (scrollPos < 300 && pageState === 1) {
            setPageState(0)
        }
        console.log(scrollPos)
        console.log(pageState)
    })

    


    // useEffect(() => {
    //     return scrollY.onChange((latest) => {
    //     console.log("Page scroll: ", latest)
    //     setPageState(latest)
    //     })
    // }, [])

    return (
        <>
        <div id='container'>

            <motion.img id="diamond" src={diamond} width={'25px'} initial={{x:'-44vw'}} animate={scrollPos > 300 ? {x:'44vw'} : {x:'-44vw'}} transition={scrollPos > 300 ? {duration: 1} : {delay: .5, duration: 1}}/>
            <motion.p id="name" 
                initial={{top:'15vh'}} 
                animate={scrollPos > 300 ? {top:'50px', left: '5vw'} : {y:'21vh', left: '12vw'}} transition={{duration: .7}}>
                    Logan Beckham
            </motion.p>
            <motion.p id="title" 
                initial={{opacity: 0}} 
                animate={scrollPos > 300 ? {opacity: 0} : {opacity:1}} transition={{duration: .75}}>
                    Full Stack Developer
            </motion.p>

            <Navbar scrollY={scrollY} scrollPos={scrollPos}/>

            <div id='scroll-container'>
                <Frame frameRef={frameRef} scrollY={scrollY} scrollPos={scrollPos}/>

            </div>

        </div>


        </>

    )
}

export default App;
