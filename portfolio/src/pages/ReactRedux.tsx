import React from 'react';
import s from "./Pages.module.css";
import simple_counter from "../Assets/simple_counter.png";

export const ReactRedux = () => {
    const main = s.react_projects_main;
    const list = s.react_projects_list;
    const white = s.white_span;
    const titleDescription = s.title_description;
    const titleTitle = s.title_title;
    const descrDescr = s.description_description;
    const liDescr = s.li_description;
    const preview = s.react_projects_preview;
    return (
        <div className={main}>
            <div className={list}>
                <div className={titleDescription}>
                    <div className={titleTitle}>
                        <h2 className={white}>
                            <a href="https://aniskamaksim.github.io/counter/" target={"_blank"} rel={"noreferrer"}>Simple counter
                                with settings</a>
                        </h2>
                        <div className={descrDescr}>
                    <span className={white}>
                       react-redux - Redux - TypeScript <br/>
                        Simple counter with settings of min and max value<br/>
                        Implemented in this app:
                            <ul>
                            <li className={liDescr}>store;</li>
                            <li className={liDescr}>useState, useSelector, useDispatch hooks;</li>
                            <li className={liDescr}>material UI;</li>
                                </ul>
                    </span><br/>
                            <a href="https://aniskamaksim.github.io/counter/"
                               target={"_blank"} rel={"noreferrer"}> https://aniskamaksim.github.io/messages_counter/</a>
                        </div>
                    </div>
                </div>
                <div className={preview}>
                    <a href="https://aniskamaksim.github.io/counter/" target={"_blank"} rel={"noreferrer"}>
                        <img src={simple_counter}
                             alt="message counter"
                             width={"200px"}
                             height={"200px"}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};