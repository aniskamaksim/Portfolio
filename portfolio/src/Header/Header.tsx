import React, {useState} from 'react';
import './header.css'
import {PATH} from "../Components/Pages";
import {useLocation} from "react-router-dom";
type HeaderType = {
    handleOpen: ()=>void
}
const Header: React.FC<HeaderType> = ({handleOpen}) => {
    const [burgerOpened, setBurgerOpened] = useState<boolean>(false);
    const location = useLocation()
    const currentPath = location.pathname
    const pageName =
        currentPath === PATH.ABOUT
            ? 'About me'
            : currentPath === PATH.HTML_CSS_JS
                ? 'HTML CSS JS'
                : currentPath === PATH.REACT
                    ? 'React TS'
                    : currentPath === PATH.REACT_REDUX
                        ? 'React || Redux'
                        : currentPath === PATH.JS_TASKS
                            ? 'JS Tasks'
                            : 'Error';
    const openBurger = () => {
        const line_1 = document.querySelector(".burger_line_1")
        const line_2 = document.querySelector(".burger_line_2")
        const line_3 = document.querySelector(".burger_line_3")
        if(!burgerOpened) {
            line_1 && line_1.classList.add("active")
            line_3 && line_3.classList.add("active_3")
            line_2 && line_2.classList.add("active_2")
            setBurgerOpened(true)
            handleOpen();
        } else {
            line_1 && line_1.classList.remove("active")
            line_3 && line_3.classList.remove("active_3")
            line_2 && line_2.classList.remove("active_2")
            setBurgerOpened(false);
            handleOpen();
        }
        }
    return (
        <div className={"header_main"}>
            <div className={"burger_main"}
                 onClick={openBurger}
            >
                <div className={"burger_line_1"}></div>
                <div className={"burger_line_2"}></div>
                <div className={"burger_line_3"}></div>

            </div>
            <h2>
                <span style={{color: "white"}}>you&prime;re on the </span> <span style={{color: "#00cc22"}}>{pageName}</span> <span style={{color: "white"}}>page</span></h2>
        </div>
    );
};

export default Header;