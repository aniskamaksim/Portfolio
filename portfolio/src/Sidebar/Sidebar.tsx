import React from 'react';
import s from './Sidebar.module.css';
import {NavLink, useLocation} from "react-router-dom";
import {PATH} from "../Components/Pages";

type SidebarType = {
    open: boolean,
    handleClose: () => void,
};
const Sidebar: React.FC<SidebarType> = (
    {open, handleClose}
) => {
    const location = useLocation().pathname;
    const sidebarClass = s.sidebar_main
        + (open ? ' ' + s.open : '')
    return (
        <>
            {open && <div className={s.background} onClick={handleClose}/>}
            <aside className={sidebarClass}>
                <nav id={'hw5-menu'} className={s.nav}>
                    <NavLink
                        id={'hw5-pre-junior-link'}
                        to={PATH.ABOUT}
                        onClick={handleClose}
                        className={({isActive}) => isActive ? s.active : ""} // делает студент
                    >
                        About me
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-link'}
                        to={PATH.HTML_CSS_JS}
                        onClick={handleClose}
                        className={({isActive}) => isActive ? s.active : ""} // делает студент
                    >
                        HTML CSS JS
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-plus-link'}
                        to={PATH.REACT}
                        onClick={handleClose}
                        className={({isActive}) => isActive ? s.active : ""} // делает студент
                    >
                        React TS
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-plus-link'}
                        to={PATH.REACT_REDUX}
                        onClick={handleClose}
                        className={({isActive}) => isActive ? s.active : ""} // делает студент
                    >
                        Redux
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-link'}
                        to={PATH.JS_TASKS}
                        onClick={handleClose}
                        className={({isActive}) => isActive ? s.active : ""} // делает студент
                    >
                        JS Tasks
                    </NavLink>
                    <NavLink id={"openmenu"}
                             onClick={handleClose}
                             to={location}
                             className={({isActive}) => isActive ? s.active : ""}
                             style={{border: "none", color: "#f2f2f2"}}>
                        {open ? "Hide menu" : "Open menu"}
                    </NavLink>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;