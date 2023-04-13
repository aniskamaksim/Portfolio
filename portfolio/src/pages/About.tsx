import React from 'react';
import s from "./Pages.module.css"
import logorounded from "./logorounded.png"
type AboutType = {}
export const About: React.FC<AboutType> = () => {
    const aboutClassName = s.about
    const decor = s.decor
    const anotherDecor = s.another_decor
    const mainAbout = s.main_about
    const imgLogo = s.img_logo
    return (
        <div className={mainAbout}>
        <div className={aboutClassName}>
            <h1>Hi! My name is <span className={decor}>Maksim Aniska</span> and I am <span className={decor}>Front-end developer</span></h1>
            <h2>Started Front-end training in February 2022.</h2>
            <h2>
                I went through 2 stages of RSSchool courses, where I studied
                 <span className={decor}>JavaScript</span>, <span className={decor}>HTML</span>, <span className={decor}>CSS</span>,
                <span className={decor}>Git</span>, <span className={decor}>BEM</span>, <span className={decor}>Figma</span>,
                <span className={decor}>Node.js</span>.
            </h2>
            <h2>I took several online courses on my own.</h2>
            <h2>Since November 2022, I have been studying <span className={anotherDecor}>TypeScript</span>, <span className={anotherDecor}>React</span>, <span className={anotherDecor}>Redux</span>, <span className={anotherDecor}>Redux Toolkit</span> at <a href={"https://it-incubator.io/"}>IT-Incubator</a> courses, which I plan to finish in May 2023.</h2>
            <h2>Completed more than twenty educational projects of different levels of complexity.</h2>
            <h2>My gitHub profile: <a href ="https://github.com/aniskamaksim">aniskamaksim</a></h2>
        </div>
            <div>
            <img src={logorounded}
                 className= {imgLogo}></img>
            </div>
        </div>
    );
};