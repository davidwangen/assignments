import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"






function Footer(){
    const footer ={
        justifyContent: "center",
        display: "block",     
    }
    const footerList ={
        display: "flex",
        flexDirection: "row",
        listStyle: "none",
        justifyContent: "center" ,
        marginRight: "10rem"
    }
    const copyRightDiv = {
        textAlign: "center",
        display: "block",
        marginRight: "6rem"

    }
    return(
        <footer style = {footer}>
            <ul style ={footerList}>
                <li>
                    <FontAwesomeIcon icon={faTwitter} size="3x" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faFacebook} size="3x"/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                </li>
            </ul>

            < div style = {copyRightDiv}>Copyright @ Your Website 2021 </div>
        </footer>
        

                

    )
}

export default Footer