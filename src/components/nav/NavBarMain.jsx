import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUserCircle , BiMessageSquareDetail} from 'react-icons/bi'
import { BsBook } from 'react-icons/bs'

const NavBarMain = () => {
  return (
    <nav>
      <a href='#' className='active'><AiOutlineHome /></a>
      <a href='#about'><BiUserCircle /></a>
      <a href='#experience' className=''><BsBook /></a>
      <a href='#contact' className=''><BiMessageSquareDetail /></a>
    </nav>

  )
}

export default NavBarMain