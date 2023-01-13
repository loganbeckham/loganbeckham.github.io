import { animate, motion, useScroll } from "framer-motion"

const Navbar = (props) => {

    const projectsNavButton = () => {
        props.updateProjectState('')
        props.three.current.scrollIntoView({behavior: "smooth"})

    }

    return (
        <nav id="nav-container">           
            <motion.ul className="nav-links" initial={{opacity: 0}} animate={props.scrollPos > 300 ? {opacity: 1} : {opacity: 0}} transition={props.scrollPos > 300 ? {delay: 1, duration: 1} : {duration: .5}}>
                <li id="about" onClick={() => props.two.current.scrollIntoView({behavior: "smooth"})}>About</li>
                <li id="projects" onClick={() => projectsNavButton()}>Projects</li>
                <li id="contact" onClick={() => props.four.current.scrollIntoView({behavior: "smooth"})}>Contact</li>
            </motion.ul>
        </nav>
    )
}

export default Navbar