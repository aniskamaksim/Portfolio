import React from 'react';
import s from "./Pages.module.css"

export const JSTasks = () => {
    const mainJsTask = s.js
    const linkList = s.link_list
    const xtext = s.js_tasks
    return (
        <div className={mainJsTask}>
            <div className={linkList}>
               <div style={{color: "white", marginLeft: "2.2em", marginTop: "1.5em", fontSize: "large"}}>Hundreds of hours spent learning Javascript cannot be useless. <br/>
                    By clicking on the links you can find an example of my code and how I solved various tasks.</div>
            <ol className={xtext}>
                <li><a href="https://github.com/aniskamaksim/typical-arrays-problems" target={"_blank"} rel={"noreferrer"}>typical-arrays-problems</a></li>
                <li><a href="https://github.com/aniskamaksim/basic-js" target={"_blank"} rel={"noreferrer"}>basic-js</a></li>
                <li><a href="https://github.com/aniskamaksim/brackets" target={"_blank"} rel={"noreferrer"}>brackets</a></li>
                <li><a href="https://github.com/aniskamaksim/towel-sort" target={"_blank"} rel={"noreferrer"}>towel-sort</a></li>
                <li><a href="https://github.com/aniskamaksim/morse-decoder" target={"_blank"} rel={"noreferrer"}>morse-decoder</a></li>
                <li><a href="https://github.com/aniskamaksim/reverse-int" target={"_blank"} rel={"noreferrer"}>reverse-int</a></li>
                <li><a href="https://github.com/aniskamaksim/human-readable-number" target={"_blank"} rel={"noreferrer"}>human-readable-number</a></li>
            </ol>
        </div>
            <h3 style={{color: "white", marginRight: "1em"}}>More my code practice on codwars: <a href="https://www.codewars.com/users/aniskaMaksim" target={"_blank"} rel={"noreferrer"}>@aniskaMaksim</a></h3>
        </div>
    );
};