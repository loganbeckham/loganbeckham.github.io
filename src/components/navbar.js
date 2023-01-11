import { animate, motion, useScroll } from "framer-motion"

const Navbar = (props) => {



    return (
        <nav id="nav-container">
           
            <motion.ul className="nav-links" initial={{opacity: 0}} animate={props.scrollPos > 300 ? {opacity: 1} : {opacity: 0}} transition={props.scrollPos > 300 ? {delay: 1, duration: 1} : {duration: .5}}>
                <li id="about">About</li>
                <li id="projects">Projects</li>
                <li id="contact">Contact</li>
            </motion.ul>
        </nav>
    )
}

export default Navbar