import React from 'react'
import {CustomNavbar} from "../components/Components";

const items = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'Academia',
        href: '/academia'
    },
    {
        text: 'Projects',
        href: '/projects'
    },
    {
        text: 'Fun',
        href: '/fun'
    }
]


const Navbar = () => {
  return (
    <CustomNavbar items={items} name={"Arash Yadegari"}/> 
  );
};

export default Navbar;
