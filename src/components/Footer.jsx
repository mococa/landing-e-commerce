import React from 'react'
import {FaGithub} from 'react-icons/fa'
function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/mococa" target="_blank">
                <h2><FaGithub style={{width:'50px', height:'100%'}}/> Made by Luiz Felipe S. Moureau</h2> 
            </a>
        </footer>
    )
}

export default Footer
