import React from 'react';
import Todolist from "../Assets/TodoList.png"
import message_count from "../Assets/message_counter.png"
import chat_simulation from "../Assets/chat_simulation.png"
import s from "./Pages.module.css"

export const ReactPage = () => {
    const main = s.react_projects_main;
    const list = s.react_projects_list;
    const preview = s.react_projects_preview;
    const white = s.white_span;
    const titleDescription = s.title_description;
    const titleTitle = s.title_title;
    const descrDescr = s.description_description;
    const liDescr = s.li_description;
    return (
        <div className={main}>
            <div className={list}>
                <div className={titleDescription}>
                    <div className={titleTitle}>
                        <h2 className={white}>
                            <a href=" https://aniskamaksim.github.io/messages_counter/" target={"_blank"} rel={"noreferrer"}>Message
                                counter</a>
                        </h2>
                    </div>
                    <div className={descrDescr}>
                    <span className={white}>
                       React - TypeScript <br/>
                        You can write only 5 messages. <br/>
                        After that you should delete last message or delete all messages to continue your journey. <br/><br/>
                        Implemented in this app:
                            <ul>
                            <li className={liDescr}>local storage</li>
                            <li className={liDescr}>useState hook;</li>
                            <li className={liDescr}>material UI components;</li>
                                </ul>
                    </span><br/>
                        <a href=" https://aniskamaksim.github.io/messages_counter/"
                           target={"_blank"} rel={"noreferrer"}> https://aniskamaksim.github.io/messages_counter/</a>
                    </div>
                </div>
                <div className={preview}>
                    <a href=" https://aniskamaksim.github.io/messages_counter/" target={"_blank"} rel={"noreferrer"}>
                        <img src={message_count}
                             alt="message counter"
                             width={"200px"}
                             height={"200px"}
                        />
                    </a>
                </div>
            </div>
            <div className={list}>
                <div className={titleDescription}>
                    <div className={titleTitle}>
                        <h2 className={white}>
                            <a href="https://aniskamaksim.github.io/chat_simulation/" target={"_blank"} rel={"noreferrer"}>Chat
                                simulation</a>
                        </h2>
                    </div>
                    <div className={descrDescr}>
                        <span className={white}>
                            This educational project was made with React and TypeScript. <br/>
                            You can chat with your imaginary friend as long as you will have the patience. <br/>
                            You can send messages, edit or delete names, messages. <br/>
                            in short, enjoy the CRUD :) <br/><br/>
                            Implemented in this app: <br/>
                            <ul>
                            <li className={liDescr}>date/Time API;</li>
                            <li className={liDescr}>useState, useEffect, useRef hooks;</li>
                            <li className={liDescr}>material UI components;</li>
                            <li className={liDescr}>3 way CSS using;</li>
                                </ul>
                            </span><br/>
                        <a href="https://aniskamaksim.github.io/chat_simulation/"
                           target={"_blank"} rel={"noreferrer"}>https://aniskamaksim.github.io/chat_simulation/</a>
                    </div>
                </div>
                <div className={preview}>
                    <a href="https://aniskamaksim.github.io/chat_simulation/" target={"_blank"} rel={"noreferrer"}>
                        <img src={chat_simulation}
                             alt="chat simulation"
                             width={"200px"}
                             height={"200px"}/>
                    </a>
                </div>
            </div>
            <div className={list}>
                <div className={titleDescription}>
                    <div className={titleTitle}>
                        <h2 className={white}>
                            <a href="https://aniskamaksim.github.io/Main_TODO/" target={"_blank"} rel={"noreferrer"}>TodoLists creator</a>
                        </h2>
                    </div>
                    <div className={descrDescr}>
                        <span className={white}>
                            This is the final version of Todolist app made with React.<br/>
                            All subsequent versions will be published in the Redux section. <br/>
                            All the features of the todolist are implemented: <br/>
                            You can add new new list, rename or delete it, add tasks in existing todolist,<br/>
                            rename them or sort by priority. <br/>
                            Implemented in this app: <br/>
                            <ul>
                            <li className={liDescr}>useState, useEffect, useReducer, useDispatch hooks;</li>
                            <li className={liDescr}>all logic is transferred to reducers and checked by unit-tests</li>
                            <li className={liDescr}>material UI components;</li>
                            <li className={liDescr}>Styled components</li>
                                </ul>
                        </span><br/>
                        <a href="https://aniskamaksim.github.io/Main_TODO/"
                           target={"_blank"} rel={"noreferrer"}>https://aniskamaksim.github.io/Main_TODO/</a>
                    </div>
                </div>
                <div className={preview}>
                    <a href="https://aniskamaksim.github.io/chat_simulation/" target={"_blank"} rel={"noreferrer"}>
                        <img src={Todolist}
                             alt={"todolist creator"}
                             width={"200px"}
                             height={"200px"}/>
                    </a>
                </div>
            </div>
        </div>
    );
};