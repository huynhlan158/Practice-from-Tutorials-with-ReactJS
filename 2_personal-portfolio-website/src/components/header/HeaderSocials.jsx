import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'

function HeaderSocials () {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/" target="blank"><BsLinkedin /></a>
            <a href="https://www.github.com/" target="blank"><BsGithub /></a>
            <a href="https://www.facebook.com/" target="blank"><FaFacebookSquare /></a>
        </div>
    )
}

export default HeaderSocials