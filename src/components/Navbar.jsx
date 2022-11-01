import React from 'react';
import {NavLink} from 'react-router-dom';

const style = {
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem'
};

const Navbar = () => {
    return (
        <div style={style}>
            <NavLink to={"/"}>onSubmit</NavLink>
            <NavLink to={"/useRef"}>useRef</NavLink>
            <NavLink to={"/reactHookForm"}>react-hook-form</NavLink>
        </div>
    );
};

export default Navbar;