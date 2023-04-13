import React from 'react';
import s from "./Pages.module.css"

export const JSTasks = () => {
    const mainJsTask = s.js
    const linkList = s.link_list
    const xtext = s.js_tasks
    return (
        <div className={mainJsTask}>
            <div className={linkList}>
            <ol className={xtext}>
                <li><a href="https://github.com/aniskamaksim/typical-arrays-problems">typical-arrays-problems</a></li>
                <li><a href="https://github.com/aniskamaksim/basic-js">basic-js</a></li>
                <li><a href="https://github.com/aniskamaksim/brackets">brackets</a></li>
                <li><a href="https://github.com/aniskamaksim/towel-sort">towel-sort</a></li>
                <li><a href="https://github.com/aniskamaksim/morse-decoder">morse-decoder</a></li>
                <li><a href="https://github.com/aniskamaksim/reverse-int">reverse-int</a></li>
                <li><a href="https://github.com/aniskamaksim/human-readable-number">human-readable-number</a></li>
            </ol>
        </div>
            <h2 style={{color: "#f2f2f2"}}>More my code practice on codwars: <a href="https://www.codewars.com/users/aniskaMaksim">https://www.codewars.com/users/aniskaMaksim</a></h2>
        </div>
    );
};