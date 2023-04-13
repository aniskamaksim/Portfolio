import React, { FC, ReactNode, useEffect, useState } from 'react'
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./layout.css"

type PropsType = {
    children: ReactNode
}

export const Layout: FC<PropsType> = ({ children }) => {
    const [open, setOpen] = useState(false)
    const setOpenHandler = () => {
        open ? setOpen(false) : setOpen(true)
    }
    console.log(open)
    // const handleClose = () => setOpen(false)
    // const handleOpen = () => setOpen(true)

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')
    }, [open])

    return (
        <>
            <Sidebar open={open} handleClose={setOpenHandler} />
            <Header handleOpen={setOpenHandler} />
            <div className={"layout"}>
                {children}
            </div>
        </>
    )
}
