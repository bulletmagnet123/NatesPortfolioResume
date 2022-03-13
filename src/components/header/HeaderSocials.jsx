import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target='blank'><BsLinkedin /></a>
        <a href='https://github' target="_blank"><BsGithub /></a>
        <a href='https://dribble.com' target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials