import React from 'react'
import {CustomNavbar} from "../components/Components";

const items = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'Academia',
        href: '/Academia'
    },
    {
        text: 'Projects',
        href: '/Projects'
    },
    {
        text: 'Fun',
        href: '/Fun'
    }
]


const Navbar = () => {
  return (
    <CustomNavbar items={items} name={"Arash Yadegari"}/> 
  );
};

export default Navbar;
