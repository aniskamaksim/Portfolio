import React, {useEffect, useState} from 'react';
import s from "./Pages.module.css"
import logorounded from "./logorounded.png"
import {TagCloudOptions} from "TagCloud";
import TagCloud from "@frank-mayer/react-tag-cloud";
type AboutType = {}
export const About: React.FC<AboutType> = () => {
    const aboutClassName = s.about
    const aboutClassMob = s.about_mob
    const decor = s.decor
    const anotherDecor = s.another_decor
    const mainAbout = s.main_about
    const mainAboutMob = s.main_about_mob
    const imgLogo = s.img_logo
    const logoTags = s.logo_tags
    const imgLogoMob = s.img_logo_mob
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        window.innerWidth < 730 ? setIsMobile(true) : setIsMobile(false)
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    return (
        <div className={!isMobile ? mainAbout : mainAboutMob}>
        <div className={isMobile ? aboutClassMob : aboutClassName}>
            <h1>Hi! My name is <span className={decor}>Maksim Aniska. </span>I am <span className={decor}>Front-end developer</span></h1>
            <h2>I'm not so long in the frontend but I love it with all my heart.<br />
                I went through 2 stages of RSSchool courses, where I learned a lot about&nbsp;
                <span className={decor}>JS</span>, <span className={decor}>HTML</span>, <span className={decor}>CSS</span>,
                <span className={decor}> Git</span>, <span className={decor}>BEM</span>.<br />
                Since November 2022, I have been studying <span className={anotherDecor}>TypeScript</span>,
                <span className={anotherDecor}>React</span>, <span className={anotherDecor}>Redux</span>,
                <span className={anotherDecor}>Redux Toolkit</span> at <a href={"https://it-incubator.io/"}>IT-Incubator</a> courses,
                which I plan to finish in May 2023. <br />
                Also I took several online courses on my own.<br />
                Completed more than twenty educational projects of different levels of complexity.<br />
                You can check it out by clicking on the menu above.</h2>
                <h2>I want to be your friend and colleague.<br /> Contact me:<br />
                    email: <a href="mailto:aniskamaksim@gmail.com">aniskamaksim@gmail.com</a><br />
                    gitHub: <a href ="https://github.com/aniskamaksim" target={"_blank"}>aniskamaksim</a><br />
                    phone: <a href="tel:+375296313666">+375296313666</a></h2>
        </div>
            <div className={logoTags} style={{width: isMobile ? "40%" : ""}} >
            <img src={logorounded} className= {isMobile ? imgLogoMob : imgLogo}></img>
                <div className={"cloud"}>
                <TagCloud
                    style={{color: "cyan", display: isMobile ? "none" : "block"}}
                    options={(w: Window & typeof globalThis): TagCloudOptions => ({
                        radius: Math.min(300, w.innerWidth, w.innerHeight) / 2,
                        maxSpeed: "normal",
                    })}
                    onClick={(tag: string, ev: MouseEvent) => alert(tag)}
                    onClickOptions={{ passive: true }}
                >
                    {["JavaScript", "npm", "React", "Redux", "Git", "Redux Toolkit", "yarn", "Next.js", "Jest", "CSS", "TypeScript",
                        "HTML", "Figma", "Gulp", "Webpack"]}
                </TagCloud>
                </div>
            </div>

        </div>
    );
};